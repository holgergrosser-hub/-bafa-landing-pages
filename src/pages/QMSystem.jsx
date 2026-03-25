import React from 'react'
import FAQ from '../components/FAQ'

const faqItems = [
  { q: 'Was genau ist ein QM-System für Berater?', a: 'Ein dokumentiertes Qualitätsmanagementsystem beschreibt Ihre Beratungsprozesse, Qualitätsstandards und Arbeitsabläufe. Die BAFA verlangt dies als Nachweis Ihrer professionellen Arbeitsweise. Es muss kein kompliziertes ISO-System sein – unser pragmatischer Ansatz reicht völlig aus.' },
  { q: 'Wie viel Aufwand habe ich als Kunde?', a: 'Minimal. Sie liefern Ihren Lebenslauf, Referenzprojekte und Informationen zu Ihrer Beratungstätigkeit. Den Rest machen wir. Zeitaufwand für Sie: ca. 2-3 Stunden insgesamt.' },
  { q: 'Muss das QM-System ISO 9001 zertifiziert sein?', a: 'Nein! Die BAFA verlangt ein dokumentiertes QM-System, aber keine ISO 9001 Zertifizierung. Unser System erfüllt alle BAFA-Anforderungen ohne den Aufwand und die Kosten einer formalen Zertifizierung.' },
  { q: 'Wie lange ist das QM-System gültig?', a: 'Die BAFA fordert eine Aktualisierung alle 2 Jahre. Der Aufwand dafür ist minimal (1-2 Stunden). Gerne unterstützen wir Sie auch bei der Aktualisierung.' },
  { q: 'Kann ich das QM-System auch für andere Zwecke nutzen?', a: 'Ja! Die QM-Dokumentation gehört Ihnen und kann dauerhaft für Ihr Unternehmen verwendet werden – auch über die BAFA-Zulassung hinaus, z.B. für Ausschreibungen oder Kundenpräsentationen.' },
]

export default function QMSystem() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot" />
              52% der Berater lassen es erstellen
            </div>
            <h1>QM-System für die <em>BAFA-Zulassung</em></h1>
            <p className="hero-sub">
              BAFA-konform und in 2-3 Wochen fertig.
            </p>
            <div className="hero-actions">
              <a href="https://qm-guru-angebote.netlify.app/" className="btn btn-primary btn-large btn-arrow">Angebot anfordern</a>
              <a href="/" className="btn btn-secondary btn-large">Erst Selbsttest machen</a>
            </div>
            <div className="trust-bar">
              <div className="trust-item"><span className="icon">✓</span> Festpreis 1.500€</div>
              <div className="trust-item"><span className="icon">✓</span> Zahlung nach BAFA-Zulassung</div>
              <div className="trust-item"><span className="icon">✓</span> Ihr erstes Kundenprojekt begleiten wir</div>
            </div>
          </div>
          <div className="hero-right">
            <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:'2rem',boxShadow:'var(--shadow-lg)',border:'1px solid var(--border)'}}>
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <div style={{fontSize:'2.5rem',marginBottom:'.5rem'}}>📊</div>
                <p style={{fontSize:'.85rem',color:'var(--text-muted)',fontWeight:600}}>Warum 52% erstellen lassen:</p>
              </div>
              {[
                {icon:'⏱️',text:'Zeitersparnis: 2-3 Wochen statt Monate'},
                {icon:'🎯',text:'Garantiert BAFA-konform'},
                {icon:'📝',text:'Individuell auf Sie zugeschnitten'},
                {icon:'🤝',text:'Persönliche Betreuung inklusive'},
                {icon:'🔒',text:'Zahlung erst nach Zulassung'},
              ].map((item,i) => (
                <div key={i} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.6rem .875rem',borderBottom: i < 5 ? '1px solid var(--border)' : 'none',fontSize:'.9rem'}}>
                  <span>{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-banner">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-number">1.500€</div><div className="stat-label">Festpreis zzgl. MwSt.</div></div>
          <div className="stat-item"><div className="stat-number">2-3</div><div className="stat-label">Wochen bis fertig</div></div>
          <div className="stat-item"><div className="stat-number">100%</div><div className="stat-label">Erfolgsquote</div></div>
        </div>
      </div>

      {/* WAS IST ENTHALTEN */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Leistungsumfang</div>
            <h2 className="section-title">Alles, was die BAFA verlangt – und mehr</h2>
            <p className="section-sub">Sie erhalten ein Komplettpaket, individuell auf Ihre Beratungstätigkeit zugeschnitten.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon card-icon-blue">📘</div>
              <h3>QM-Handbuch</h3>
              <p>Ihr vollständiges Qualitätsmanagement-Handbuch mit allen BAFA-relevanten Kapiteln – schlank, pragmatisch, sofort einsetzbar.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-green">⚙️</div>
              <h3>Prozessbeschreibungen</h3>
              <p>Dokumentation Ihrer Beratungsprozesse: von der Kundenakquise über die Durchführung bis zur Nachbereitung.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-yellow">📋</div>
              <h3>Musterbericht</h3>
              <p>Eine professionelle Vorlage für Ihre BAFA-Beratungsberichte – direkt für Ihre Projekte einsetzbar.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-blue">📄</div>
              <h3>Alle Nachweise</h3>
              <p>Organigramm, Qualitätspolitik, Stellenbeschreibungen und alle weiteren BAFA-relevanten Dokumente.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-green">📖</div>
              <h3>Kundenanleitung</h3>
              <p>Eine fertige Anleitung für Ihre Kunden zur Beantragung der BAFA-Förderung – Ihr Verkaufsargument.</p>
            </div>
            <div className="card" style={{border:'2px solid var(--accent)',background:'var(--green-bg)'}}>
              <div className="card-icon card-icon-green">🎁</div>
              <h3>Erstes Projekt inklusive</h3>
              <p>Nach der Zulassung begleiten wir Sie gratis durch Ihr erstes Förderprojekt – Antrag, Bericht, Abrechnung. Weil uns Ihr Erfolg wichtig ist, nicht nur das Zertifikat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS HIGHLIGHT */}
      <section className="section">
        <div className="section-inner">
          <div className="bonus-banner">
            <div className="bonus-icon">🎁</div>
            <div className="bonus-content">
              <div className="bonus-overline">Nur bei QM-Guru</div>
              <h2 className="bonus-title">Ihr erstes BAFA-Projekt? Geht auf uns.</h2>
              <p className="bonus-text">
                Wir lassen Sie nach der Zulassung nicht allein. Wir begleiten Sie kostenlos 
                durch Ihr komplettes erstes Förderprojekt – vom Antrag Ihres Kunden bis zum 
                fertigen Beratungsbericht. Damit aus Ihrer Zulassung auch Umsatz wird.
              </p>
              <div className="bonus-includes">
                <div className="bonus-item">
                  <span className="bonus-check">✓</span>
                  <div><strong>Antragsbegleitung</strong><br /><span>Wir helfen Ihrem Kunden bei der Förderantragsstellung</span></div>
                </div>
                <div className="bonus-item">
                  <span className="bonus-check">✓</span>
                  <div><strong>Beratungsbericht</strong><br /><span>Gemeinsame Erstellung Ihres ersten BAFA-Berichts</span></div>
                </div>
                <div className="bonus-item">
                  <span className="bonus-check">✓</span>
                  <div><strong>Verwendungsnachweis</strong><br /><span>Unterstützung bei der Abrechnung mit der BAFA</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Preis</div>
            <h2 className="section-title">Transparent und fair</h2>
          </div>
          <div className="pricing-card">
            <div className="pricing-tag">KOMPLETTPAKET</div>
            <div className="pricing-price">1.500<span>€</span></div>
            <div className="pricing-sub">zzgl. MwSt. · Festpreis · Keine Folgekosten</div>
            <ul className="pricing-features">
              <li>Komplette QM-Dokumentation (Handbuch, Prozesse, Nachweise)</li>
              <li>Individuell auf Ihre Beratungstätigkeit angepasst</li>
              <li>Musterbericht für Ihre BAFA-Projekte</li>
              <li>Kundenanleitung zur Förderbeantragung</li>
              <li>Persönliche Betreuung bis zur Zulassung</li>
              <li>Schritt-für-Schritt-Anleitung für den Antrag</li>
              <li>Dokumentation zur dauerhaften Nutzung</li>
              <li><strong>BONUS: Kostenlose Begleitung Ihres ersten Förderprojekts</strong></li>
            </ul>
            <a href="https://qm-guru-angebote.netlify.app/" className="btn btn-primary btn-large" style={{width:'100%',justifyContent:'center'}}>Kostenloses Angebot anfordern</a>
            <div className="pricing-guarantee">✓ Sie zahlen erst nach erfolgreicher BAFA-Zulassung</div>
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Ablauf</div>
            <h2 className="section-title">So läuft's ab</h2>
            <p className="section-sub">Von der Anfrage bis zur BAFA-Zulassung in 6 einfachen Schritten.</p>
          </div>
          <div className="steps" style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Selbsttest durchführen</h3><p>Prüfen Sie in 2 Minuten, ob Sie die Voraussetzungen für die BAFA-Zulassung erfüllen.</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Angebot einholen</h3><p>Sie erhalten ein klares Angebot zum Festpreis – ohne versteckte Kosten.</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Beauftragen</h3><p>Nach Ihrer Beauftragung starten wir direkt mit der Erstellung Ihrer QM-Dokumentation.</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Unterlagen zusenden</h3><p>Sie senden Lebenslauf, Referenzprojekte und Infos zu Ihrer Tätigkeit. (15 Min.)</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>QM-Dokumentation wird erstellt</h3><p>Wir erstellen alles individuell auf Ihre Beratung zugeschnitten. (2-3 Wochen)</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Abstimmung & BAFA-Einreichung</h3><p>Sie prüfen die Dokumentation, wir nehmen ggf. Anpassungen vor. Danach reichen Sie die Unterlagen bei der BAFA ein – bei Rückfragen unterstützen wir Sie.</p></div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Kundenstimmen</div>
            <h2 className="section-title">Zufriedene Berater</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial">
              <blockquote>Die Zusammenarbeit verlief freundlich, schnell und unkompliziert. Ich hatte mit sehr viel mehr Arbeitsaufwand gerechnet!</blockquote>
              <div className="testimonial-author">Con4Mare GmbH & Cie. KG</div>
              <div className="testimonial-role">Hamburg</div>
            </div>
            <div className="testimonial">
              <blockquote>Erstklassige Beratung und super Leistung während der gesamten Vorbereitung. Können wir nur weiterempfehlen!</blockquote>
              <div className="testimonial-author">HELE GmbH</div>
              <div className="testimonial-role">Heilsbronn</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">FAQ</div>
            <h2 className="section-title">Häufige Fragen zum QM-System</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>QM-System erstellen lassen?</h2>
        <p>52% der Berater machen es so. Festpreis 1.500€, fertig in 2-3 Wochen, Zahlung erst nach Erfolg.</p>
        <a href="https://qm-guru-angebote.netlify.app/" className="btn btn-primary btn-arrow">Jetzt Angebot anfordern</a>
      </section>
    </main>
  )
}
