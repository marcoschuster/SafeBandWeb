import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import DynamicBackground from '@/components/ui/DynamicBackground'
import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/layout/CartDrawer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SafeBand - Smart Wearable Safety Technology',
  description: 'Revolutionary wearable technology for personal safety and emergency response. Stay connected, stay safe.',
  keywords: 'SafeBand, wearable technology, personal safety, emergency response, smart wearable',
  openGraph: {
    title: 'SafeBand - Smart Wearable Safety Technology',
    description: 'Revolutionary wearable technology for personal safety and emergency response.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeBand - Smart Wearable Safety Technology',
    description: 'Revolutionary wearable technology for personal safety and emergency response.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased relative min-h-screen">
        <CartProvider>
          <DynamicBackground />
          <CartDrawer />
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
