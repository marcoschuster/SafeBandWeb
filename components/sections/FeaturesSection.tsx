'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'SOS Emergency Alert',
    description: 'One-touch emergency alert instantly notifies your emergency contacts and dispatch services with your exact location.',
    icon: '🚨',
  },
  {
    title: 'Real-Time GPS Tracking',
    description: 'Advanced GPS technology provides precise location tracking, ensuring help can find you anywhere, anytime.',
    icon: '📍',
  },
  {
    title: 'Fall Detection',
    description: 'Intelligent sensors automatically detect falls and send alerts if you\'re unable to respond within seconds.',
    icon: '🛡️',
  },
  {
    title: 'Heart Rate Monitoring',
    description: 'Continuous heart rate monitoring alerts you and your contacts to potential health emergencies.',
    icon: '💓',
  },
  {
    title: 'Waterproof Design',
    description: 'IP68 waterproof rating means SafeBand works in any weather condition or environment.',
    icon: '💧',
  },
  {
    title: 'Long Battery Life',
    description: '30+ days of battery life ensures your safety device is always ready when you need it most.',
    icon: '🔋',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/20"
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-3xl bg-white/80 px-8 py-6 shadow-sm border border-white/40">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for
              <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                Complete Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SafeBand combines cutting-edge technology with intuitive design to provide comprehensive safety coverage.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
