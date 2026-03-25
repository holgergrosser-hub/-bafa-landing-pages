import React, { useEffect } from 'react'
import FAQ from '../components/FAQ'

const faqItems = [
  { q: 'Wie lange dauert der Selbsttest?', a: 'Nur 2 Minuten. Sie beantworten 10 einfache Fragen und erhalten sofort Ihr Ergebnis – kostenlos und unverbindlich.' },
  { q: 'Was sind die Voraussetzungen für die BAFA-Zulassung?', a: 'Sie benötigen: Selbstständigkeit oder eingetragenes Unternehmen, Beratungserfahrung, Referenzprojekte, eine aktuelle Gewerbeanmeldung und ein Qualitätsmanagementsystem. Der Selbsttest prüft alle Punkte für Sie.' },
  { q: 'Brauche ich ein QM-System?', a: 'Ja, die BAFA verlangt ein dokumentiertes Qualitätsmanagementsystem. Über 52% der Berater lassen es von uns erstellen – pragmatisch, BAFA-konform und in 2-3 Wochen fertig.' },
  { q: 'Was kostet die BAFA-Zulassung?', a: 'Das Komplettpaket inkl. QM-Dokumentation kostet 1.500€ zzgl. MwSt. – als Festpreis ohne versteckte Kosten. Sie zahlen erst nach erfolgreicher Zulassung.' },
  { q: 'Wie lange dauert der gesamte Prozess?', a: 'Von der Beauftragung bis zur BAFA-Zulassung vergehen typischerweise 3-6 Wochen: 2-3 Wochen für die QM-Dokumentation, dann 2-4 Wochen Bearbeitungszeit bei der BAFA.' },
  { q: 'Was passiert nach dem Selbsttest?', a: 'Sie erhalten sofort Ihr Ergebnis mit konkreten nächsten Schritten. Bei guter Eignung können Sie direkt ein kostenloses Erstgespräch buchen oder ein Angebot anfordern.' },
  { q: 'Was bedeutet „Erstes Projekt inklusive"?', a: 'Nach Ihrer erfolgreichen BAFA-Zulassung begleiten wir Sie kostenlos durch Ihr komplettes erstes Förderprojekt mit einem echten Kunden – Antrag, Beratungsbericht und Verwendungsnachweis. So starten Sie sicher und souverän.' },
]

export default function SelbstTest() {
  useEffect(() => {
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const s = document.createElement('script')
      s.src = '//embed.typeform.com/next/embed.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot" />
              231+ Berater haben bereits getestet
            </div>
            <h1>Sind Sie bereit für die <em>BAFA-Zulassung</em>?</h1>
            <p className="hero-sub">
              Finden Sie in 2 Minuten heraus, ob Sie die Voraussetzungen erfüllen.
              Kostenlos, unverbindlich und sofort Ergebnis.
            </p>
            <div className="hero-actions">
              <a href="#selbsttest" className="btn btn-primary btn-large btn-arrow">Jetzt Selbsttest starten →</a>
              <a href="https://qm-guru.de/zulassung-bafa-berater/" className="btn btn-secondary btn-large">Mehr erfahren</a>
            </div>
            <div className="trust-bar">
              <div className="trust-item"><span className="icon">✓</span> 30 Jahre Erfahrung</div>
              <div className="trust-item"><span className="icon">✓</span> 1.000+ Audits</div>
              <div className="trust-item"><span className="icon">✓</span> Erstes Projekt inklusive</div>
            </div>
          </div>
          <div className="hero-right">
            <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:'2rem',boxShadow:'var(--shadow-lg)',border:'1px solid var(--border)'}}>
              <div style={{textAlign:'center',marginBottom:'1.5rem'}}>
                <div style={{fontSize:'3rem',marginBottom:'.5rem'}}>📋</div>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.25rem',marginBottom:'.25rem'}}>BAFA-Selbsttest</h3>
                <p style={{color:'var(--text-muted)',fontSize:'.9rem'}}>10 Fragen · 2 Minuten · Kostenlos</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'.75rem',marginBottom:'1.5rem'}}>
                {['Selbstständigkeit','Beratungserfahrung','Referenzen','QM-System','Motivation'].map((item,i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.6rem .875rem',background:'var(--primary-light)',borderRadius:'8px',fontSize:'.9rem',fontWeight:500}}>
                    <span style={{color:'var(--accent)',fontWeight:700}}>✓</span> {item} wird geprüft
                  </div>
                ))}
              </div>
              <a href="#selbsttest" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>Jetzt Selbsttest starten →</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-banner">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-number">42%</div><div className="stat-label">sofort geeignet</div></div>
          <div className="stat-item"><div className="stat-number">47%</div><div className="stat-label">mit kleiner Nachbesserung</div></div>
          <div className="stat-item"><div className="stat-number">2 Min.</div><div className="stat-label">Testdauer</div></div>
          <div className="stat-item"><div className="stat-number">100%</div><div className="stat-label">kostenlos</div></div>
        </div>
      </div>

      {/* WARUM BAFA */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Warum BAFA?</div>
            <h2 className="section-title">Mehr Aufträge durch BAFA-Förderung</h2>
            <p className="section-sub">Als BAFA-gelisteter Berater bieten Sie Ihren Kunden bis zu 50% Förderung auf Ihre Beratung – und gewinnen so deutlich mehr Aufträge.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon card-icon-green">📈</div>
              <h3>35% wollen mehr Aufträge</h3>
              <p>Der häufigste Grund für die BAFA-Zulassung: Berater wollen ihr Auftragsvolumen steigern. Die Förderung macht Ihre Beratung für KMU attraktiver.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-blue">💬</div>
              <h3>25% – Kunden fragen danach</h3>
              <p>Jeder vierte Berater berichtet: Kunden fragen aktiv nach Fördermöglichkeiten. Ohne BAFA-Listung verlieren Sie diese Aufträge an die Konkurrenz.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-yellow">🏆</div>
              <h3>16% – Wettbewerbsvorteil</h3>
              <p>Die BAFA-Listung ist ein starkes Differenzierungsmerkmal. Sie zeigt Qualität und ermöglicht Ihren Kunden finanzielle Vorteile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Für wen?</div>
            <h2 className="section-title">Diese Berater schaffen es am häufigsten</h2>
            <p className="section-sub">Basierend auf 231 getesteten Beratern – diese Beratungsbereiche haben die höchste Erfolgsquote:</p>
          </div>
          <div className="persona-grid">
            <div className="persona-badge"><span className="persona-emoji">📣</span><div className="persona-info"><h4>Marketing & Vertrieb</h4><p>Beratung für Kundengewinnung</p></div><span className="persona-rate">52%</span></div>
            <div className="persona-badge"><span className="persona-emoji">💻</span><div className="persona-info"><h4>Digitalisierung & IT</h4><p>Digitale Transformation</p></div><span className="persona-rate">40%</span></div>
            <div className="persona-badge"><span className="persona-emoji">🎯</span><div className="persona-info"><h4>Strategie</h4><p>Unternehmensentwicklung</p></div><span className="persona-rate">35%</span></div>
            <div className="persona-badge"><span className="persona-emoji">⚙️</span><div className="persona-info"><h4>Organisation & Prozesse</h4><p>Prozessoptimierung</p></div><span className="persona-rate">32%</span></div>
          </div>
          <p style={{textAlign:'center',marginTop:'1rem',fontSize:'.85rem',color:'var(--text-muted)'}}>Erfolgsquote = Anteil der sofort geeigneten Leads pro Beratungsbereich</p>
        </div>
      </section>

      {/* SO FUNKTIONIERT'S */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">3 einfache Schritte</div>
            <h2 className="section-title">So funktioniert's</h2>
          </div>
          <div className="steps" style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Selbsttest machen (2 Min.)</h3><p>Beantworten Sie 10 Fragen zu Ihrer Beratungstätigkeit. Sie erhalten sofort ein Ergebnis mit konkreter Einschätzung.</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>Erstgespräch & QM-Erstellung</h3><p>Wir klären offene Fragen und erstellen Ihre komplette QM-Dokumentation – individuell auf Ihre Beratung zugeschnitten.</p></div></div>
            <div className="step-item"><div className="step-number" /><div className="step-content"><h3>BAFA-Zulassung erhalten</h3><p>Sie reichen die Unterlagen ein, wir begleiten den Prozess. Typische Dauer: 3-6 Wochen bis zur Zulassung.</p></div></div>
          </div>
        </div>
      </section>

      {/* TYPEFORM EMBED */}
      <section className="section section-alt" id="selbsttest">
        <div className="section-inner" style={{maxWidth:'800px'}}>
          <div className="section-header">
            <div className="section-overline">Jetzt testen</div>
            <h2 className="section-title">Ihr BAFA-Berater Selbsttest</h2>
            <p className="section-sub">10 Fragen, 2 Minuten, sofort Ergebnis. Kostenlos und unverbindlich.</p>
          </div>
          <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:'0',border:'1px solid var(--border)',boxShadow:'var(--shadow-md)',minHeight:'500px',overflow:'hidden'}}>
            <div data-tf-live="01KBPA8Q2JC233F3R0NDRNM8A7" style={{width:'100%',height:'500px'}}></div>
          </div>
        </div>
      </section>

      {/* BONUS: ERSTES PROJEKT GRATIS */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="bonus-banner">
            <div className="bonus-icon">🎁</div>
            <div className="bonus-content">
              <div className="bonus-overline">Unser Versprechen</div>
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

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Kundenstimmen</div>
            <h2 className="section-title">Das sagen unsere Kunden</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial">
              <blockquote>Die Zusammenarbeit verlief freundlich, schnell und unkompliziert. Ich hatte mit sehr viel mehr Arbeitsaufwand gerechnet!</blockquote>
              <div className="testimonial-author">Con4Mare GmbH & Cie. KG</div>
              <div className="testimonial-role">Hamburg</div>
            </div>
            <div className="testimonial">
              <blockquote>Erstklassige Beratung während der gesamten Vorbereitung sowie dem Audit. Eine super Leistung – können wir nur weiterempfehlen!</blockquote>
              <div className="testimonial-author">HELE GmbH</div>
              <div className="testimonial-role">Heilsbronn</div>
            </div>
            <div className="testimonial">
              <blockquote>Wir konnten unser Unternehmen in 4-5 Monaten zertifizieren. Professionell, effizient und jederzeit weiterzuempfehlen.</blockquote>
              <div className="testimonial-author">DG Stadthaus GmbH</div>
              <div className="testimonial-role">Immobilien</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Häufige Fragen</div>
            <h2 className="section-title">Ihre Fragen – unsere Antworten</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Bereit für den nächsten Schritt?</h2>
        <p>Machen Sie jetzt den Selbsttest und erfahren Sie in 2 Minuten, ob die BAFA-Zulassung für Sie der richtige Weg ist.</p>
        <a href="#selbsttest" className="btn btn-primary btn-arrow">Selbsttest starten</a>
      </section>
    </main>
  )
}
