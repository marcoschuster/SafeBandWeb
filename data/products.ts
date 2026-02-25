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
        id: 'safeband-solo',
        name: 'SafeBand Only',
        price: 49.99,
        description: 'The essential SafeBand with all safety features.',
        longDescription: 'Get the complete SafeBand experience with all essential safety features. Add your favorite scent capsules separately to customize your experience.',
        features: ['SOS Alert', 'GPS Tracking', '30-Day Battery', 'Water Resistant', 'Fall Detection', 'Heart Rate Monitor'],
        color: 'from-blue-500 to-blue-700',
        category: 'band',
    },
    {
        id: 'safeband-bundle-2',
        name: 'SafeBand + 2 Scents',
        price: 66.99,
        description: 'SafeBand with 2 scent capsules of your choice.',
        longDescription: 'The perfect starter bundle! Get your SafeBand plus two scent capsules to begin your personalized safety and aromatherapy journey.',
        features: ['SafeBand Device', '2 Scent Capsules', 'SOS Alert', 'GPS Tracking', '30-Day Battery', 'Save €3'],
        color: 'from-purple-500 to-purple-700',
        category: 'band',
        popular: true,
    },
    {
        id: 'safeband-bundle-3',
        name: 'SafeBand + 3 Scents',
        price: 74.99,
        description: 'SafeBand with 3 scent capsules for more variety.',
        longDescription: 'Enjoy more variety with three scent capsules included. Switch between scents to match your mood and activity throughout the week.',
        features: ['SafeBand Device', '3 Scent Capsules', 'All Safety Features', 'More Variety', 'Save €5'],
        color: 'from-pink-500 to-pink-700',
        category: 'band',
    },
    {
        id: 'safeband-bundle-4',
        name: 'SafeBand + 4 Scents',
        price: 81.99,
        description: 'Ultimate bundle with 4 scent capsules.',
        longDescription: 'Our most complete package! Four scent capsules give you maximum flexibility to customize your SafeBand experience for any situation.',
        features: ['SafeBand Device', '4 Scent Capsules', 'Complete Collection', 'Maximum Variety', 'Save €8'],
        color: 'from-cyan-500 to-teal-700',
        category: 'band',
    },
    // Scents
    {
        id: 'scent-mosquito',
        name: 'Mosquito Shield',
        price: 9.99,
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
        price: 9.99,
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
        price: 9.99,
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
        price: 9.99,
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
        price: 9.99,
        description: 'Crisp peppermint and spearmint.',
        longDescription: 'The ultimate focus booster. This intense minty blend provides an immediate cooling sensation and sharpens cognitive performance.',
        ingredients: ['Peppermint Oil', 'Spearmint Oil', 'Wintergreen'],
        features: ['Cooling Sensation', 'Concentration Aid', 'High Intensity', 'Natural Mint'],
        color: 'from-teal-300 to-emerald-500',
        category: 'scent',
        image: '/images/scents/mint-fresh.png'
    }
]
