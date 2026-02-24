'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Wind, Trees, Droplets, Zap } from 'lucide-react'
import Link from 'next/link'

const scents = [
    {
        name: 'Mosquito Shield',
        id: 'scent-mosquito',
        description: 'Natural protection against mosquitoes and insects. perfect for outdoor adventures.',
        icon: Shield,
        image: '/images/scents/mosquito-shield.png',
        color: 'from-emerald-400 to-cyan-500',
        tags: ['Safe', 'Natural', 'Outdoor'],
        imageScale: 1
    },
    {
        name: 'Lavender Calm',
        id: 'scent-lavender',
        description: 'Pure lavender essence to promote relaxation and deep, restful sleep.',
        icon: Wind,
        image: '/images/scents/lavender-calm.png',
        color: 'from-purple-400 to-indigo-500',
        tags: ['Relax', 'Sleep', 'Peace'],
        imageScale: 1.6
    },
    {
        name: 'Ocean Breeze',
        id: 'scent-ocean',
        description: 'Refreshing sea salt and aquatic notes for a clean, invigorating atmosphere.',
        icon: Droplets,
        image: '/images/scents/ocean-breeze.png',
        color: 'from-blue-400 to-cyan-500',
        tags: ['Fresh', 'Clean', 'Energy'],
        imageScale: 1.9
    },
    {
        name: 'Forest Walk',
        id: 'scent-forest',
        description: 'Earthy pine and cedarwood that brings the tranquility of the woods to you.',
        icon: Trees,
        image: '/images/scents/forest-walk.png',
        color: 'from-green-500 to-emerald-700',
        tags: ['Earth', 'Woody', 'Nature'],
        imageScale: 1
    },
    {
        name: 'Mint Fresh',
        id: 'scent-mint',
        description: 'Crisp peppermint and spear-mint to sharpen focus and refresh your mind.',
        icon: Zap,
        image: '/images/scents/mint-fresh.png',
        color: 'from-teal-300 to-emerald-500',
        tags: ['Focus', 'Cool', 'Clear'],
        imageScale: 1.6
    }
]

export function ScentsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="scents" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        The Scent
                        <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Each SafeBand can be customized with our proprietary scent pods, designed to enhance your mood and protect your environment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {scents.map((scent, index) => (
                        <Link key={scent.id} href={`/products/${scent.id}`}>
                            <motion.div
                                id={scent.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group h-full bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className={`w-36 h-36 rounded-2xl bg-gradient-to-br ${scent.color} mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                                    {scent.image ? (
                                        <img
                                            src={scent.image}
                                            alt={scent.name}
                                            className="w-full h-full object-contain p-2"
                                            style={{
                                                transform: `scale(${scent.imageScale ?? 1})`,
                                                filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.55)) drop-shadow(0 2px 6px rgba(0,0,0,0.4)) drop-shadow(0 0px 2px rgba(0,0,0,0.3))'
                                            }}
                                        />
                                    ) : (
                                        <scent.icon size={40} />
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                    {scent.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {scent.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {scent.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/50 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl -z-10" />
        </section>
    )
}
