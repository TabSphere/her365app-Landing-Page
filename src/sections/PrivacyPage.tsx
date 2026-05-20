import { Link } from 'react-router'
import { Separator } from '@/components/ui/separator'
import { Sparkles, Shield, ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Header */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="text-rose-600 hover:text-rose-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display text-lg font-semibold text-rose-800">HER365</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-6 h-6 text-rose-500" />
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">Legal</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-rose-900 mb-4">Privacy Policy</h1>
        <p className="text-rose-600/60 text-sm mb-12">Last updated: May 20, 2026</p>

        <div className="prose prose-rose max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">1. Introduction</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              HER365 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services. We built HER365 with privacy at its core — your personal growth journey belongs to you alone.
            </p>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              By using HER365, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our app.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-rose-800 text-sm mb-2">Anonymous Usage Data</h3>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              By default, HER365 uses anonymous authentication. We do not require your name, email address, or any personally identifiable information to use the core features of the app. You may optionally provide an email address if you wish to enable cross-device cloud syncing.
            </p>
            <h3 className="font-semibold text-rose-800 text-sm mb-2">Journey Data</h3>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              We store your daily entries, including: habits checked, priorities set, mental reflections, mood ratings, and cycle tracking information (if enabled). This data is stored locally on your device and optionally synced to our secure cloud infrastructure.
            </p>
            <h3 className="font-semibold text-rose-800 text-sm mb-2">Analytics Data</h3>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              We collect anonymised usage analytics (app opens, feature usage, subscription events) via Mixpanel to improve the app. You can disable analytics tracking at any time in Settings. We do not track your individual habit entries, priorities, or reflections.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-rose-800/70 text-sm leading-relaxed list-disc pl-5">
              <li>To provide and maintain the HER365 service</li>
              <li>To sync your data across devices (if cloud backup is enabled)</li>
              <li>To generate personalised AI companion messages</li>
              <li>To improve our app features and user experience</li>
              <li>To process subscription payments via RevenueCat</li>
              <li>To send push notifications for daily reminders (if enabled)</li>
            </ul>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">4. Data Storage & Security</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              Your data is stored using Supabase, which provides enterprise-grade security including Row Level Security (RLS). This means your data is isolated — no other user can access your journey entries, priorities, or reflections.
            </p>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              All data transmission between your device and our servers is encrypted using TLS/SSL. We never store your payment card details — all payments are processed securely through Apple's App Store and RevenueCat.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">5. Third-Party Services</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">We use the following third-party services to operate HER365:</p>
            <ul className="space-y-2 text-rose-800/70 text-sm leading-relaxed list-disc pl-5">
              <li><strong>Supabase</strong> — Cloud database and anonymous authentication</li>
              <li><strong>OpenAI</strong> — AI companion message generation (text only sent, not stored by OpenAI)</li>
              <li><strong>ElevenLabs</strong> — Text-to-speech for voice coach (text processed, not retained)</li>
              <li><strong>RevenueCat</strong> — Subscription management and in-app purchases</li>
              <li><strong>Mixpanel</strong> — Anonymised usage analytics (can be disabled in Settings)</li>
            </ul>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">6. Your Rights</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">You have full control over your data:</p>
            <ul className="space-y-2 text-rose-800/70 text-sm leading-relaxed list-disc pl-5">
              <li><strong>Access:</strong> All your data is visible within the app at all times</li>
              <li><strong>Export:</strong> Contact us to request a copy of your data</li>
              <li><strong>Delete:</strong> Use "Restart Journey" in Settings to clear all data, or contact us for full account deletion</li>
              <li><strong>Opt-out:</strong> Disable analytics, notifications, or cycle tracking at any time</li>
              <li><strong>Local-only:</strong> Use the app entirely offline if you choose not to enable cloud sync</li>
            </ul>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">7. Children's Privacy</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              HER365 is not intended for users under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">8. Changes to This Policy</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy in the app and updating the "Last updated" date. Continued use of HER365 after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">9. Contact Us</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@tabsphere.co.uk" className="text-rose-600 hover:text-rose-800 underline">info@tabsphere.co.uk</a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-rose-400/60 text-xs">&copy; 2026 HER365. A TabSphere Ltd Product. London, UK.</p>
        </div>
      </footer>
    </div>
  )
}
