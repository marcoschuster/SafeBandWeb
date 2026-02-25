'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.products': 'Products',
    'nav.community': 'Community',
    'nav.useCases': 'Use Cases',
    'nav.docs': 'Docs',
    'nav.login': 'Login',
    'nav.discord': 'Discord',
    'nav.discord.desc': 'Join our official Discord server to chat with the community',
    'nav.about': 'About Us',
    'nav.about.desc': 'Meet the team behind SafeBand',
    'nav.documentation': 'Documentation',
    'nav.documentation.desc': 'Learn how to use SafeBand',
    'nav.support': 'Support',
    'nav.support.desc': 'Get help and support',
    
    // Use Cases
    'nav.mosquito': 'Mosquito Repellent',
    'nav.mosquito.desc': 'Natural protection against mosquitoes and insects',
    'nav.aromatherapy': 'Aromatherapy Scents',
    'nav.aromatherapy.desc': 'Customize your mood with premium scent capsules',
    'nav.sos': 'SOS Emergency Button',
    'nav.sos.desc': 'One-touch emergency alert system',
    'nav.heartrate': 'Heart Rate Monitor',
    'nav.heartrate.desc': 'Continuous health monitoring and alerts',
    'nav.gps': 'GPS Tracking',
    'nav.gps.desc': 'Real-time location tracking for safety',
    
    // Hero
    'hero.title1': 'Safety Meets',
    'hero.title2': 'Innovation',
    'hero.subtitle': 'Revolutionary wearable technology designed to keep you safe, connected, and protected in any situation.',
    'hero.shopButton': 'Shop SafeBand',
    'hero.learnMore': 'Learn More',
    
    // Stats
    'stats.emergency': 'Emergency Response',
    'stats.gps': 'Location Tracking',
    'stats.sos': 'One-Touch Alert',
    'stats.battery': 'Day Battery',
    
    // Features
    'features.title1': 'Advanced Safety',
    'features.title2': 'Features',
    'features.subtitle': 'Cutting-edge technology designed to keep you and your loved ones safe.',
    
    // Products
    'products.title1': 'Choose Your',
    'products.title2': 'Perfect SafeBand',
    'products.subtitle': 'Every SafeBand comes with a 30-day money-back guarantee and lifetime support.',
    'products.viewDetails': 'View Details',
    'products.safeband-solo': 'SafeBand Only',
    'products.safeband-solo.desc': 'The essential SafeBand with all safety features.',
    'products.safeband-bundle-2': 'SafeBand + 2 Scents',
    'products.safeband-bundle-2.desc': 'SafeBand with 2 scent capsules of your choice.',
    'products.safeband-bundle-3': 'SafeBand + 3 Scents',
    'products.safeband-bundle-3.desc': 'SafeBand with 3 scent capsules for more variety.',
    'products.safeband-bundle-4': 'SafeBand + 4 Scents',
    'products.safeband-bundle-4.desc': 'Ultimate bundle with 4 scent capsules.',
    'products.mostPopular': 'Most Popular',
    
    // Scents
    'scents.title1': 'The Scent',
    'scents.title2': 'Experience',
    'scents.subtitle': 'Each SafeBand can be customized with our proprietary scent pods, designed to enhance your mood and protect your environment.',
    
    // Reviews
    'reviews.title1': 'What Our Customers',
    'reviews.title2': 'Are Saying',
    'reviews.subtitle': 'Join thousands of satisfied customers who trust SafeBand for their safety.',
    'reviews.readMore': 'Click to read more...',
    
    // CTA
    'cta.title': 'Ready to Feel Safer?',
    'cta.subtitle': 'Join thousands of people who trust SafeBand for their safety every day. Get started with free shipping and a 30-day guarantee.',
    'cta.shopNow': 'Shop Now',
    'cta.contactSales': 'Contact Sales',
    'cta.freeShipping': 'Free Shipping',
    'cta.guarantee': '30-Day Guarantee',
    'cta.support': 'Lifetime Support',
  },
  de: {
    // Header
    'nav.products': 'Produkte',
    'nav.community': 'Community',
    'nav.useCases': 'Anwendungsfälle',
    'nav.docs': 'Dokumentation',
    'nav.login': 'Anmelden',
    'nav.discord': 'Discord',
    'nav.discord.desc': 'Treten Sie unserem offiziellen Discord-Server bei',
    'nav.about': 'Über uns',
    'nav.about.desc': 'Lernen Sie das Team hinter SafeBand kennen',
    'nav.documentation': 'Dokumentation',
    'nav.documentation.desc': 'Erfahren Sie, wie Sie SafeBand verwenden',
    'nav.support': 'Support',
    'nav.support.desc': 'Hilfe und Unterstützung erhalten',
    
    // Use Cases
    'nav.mosquito': 'Mückenschutz',
    'nav.mosquito.desc': 'Natürlicher Schutz vor Mücken und Insekten',
    'nav.aromatherapy': 'Aromatherapie-Düfte',
    'nav.aromatherapy.desc': 'Passen Sie Ihre Stimmung mit Premium-Duftkapseln an',
    'nav.sos': 'SOS-Notfall-Knopf',
    'nav.sos.desc': 'Ein-Knopf-Notfallsystem',
    'nav.heartrate': 'Herzfrequenz-Monitor',
    'nav.heartrate.desc': 'Kontinuierliche Gesundheitsüberwachung und Warnungen',
    'nav.gps': 'GPS-Verfolgung',
    'nav.gps.desc': 'Echtzeit-Standortverfolgung für Sicherheit',
    
    // Hero
    'hero.title1': 'Sicherheit trifft',
    'hero.title2': 'Innovation',
    'hero.subtitle': 'Revolutionäre tragbare Technologie, die Sie in jeder Situation sicher, verbunden und geschützt hält.',
    'hero.shopButton': 'SafeBand kaufen',
    'hero.learnMore': 'Mehr erfahren',
    
    // Stats
    'stats.emergency': 'Notfall-Reaktion',
    'stats.gps': 'Standortverfolgung',
    'stats.sos': 'Ein-Knopf-Alarm',
    'stats.battery': 'Tage Akkulaufzeit',
    
    // Features
    'features.title1': 'Erweiterte Sicherheit',
    'features.title2': 'Funktionen',
    'features.subtitle': 'Modernste Technologie, um Sie und Ihre Liebsten zu schützen.',
    
    // Products
    'products.title1': 'Wählen Sie Ihr',
    'products.title2': 'Perfektes SafeBand',
    'products.subtitle': 'Jedes SafeBand kommt mit 30-Tage-Geld-zurück-Garantie und lebenslangem Support.',
    'products.viewDetails': 'Details ansehen',
    'products.safeband-solo': 'Nur SafeBand',
    'products.safeband-solo.desc': 'Das essentielle SafeBand mit allen Sicherheitsfunktionen.',
    'products.safeband-bundle-2': 'SafeBand + 2 Düfte',
    'products.safeband-bundle-2.desc': 'SafeBand mit 2 Duftkapseln Ihrer Wahl.',
    'products.safeband-bundle-3': 'SafeBand + 3 Düfte',
    'products.safeband-bundle-3.desc': 'SafeBand mit 3 Duftkapseln für mehr Abwechslung.',
    'products.safeband-bundle-4': 'SafeBand + 4 Düfte',
    'products.safeband-bundle-4.desc': 'Ultimatives Bundle mit 4 Duftkapseln.',
    'products.mostPopular': 'Beliebteste',
    
    // Scents
    'scents.title1': 'Das Duft',
    'scents.title2': 'Erlebnis',
    'scents.subtitle': 'Jedes SafeBand kann mit unseren proprietären Duft-Pods angepasst werden, um Ihre Stimmung zu verbessern und Ihre Umgebung zu schützen.',
    
    // Reviews
    'reviews.title1': 'Was unsere Kunden',
    'reviews.title2': 'Sagen',
    'reviews.subtitle': 'Schließen Sie sich Tausenden zufriedenen Kunden an, die SafeBand für ihre Sicherheit vertrauen.',
    'reviews.readMore': 'Klicken Sie, um mehr zu lesen...',
    
    // CTA
    'cta.title': 'Bereit, sich sicherer zu fühlen?',
    'cta.subtitle': 'Schließen Sie sich Tausenden von Menschen an, die jeden Tag SafeBand für ihre Sicherheit vertrauen. Starten Sie mit kostenlosem Versand und 30-Tage-Garantie.',
    'cta.shopNow': 'Jetzt kaufen',
    'cta.contactSales': 'Vertrieb kontaktieren',
    'cta.freeShipping': 'Kostenloser Versand',
    'cta.guarantee': '30-Tage-Garantie',
    'cta.support': 'Lebenslanger Support',
  }
}
