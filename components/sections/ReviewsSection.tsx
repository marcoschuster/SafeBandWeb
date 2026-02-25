'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, X } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    date: 'Feb 15, 2026',
    review: 'This SafeBand has been a game-changer for my daily runs. I feel so much safer knowing that help is just a button press away. The GPS tracking is incredibly accurate, and my family loves being able to check on me. The battery life is amazing too - I only charge it once a month!',
    avatar: '👩‍🦰'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    rating: 5,
    date: 'Feb 10, 2026',
    review: 'Bought this for my elderly mother and it gives me so much peace of mind. The fall detection feature actually works - it alerted me when she had a small trip in the garden. Customer service was excellent in helping us set everything up.',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Austin, USA',
    rating: 4,
    date: 'Feb 8, 2026',
    review: 'Love the SafeBand Pro! The heart rate monitoring is surprisingly accurate compared to my Apple Watch. The mosquito shield scent is a bonus for my hiking trips. Only wish the band came in more color options, but the functionality is top-notch.',
    avatar: '👩'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'London, UK',
    rating: 5,
    date: 'Feb 5, 2026',
    review: 'As someone who travels frequently for work, the SafeBand has become an essential part of my gear. The two-way audio on the Ultra model saved me once when I got lost in an unfamiliar city. The interface is intuitive and the design is sleek enough to wear with business attire.',
    avatar: '👨‍💼'
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    location: 'Miami, USA',
    rating: 5,
    date: 'Feb 1, 2026',
    review: 'I&apos;ve tried several safety wearables, and SafeBand is by far the best. The app is user-friendly, the notifications are instant, and I love how I can customize the scent pods. The lavender calm scent helps me sleep better at night. Worth every penny!',
    avatar: '👩‍🦱'
  },
  {
    id: 6,
    name: 'Robert Kim',
    location: 'Seattle, USA',
    rating: 5,
    date: 'Jan 28, 2026',
    review: 'Excellent product! Got it for my wife who works late shifts. The SOS alert is lightning fast and the GPS is spot-on. The waterproof design means she doesn&apos;t have to worry about it in the rain. Highly recommend to anyone concerned about safety.',
    avatar: '👨‍🦲'
  },
  {
    id: 7,
    name: 'Amanda Foster',
    location: 'Toronto, Canada',
    rating: 4,
    date: 'Jan 25, 2026',
    review: 'Great device overall. The battery life is impressive and the build quality feels premium. My only minor complaint is that the initial setup took a bit longer than expected, but once configured, it works flawlessly. The emergency contacts feature is brilliant.',
    avatar: '👩‍💻'
  },
  {
    id: 8,
    name: 'James Wilson',
    location: 'Chicago, USA',
    rating: 5,
    date: 'Jan 20, 2026',
    review: 'This is exactly what I needed for my outdoor adventures. The forest walk scent is refreshing, and knowing I have emergency backup gives me confidence to explore more remote trails. The device is lightweight and comfortable to wear all day.',
    avatar: '🧔'
  },
  {
    id: 9,
    name: 'Lisa Anderson',
    location: 'Boston, USA',
    rating: 5,
    date: 'Jan 18, 2026',
    review: 'Bought the SafeBand Classic for myself and upgraded to Pro after a month - that&apos;s how impressed I was! The fall detection and heart rate monitoring on the Pro are essential features. Customer support responded within hours when I had a question.',
    avatar: '👩‍🔬'
  },
  {
    id: 10,
    name: 'Christopher Lee',
    location: 'Los Angeles, USA',
    rating: 5,
    date: 'Jan 15, 2026',
    review: 'As a senior citizen, I appreciate how easy this device is to use. Large buttons, clear instructions, and reliable performance. My children set it up for me and now they have peace of mind. The 30-day battery means I don&apos;t have to constantly worry about charging.',
    avatar: '👴'
  }
]

function ReviewCard({ review, onClick }: { review: typeof reviews[0]; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="flex-shrink-0 w-80 h-64 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-white/40 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">{review.avatar}</div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 truncate">{review.name}</h4>
          <p className="text-xs text-gray-500 truncate">{review.location}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="text-xs text-gray-400 ml-2">{review.date}</span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
        {review.review}
      </p>

      {review.review.length > 200 && (
        <p className="text-cyan-600 text-xs font-semibold mt-2">Click to read more...</p>
      )}
    </motion.div>
  )
}

function ReviewModal({ review, onClose }: { review: typeof reviews[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ backdropFilter: 'blur(0px)' }}
        animate={{ backdropFilter: 'blur(12px)' }}
        exit={{ backdropFilter: 'blur(0px)' }}
        className="absolute inset-0 bg-black/40"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close review"
        >
          <X size={24} className="text-gray-500" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="text-6xl">{review.avatar}</div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="text-sm text-gray-400 ml-2">{review.date}</span>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          {review.review}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isPaused, setIsPaused] = useState(false)
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null)

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]

  return (
    <>
      <section ref={ref} className="pt-4 pb-20 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-3xl bg-white/80 px-8 py-6 shadow-sm border border-white/40">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Customers
                <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                  Are Saying
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust SafeBand for their safety.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Reviews */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? undefined : [0, -((reviews.length * 336) + (reviews.length * 24))],
            }}
            transition={{
              x: {
                duration: reviews.length * 5,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <ReviewCard
                key={`${review.id}-${index}`}
                review={review}
                onClick={() => setSelectedReview(review)}
              />
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
