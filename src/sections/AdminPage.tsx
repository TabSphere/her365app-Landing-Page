import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import AdminDashboard from './AdminDashboard'
import AdminTeam from './AdminTeam'
import AdminSettings from './AdminSettings'
import {
  LayoutDashboard, Users, Settings as SettingsIcon,
  Lock, LogOut, Eye, EyeOff
} from 'lucide-react'

const ADMIN_PASSWORD = 'her365admin'

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem('her365_admin_auth', 'true')
        onLogin()
      } else {
        setError('Incorrect password. Please try again.')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-cream to-rose-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="HER365" className="w-16 h-16 mx-auto rounded-2xl mb-4" />
          <h1 className="font-display text-3xl font-bold text-rose-900">HER365</h1>
          <p className="text-rose-600/60 mt-1">Admin Panel</p>
        </div>
        <Card className="p-8 border-rose-100 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-rose-900">Authentication Required</h2>
              <p className="text-rose-600/60 text-sm">Enter your admin password to continue</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter admin password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError('') }}
                className="pr-10 border-rose-200 bg-rose-50/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-400 hover:text-rose-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-5"
            >
              {loading ? 'Verifying...' : 'Access Dashboard'}
            </Button>
          </form>
        </Card>
        <p className="text-center text-rose-400/40 text-xs mt-6">
          HER365 Admin &middot; TabSphere Ltd &middot; Secure Access
        </p>
      </div>
    </div>
  )
}

function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const location = useLocation()
  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/team', label: 'Team Members', icon: Users },
    { path: '/admin/settings', label: 'Site Settings', icon: SettingsIcon },
  ]
  return (
    <aside className="w-64 bg-white border-r border-rose-100 min-h-screen flex flex-col">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="HER365" className="w-10 h-10 rounded-xl" />
          <div>
            <span className="font-display text-lg font-semibold text-rose-900">HER365</span>
            <p className="text-[10px] text-rose-400 uppercase tracking-wider">Admin</p>
          </div>
        </Link>
      </div>
      <Separator className="bg-rose-100" />
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-rose-50 text-rose-700 border border-rose-100'
                  : 'text-rose-600/60 hover:bg-rose-50/50 hover:text-rose-700'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-rose-100">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-all w-full"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>
    </aside>
  )
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('her365_admin_auth')
    if (auth === 'true') setIsAuthenticated(true)
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('her365_admin_auth')
    setIsAuthenticated(false)
    navigate('/admin')
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-rose-50/30 font-body flex">
      <AdminSidebar onLogout={handleLogout} />
      <main className="flex-1 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/team" element={<AdminTeam />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </main>
    </div>
  )
}
