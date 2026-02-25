import Link from 'next/link'

export default function SOSEmergencyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            One-Touch
            <span className="block bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
              SOS Emergency
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instant emergency alert at the press of a button. Your safety is our priority, with immediate response and real-time location sharing.
          </p>
        </div>

        {/* Main Feature */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <span className="text-6xl">🚨</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Press Once. Help Arrives.
            </h2>
            <p className="text-xl text-gray-700">
              In an emergency, every second counts. SafeBand's SOS button instantly alerts your emergency contacts, local authorities, and emergency services with your exact location and vital information.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How SOS Emergency Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Press SOS Button</h3>
              <p className="text-gray-600">
                Hold the SOS button for 2 seconds to activate emergency mode.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Alert</h3>
              <p className="text-gray-600">
                Emergency SMS and push notifications sent to all your contacts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location Shared</h3>
              <p className="text-gray-600">
                Real-time GPS coordinates shared with live tracking updates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Help Arrives</h3>
              <p className="text-gray-600">
                Emergency services and contacts receive your exact location.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            SOS Features & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Lightning Fast Response</h3>
                  <p className="text-gray-600">
                    Alerts sent within 2 seconds of button press. No delays, no waiting.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Multiple Contacts</h3>
                  <p className="text-gray-600">
                    Alert up to 10 emergency contacts simultaneously with your location.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Works Without Phone</h3>
                  <p className="text-gray-600">
                    Built-in cellular connectivity ensures alerts work even without your smartphone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Loud Alarm</h3>
                  <p className="text-gray-600">
                    110dB siren activates to draw attention and deter threats.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Global Coverage</h3>
                  <p className="text-gray-600">
                    Works in over 150 countries with international emergency services integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Auto-Repeat Alerts</h3>
                  <p className="text-gray-600">
                    Continues sending location updates every 30 seconds until cancelled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            When You Need SOS Emergency
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🏃‍♀️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Running Alone</h3>
              <p className="text-gray-600">
                Feel safe during early morning or late evening runs in unfamiliar areas.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Car Trouble</h3>
              <p className="text-gray-600">
                Broken down on the highway? Alert help with your exact location.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Emergency</h3>
              <p className="text-gray-600">
                Sudden health issues? Get help fast with one button press.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Walking at Night</h3>
              <p className="text-gray-600">
                Feel threatened? Instant alert to contacts and authorities.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">👴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Elderly Care</h3>
              <p className="text-gray-600">
                Perfect for seniors living alone or with mobility concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Outdoor Adventures</h3>
              <p className="text-gray-600">
                Hiking, camping, or exploring? Stay connected to help.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-400 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your Safety, Our Priority
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for an emergency. Be prepared with SafeBand's one-touch SOS system today.
          </p>
          <Link
            href="/#products"
            className="inline-block px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Get Protected Now
          </Link>
        </div>
      </div>
    </main>
  )
}
