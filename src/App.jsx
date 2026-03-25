import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SelbstTest from './pages/SelbstTest'
import QMSystem from './pages/QMSystem'
import Foerderberatung from './pages/Foerderberatung'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/bafa-berater-test" element={<SelbstTest />} />
        <Route path="/qm-system-berater" element={<QMSystem />} />
        <Route path="/foerderberatung-bafa" element={<Foerderberatung />} />
        <Route path="*" element={<Navigate to="/bafa-berater-test" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
