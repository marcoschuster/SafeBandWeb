'use client'

import React, { useEffect, useRef } from 'react'

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Track raw target mouse position and the "smoothed" following position
    const targetMouseRef = useRef({ x: 0, y: 0, active: false })
    const smoothedMouseRef = useRef({ x: 0, y: 0, active: false })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d', { alpha: false })
        if (!ctx) return

        let animationFrameId: number
        let w: number, h: number

        // Grid and Physics settings
        const gridSize = 50
        const mouseRadius = 350
        const distortionStrength = 0.4
        const resolution = 2

        // Smoothness / Drag factor: 0.05 is slow/heavy drag, 1 is instant
        const smoothness = 0.08

        const resize = () => {
            w = window.innerWidth
            h = window.innerHeight
            const dpr = window.devicePixelRatio || 1
            canvas.width = w * dpr
            canvas.height = h * dpr
            ctx.scale(dpr, dpr)
            canvas.style.width = `${w}px`
            canvas.style.height = `${h}px`

            // Initialize smoothed mouse to center on first resize
            if (!smoothedMouseRef.current.active) {
                smoothedMouseRef.current.x = w / 2
                smoothedMouseRef.current.y = h / 2
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseRef.current = { x: e.clientX, y: e.clientY, active: true }
            smoothedMouseRef.current.active = true
        }

        const draw = () => {
            // Background base
            ctx.fillStyle = '#f8fafc'
            ctx.fillRect(0, 0, w, h)

            // Apply drag physics: Interpolate smoothed position towards target
            if (targetMouseRef.current.active) {
                smoothedMouseRef.current.x += (targetMouseRef.current.x - smoothedMouseRef.current.x) * smoothness
                smoothedMouseRef.current.y += (targetMouseRef.current.y - smoothedMouseRef.current.y) * smoothness
            }

            const { x: mx, y: my, active } = smoothedMouseRef.current

            const drawGrid = (isVertical: boolean) => {
                const limitA = isVertical ? w : h
                const limitB = isVertical ? h : w
                const color = isVertical ? '6, 182, 212' : '20, 184, 166'

                for (let a = 0; a <= limitA; a += gridSize) {
                    ctx.beginPath()

                    if (active) {
                        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, mouseRadius)
                        grad.addColorStop(0, `rgba(${color}, 0.5)`)
                        grad.addColorStop(0.6, `rgba(${color}, 0.2)`)
                        grad.addColorStop(1, `rgba(${color}, 0.04)`)
                        ctx.strokeStyle = grad
                    } else {
                        ctx.strokeStyle = 'rgba(203, 213, 225, 0.1)'
                    }

                    for (let b = 0; b <= limitB; b += resolution) {
                        const x = isVertical ? a : b
                        const y = isVertical ? b : a

                        let dx = x
                        let dy = y

                        if (active) {
                            const distX = x - mx
                            const distY = y - my
                            const distSq = distX * distX + distY * distY
                            const radiusSq = mouseRadius * mouseRadius

                            if (distSq < radiusSq) {
                                const dist = Math.sqrt(distSq)
                                const force = Math.exp(-Math.pow(dist / (mouseRadius * 0.5), 2))

                                dx += distX * force * distortionStrength
                                dy += distY * force * distortionStrength
                            }
                        }

                        if (b === 0) ctx.moveTo(dx, dy)
                        else ctx.lineTo(dx, dy)
                    }
                    ctx.stroke()
                }
            }

            ctx.lineWidth = 1.2
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'

            drawGrid(false)
            drawGrid(true)

            // Specular highlight tracks smoothed position
            if (active) {
                const peakGrad = ctx.createRadialGradient(mx, my, 0, mx, my, mouseRadius / 4)
                peakGrad.addColorStop(0, 'rgba(255, 255, 255, 0.35)')
                peakGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
                ctx.fillStyle = peakGrad
                ctx.fillRect(0, 0, w, h)
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        resize()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w4.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    )
}
