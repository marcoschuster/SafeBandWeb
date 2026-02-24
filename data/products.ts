import { Shield, Wind, Trees, Droplets, Zap, Watch } from 'lucide-react'

export interface Product {
    id: string
    name: string
    price: number
    description: string
    longDescription: string
    features: string[]
    ingredients?: string[]
    color: string
    category: 'band' | 'scent'
    image?: string
    popular?: boolean
}

export const products: Product[] = [
    // Bands
    {
        id: 'safeband-classic',
        name: 'SafeBand Classic',
        price: 129,
        description: 'Perfect for everyday safety with all essential features.',
        longDescription: 'The SafeBand Classic is our foundation for personal safety. Designed for reliability and ease of use, it provides peace of mind for you and your loved ones without complexity.',
        features: ['SOS Alert', 'GPS Tracking', '7-Day Battery', 'Water Resistant'],
        color: 'from-blue-500 to-blue-700',
        category: 'band',
        image: '/images/bands/safeband-classic.png'
    },
    {
        id: 'safeband-pro',
        name: 'SafeBand Pro',
        price: 199,
        description: 'Advanced safety with health monitoring capabilities.',
        longDescription: 'SafeBand Pro elevates your safety with advanced health metrics. Monitor your heart rate and benefit from automatic fall detection, making it ideal for active individuals and seniors.',
        features: ['All Classic Features', 'Fall Detection', 'Heart Rate Monitor', '14-Day Battery'],
        color: 'from-purple-500 to-purple-700',
        category: 'band',
        popular: true,
        image: '/images/bands/safeband-pro.png'
    },
    {
        id: 'safeband-ultra',
        name: 'SafeBand Ultra',
        price: 299,
        description: 'Ultimate protection with premium features and extended battery.',
        longDescription: 'The pinnacle of safety technology. SafeBand Ultra offers two-way audio communication and temperature alerts, backed by our longest-lasting battery ever.',
        features: ['All Pro Features', 'Two-Way Audio', 'Temperature Alert', '30-Day Battery'],
        color: 'from-pink-500 to-pink-700',
        category: 'band',
        image: '/images/bands/safeband-ultra.png'
    },
    // Scents
    {
        id: 'scent-mosquito',
        name: 'Mosquito Shield',
        price: 19,
        description: 'Natural protection against mosquitoes and insects.',
        longDescription: 'Our signature Mosquito Shield pod uses a proprietary blend of essential oils to create a 3-meter protection zone. Safe for all ages and pets.',
        ingredients: ['Citronella Oil', 'Eucalyptus Oil', 'Peppermint Oil', 'Cedarwood Oil'],
        features: ['3m Protection Radius', 'Long-lasting (30 days)', '100% Natural', 'Deet-Free'],
        color: 'from-emerald-400 to-cyan-500',
        category: 'scent',
        image: '/images/scents/mosquito-shield.png'
    },
    {
        id: 'scent-lavender',
        name: 'Lavender Calm',
        price: 19,
        description: 'Pure lavender essence to promote relaxation.',
        longDescription: 'Experience tranquility anywhere. This calming blend is designed to reduce stress levels and help you unwind after a long day.',
        ingredients: ['French Lavender Oil', 'Chamomile Extract', 'Bergamot Essence'],
        features: ['Stress Reduction', 'Sleep Support', 'Calming Aroma', 'Therapeutic Grade'],
        color: 'from-purple-400 to-indigo-500',
        category: 'scent',
        image: '/images/scents/lavender-calm.png'
    },
    {
        id: 'scent-ocean',
        name: 'Ocean Breeze',
        price: 19,
        description: 'Refreshing sea salt and aquatic notes.',
        longDescription: 'Bring the freshness of the coast to your wrist. A clean, crisp scent that revitalizes the senses and provides a mental reset.',
        ingredients: ['Sea Salt Extract', 'Marine Algae', 'Wild Mint'],
        features: ['Invigorating', 'Mental Clarity', 'Fresh Scent', 'Lasts 30 Days'],
        color: 'from-blue-400 to-cyan-500',
        category: 'scent',
        image: '/images/scents/ocean-breeze.png'
    },
    {
        id: 'scent-forest',
        name: 'Forest Walk',
        price: 19,
        description: 'Earthy pine and cedarwood aroma.',
        longDescription: 'A grounding scent that mirrors the experience of a deep forest hike. Perfect for staying centered in busy urban environments.',
        ingredients: ['Pine Needle Oil', 'Cedarwood bark', 'Sandalwood'],
        features: ['Grounding', 'Earthy Aroma', 'Natural Focus', '30-Day Use'],
        color: 'from-green-500 to-emerald-700',
        category: 'scent',
        image: '/images/scents/forest-walk.png'
    },
    {
        id: 'scent-mint',
        name: 'Mint Fresh',
        price: 19,
        description: 'Crisp peppermint and spearmint.',
        longDescription: 'The ultimate focus booster. This intense minty blend provides an immediate cooling sensation and sharpens cognitive performance.',
        ingredients: ['Peppermint Oil', 'Spearmint Oil', 'Wintergreen'],
        features: ['Cooling Sensation', 'Concentration Aid', 'High Intensity', 'Natural Mint'],
        color: 'from-teal-300 to-emerald-500',
        category: 'scent',
        image: '/images/scents/mint-fresh.png'
    }
]
