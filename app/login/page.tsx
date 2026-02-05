'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        // In a real app, this would authenticate with your backend
        console.log('Login attempt:', { email, password })
        alert('Login successful! (Demo)')
        setIsLoading(false)
      } else {
        setError('Please fill in all fields')
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-100/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/30 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block group transition-transform hover:scale-105">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              SafeBand
            </h1>
          </Link>
          <p className="text-gray-600 mt-2 font-medium">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-white/40 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-50"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {error}
              </motion.div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 ml-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded-lg focus:ring-cyan-500 transition-colors"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-cyan-600 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-2xl font-bold hover:from-cyan-700 hover:to-teal-600 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl shadow-cyan-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </span>
            </button>
          </form>

          <div className="mt-8 text-center relative z-10">
            <p className="text-sm text-gray-600 font-medium">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-cyan-600 hover:text-cyan-700 font-bold underline decoration-cyan-500/30 underline-offset-4 hover:decoration-cyan-500 transition-all">
                Sign up
              </a>
            </p>

          </div>

          {/* Social Login */}
          <div className="mt-8 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-500 font-medium">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/50 border border-white/60 rounded-2xl hover:bg-white/80 transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2 text-sm font-bold text-gray-700">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/50 border border-white/60 rounded-2xl hover:bg-white/80 transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="ml-2 text-sm font-bold text-gray-700">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center relative z-10">
          <Link href="/" className="text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors flex items-center justify-center gap-1 group">
            <span className="transform transition-transform group-hover:-translate-x-1">←</span> Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
