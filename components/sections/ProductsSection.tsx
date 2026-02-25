'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const products = [
  {
    id: 'safeband-classic',
    name: 'SafeBand Classic',
    price: '$129',
    description: 'Perfect for everyday safety with all essential features.',
    features: ['SOS Alert', 'GPS Tracking', '7-Day Battery', 'Water Resistant'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'safeband-pro',
    name: 'SafeBand Pro',
    price: '$199',
    description: 'Advanced safety with health monitoring capabilities.',
    features: ['All Classic Features', 'Fall Detection', 'Heart Rate Monitor', '14-Day Battery'],
    color: 'from-purple-500 to-purple-700',
    popular: true,
  },
  {
    id: 'safeband-ultra',
    name: 'SafeBand Ultra',
    price: '$299',
    description: 'Ultimate protection with premium features and extended battery.',
    features: ['All Pro Features', 'Two-Way Audio', 'Temperature Alert', '30-Day Battery'],
    color: 'from-pink-500 to-pink-700',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/20 ${product.popular ? 'ring-4 ring-cyan-500/50' : ''
        }`}
    >
      {product.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} mb-6 flex items-center justify-center overflow-hidden p-2 shadow-inner`}>
        <svg className="w-11 h-11 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 2h6l1 4H8L9 2zm8 4H7l-1 3H4a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1V10a1 1 0 00-1-1h-2l-1-3zm-5 10a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      </div>

      <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent mb-4">
        {product.price}
      </div>
      <p className="text-gray-600 mb-6">{product.description}</p>

      <ul className="space-y-3 mb-8">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={`/products/${product.id}`}
        className={`block w-full py-4 px-6 rounded-full font-semibold text-center transition-all ${product.popular
          ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 text-white hover:shadow-xl hover:scale-105'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
      >
        View Details
      </Link>
    </motion.div>
  )
}

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="pt-20 pb-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-3xl bg-white/80 px-8 py-6 shadow-sm border border-white/40">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your
              <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                Perfect SafeBand
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every SafeBand comes with a 30-day money-back guarantee and lifetime support.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
