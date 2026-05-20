import { Link } from 'react-router'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Sparkles, Heart, Target, Zap, Users, ArrowLeft,
  Instagram, Mail, Globe
} from 'lucide-react'

export default function AboutPage() {
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

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-cream to-rose-100" />
        <div className="absolute top-10 right-20 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200 text-rose-600 text-sm font-medium mb-8">
            <Heart className="w-4 h-4" /><span>Our Story</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-rose-900 leading-tight mb-6">
            Built for Women,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">By People Who Care.</span>
          </h1>
          <p className="text-lg text-rose-700/80 max-w-2xl mx-auto leading-relaxed">
            HER365 was born from a simple belief: women deserve a self-improvement system that actually understands them.
          </p>
        </div>
      </section>

      {/* Our Why */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">The Why</span>
            <h2 className="font-display text-4xl font-bold text-rose-900 mt-3">Why We Built This</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="font-display text-2xl font-semibold text-rose-900 mb-4">The Problem</h3>
              <p className="text-rose-800/70 leading-relaxed mb-4">
                Every self-improvement app on the market is built by men, for everyone. They don't account for how women actually live — the cyclical nature of our energy, the unique pressures we face, the different ways we form habits and hold ourselves accountable.
              </p>
              <p className="text-rose-800/70 leading-relaxed">
                We were tired of generic productivity apps that treated women's wellness as an afterthought. So we built something different.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-3xl p-8 text-center">
              <div className="text-6xl font-display font-bold text-rose-300 mb-4">87%</div>
              <p className="text-rose-800/70 text-sm font-medium">of self-improvement apps are designed without women-specific research</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-rose-50 to-rose-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <p className="font-display text-xl font-semibold text-rose-900 mb-2">365 Days</p>
              <p className="text-rose-700/60 text-sm">One complete year of intentional growth</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-display text-2xl font-semibold text-rose-900 mb-4">The Solution</h3>
              <p className="text-rose-800/70 leading-relaxed mb-4">
                HER365 is a 365-day accountability system built exclusively for women. It combines daily habit tracking, AI-powered personal coaching, mood awareness, and optional cycle tracking into one beautiful, cohesive experience.
              </p>
              <p className="text-rose-800/70 leading-relaxed">
                Every feature — from the 13 daily habits to the AI companion's tone — is designed around how women actually live, work, and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">Our Approach</span>
            <h2 className="font-display text-4xl font-bold text-rose-900 mt-3">Four Pillars of Growth</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Structure', desc: '13 daily habits across 5 life categories. Not overwhelming — just enough to create real change without burnout.', color: 'bg-rose-500' },
              { icon: Zap, title: 'Intelligence', desc: 'Your AI companion learns about you. She references your progress, adapts to your mood, and even adjusts her tone based on your cycle.', color: 'bg-amber-500' },
              { icon: Heart, title: 'Compassion', desc: 'Missed a day? Your streak resets, but your journey continues. No guilt. No shame. Just gentle encouragement to get back on track.', color: 'bg-emerald-500' },
              { icon: Users, title: 'Community', desc: 'Coming soon: small accountability circles of women on similar journeys. Grow together. Celebrate together.', color: 'bg-sky-500' },
            ].map(pillar => (
              <div key={pillar.title} className="bg-white rounded-2xl p-8 border border-rose-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${pillar.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-rose-900 mb-2">{pillar.title}</h3>
                <p className="text-rose-700/70 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">The Team</span>
          <h2 className="font-display text-4xl font-bold text-rose-900 mt-3 mb-4">Two Founders, One Mission</h2>
          <p className="text-rose-700/70 max-w-xl mx-auto mb-12">
            We're a small team with a big vision. HER365 is built with care, iteration, and genuine belief in women's potential.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-3xl p-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center text-white font-display text-2xl font-bold mb-4">F</div>
              <h3 className="font-display text-lg font-semibold text-rose-900">Founder</h3>
              <p className="text-rose-600 text-sm mb-3">Vision & Strategy</p>
              <p className="text-rose-700/60 text-xs leading-relaxed">
                The driving force behind HER365. Passionate about women's empowerment and building technology that makes a real difference in people's lives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-3xl p-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white font-display text-2xl font-bold mb-4">B</div>
              <h3 className="font-display text-lg font-semibold text-rose-900">Ben</h3>
              <p className="text-rose-600 text-sm mb-3">Development & Engineering</p>
              <p className="text-rose-700/60 text-xs leading-relaxed">
                The technical mind bringing HER365 to life. Expert in mobile development, cloud infrastructure, and AI integration. Built the entire tech stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="py-20 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">The Company</span>
          <h2 className="font-display text-4xl font-bold text-rose-900 mt-3 mb-6">TabSphere Ltd</h2>
          <p className="text-rose-800/70 leading-relaxed mb-6">
            HER365 is a product of TabSphere Ltd, a London-based technology company focused on building meaningful digital experiences for underserved communities. We're registered in England and Wales at 71-75 Shelton Street, Covent Garden, London WC2H 9JQ.
          </p>
          <p className="text-rose-800/70 leading-relaxed mb-8">
            Our mission is simple: use technology to help people become the best versions of themselves. HER365 is our first product — built with love, iterated with feedback, and designed to last.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 rounded-full">
              <Mail className="w-4 h-4 mr-2" />Contact Us
            </Button>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/20 rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Ready to Become Her?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Your 365-day journey starts with a single tap. Join the women who are already transforming their lives.
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 rounded-full px-10 py-6 text-base font-semibold shadow-lg">
            Download the App
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-display text-lg font-semibold">HER365</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-rose-300/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/her365app" target="_blank" rel="noopener noreferrer" className="text-rose-400/60 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://tiktok.com/@her365app" target="_blank" rel="noopener noreferrer" className="text-rose-400/60 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="mailto:info@tabsphere.co.uk" className="text-rose-400/60 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <Separator className="my-6 bg-rose-800" />
          <p className="text-rose-400/60 text-xs text-center">&copy; 2026 HER365. A TabSphere Ltd Product. London, UK.</p>
        </div>
      </footer>
    </div>
  )
}
