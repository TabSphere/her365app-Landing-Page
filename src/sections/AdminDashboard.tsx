import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Users, Eye, Sparkles, ArrowRight,
  Globe, Video, Palette
} from 'lucide-react'
import { Link } from 'react-router'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo_url: string
  display_order: number
}

interface SiteSetting {
  key: string
  value: string
}

export default function AdminDashboard() {
  const [teamCount, setTeamCount] = useState(0)
  const [settingsCount, setSettingsCount] = useState(0)
  const [recentMembers, setRecentMembers] = useState<TeamMember[]>([])
  const [videoUrl, setVideoUrl] = useState('')
  const [lastUpdated, setLastUpdated] = useState<string>('Never')

  useEffect(() => {
    // Load from localStorage (data synced from admin edits)
    const teamData = localStorage.getItem('her365_team_members')
    const settingsData = localStorage.getItem('her365_site_settings')

    if (teamData) {
      const members: TeamMember[] = JSON.parse(teamData)
      setTeamCount(members.length)
      setRecentMembers(members.slice(0, 3))
    }

    if (settingsData) {
      const settings: SiteSetting[] = JSON.parse(settingsData)
      setSettingsCount(settings.length)
      const videoSetting = settings.find(s => s.key === 'demo_video_url')
      if (videoSetting) setVideoUrl(videoSetting.value)
      const updated = settings.find(s => s.key === 'last_updated')
      if (updated) setLastUpdated(updated.value)
    }
  }, [])

  const statCards = [
    {
      label: 'Team Members',
      value: teamCount.toString(),
      icon: Users,
      color: 'from-rose-400 to-rose-500',
      link: '/admin/team',
    },
    {
      label: 'Site Settings',
      value: settingsCount.toString(),
      icon: Palette,
      color: 'from-amber-400 to-amber-500',
      link: '/admin/settings',
    },
    {
      label: 'Demo Video',
      value: videoUrl ? 'Active' : 'None',
      icon: Video,
      color: 'from-emerald-400 to-emerald-500',
      link: '/admin/settings',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-rose-900">Dashboard</h1>
          <p className="text-rose-600/60 text-sm mt-1">
            Manage your HER365 landing page content. Last updated: {lastUpdated}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-700 text-sm font-medium">System Online</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {statCards.map(card => (
          <Link key={card.label} to={card.link}>
            <Card className="p-6 border-rose-100 hover:shadow-md hover:border-rose-200 transition-all cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-rose-300 group-hover:text-rose-500 transition-colors" />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-rose-900">{card.value}</p>
                <p className="text-rose-600/60 text-sm">{card.label}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-rose-100">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-rose-500" />
            <h2 className="font-display text-lg font-semibold text-rose-900">Team Members</h2>
          </div>
          <p className="text-rose-600/60 text-sm mb-4">
            Add, edit, or remove team members displayed on the About page.
          </p>
          {recentMembers.length > 0 && (
            <div className="space-y-2 mb-4">
              {recentMembers.map(m => (
                <div key={m.id} className="flex items-center gap-3 p-2 rounded-lg bg-rose-50/50">
                  {m.photo_url ? (
                    <img src={m.photo_url} alt={m.name} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-xs font-bold text-rose-700">
                      {m.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-rose-900">{m.name}</p>
                    <p className="text-xs text-rose-500">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <Link to="/admin/team">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full">
              Manage Team <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </Card>

        <Card className="p-6 border-rose-100">
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-5 h-5 text-rose-500" />
            <h2 className="font-display text-lg font-semibold text-rose-900">Demo Video</h2>
          </div>
          <p className="text-rose-600/60 text-sm mb-4">
            Add or update the demo video link shown on the landing page.
          </p>
          {videoUrl ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl mb-4">
              <p className="text-emerald-700 text-sm font-medium">Video Active</p>
              <p className="text-emerald-600/60 text-xs truncate">{videoUrl}</p>
            </div>
          ) : (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl mb-4">
              <p className="text-amber-700 text-sm font-medium">No video set</p>
              <p className="text-amber-600/60 text-xs">Add a demo video URL in settings</p>
            </div>
          )}
          <Link to="/admin/settings">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full">
              Update Video <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </Card>
      </div>

      {/* Preview Link */}
      <Card className="p-6 border-rose-100 bg-gradient-to-r from-rose-50 to-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-rose-100 flex items-center justify-center">
              <Globe className="w-6 h-6 text-rose-500" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-rose-900">Live Site</h3>
              <p className="text-rose-600/60 text-sm">Your landing page is live and serving visitors</p>
            </div>
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 rounded-full">
              <Eye className="w-4 h-4 mr-2" /> View Site
            </Button>
          </a>
        </div>
      </Card>

      {/* Tips */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: Users, title: 'Add your team', desc: 'Showcase your founders and key team members on the About page.' },
          { icon: Video, title: 'Upload a demo', desc: 'A walkthrough video increases conversions by up to 40%.' },
          { icon: Sparkles, title: 'Keep it fresh', desc: 'Update content regularly to keep visitors engaged.' },
        ].map(tip => (
          <div key={tip.title} className="p-4 rounded-xl bg-white border border-rose-100">
            <tip.icon className="w-5 h-5 text-rose-400 mb-2" />
            <p className="font-medium text-rose-900 text-sm">{tip.title}</p>
            <p className="text-rose-600/60 text-xs mt-1">{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
