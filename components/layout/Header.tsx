'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigation = [
  {
    name: 'Products',
    href: '#products',
    dropdown: [
      { name: 'Mosquito Shield', href: '/products/scent-mosquito', description: 'Advanced protection against mosquitoes with natural oils' },
      { name: 'Lavender Calm', href: '/products/scent-lavender', description: 'Relaxing lavender scent to reduce stress and anxiety' },
      { name: 'Ocean Breeze', href: '/products/scent-ocean', description: 'Fresh and invigorating scent for an energy boost' },
      { name: 'Forest Walk', href: '/products/scent-forest', description: 'Earthy and grounding woodsy aroma' },
      { name: 'Mint Fresh', href: '/products/scent-mint', description: 'Cool and crisp mint for mental clarity' },
    ]
  },
  {
    name: 'Community',
    href: '#community',
    dropdown: [
      { name: 'Discord', href: 'https://discord.gg/RxZpaUJM', description: 'Join our official Discord server to chat with the community' },
    ]
  },
  {
    name: 'Use Cases',
    href: '#use-cases',
    dropdown: [
      { name: 'Mosquito Repellent', href: '/use-cases/mosquito-repellent', description: 'Natural protection against mosquitoes and insects' },
      { name: 'Aromatherapy Scents', href: '/use-cases/aromatherapy', description: 'Customize your mood with premium scent capsules' },
      { name: 'SOS Emergency Button', href: '/use-cases/sos-emergency', description: 'One-touch emergency alert system' },
      { name: 'Heart Rate Monitor', href: '/use-cases/heart-rate', description: 'Continuous health monitoring and alerts' },
      { name: 'GPS Tracking', href: '/use-cases/gps-tracking', description: 'Real-time location tracking for safety' },
    ]
  },
  {
    name: 'Docs',
    href: '#docs',
    dropdown: [
      { name: 'About Us', href: '/about', description: 'Meet the team behind SafeBand' },
      { name: 'Documentation', href: '/docs/user-manual', description: 'Learn how to use SafeBand' },
      { name: 'Support', href: '#support', description: 'Get help and support' },
    ]
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const { setIsCartOpen, totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 10)

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
        setIsMobileMenuOpen(false) // Close mobile menu when hiding
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md'
        : 'bg-white/80 backdrop-blur-sm'
        } ${isVisible ? 'top-0' : '-top-24'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden translate-y-2 translate-x-3">
                <Image
                  src="/logo.png"
                  alt="SafeBand Logo"
                  fill
                  className="object-contain scale-[1.45] transform-gpu" // Scaled up even more to "crop" and enlarge
                  priority
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent leading-none">
                SafeBand
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group py-2 flex items-center gap-1"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {!item.dropdown && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${activeDropdown === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                        }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 hover:bg-cyan-50 transition-colors group"
                          target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                          rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors">
                            {dropdownItem.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {dropdownItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Utilities */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              Login
            </Link>

            {/* Shopping Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-secondary-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                  onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                        target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                        rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
