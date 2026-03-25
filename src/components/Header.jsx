import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const isActive = (path) => loc.pathname === path ? 'active' : ''

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="https://qm-guru.de" className="logo">
          QM-Guru<span className="logo-dot">.</span>de
        </a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menü">
          <span /><span /><span />
        </button>
        <nav className={`header-nav ${open ? 'open' : ''}`}>
          <Link to="/bafa-berater-test" className={isActive('/bafa-berater-test')} onClick={() => setOpen(false)}>Selbsttest</Link>
          <Link to="/qm-system-berater" className={isActive('/qm-system-berater')} onClick={() => setOpen(false)}>QM-System</Link>
          <Link to="/foerderberatung-bafa" className={isActive('/foerderberatung-bafa')} onClick={() => setOpen(false)}>Förderberatung</Link>
          <a href="https://qm-guru.de/zulassung-bafa-berater/" onClick={() => setOpen(false)}>Hauptseite</a>
          <a href="https://qm-guru-angebote.netlify.app/" className="header-cta" onClick={() => setOpen(false)}>Angebot anfordern</a>
        </nav>
      </div>
    </header>
  )
}
