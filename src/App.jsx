import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SelbstTest from './pages/SelbstTest'
import QMSystem from './pages/QMSystem'
import Foerderberatung from './pages/Foerderberatung'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SelbstTest />} />
        <Route path="/qm-system-berater" element={<QMSystem />} />
        <Route path="/foerderberatung-bafa" element={<Foerderberatung />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
