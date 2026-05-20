import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'
import { Mail, CheckCircle2, Sparkles, Loader2 } from 'lucide-react'

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrorMsg('Please enter your email address')
      setStatus('error')
      return
    }

    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      // Insert into Supabase waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.trim().toLowerCase(),
            source: 'landing-page',
            created_at: new Date().toISOString(),
          },
        ])

      if (error) {
        // If duplicate email, still show success
        if (error.code === '23505') {
          setStatus('success')
          return
        }
        throw error
      }

      setStatus('success')
    } catch (err: any) {
      console.error('Waitlist error:', err)
      // Show success even on error — don't block the user
      setStatus('success')
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset after animation
    setTimeout(() => {
      setStatus('idle')
      setEmail('')
      setErrorMsg('')
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-rose-50 border-rose-200 p-0 overflow-hidden gap-0">
        {/* Top decorative bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300" />

        <div className="p-6 pt-5">
          <DialogHeader className="space-y-3">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
              {status === 'success' ? (
                <CheckCircle2 className="w-7 h-7 text-rose-600" />
              ) : (
                <Mail className="w-7 h-7 text-rose-600" />
              )}
            </div>
            <DialogTitle className="text-center font-display text-2xl font-bold text-rose-900">
              {status === 'success' ? 'You\'re on the List!' : 'Join the Waitlist'}
            </DialogTitle>
          </DialogHeader>

          {status === 'success' ? (
            <div className="mt-6 text-center space-y-4">
              <p className="text-rose-700/80 leading-relaxed">
                Thank you! We\'ll send you an email when HER365 launches. You\'ll be among the first to start your 365-day journey.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-sm text-rose-700">
                <Sparkles className="w-4 h-4" />
                <span>Launching soon</span>
              </div>
              <Button
                onClick={handleClose}
                className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full"
              >
                Got it!
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <p className="text-center text-rose-700/70 text-sm">
                Be the first to know when we launch. Get early access and exclusive content.
              </p>

              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-rose-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') {
                        setStatus('idle')
                        setErrorMsg('')
                      }
                    }}
                    className={`pl-11 h-12 rounded-xl border-rose-200 bg-white/80 focus:border-rose-400 focus:ring-rose-200 text-rose-900 placeholder:text-rose-400 ${
                      status === 'error' ? 'border-red-400 focus:border-red-400' : ''
                    }`}
                    disabled={status === 'loading'}
                  />
                </div>
                {errorMsg && (
                  <p className="text-red-500 text-xs ml-1">{errorMsg}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-12 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-full font-medium text-base shadow-lg shadow-rose-200/50 transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join the Waitlist
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-rose-500/60">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
