'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, X } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Johnny Sins',
    location: 'Los Angeles, USA',
    rating: 5,
    date: 'Feb 15, 2026',
    review: 'As someone who works in multiple professions, safety is paramount. This SafeBand keeps me protected whether I\'m on construction sites, doing stunts, or working late nights. The GPS tracking gives my agent peace of mind. Professional quality, highly recommend!',
    avatar: '👨‍⚕️'
  },
  {
    id: 2,
    name: 'Demis Hassabis',
    location: 'London, UK',
    rating: 5,
    date: 'Feb 10, 2026',
    review: 'From an AI and neuroscience perspective, the fall detection algorithm is impressively sophisticated. The heart rate monitoring shows genuine innovation in sensor fusion. This is the kind of intelligent safety device I can appreciate - it learns and adapts to your patterns.',
    avatar: '🧠'
  },
  {
    id: 3,
    name: 'Ilya Sutskever',
    location: 'San Francisco, USA',
    rating: 5,
    date: 'Feb 8, 2026',
    review: 'The machine learning implementation behind the emergency detection is remarkable. I\'ve analyzed the response time and accuracy - this is genuinely cutting-edge technology. The architecture of the alert system demonstrates real understanding of critical path optimization.',
    avatar: '👨‍💻'
  },
  {
    id: 4,
    name: 'Ryan Garcia',
    location: 'California, USA',
    rating: 5,
    date: 'Feb 5, 2026',
    review: 'Yo this thing is LEGIT! I wear it during training and the heart rate monitor keeps me in check. After late night runs in sketchy areas, that SOS button hits different. My whole team got one now. Stay safe out there fam! 💪🥊',
    avatar: '🥊'
  },
  {
    id: 5,
    name: 'Andrew Tate',
    location: 'Dubai, UAE',
    rating: 5,
    date: 'Feb 1, 2026',
    review: 'Listen, in this world you need protection. This SafeBand is elite level security. I got one for each of my cars. The GPS tracking is precise, build quality is top tier. Real Gs move in silence but stay protected. This is what winners wear.',
    avatar: '😎'
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
    review: 'Bought the SafeBand Classic for myself and upgraded to Pro after a month - thats how impressed I was! The fall detection and heart rate monitoring on the Pro are essential features. Customer support responded within hours when I had a question.',
    avatar: '👩‍🔬'
  },
  {
    id: 10,
    name: 'Christopher Lee',
    location: 'Los Angeles, USA',
    rating: 5,
    date: 'Jan 15, 2026',
    review: 'As a senior citizen, I appreciate how easy this device is to use. Large buttons, clear instructions, and reliable performance. My children set it up for me and now they have peace of mind. The 30-day battery means I dont have to constantly worry about charging.',
    avatar: '👴'
  }
]

function ReviewCard({ review, onClick }: { review: typeof reviews[0]; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="flex-shrink-0 w-96 h-80 bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-white/40 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-5xl">{review.avatar}</div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 truncate text-lg">{review.name}</h4>
          <p className="text-sm text-gray-500 truncate">{review.location}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-gray-400 ml-2">{review.date}</span>
      </div>

      <p className="text-gray-600 text-base leading-relaxed line-clamp-5">
        {review.review}
      </p>

      {review.review.length > 200 && (
        <p className="text-cyan-600 text-sm font-semibold mt-2">Click to read more...</p>
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
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null)

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]
  
  const cardWidth = 384 // w-96 = 384px
  const gap = 24 // gap-6 = 24px
  const totalWidth = (cardWidth + gap) * reviews.length

  return (
    <>
      <section ref={ref} className="pt-32 pb-40 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-3xl bg-white px-12 py-8 pb-12 shadow-sm border border-white/40 min-w-fit">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 whitespace-nowrap">
                What Our Customers
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap pb-2 mb-6">
                Are Saying
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                Join thousands of satisfied customers who trust SafeBand for their safety.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Reviews */}
        <div
          className="relative overflow-hidden group"
          style={{ height: '20rem' }}
        >
          <motion.div
            className="flex gap-6 group-hover:[animation-play-state:paused]"
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                duration: reviews.length * 5,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
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
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none z-10" />
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
