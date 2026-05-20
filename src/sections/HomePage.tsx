import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Target, Heart, Sparkles, Users, Zap, Calendar,
  CheckCircle2, ChevronRight, Star, Smartphone,
  Shield, TrendingUp, Menu, X, Download,
  Instagram, Mail, Mic, BarChart3, Lock, Globe
} from 'lucide-react'

/* ───────────────── NAVIGATION ───────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '/about' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="HER365" className="w-9 h-9 rounded-xl" />
          <span className="font-display text-xl font-semibold text-rose-800">HER365</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => l.href.startsWith('#') ? (
            <a key={l.label} href={l.href} className="text-sm font-medium text-rose-700/80 hover:text-rose-600 transition-colors">{l.label}</a>
          ) : (
            <Link key={l.label} to={l.href} className="text-sm font-medium text-rose-700/80 hover:text-rose-600 transition-colors">{l.label}</Link>
          ))}
          <Button size="sm" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-5">Join the Waitlist</Button>
        </div>
        <button className="md:hidden text-rose-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100 px-6 py-4">
          {navLinks.map(l => l.href.startsWith('#') ? (
            <a key={l.label} href={l.href} className="block py-3 text-rose-700 font-medium border-b border-rose-50" onClick={() => setMobileOpen(false)}>{l.label}</a>
          ) : (
            <Link key={l.label} to={l.href} className="block py-3 text-rose-700 font-medium border-b border-rose-50" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <Button className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full">Join the Waitlist</Button>
        </div>
      )}
    </nav>
  )
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-cream to-rose-100" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/70 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200 text-rose-600 text-sm font-medium">
            <Sparkles className="w-4 h-4" /><span>365 Days of Transformation</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-rose-900 leading-tight">
            Become<span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">Her.</span>
          </h1>
          <p className="text-lg lg:text-xl text-rose-700/80 max-w-lg leading-relaxed">
            A 365-day accountability system designed exclusively for women. Build discipline, track habits, and transform your life — one day at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-rose-200 transition-all hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5">
              <Download className="w-5 h-5 mr-2" />Join the Waitlist
            </Button>
            <DemoVideoButton />
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-rose-200 to-rose-400 flex items-center justify-center text-xs font-medium text-rose-800">{String.fromCharCode(64+i)}</div>)}
            </div>
            <p className="text-sm text-rose-600"><strong>500+</strong> women already joined</p>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose-200/50 to-rose-400/30 rounded-[3rem] blur-2xl" />
            <img src="/app-mockup.png" alt="HER365 App" className="relative w-[280px] lg:w-[320px] drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────── TRUST BAR ───────────────── */
function TrustBar() {
  const stats = [
    { value: '365', label: 'Days of Growth' },
    { value: '13', label: 'Daily Habits' },
    { value: '12', label: 'Monthly Themes' },
    { value: '5', label: 'Life Categories' },
  ]
  return (
    <section className="relative bg-white border-y border-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(s => <div key={s.label} className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-rose-500">{s.value}</div>
            <div className="text-sm text-rose-600/70 mt-1 font-medium">{s.label}</div>
          </div>)}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── FEATURES ───────────────── */
function Features() {
  const features = [
    { icon: Target, title: 'Daily Priorities', desc: 'Set 3 priorities each day across Health, Beauty, Work, Social, and Environment categories. Focus on what truly matters.', color: 'from-orange-100 to-orange-50 text-orange-600' },
    { icon: CheckCircle2, title: '13 Daily Habits', desc: 'Track habits from hydration and skincare to learning and connecting. A complete system for whole-life improvement.', color: 'from-emerald-100 to-emerald-50 text-emerald-600' },
    { icon: Heart, title: 'Mental Reflections', desc: 'Daily check-ins on what went well, what needs work, and how you will improve. Mindfulness meets accountability.', color: 'from-rose-100 to-rose-50 text-rose-600' },
    { icon: TrendingUp, title: 'Streak Tracking', desc: 'Visual progress rings, streak counters, and a year-at-a-glance calendar. See your growth in real-time.', color: 'from-purple-100 to-purple-50 text-purple-600' },
    { icon: Mic, title: 'AI Voice Coach', desc: 'Your companion speaks to you. Ask Her anything with your voice and hear personalised guidance spoken back.', color: 'from-amber-100 to-amber-50 text-amber-600' },
    { icon: Users, title: 'Community Circles', desc: 'Join small accountability groups of women. Share progress, send encouragement, grow together. Coming soon.', color: 'from-sky-100 to-sky-50 text-sky-600' },
    { icon: BarChart3, title: 'Mood Tracking', desc: 'Log your mood daily and watch patterns emerge. Your AI companion adapts its tone to how you are feeling.', color: 'from-teal-100 to-teal-50 text-teal-600' },
    { icon: Lock, title: 'Private & Secure', desc: 'Your data syncs to the cloud with anonymous authentication. No email required. End-to-end privacy by design.', color: 'from-indigo-100 to-indigo-50 text-indigo-600' },
  ]
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-rose-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">Features</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-rose-900 mt-3">Everything You Need to<span className="text-rose-500"> Transform</span></h2>
          <p className="mt-4 text-rose-700/70 max-w-2xl mx-auto text-lg">A complete accountability system designed around how women actually live, work, and grow.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map(f => <Card key={f.title} className="p-6 border-rose-100 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-semibold text-rose-900 mb-2">{f.title}</h3>
            <p className="text-rose-700/70 text-sm leading-relaxed">{f.desc}</p>
          </Card>)}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── HOW IT WORKS ───────────────── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Commit to Your Journey', desc: 'Make 5 promises to yourself. Acknowledge what you are working toward. This is Day 1 of 365.', icon: Shield },
    { num: '02', title: 'Plan Your Day', desc: 'Each morning, set 3 priorities, check off your 13 habits, and reflect on your mental state. Takes 5 minutes.', icon: Calendar },
    { num: '03', title: 'Watch Yourself Grow', desc: 'Track your streak, celebrate milestones, and receive personalised encouragement from your AI companion.', icon: Zap },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">How It Works</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-rose-900 mt-3">Your 365-Day Journey in<span className="text-rose-500"> 3 Steps</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => <div key={s.num} className="relative">
            {i < 2 && <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-rose-200 to-transparent z-0" />}
            <div className="relative z-10 text-center">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <span className="font-display text-6xl font-bold text-rose-100 absolute -top-3 left-1/2 -translate-x-1/2 z-0">{s.num}</span>
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-200">
                  <s.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-rose-900 mb-3">{s.title}</h3>
              <p className="text-rose-700/70 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── THEMES ───────────────── */
function Themes() {
  const themes = [
    { name: 'Foundations & Self-Discovery', month: 'Month 1', color: 'bg-rose-100 text-rose-700' },
    { name: 'Building Discipline', month: 'Month 2', color: 'bg-orange-100 text-orange-700' },
    { name: 'Consistency Habits', month: 'Month 3', color: 'bg-amber-100 text-amber-700' },
    { name: 'Inner Strength', month: 'Month 4', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Relationships & Connection', month: 'Month 5', color: 'bg-green-100 text-green-700' },
    { name: 'Health & Vitality', month: 'Month 6', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Career & Purpose', month: 'Month 7', color: 'bg-teal-100 text-teal-700' },
    { name: 'Creativity & Expression', month: 'Month 8', color: 'bg-sky-100 text-sky-700' },
    { name: 'Financial Wellness', month: 'Month 9', color: 'bg-blue-100 text-blue-700' },
    { name: 'Mindfulness & Peace', month: 'Month 10', color: 'bg-indigo-100 text-indigo-700' },
    { name: 'Leadership & Influence', month: 'Month 11', color: 'bg-purple-100 text-purple-700' },
    { name: 'Becoming Her', month: 'Month 12', color: 'bg-pink-100 text-pink-700' },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">12 Monthly Themes</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-rose-900 mt-3">A Year of<span className="text-rose-500"> Intentional Growth</span></h2>
          <p className="mt-4 text-rose-700/70 max-w-2xl mx-auto">Each month has a unique focus, daily guidance, and challenges designed to build you into the woman you want to become.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {themes.map(t => <div key={t.name} className="group p-5 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all duration-300 cursor-default">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${t.color} mb-3`}>{t.month}</span>
            <h4 className="font-display text-sm font-semibold text-rose-900 leading-snug">{t.name}</h4>
          </div>)}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── PRICING ───────────────── */
function Pricing() {
  const plans = [
    { name: 'Free Trial', price: '7 Days', period: 'Full Access', desc: 'Experience everything HER365 has to offer.', features: ['All 365 days unlocked', '13 daily habits', 'Daily AI messages', 'Progress tracking', 'Streak counter'], cta: 'Start Free Trial', highlighted: false },
    { name: 'Monthly', price: '£4.99', period: '/month', desc: 'Perfect for starting your transformation journey.', features: ['Everything in Free Trial', 'Cloud backup & sync', 'AI voice coach', 'Shareable progress cards', 'Cancel anytime'], cta: 'Get Started', highlighted: true },
    { name: 'Annual', price: '£35.99', period: '/year', desc: 'Best value. Commit to your full transformation.', features: ['Everything in Monthly', 'Save 40% vs monthly', 'Mood & cycle tracking', 'Priority support', 'Exclusive content packs'], cta: 'Save 40%', highlighted: false },
  ]
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">Pricing</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-rose-900 mt-3">Invest in<span className="text-rose-500"> Yourself</span></h2>
          <p className="mt-4 text-rose-700/70 max-w-2xl mx-auto">Less than a coffee per week. The best investment you will ever make.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(p => <Card key={p.name} className={`relative p-6 flex flex-col ${p.highlighted ? 'border-rose-400 shadow-xl shadow-rose-100 scale-105 z-10 bg-gradient-to-b from-white to-rose-50/30' : 'border-rose-100 bg-white'}`}>
            {p.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full">Most Popular</div>}
            <div className="text-center mb-6">
              <h3 className="font-display text-lg font-semibold text-rose-900">{p.name}</h3>
              <div className="mt-3 flex items-baseline justify-center">
                <span className="font-display text-4xl font-bold text-rose-500">{p.price.includes('.') ? p.price : p.price}</span>
                <span className="text-rose-600/60 text-sm ml-1">{p.period}</span>
              </div>
              <p className="text-rose-700/60 text-sm mt-2">{p.desc}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map(f => <li key={f} className="flex items-start gap-3 text-sm text-rose-700/80">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />{f}
              </li>)}
            </ul>
            <Button className={`w-full rounded-full py-5 ${p.highlighted ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'bg-rose-100 hover:bg-rose-200 text-rose-700'}`}>{p.cta}</Button>
          </Card>)}
        </div>
        <p className="text-center text-rose-600/60 text-sm mt-8">Prices in GBP. Cancel anytime. No hidden fees.</p>
      </div>
    </section>
  )
}

/* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() {
  const testimonials = [
    { quote: 'Finally, a self-improvement app that actually gets it. The 13 habits are exactly what I needed.', author: 'Sarah M.', role: 'Day 124 of 365' },
    { quote: 'The AI companion messages every morning keep me motivated. It feels like having a personal coach.', author: 'Jessica T.', role: 'Day 67 of 365' },
    { quote: 'I have tried so many habit apps. This is the first one designed for how women actually live.', author: 'Amara K.', role: 'Day 203 of 365' },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-rose-900 mt-3">Women Who Are<span className="text-rose-500"> Becoming Her</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => <Card key={t.author} className="p-6 border-rose-100 bg-white hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-rose-400 text-rose-400" />)}</div>
            <p className="text-rose-800/80 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
            <Separator className="bg-rose-100 mb-4" />
            <div>
              <p className="font-semibold text-rose-900 text-sm">{t.author}</p>
              <p className="text-rose-500 text-xs">{t.role}</p>
            </div>
          </Card>)}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── FAQ ───────────────── */
function FAQ() {
  const faqs = [
    { q: 'Is HER365 really only for women?', a: 'HER365 is designed around how women live, work, and grow. The 13 daily habits, cycle awareness, and AI companion tone are all crafted specifically for women. However, anyone who connects with our approach is welcome.' },
    { q: 'Do I need an email to sign up?', a: 'No. HER365 uses anonymous authentication. You can start your journey immediately with zero friction. Optional email sign-in is available if you want cloud backup across devices.' },
    { q: 'What happens after the 7-day free trial?', a: 'After 7 days, you can choose to subscribe for £4.99/month or £35.99/year. Your progress is saved either way — you can always come back where you left off.' },
    { q: 'Is my data private?', a: 'Absolutely. We use anonymous authentication by default. Your data syncs to Supabase with Row Level Security — only you can access it. We never sell or share your data. See our Privacy Policy for full details.' },
    { q: 'Can I use the voice coach offline?', a: 'Voice messages are cached locally for 7 days. After that, you need an internet connection to generate new voice messages. Morning AI text messages work offline using cached templates.' },
    { q: 'What if I miss a day?', a: 'Your streak resets, but your journey continues. The AI companion will encourage you to get back on track. You can also restart your journey anytime in Settings.' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="font-display text-4xl font-bold text-rose-900 mt-3">Questions?<span className="text-rose-500"> Answered.</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => <Card key={i} className="p-6 border-rose-100 hover:border-rose-200 transition-colors">
            <h4 className="font-display text-lg font-semibold text-rose-900 mb-2">{f.q}</h4>
            <p className="text-rose-700/70 text-sm leading-relaxed">{f.a}</p>
          </Card>)}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── CTA ───────────────── */
function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-700" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Your 365-Day Journey Starts Today</h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Join 500+ women who have already committed to becoming the best version of themselves. Day 1 begins now.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 rounded-full px-10 py-6 text-base font-semibold shadow-lg">
            <Download className="w-5 h-5 mr-2" />Download on App Store
          </Button>
          <Button size="lg" className="bg-white/10 border border-white/50 text-white hover:bg-white/20 rounded-full px-10 py-6 text-base">
            <Smartphone className="w-5 h-5 mr-2" />Join TestFlight Beta
          </Button>
        </div>
        <p className="text-white/50 text-sm">7-day free trial &middot; No credit card required &middot; Cancel anytime</p>
      </div>
    </section>
  )
}

/* ───────────────── WAITLIST ───────────────── */
function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (email) setSubmitted(true) }
  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        <Mail className="w-10 h-10 text-rose-400 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-rose-900 mb-2">Join the Waitlist</h3>
        <p className="text-rose-700/60 text-sm mb-6">Be the first to know when HER365 launches. Get early access and exclusive content.</p>
        {submitted ? <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
          <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
          <p className="text-emerald-700 font-medium text-sm">You are on the list! We will be in touch soon.</p>
        </div> : <form onSubmit={handleSubmit} className="flex gap-3">
          <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 rounded-full border-rose-200 bg-rose-50/50 px-5 py-5 text-sm focus:ring-rose-400" />
          <Button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6">Join</Button>
        </form>}
      </div>
    </section>
  )
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="bg-rose-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="HER365" className="w-9 h-9 rounded-xl" />
              <span className="font-display text-xl font-semibold">HER365</span>
            </div>
            <p className="text-rose-300/80 text-sm leading-relaxed max-w-sm">A 365-day accountability system designed exclusively for women. Built with love.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-rose-200">Product</h4>
            <ul className="space-y-3 text-sm text-rose-300/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-rose-200">Company</h4>
            <ul className="space-y-3 text-sm text-rose-300/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-10 bg-rose-800" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-rose-400/60 text-xs">&copy; 2026 HER365. A TabSphere Ltd Product. London, UK.</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/her365app" target="_blank" rel="noopener noreferrer" className="text-rose-400/60 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@her365app" target="_blank" rel="noopener noreferrer" className="text-rose-400/60 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="mailto:info@tabsphere.co.uk" className="text-rose-400/60 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Demo Video Button ─── */
function DemoVideoButton() {
  const [videoUrl, setVideoUrl] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('her365_site_settings')
    if (data) {
      try {
        const settings = JSON.parse(data)
        const video = settings.find((s: any) => s.key === 'demo_video_url')
        if (video) setVideoUrl(video.value)
      } catch {}
    }
  }, [])

  if (!videoUrl) {
    return (
      <Button size="lg" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 rounded-full px-8 py-6 text-base" disabled>
        Demo Coming Soon <ChevronRight className="w-5 h-5 ml-1" />
      </Button>
    )
  }

  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <Button size="lg" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 rounded-full px-8 py-6 text-base">
        Watch the Demo <ChevronRight className="w-5 h-5 ml-1" />
      </Button>
    </a>
  )
}

/* ───────────────── MAIN PAGE ───────────────── */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Themes />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Waitlist />
      <Footer />
    </div>
  )
}
