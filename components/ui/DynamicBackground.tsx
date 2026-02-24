'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Tuning ───────────────────────────────────────────────────────────────────
const GRID_COLS = 44
const GRID_ROWS = 30
const TILE_SIZE = 1.0
const TILE_GAP = 0.03
const TILE_HEIGHT = 0.22
const LIFT_RADIUS = 3.8
const LIFT_AMOUNT = 2.0
const TILT_AMOUNT = 0.32
const LERP = 0.09
const MAX_PARTICLES = 160

// Palette
const C_TILE_TOP = new THREE.Color('#ffffff')     // pure white top face
const C_TILE_SIDE = new THREE.Color('#e8eaec')    // very light grey sides
const C_TILE_LIFT = new THREE.Color('#ffffff')    // white when lifted
const C_EDGE = 0xe0e2e4                           // barely-visible light grey edges
const C_BG = new THREE.Color('#ffffff')           // full white background
const C_EMISSIVE = new THREE.Color('#ffffff')

// ─── Types ────────────────────────────────────────────────────────────────────
interface TileData {
    mesh: THREE.Mesh
    bx: number; bz: number
    curY: number; tgtY: number
    curRX: number; tgtRX: number
    curRZ: number; tgtRZ: number
    topMat: THREE.MeshStandardMaterial
}
interface Particle {
    mesh: THREE.Mesh
    mat: THREE.MeshStandardMaterial
    vx: number; vy: number; vz: number
    rx: number; ry: number; rz: number
    life: number; decay: number
}

export default function DynamicBackground() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        // ── Renderer ──────────────────────────────────────────────────────────
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0xffffff)
        Object.assign(renderer.domElement.style, {
            position: 'absolute', top: '0', left: '0', pointerEvents: 'none',
        })
        mount.appendChild(renderer.domElement)

        // ── Scene ─────────────────────────────────────────────────────────────
        const scene = new THREE.Scene()
        scene.background = new THREE.Color('#ffffff')

        // ── Camera — nearly top-down, ~83° from horizontal ─────────────────────
        const camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 200
        )
        // Raised FOV + lowered height to zoom in and fill the canvas edge-to-edge
        camera.position.set(0, 12, 1.5)
        camera.lookAt(0, 0, 0)

        // ── Background shiny floor behind tiles ────────────────────────────────
        const bgFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(150, 150),
            new THREE.MeshStandardMaterial({
                color: new THREE.Color('#ffffff'),
                roughness: 1.0,
                metalness: 0.0,
                envMapIntensity: 0,
            })
        )
        bgFloor.rotation.x = -Math.PI / 2
        bgFloor.position.y = -0.05
        bgFloor.receiveShadow = true
        scene.add(bgFloor)

        // ── Lights ────────────────────────────────────────────────────────────
        // Max ambient — fully white and bright everywhere
        scene.add(new THREE.AmbientLight(0xffffff, 3.0))

        // Minimal directional just for very faint tile depth — no hotspot
        const sun = new THREE.DirectionalLight(0xffffff, 0.15)
        sun.position.set(5, 30, 3)
        sun.castShadow = true
        sun.shadow.mapSize.set(2048, 2048)
        const sc = sun.shadow.camera as THREE.OrthographicCamera
        sc.left = -28; sc.right = 28; sc.top = 28; sc.bottom = -28
        sc.near = 1; sc.far = 80
        sun.shadow.bias = -0.0006
        scene.add(sun)

        // Minimal fill
        const fill = new THREE.DirectionalLight(0xffffff, 0.1)
        fill.position.set(-6, 12, -6)
        scene.add(fill)

        // ── Shared geometry & shared side material ────────────────────────────
        const tileGeo = new THREE.BoxGeometry(TILE_SIZE, TILE_HEIGHT, TILE_SIZE)
        const edgeGeo = new THREE.EdgesGeometry(tileGeo)
        const matSide = new THREE.MeshStandardMaterial({ color: C_TILE_SIDE, roughness: 0.7 })
        const matBot = new THREE.MeshStandardMaterial({ color: '#e0e2e4', roughness: 0.9 })
        const edgeMat = new THREE.LineBasicMaterial({ color: C_EDGE })

        // ── Build tile grid ────────────────────────────────────────────────────
        const tiles: TileData[] = []
        const step = TILE_SIZE + TILE_GAP
        const ox = ((GRID_COLS - 1) * step) / 2
        const oz = ((GRID_ROWS - 1) * step) / 2
        const baseY = TILE_HEIGHT / 2

        for (let row = 0; row < GRID_ROWS; row++) {
            for (let col = 0; col < GRID_COLS; col++) {
                const topMat = new THREE.MeshStandardMaterial({
                    color: C_TILE_TOP.clone(),
                    roughness: 0.55,
                    metalness: 0.0,
                })
                // BoxGeometry material groups: [+x, -x, +y(top), -y(bot), +z, -z]
                const mesh = new THREE.Mesh(tileGeo, [
                    matSide, matSide, topMat, matBot, matSide, matSide,
                ])
                mesh.castShadow = true
                mesh.receiveShadow = true

                const bx = col * step - ox
                const bz = row * step - oz
                mesh.position.set(bx, baseY, bz)

                // Grey outline edges
                const edges = new THREE.LineSegments(edgeGeo, edgeMat)
                mesh.add(edges)

                scene.add(mesh)
                tiles.push({
                    mesh, bx, bz, topMat,
                    curY: baseY, tgtY: baseY,
                    curRX: 0, tgtRX: 0,
                    curRZ: 0, tgtRZ: 0
                })
            }
        }

        // ── Particles ─────────────────────────────────────────────────────────
        const particles: Particle[] = []
        const pGeos = [
            new THREE.TetrahedronGeometry(0.11),
            new THREE.OctahedronGeometry(0.09),
            new THREE.BoxGeometry(0.09, 0.09, 0.09),
        ]
        const pCols = [0xcccccc, 0xe0e0e0, 0xf0f0f0, 0xaaaaaa]

        const spawnParticles = (wx: number, wz: number, n: number) => {
            for (let i = 0; i < n && particles.length < MAX_PARTICLES; i++) {
                const geo = pGeos[Math.floor(Math.random() * pGeos.length)]
                const mat = new THREE.MeshStandardMaterial({
                    color: pCols[Math.floor(Math.random() * pCols.length)],
                    roughness: 0.25, metalness: 0.2,
                    transparent: true, opacity: 1,
                })
                const mesh = new THREE.Mesh(geo, mat)
                const ang = Math.random() * Math.PI * 2
                const r = Math.random() * 0.9
                mesh.position.set(wx + Math.cos(ang) * r,
                    TILE_HEIGHT + 0.12 + Math.random() * 0.25,
                    wz + Math.sin(ang) * r)
                scene.add(mesh)
                const spd = 0.05 + Math.random() * 0.09
                particles.push({
                    mesh, mat,
                    vx: Math.cos(ang) * spd * (0.5 + Math.random()),
                    vy: 0.06 + Math.random() * 0.08,
                    vz: Math.sin(ang) * spd * (0.5 + Math.random()),
                    rx: (Math.random() - 0.5) * 0.18,
                    ry: (Math.random() - 0.5) * 0.18,
                    rz: (Math.random() - 0.5) * 0.18,
                    life: 1.0,
                    decay: 0.65 + Math.random() * 0.7,
                })
            }
        }

        // ── Input ─────────────────────────────────────────────────────────────
        const ndc = new THREE.Vector2(-9999, -9999)
        const ray = new THREE.Raycaster()
        const groundP = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
        const wPos = new THREE.Vector3()
        let prevX = 0, prevZ = 0, lastSpawnMs = 0

        const onMove = (e: MouseEvent) => {
            ndc.x = (e.clientX / window.innerWidth) * 2 - 1
            ndc.y = -(e.clientY / window.innerHeight) * 2 + 1
        }
        const onClick = (e: MouseEvent) => {
            ndc.x = (e.clientX / window.innerWidth) * 2 - 1
            ndc.y = -(e.clientY / window.innerHeight) * 2 + 1
            ray.setFromCamera(ndc, camera)
            ray.ray.intersectPlane(groundP, wPos)
            spawnParticles(wPos.x, wPos.z, 14)
        }
        window.addEventListener('mousemove', onMove)
        window.addEventListener('click', onClick)

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', onResize)

        // ── Render loop ───────────────────────────────────────────────────────
        const clock = new THREE.Clock()
        let rafId: number

        const animate = () => {
            rafId = requestAnimationFrame(animate)
            const dt = Math.min(clock.getDelta(), 0.05)

            ray.setFromCamera(ndc, camera)
            ray.ray.intersectPlane(groundP, wPos)
            const cx = wPos.x, cz = wPos.z

            // Spawn particles on movement
            const now = performance.now()
            const moved = Math.hypot(cx - prevX, cz - prevZ)
            if (moved > 0.28 && now - lastSpawnMs > 75) {
                spawnParticles(cx, cz, Math.min(7, 3 + Math.floor(moved * 2.5)))
                lastSpawnMs = now
            }
            prevX = cx; prevZ = cz

            // Update tiles
            for (const t of tiles) {
                const dx = t.bx - cx
                const dz = t.bz - cz
                const dist = Math.sqrt(dx * dx + dz * dz)
                const inf = Math.max(0, 1 - dist / LIFT_RADIUS)
                const lift = Math.pow(inf, 1.7)

                t.tgtY = baseY + lift * LIFT_AMOUNT
                const inv = 1 / (dist + 0.001)
                t.tgtRX = lift * TILT_AMOUNT * (dz * inv) * 0.65
                t.tgtRZ = -lift * TILT_AMOUNT * (dx * inv) * 0.65

                t.curY += (t.tgtY - t.curY) * LERP
                t.curRX += (t.tgtRX - t.curRX) * LERP
                t.curRZ += (t.tgtRZ - t.curRZ) * LERP

                t.mesh.position.y = t.curY
                t.mesh.rotation.x = t.curRX
                t.mesh.rotation.z = t.curRZ

                // Top face: always the soft sky-blue, no emissive boost
                t.topMat.color.copy(C_TILE_TOP)
                t.topMat.emissive.set(0x000000)
                t.topMat.emissiveIntensity = 0
            }

            // Update particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i]
                p.life -= dt * p.decay
                if (p.life <= 0) {
                    scene.remove(p.mesh)
                    p.mat.dispose()
                    particles.splice(i, 1)
                    continue
                }
                p.vy -= dt * 0.20
                p.vx *= 0.975; p.vz *= 0.975
                p.mesh.position.x += p.vx
                p.mesh.position.y += p.vy
                p.mesh.position.z += p.vz
                p.mesh.rotation.x += p.rx
                p.mesh.rotation.y += p.ry
                p.mesh.rotation.z += p.rz
                p.mat.opacity = Math.min(1, p.life / 0.35)
            }

            renderer.render(scene, camera)
        }
        animate()

        // ── Cleanup ───────────────────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('click', onClick)
            window.removeEventListener('resize', onResize)
            tiles.forEach(t => {
                scene.remove(t.mesh)
                t.topMat.dispose()
            })
            pGeos.forEach(g => g.dispose())
            edgeGeo.dispose(); edgeMat.dispose()
            matSide.dispose(); matBot.dispose()
            particles.forEach(p => { scene.remove(p.mesh); p.mat.dispose() })
            renderer.dispose()
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
        }
    }, [])

    return (
        <div
            ref={mountRef}
            style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
        />
    )
}
