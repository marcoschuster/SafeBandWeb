import Image from 'next/image'
import Link from 'next/link'

export default function MosquitoRepellentPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Natural Mosquito
            <span className="block bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              Protection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay protected from mosquitoes and insects with our advanced SafeBand Mosquito Shield capsule. 100% natural, DEET-free, and effective.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-3xl p-8 flex items-center justify-center h-96">
              <Image
                src="/images/scents/mosquito-shield.png"
                alt="Mosquito Shield Capsule"
                width={300}
                height={300}
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Natural Essential Oils</h3>
                  <p className="text-gray-600">
                    Our proprietary blend includes citronella, eucalyptus, peppermint, and cedarwood oils that naturally repel mosquitoes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">3-Meter Protection Zone</h3>
                  <p className="text-gray-600">
                    Creates an invisible barrier around you, keeping mosquitoes and other insects at bay within a 3-meter radius.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Long-Lasting Formula</h3>
                  <p className="text-gray-600">
                    Each capsule lasts up to 30 days with continuous use, providing consistent protection day and night.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose SafeBand Mosquito Shield?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Natural</h3>
              <p className="text-gray-600">
                No harmful chemicals, DEET-free, and safe for all ages including children and pets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable ingredients and biodegradable packaging that's kind to the environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Effective</h3>
              <p className="text-gray-600">
                Tested in tropical climates and proven to reduce mosquito bites by up to 95%.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Stay Protected?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your SafeBand with Mosquito Shield capsule today and enjoy outdoor activities without the worry.
          </p>
          <Link
            href="/products/scent-mosquito"
            className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Shop Mosquito Shield
          </Link>
        </div>
      </div>
    </main>
  )
}
