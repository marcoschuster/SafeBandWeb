'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Bluetooth, Zap, Droplets, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react'

const manualSections = [
    {
        id: 'pairing',
        title: 'Bluetooth Connection',
        icon: <Bluetooth className="w-8 h-8 text-cyan-500" />,
        description: 'Sync your SafeBand with your smartphone to unlock full tracking and emergency features.',
        steps: [
            'Ensure Bluetooth is enabled on your mobile device.',
            'Locate the small silicone bump button on the side center of your SafeBand.',
            'Press and hold the silicone bump for exactly 3 seconds.',
            'Watch for the pulsing blue light indicating pairing mode is active.',
            'Select "SafeBand-Pro" from your device\'s Bluetooth list.'
        ],
        image: '/safeband_pairing_v2.png',
        color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        id: 'charging',
        title: 'Power & Charging',
        icon: <Zap className="w-8 h-8 text-teal-500" />,
        description: 'SafeBand features advanced wireless charging technology via its dedicated charging pad.',
        steps: [
            'Connect the special charging pad to a USB power source.',
            'Place your SafeBand center-aligned on the circular charging pad.',
            'A soft green glow on the pad confirms charging has started.',
            'Full charge is typically reached within 45 minutes.',
            'The silicone button will glow steady green once fully charged.'
        ],
        image: '/safeband_charging_v2.png',
        color: 'from-teal-500/20 to-emerald-500/20'
    },
    {
        id: 'scent',
        title: 'Scent Capsules',
        icon: <Droplets className="w-8 h-8 text-purple-500" />,
        description: 'Easily swap premium brushed aluminium capsules via the glassy flippable lid.',
        steps: [
            'Locate the glassy, translucent plastic lid on the top of your SafeBand.',
            'Note the dual horizontal vent lines positioned perfectly in the center.',
            'Flip the glassy lid open to access the internal chamber.',
            'Insert a new brushed aluminium capsule with its sealed side ports aligned.',
            'Snap the lid shut; the SafeBand will automatically engage the capsule seals.'
        ],
        image: '/safeband_capsule_lid_v2.png',
        color: 'from-purple-500/20 to-pink-500/20'
    }
]

export default function UserManual() {
    return (
        <div className="relative min-h-screen pt-32 pb-20 px-4">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-bold tracking-wider uppercase mb-6 inline-block">
                        User Manual
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 py-2">
                        Mastering Your <span className="text-cyan-600">SafeBand</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive guide to setting up and maintaining your revolutionary wearable safety device.
                    </p>
                </motion.div>
            </div>

            {/* Quick Navigation Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative z-10">
                {manualSections.map((section, index) => (
                    <motion.a
                        key={section.id}
                        href={`#${section.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative z-10">
                            <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                                {section.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h3>
                            <p className="text-gray-600 mb-4">{section.description}</p>
                            <div className="flex items-center text-cyan-600 font-bold gap-2 group-hover:gap-4 transition-all">
                                View Guide <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Detailed Manual Sections */}
            <div className="max-w-7xl mx-auto space-y-40 relative z-10">
                {manualSections.map((section, index) => (
                    <section key={section.id} id={section.id} className="scroll-mt-32">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900">{section.title}</h2>
                                </div>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="space-y-6">
                                    {section.steps.map((step, sIndex) => (
                                        <div key={sIndex} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm mt-1 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                                                {sIndex + 1}
                                            </div>
                                            <p className="text-lg text-gray-700 font-medium group-hover:text-cyan-600 transition-colors">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Visualization */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative"
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    {/* Using a placeholder mapping for the generated images */}
                                    <div className="aspect-[4/3] relative bg-gray-100">
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Support CTA */}
            <div className="max-w-5xl mx-auto mt-40">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-[3.5rem] bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/20">
                            <ShieldCheck className="w-10 h-10 text-cyan-400" />
                        </div>
                        <h2 className="text-4xl font-bold mb-6">Need Further Assistance?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Our expert support team is available 24/7 to help you with any technical questions or safety concerns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/support" className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold hover:bg-cyan-50 transition-all hover:scale-105 shadow-xl">
                                Contact Support
                            </Link>
                            <Link href="/docs" className="px-10 py-5 bg-white/10 text-white border-2 border-white/20 rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2">
                                Browse Full Docs <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
