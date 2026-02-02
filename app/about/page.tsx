'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const team = [
  {
    name: 'Marco Schuster',
    role: 'Head Programmer & Coder',
    description: 'Leading the technical development and architecture of SafeBand. Marco brings innovative solutions to complex challenges, ensuring our platform is robust, scalable, and secure.',
    icon: '💻',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Sami Adnane',
    role: 'Product Designer & Engineer',
    description: 'Crafting the user experience and physical design of SafeBand. Sami combines engineering excellence with design thinking to create products that are both beautiful and functional.',
    icon: '🎨',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Rami Obbad',
    role: 'Assistant & Operations',
    description: 'Supporting all aspects of SafeBand operations. Rami ensures smooth coordination between teams and helps bring our vision to life through dedicated assistance and problem-solving.',
    icon: '🤝',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    name: 'Luis Loff',
    role: 'Marketing & Advertising',
    description: 'Driving SafeBand\'s brand presence and market reach. Luis develops strategic marketing campaigns and advertising initiatives that connect our innovative product with people who need it most.',
    icon: '📢',
    gradient: 'from-orange-500 to-red-600',
  },
]

function TeamMemberCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/20"
    >
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} mb-6 flex items-center justify-center text-4xl shadow-lg`}>
        {member.icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <div className="text-lg font-semibold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent mb-4">
        {member.role}
      </div>
      <p className="text-gray-600 leading-relaxed">{member.description}</p>
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-visible text-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display">
              Meet the
              <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                SafeBand Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team dedicated to revolutionizing personal safety through innovative wearable technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At SafeBand, we believe everyone deserves to feel safe and protected. Our mission is to create innovative wearable technology that provides peace of mind, connecting you to help when you need it most. Through cutting-edge design and reliable technology, we're making the world a safer place, one wrist at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
              The People Behind
              <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                SafeBand
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each team member brings unique expertise and passion to make SafeBand the best it can be.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your safety and security are our top priorities in everything we create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                💡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to deliver cutting-edge technology solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                ❤️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We care deeply about the wellbeing of every person who uses SafeBand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 mx-4 mb-20 md:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center rounded-[3rem] bg-gradient-to-br from-cyan-600 via-cyan-500 to-teal-500 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Join Us in Making the World Safer
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're interested in our products, partnerships, or career opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Explore Products
              </Link>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent text-white rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 border-2 border-white"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
