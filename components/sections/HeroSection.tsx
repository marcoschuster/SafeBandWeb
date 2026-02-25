'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block rounded-3xl bg-white/80 px-8 py-6 shadow-sm border border-white/40 mb-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.title1')}
              <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                {t('hero.title2')}
              </span>
            </motion.h1>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-semibold hover:from-cyan-700 hover:to-cyan-500 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('hero.shopButton')}
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-50 transition-all hover:scale-105 shadow-lg hover:shadow-xl border-2 border-primary-600"
            >
              {t('hero.learnMore')}
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-600 mt-1">{t('stats.emergency')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">GPS</div>
              <div className="text-sm text-gray-600 mt-1">{t('stats.gps')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">SOS</div>
              <div className="text-sm text-gray-600 mt-1">{t('stats.sos')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">30+</div>
              <div className="text-sm text-gray-600 mt-1">{t('stats.battery')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
