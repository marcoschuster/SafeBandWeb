'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const scents = [
  {
    name: 'Lavender Calm',
    id: 'scent-lavender',
    description: 'Pure lavender essence to promote relaxation and deep, restful sleep.',
    image: '/images/scents/lavender-calm.png',
    color: 'from-purple-400 to-indigo-500',
    benefits: ['Reduces stress & anxiety', 'Improves sleep quality', 'Promotes relaxation', 'Calms the mind'],
    icon: '💜',
    imageScale: 1.5,
    shadowStrength: 'strong'
  },
  {
    name: 'Ocean Breeze',
    id: 'scent-ocean',
    description: 'Refreshing sea salt and aquatic notes for a clean, invigorating atmosphere.',
    image: '/images/scents/ocean-breeze.png',
    color: 'from-blue-400 to-cyan-500',
    benefits: ['Boosts energy levels', 'Enhances mental clarity', 'Refreshes the senses', 'Uplifting mood'],
    icon: '🌊',
    imageScale: 1.4,
    shadowStrength: 'strong'
  },
  {
    name: 'Forest Walk',
    id: 'scent-forest',
    description: 'Earthy pine and cedarwood that brings the tranquility of the woods to you.',
    image: '/images/scents/forest-walk.png',
    color: 'from-green-500 to-emerald-700',
    benefits: ['Grounding & centering', 'Reduces mental fatigue', 'Natural focus boost', 'Connects to nature'],
    icon: '🌲'
  },
  {
    name: 'Mint Fresh',
    id: 'scent-mint',
    description: 'Crisp peppermint and spearmint to sharpen focus and refresh your mind.',
    image: '/images/scents/mint-fresh.png',
    color: 'from-teal-300 to-emerald-500',
    benefits: ['Enhances concentration', 'Cooling sensation', 'Boosts alertness', 'Clears the mind'],
    icon: '🍃'
  },
]

export default function AromatherapyPage() {
  const [hoveredScent, setHoveredScent] = useState<string | null>(null)

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Aromatherapy
            <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              On The Go
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your mood and enhance your wellbeing with our premium scent capsules. Each carefully crafted blend offers unique therapeutic benefits.
          </p>
        </div>

        {/* What is Aromatherapy */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Science of Aromatherapy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Aromatherapy is a holistic healing treatment that uses natural plant extracts and essential oils to promote health and well-being. When inhaled, these aromatic compounds stimulate the olfactory system, which is directly connected to the brain&apos;s limbic system—the area responsible for emotions, memories, and mood regulation.
            </p>
            <p className="text-lg text-gray-700">
              SafeBand&apos;s aromatherapy capsules deliver these benefits wherever you go, allowing you to customize your emotional and mental state throughout the day.
            </p>
          </div>
        </div>

        {/* Scents Grid */}
        <div className="space-y-20 mb-20">
          {scents.map((scent, index) => (
            <div key={scent.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div 
                  className={`bg-gradient-to-br ${scent.color} rounded-3xl p-8 flex items-center justify-center min-h-[450px] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
                  onMouseEnter={() => setHoveredScent(scent.id)}
                  onMouseLeave={() => setHoveredScent(null)}
                >
                  <div 
                    className="transition-all duration-500 ease-out"
                    style={{
                      transform: hoveredScent === scent.id 
                        ? `scale(${(scent.imageScale || 1.1) * 1.2}) rotate(6deg)`
                        : `scale(${scent.imageScale || 1.1}) rotate(0deg)`
                    }}
                  >
                    <Image
                      src={scent.image}
                      alt={scent.name}
                      width={380}
                      height={380}
                      className="drop-shadow-2xl"
                      style={{
                        filter: scent.shadowStrength === 'strong' 
                          ? 'drop-shadow(0 25px 50px rgba(0,0,0,0.5)) drop-shadow(0 15px 30px rgba(0,0,0,0.4)) drop-shadow(0 5px 10px rgba(0,0,0,0.3))'
                          : 'drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{scent.icon}</span>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {scent.name}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  {scent.description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                <ul className="space-y-3 mb-6">
                  {scent.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/products/${scent.id}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Use Your Scent Capsules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insert Capsule</h3>
              <p className="text-gray-600">
                Open your SafeBand and insert the scent capsule into the designated compartment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wear & Enjoy</h3>
              <p className="text-gray-600">
                Wear your SafeBand normally. The scent will gently diffuse throughout the day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Switch Anytime</h3>
              <p className="text-gray-600">
                Change capsules based on your mood or needs. Each lasts up to 30 days.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Aromatherapy Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the transformative power of aromatherapy with SafeBand&apos;s premium scent collection.
          </p>
          <Link
            href="/#scents"
            className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Explore All Scents
          </Link>
        </div>
      </div>
    </main>
  )
}
