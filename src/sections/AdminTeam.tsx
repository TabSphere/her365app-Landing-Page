import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Users, Plus, Trash2, Edit3, X, Check,
  Upload, User
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo_url: string
  display_order: number
}

const STORAGE_KEY = 'her365_team_members'

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export default function AdminTeam() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [editing, setEditing] = useState<TeamMember | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const emptyMember: TeamMember = {
    id: '',
    name: '',
    role: '',
    bio: '',
    photo_url: '',
    display_order: 0,
  }

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      try { setMembers(JSON.parse(data)) } catch {}
    }
  }, [])

  const saveMembers = (updated: TeamMember[]) => {
    setMembers(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    updateLastModified()
  }

  const updateLastModified = () => {
    const settings = JSON.parse(localStorage.getItem('her365_site_settings') || '[]')
    const filtered = settings.filter((s: any) => s.key !== 'last_updated')
    filtered.push({ key: 'last_updated', value: new Date().toLocaleString() })
    localStorage.setItem('her365_site_settings', JSON.stringify(filtered))
  }

  const handleAdd = (member: TeamMember) => {
    const newMember = { ...member, id: generateId(), display_order: members.length }
    const updated = [...members, newMember]
    saveMembers(updated)
    setIsAdding(false)
    setPreviewImage(null)
  }

  const handleUpdate = (member: TeamMember) => {
    const updated = members.map(m => m.id === member.id ? member : m)
    saveMembers(updated)
    setEditing(null)
    setPreviewImage(null)
  }

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to remove this team member?')) return
    const updated = members.filter(m => m.id !== id)
    saveMembers(updated)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const url = reader.result as string
      callback(url)
      setPreviewImage(url)
    }
    reader.readAsDataURL(file)
  }

  const moveUp = (index: number) => {
    if (index === 0) return
    const updated = [...members]
    const temp = updated[index]
    updated[index] = updated[index - 1]
    updated[index - 1] = temp
    updated.forEach((m, i) => m.display_order = i)
    saveMembers(updated)
  }

  const moveDown = (index: number) => {
    if (index === members.length - 1) return
    const updated = [...members]
    const temp = updated[index]
    updated[index] = updated[index + 1]
    updated[index + 1] = temp
    updated.forEach((m, i) => m.display_order = i)
    saveMembers(updated)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-rose-900">Team Members</h1>
          <p className="text-rose-600/60 text-sm mt-1">
            Manage team members shown on the About page. Drag to reorder.
          </p>
        </div>
        <Button
          onClick={() => { setIsAdding(true); setEditing(null); setPreviewImage(null) }}
          className="bg-rose-500 hover:bg-rose-600 text-white rounded-full"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editing) && (
        <Card className="p-6 border-rose-200 bg-gradient-to-br from-rose-50/50 to-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-semibold text-rose-900">
              {editing ? 'Edit Member' : 'Add New Member'}
            </h2>
            <button
              onClick={() => { setIsAdding(false); setEditing(null); setPreviewImage(null) }}
              className="text-rose-400 hover:text-rose-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <MemberForm
            member={editing || emptyMember}
            previewImage={previewImage}
            onImageUpload={handleImageUpload}
            onSubmit={editing ? handleUpdate : handleAdd}
          />
        </Card>
      )}

      {/* Members List */}
      <div className="space-y-3">
        {members.length === 0 && (
          <Card className="p-12 text-center border-rose-100 border-dashed">
            <Users className="w-12 h-12 text-rose-200 mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-rose-900 mb-2">No team members yet</h3>
            <p className="text-rose-600/60 text-sm mb-4">Add your first team member to display on the About page.</p>
            <Button
              onClick={() => { setIsAdding(true); setEditing(null) }}
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-full"
            >
              <Plus className="w-4 h-4 mr-2" /> Add First Member
            </Button>
          </Card>
        )}

        {members.map((member, index) => (
          <Card key={member.id} className="p-4 border-rose-100 hover:border-rose-200 transition-all">
            <div className="flex items-center gap-4">
              {/* Drag handle */}
              <div className="flex flex-col gap-1">
                <button onClick={() => moveUp(index)} className="text-rose-300 hover:text-rose-500" disabled={index === 0}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor"><path d="M6 0L12 8H0L6 0Z"/></svg>
                </button>
                <button onClick={() => moveDown(index)} className="text-rose-300 hover:text-rose-500" disabled={index === members.length - 1}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor"><path d="M6 8L0 0H12L6 8Z"/></svg>
                </button>
              </div>

              {/* Photo */}
              {member.photo_url ? (
                <img src={member.photo_url} alt={member.name} className="w-14 h-14 rounded-xl object-cover" />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
                  <User className="w-6 h-6 text-rose-500" />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-rose-900 truncate">{member.name}</h3>
                <p className="text-rose-500 text-sm">{member.role}</p>
                <p className="text-rose-600/50 text-xs truncate mt-0.5">{member.bio}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setEditing(member); setIsAdding(false); setPreviewImage(member.photo_url) }}
                  className="p-2 rounded-lg text-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="p-2 rounded-lg text-rose-300 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Preview Note */}
      {members.length > 0 && (
        <p className="text-rose-400/60 text-sm text-center">
          Changes are saved automatically and will appear on the About page immediately.
        </p>
      )}
    </div>
  )
}

/* ──────────────── Member Form ──────────────── */
function MemberForm({
  member,
  previewImage,
  onImageUpload,
  onSubmit,
}: {
  member: TeamMember
  previewImage: string | null
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => void
  onSubmit: (m: TeamMember) => void
}) {
  const [form, setForm] = useState({ ...member })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.role.trim()) return
    onSubmit({ ...form, photo_url: previewImage || form.photo_url })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-rose-800 mb-1.5 block">Full Name *</label>
          <Input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="e.g., Sarah Johnson"
            required
            className="border-rose-200 bg-white"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-rose-800 mb-1.5 block">Role / Title *</label>
          <Input
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
            placeholder="e.g., Founder & CEO"
            required
            className="border-rose-200 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-rose-800 mb-1.5 block">Bio</label>
        <textarea
          value={form.bio}
          onChange={e => setForm({ ...form, bio: e.target.value })}
          placeholder="Short bio about this team member..."
          rows={3}
          className="w-full px-3 py-2 border border-rose-200 rounded-lg bg-white text-sm text-rose-900 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400/30 resize-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-rose-800 mb-1.5 block">Photo</label>
        <div className="flex items-center gap-4">
          {(previewImage || form.photo_url) && (
            <img
              src={previewImage || form.photo_url}
              alt="Preview"
              className="w-16 h-16 rounded-xl object-cover border border-rose-200"
            />
          )}
          <label className="flex items-center gap-2 px-4 py-2.5 bg-rose-50 border border-rose-200 rounded-full text-sm text-rose-700 hover:bg-rose-100 cursor-pointer transition-all">
            <Upload className="w-4 h-4" />
            {previewImage || form.photo_url ? 'Change Photo' : 'Upload Photo'}
            <input
              type="file"
              accept="image/*"
              onChange={e => onImageUpload(e, url => setForm({ ...form, photo_url: url }))}
              className="hidden"
            />
          </label>
          {(previewImage || form.photo_url) && (
            <button
              type="button"
              onClick={() => { setForm({ ...form, photo_url: '' }); }}
              className="text-rose-400 hover:text-red-500 text-sm"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6">
          <Check className="w-4 h-4 mr-2" /> {member.id ? 'Save Changes' : 'Add Member'}
        </Button>
      </div>
    </form>
  )
}
