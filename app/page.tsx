import { HeroSection } from '@/components/sections/HeroSection'

import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { ScentsSection } from '@/components/sections/ScentsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main className="">

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ScentsSection />
        <ProductsSection />
        <ReviewsSection />
        <CTASection />
      </div>
    </main>
  )
}
