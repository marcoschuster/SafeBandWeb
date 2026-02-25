import Link from 'next/link'

export default function GPSTrackingPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real-Time GPS
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-transparent">
              Tracking
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Know where your loved ones are, anytime, anywhere. Military-grade GPS technology with pinpoint accuracy and live location sharing.
          </p>
        </div>

        {/* Main Feature */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-6xl">📍</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Always Know Where They Are
            </h2>
            <p className="text-xl text-gray-700">
              SafeBand's advanced GPS tracking provides real-time location updates with accuracy down to 5 meters. Whether it's your child walking home from school, an elderly parent running errands, or a loved one traveling, you'll have peace of mind knowing their exact location.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            GPS Tracking Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pinpoint Accuracy</h3>
              <p className="text-gray-600">
                5-meter accuracy using GPS, GLONASS, and Galileo satellite systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Updates</h3>
              <p className="text-gray-600">
                Real-time location updates every 10 seconds when in motion.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location History</h3>
              <p className="text-gray-600">
                View complete movement history and routes for the past 30 days.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geo-Fencing</h3>
              <p className="text-gray-600">
                Set safe zones and receive alerts when they're entered or left.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Coverage</h3>
              <p className="text-gray-600">
                Works in 150+ countries with international roaming included.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Battery Efficient</h3>
              <p className="text-gray-600">
                Smart power management maintains 30-day battery life with tracking.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How GPS Tracking Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛰️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Satellite Connection</h3>
              <p className="text-gray-600">
                SafeBand connects to multiple GPS satellites orbiting Earth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Signal Processing</h3>
              <p className="text-gray-600">
                Advanced chip calculates precise location from satellite data.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📲</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Transmission</h3>
              <p className="text-gray-600">
                Location sent securely via cellular network to your app.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">View on Map</h3>
              <p className="text-gray-600">
                See real-time location on interactive map in your app.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Who Benefits From GPS Tracking?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parents</h3>
              <p className="text-gray-600 mb-4">
                Track your children's location when they're at school, playing outside, or with friends.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ School arrival/departure alerts</li>
                <li>✓ Safe zone notifications</li>
                <li>✓ Location sharing with family</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="text-5xl mb-4">👴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Caregivers</h3>
              <p className="text-gray-600 mb-4">
                Monitor elderly loved ones with dementia or mobility issues for their safety.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Wandering prevention</li>
                <li>✓ Fall location detection</li>
                <li>✓ Medical emergency response</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Athletes & Adventurers</h3>
              <p className="text-gray-600 mb-4">
                Track outdoor activities and share your location during adventures.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Route recording</li>
                <li>✓ Emergency location beacon</li>
                <li>✓ Activity tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your Privacy is Protected
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  All location data is encrypted using military-grade AES-256 encryption.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Controlled Access</h3>
                <p className="text-gray-600">
                  You decide who can see your location and can revoke access anytime.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🗑️</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Data Deletion</h3>
                <p className="text-gray-600">
                  Location history can be deleted at any time and is auto-purged after 30 days.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">GDPR Compliant</h3>
                <p className="text-gray-600">
                  We comply with all international privacy regulations and standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-400 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Connected, Stay Safe
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience peace of mind with real-time GPS tracking. Know where your loved ones are, always.
          </p>
          <Link
            href="/#products"
            className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Get SafeBand Today
          </Link>
        </div>
      </div>
    </main>
  )
}
