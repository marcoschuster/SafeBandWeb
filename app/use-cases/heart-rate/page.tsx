import Link from 'next/link'

export default function HeartRateMonitorPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced Heart Rate
            <span className="block bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent">
              Monitoring
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            24/7 continuous heart rate monitoring with intelligent alerts. Stay informed about your cardiovascular health and detect potential issues early.
          </p>
        </div>

        {/* Main Feature */}
        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <span className="text-6xl">💓</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Heart Health, Monitored 24/7
            </h2>
            <p className="text-xl text-gray-700">
              SafeBand uses advanced optical sensors to continuously track your heart rate, detecting abnormal patterns and alerting you and your emergency contacts to potential cardiac issues before they become critical.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Heart Rate Monitoring Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Continuous heart rate monitoring with updates every 10 seconds during activity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Abnormality Detection</h3>
              <p className="text-gray-600">
                Automatic alerts for irregular heartbeats, tachycardia, or bradycardia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trend Analysis</h3>
              <p className="text-gray-600">
                View daily, weekly, and monthly heart rate patterns and trends.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exercise Zones</h3>
              <p className="text-gray-600">
                Track your heart rate zones during workouts for optimal training.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">😴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resting Heart Rate</h3>
              <p className="text-gray-600">
                Monitor your resting heart rate overnight to track fitness improvements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">App Integration</h3>
              <p className="text-gray-600">
                Sync data with health apps and share reports with your doctor.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Heart Rate Monitoring Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl p-12 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="text-8xl mb-4">💗</div>
                  <div className="text-6xl font-bold text-pink-600">72</div>
                  <div className="text-xl text-gray-600 mt-2">BPM</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Optical Sensors</h3>
                  <p className="text-gray-600">
                    Green LED lights penetrate your skin and measure blood flow through your wrist.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">AI Analysis</h3>
                  <p className="text-gray-600">
                    Advanced algorithms process the data to calculate accurate heart rate and detect patterns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔔</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Smart Alerts</h3>
                  <p className="text-gray-600">
                    Receive notifications if your heart rate goes above or below safe thresholds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Conditions */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Early Detection Can Save Lives
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700">
              Heart rate monitoring can help detect early warning signs of serious conditions:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">🫀 Arrhythmia</h4>
                <p className="text-gray-600">Irregular heart rhythms that may require medical attention.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">⚡ Atrial Fibrillation</h4>
                <p className="text-gray-600">Common heart rhythm disorder that increases stroke risk.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">💪 Tachycardia</h4>
                <p className="text-gray-600">Abnormally fast heart rate that may indicate problems.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">🐌 Bradycardia</h4>
                <p className="text-gray-600">Unusually slow heart rate that needs monitoring.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic text-center mt-6">
              *SafeBand is not a medical device. Consult your doctor for medical advice.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-red-400 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Monitor Your Heart Health Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take control of your cardiovascular health with 24/7 heart rate monitoring from SafeBand.
          </p>
          <Link
            href="/#products"
            className="inline-block px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Shop SafeBand
          </Link>
        </div>
      </div>
    </main>
  )
}
