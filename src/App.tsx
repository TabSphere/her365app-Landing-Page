import { Routes, Route } from 'react-router'
import HomePage from './sections/HomePage'
import PrivacyPage from './sections/PrivacyPage'
import TermsPage from './sections/TermsPage'
import AboutPage from './sections/AboutPage'
import AdminPage from './sections/AdminPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  )
}
