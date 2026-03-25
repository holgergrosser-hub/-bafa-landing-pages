import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-brand">QM-Guru.de</div>
          <p>Holger Grosser – QM-Experte seit 1994<br />
          Simonstraße 14 · 90763 Fürth<br />
          Tel. 0911-49522541</p>
        </div>
        <div className="footer-col">
          <h4>BAFA-Berater</h4>
          <a href="https://qm-guru.de/zulassung-bafa-berater/">BAFA-Zulassung</a>
          <a href="/">Selbsttest</a>
          <a href="/qm-system-berater">QM-System</a>
          <a href="/foerderberatung-bafa">Förderberatung</a>
        </div>
        <div className="footer-col">
          <h4>Kontakt</h4>
          <a href="mailto:holger.grosser@qm-guru.de">E-Mail schreiben</a>
          <a href="tel:+4991149522541">0911-49522541</a>
          <a href="https://calendly.com/grosser-qmguru/ihr-iso-9001-zertifikat-klon">Termin buchen</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} QM-Dienstleistungen Holger Grosser</span>
        <span>
          <a href="https://qm-guru.de/impressum/">Impressum</a> · <a href="https://qm-guru.de/sonstiges/datenschutz/">Datenschutz</a>
        </span>
      </div>
    </footer>
  )
}
