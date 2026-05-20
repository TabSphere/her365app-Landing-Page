import { Link } from 'react-router'
import { Separator } from '@/components/ui/separator'
import { Sparkles, FileText, ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
          <FileText className="w-6 h-6 text-rose-500" />
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">Legal</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-rose-900 mb-4">Terms of Service</h1>
        <p className="text-rose-600/60 text-sm mb-12">Last updated: May 20, 2026</p>

        <div className="prose prose-rose max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              By downloading, installing, or using HER365 ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              HER365 is operated by TabSphere Ltd, a company registered in England and Wales with its registered office at 71-75 Shelton Street, Covent Garden, London WC2H 9JQ ("TabSphere," "we," "our," or "us").
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">2. Description of Service</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              HER365 is a mobile application designed to help women build discipline and track personal growth over a 365-day journey. The App provides features including daily habit tracking, priority setting, AI-powered companion messages, mood tracking, and optional cycle awareness.
            </p>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of the App at any time, with or without notice.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">3. Eligibility</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              You must be at least 16 years old to use HER365. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">4. Accounts & Authentication</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              HER365 uses anonymous authentication by default. No email address or personal information is required to use the core features. You may optionally provide an email address to enable cloud backup and cross-device syncing.
            </p>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. Notify us immediately of any unauthorised use.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">5. Subscriptions & Payments</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              HER365 offers a 7-day free trial. After the trial period, access to days 8-365 requires a paid subscription. All payments are processed through Apple's App Store In-App Purchase system and RevenueCat.
            </p>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">
              Subscription options:
            </p>
            <ul className="space-y-2 text-rose-800/70 text-sm leading-relaxed list-disc pl-5">
              <li>Monthly: &pound;4.99 per month</li>
              <li>Annual: &pound;35.99 per year</li>
              <li>Lifetime: &pound;79.99 one-time purchase</li>
            </ul>
            <p className="text-rose-800/70 text-sm leading-relaxed mt-3">
              Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage and cancel subscriptions through your Apple ID account settings.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">6. Free Trial</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              New users receive a 7-day free trial with full access to all features. If you do not purchase a subscription before the trial ends, you will lose access to days 8-365. Your data and progress are retained and will be restored if you subscribe later.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">7. Refund Policy</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              All purchases are final and non-refundable, except where required by law or Apple's App Store refund policies. For refund requests, please contact Apple Support directly as all payments are processed through the App Store.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">8. Acceptable Use</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed mb-3">You agree not to:</p>
            <ul className="space-y-2 text-rose-800/70 text-sm leading-relaxed list-disc pl-5">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to our systems or other users' data</li>
              <li>Interfere with or disrupt the App or its servers</li>
              <li>Reverse engineer, decompile, or disassemble any part of the App</li>
              <li>Use automated scripts or bots to interact with the App</li>
              <li>Share content that is harmful, abusive, or offensive within Community features</li>
            </ul>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">9. Intellectual Property</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              All content, features, and functionality of HER365 — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are owned by TabSphere Ltd and are protected by UK and international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the App without our express written permission.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">10. Disclaimer of Warranties</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              HER365 is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or secure. The AI companion messages are generated by artificial intelligence and should not be considered professional medical, psychological, or financial advice.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">11. Limitation of Liability</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              To the maximum extent permitted by law, TabSphere Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App. Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">12. Governing Law</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">13. Changes to Terms</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              We may update these Terms from time to time. Material changes will be notified through the App or via email. Continued use of HER365 after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <Separator className="bg-rose-100 my-8" />

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold text-rose-900 mb-3">14. Contact</h2>
            <p className="text-rose-800/70 text-sm leading-relaxed">
              For any questions about these Terms, please contact us at{' '}
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
