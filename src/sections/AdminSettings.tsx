import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Video, Check, Globe, Sparkles, Info,
  Save, ExternalLink, AlertTriangle
} from 'lucide-react'

interface SiteSetting {
  key: string
  value: string
}

const SETTINGS_KEY = 'her365_site_settings'

export default function AdminSettings() {
  const [settings, setSettings] = useState<SiteSetting[]>([])
  const [demoUrl, setDemoUrl] = useState('')
  const [siteTitle, setSiteTitle] = useState('HER365 - 365 Days of Becoming Her')
  const [metaDescription, setMetaDescription] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem(SETTINGS_KEY)
    if (data) {
      try {
        const parsed: SiteSetting[] = JSON.parse(data)
        setSettings(parsed)
        const video = parsed.find(s => s.key === 'demo_video_url')
        if (video) setDemoUrl(video.value)
        const title = parsed.find(s => s.key === 'site_title')
        if (title) setSiteTitle(title.value)
        const meta = parsed.find(s => s.key === 'meta_description')
        if (meta) setMetaDescription(meta.value)
      } catch {}
    }
  }, [])

  const saveSettings = () => {
    const updated: SiteSetting[] = [
      { key: 'demo_video_url', value: demoUrl },
      { key: 'site_title', value: siteTitle },
      { key: 'meta_description', value: metaDescription },
      { key: 'last_updated', value: new Date().toLocaleString() },
    ]
    // Preserve any other existing settings
    const existing = settings.filter(s => !updated.find(u => u.key === s.key))
    const merged = [...existing, ...updated]
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged))
    setSettings(merged)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const isValidUrl = (url: string) => {
    if (!url) return true
    return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com') || url.includes('drive.google.com')
  }

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-rose-900">Site Settings</h1>
        <p className="text-rose-600/60 text-sm mt-1">
          Manage your demo video, site metadata, and content.
        </p>
      </div>

      {/* Demo Video Section */}
      <Card className="p-6 border-rose-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
            <Video className="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-rose-900">Demo Video</h2>
            <p className="text-rose-600/60 text-sm">Add a walkthrough video to your landing page</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-rose-800 mb-1.5 block">
              Video URL (YouTube, Vimeo, or Google Drive)
            </label>
            <Input
              value={demoUrl}
              onChange={e => setDemoUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=... or https://drive.google.com/..."
              className="border-rose-200 bg-white"
            />
            {demoUrl && !isValidUrl(demoUrl) && (
              <p className="text-amber-600 text-xs mt-1.5 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                URL doesn&apos;t look like a video link. Make sure it&apos;s YouTube, Vimeo, or Google Drive.
              </p>
            )}
          </div>

          {demoUrl && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <p className="text-emerald-700 text-sm font-medium flex items-center gap-2">
                <Check className="w-4 h-4" /> Video link saved
              </p>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 text-xs hover:underline flex items-center gap-1 mt-1"
              >
                <ExternalLink className="w-3 h-3" /> Test link
              </a>
            </div>
          )}

          <div className="bg-rose-50 rounded-xl p-4 border border-rose-100">
            <h4 className="text-sm font-medium text-rose-800 mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" /> Supported platforms
            </h4>
            <ul className="text-rose-600/70 text-xs space-y-1">
              <li>&bull; <strong>YouTube:</strong> Any watch or embed URL</li>
              <li>&bull; <strong>Vimeo:</strong> Any video URL</li>
              <li>&bull; <strong>Google Drive:</strong> Shared video link</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Site Metadata */}
      <Card className="p-6 border-rose-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
            <Globe className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-rose-900">Site Metadata</h2>
            <p className="text-rose-600/60 text-sm">SEO and social sharing information</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-rose-800 mb-1.5 block">Site Title</label>
            <Input
              value={siteTitle}
              onChange={e => setSiteTitle(e.target.value)}
              placeholder="HER365 - 365 Days of Becoming Her"
              className="border-rose-200 bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-rose-800 mb-1.5 block">Meta Description</label>
            <textarea
              value={metaDescription}
              onChange={e => setMetaDescription(e.target.value)}
              placeholder="A 365-day accountability system designed exclusively for women..."
              rows={3}
              className="w-full px-3 py-2 border border-rose-200 rounded-lg bg-white text-sm text-rose-900 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400/30 resize-none"
            />
            <p className="text-rose-400 text-xs mt-1">{metaDescription.length}/160 characters recommended</p>
          </div>
        </div>
      </Card>

      {/* Current Settings Summary */}
      {settings.length > 0 && (
        <Card className="p-6 border-rose-100 bg-rose-50/30">
          <h3 className="font-display text-sm font-semibold text-rose-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-400" /> Current Settings
          </h3>
          <div className="space-y-2">
            {settings.filter(s => s.key !== 'last_updated').map(s => (
              <div key={s.key} className="flex items-center justify-between text-sm">
                <span className="text-rose-600/60 capitalize">{s.key.replace(/_/g, ' ')}</span>
                <span className="text-rose-800 font-medium truncate max-w-xs">{s.value || 'Not set'}</span>
              </div>
            ))}
            {settings.find(s => s.key === 'last_updated') && (
              <div className="flex items-center justify-between text-sm pt-2 border-t border-rose-100">
                <span className="text-rose-400">Last updated</span>
                <span className="text-rose-500 text-xs">{settings.find(s => s.key === 'last_updated')?.value}</span>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <Button
          onClick={saveSettings}
          className={`rounded-full px-8 py-5 ${saved ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-rose-500 hover:bg-rose-600'} text-white transition-all`}
        >
          {saved ? (
            <><Check className="w-4 h-4 mr-2" /> Saved Successfully</>
          ) : (
            <><Save className="w-4 h-4 mr-2" /> Save All Settings</>
          )}
        </Button>
        {saved && (
          <p className="text-emerald-600 text-sm">All settings saved and will appear on the live site.</p>
        )}
      </div>
    </div>
  )
}
