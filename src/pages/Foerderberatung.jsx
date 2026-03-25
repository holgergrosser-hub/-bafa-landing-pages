import React, { useState } from 'react'
import FAQ from '../components/FAQ'

const faqItems = [
  { q: 'Wie funktioniert die BAFA-Förderung für meine Kunden?', a: 'Ihre KMU-Kunden können über die BAFA einen Zuschuss von 50% (alte Bundesländer) bis 80% (neue Bundesländer) auf Ihre Beratungskosten erhalten. Maximale Förderung: 1.750€ bzw. 2.800€. Sie als Berater müssen dafür BAFA-registriert sein.' },
  { q: 'Welche Beratungsthemen sind förderfähig?', a: 'Förderfähig sind allgemeine Beratungen zu wirtschaftlichen, finanziellen, personellen und organisatorischen Fragen. Dazu gehören z.B. Marketing, Digitalisierung, Prozessoptimierung, Personalmanagement, Unternehmensführung und Strategie.' },
  { q: 'Welche Unternehmen können die Förderung erhalten?', a: 'Kleine und mittlere Unternehmen (KMU) mit Sitz in Deutschland, die weniger als 250 Mitarbeiter beschäftigen und einen Jahresumsatz von max. 50 Mio. € haben. Auch Freiberufler und junge Unternehmen (unter 2 Jahre) sind antragsberechtigt.' },
  { q: 'Was muss ich als Berater tun?', a: 'Sie müssen bei der BAFA als Berater registriert sein. Dafür benötigen Sie ein Qualitätsmanagementsystem und nachgewiesene Beratungserfahrung. Wir helfen Ihnen bei der gesamten Zulassung – inklusive QM-System.' },
  { q: 'Wie schnell kann ich nach der Zulassung starten?', a: 'Sofort! Nachdem Sie Ihre BAFA-Registrierung erhalten haben, können Sie direkt geförderte Beratungen anbieten. Die Beantragung der Förderung läuft über Ihre Kunden.' },
  { q: 'Muss mein Kunde den Antrag selbst stellen?', a: 'Ja, der Antrag wird vom Unternehmen gestellt – nicht vom Berater. Aber wir liefern Ihnen eine fertige Kundenanleitung, die den Prozess für Ihre Kunden Schritt für Schritt erklärt.' },
]

function ROICalculator() {
  const [tagessatz, setTagessatz] = useState(1200)
  const [tage, setTage] = useState(5)
  const [foerderquote, setFoerderquote] = useState(50)
  const monatlich = tage * tagessatz
  const foerderanteil = monatlich * (foerderquote / 100)
  const kundenersparnis = Math.min(foerderanteil, foerderquote === 80 ? 2800 : 1750)
  const mehrauftraege = Math.round(tage * 0.4)
  const mehrumsatz = mehrauftraege * tagessatz

  return (
    <div className="calculator">
      <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',textAlign:'center',marginBottom:'1.5rem'}}>
        Was bringt Ihnen die BAFA-Listung?
      </h3>
      <div className="calc-input-group">
        <label>Ihr Tagessatz</label>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <input type="range" min={500} max={2500} step={50} value={tagessatz} onChange={e => setTagessatz(+e.target.value)} />
          <div className="calc-value">{tagessatz.toLocaleString('de-DE')}€</div>
        </div>
      </div>
      <div className="calc-input-group">
        <label>Beratungstage pro Monat</label>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <input type="range" min={1} max={20} step={1} value={tage} onChange={e => setTage(+e.target.value)} />
          <div className="calc-value">{tage} Tage</div>
        </div>
      </div>
      <div className="calc-input-group">
        <label>Förderquote Ihrer Region</label>
        <div style={{display:'flex',gap:'.75rem'}}>
          <button
            onClick={() => setFoerderquote(50)}
            className="btn"
            style={{flex:1,justifyContent:'center',background: foerderquote === 50 ? 'var(--primary)' : 'var(--white)',color: foerderquote === 50 ? 'var(--white)' : 'var(--text)',border:'1px solid var(--border)',padding:'.6rem'}}
          >50% (West)</button>
          <button
            onClick={() => setFoerderquote(80)}
            className="btn"
            style={{flex:1,justifyContent:'center',background: foerderquote === 80 ? 'var(--primary)' : 'var(--white)',color: foerderquote === 80 ? 'var(--white)' : 'var(--text)',border:'1px solid var(--border)',padding:'.6rem'}}
          >80% (Ost)</button>
        </div>
      </div>

      <div className="calc-result">
        <div className="calc-result-label">Ihre Kunden sparen pro Projekt bis zu</div>
        <div className="calc-result-number">{kundenersparnis.toLocaleString('de-DE')}€</div>
        <div className="calc-result-label" style={{marginTop:'.5rem'}}>Das macht Ihre Beratung deutlich attraktiver!</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginTop:'1.5rem'}}>
        <div style={{background:'var(--green-bg)',borderRadius:'var(--radius)',padding:'1rem',textAlign:'center'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',color:'var(--accent)'}}>+{mehrauftraege}</div>
          <div style={{fontSize:'.8rem',color:'var(--text-muted)'}}>geschätzte Mehraufträge/Monat</div>
        </div>
        <div style={{background:'var(--primary-light)',borderRadius:'var(--radius)',padding:'1rem',textAlign:'center'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',color:'var(--primary)'}}>+{mehrumsatz.toLocaleString('de-DE')}€</div>
          <div style={{fontSize:'.8rem',color:'var(--text-muted)'}}>zusätzlicher Umsatz/Monat</div>
        </div>
      </div>
    </div>
  )
}

export default function Foerderberatung() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot" />
              25% der Berater: Kunden fragen danach
            </div>
            <h1>Ihre Kunden fragen nach <em>Förderung</em>?</h1>
            <p className="hero-sub">
              Als BAFA-gelisteter Berater bieten Sie Ihren KMU-Kunden 
              bis zu 80% Förderung auf Ihre Beratung (abhängig von Region). Mehr Aufträge, höhere Abschlussquote.
            </p>
            <div className="hero-actions">
              <a href="#rechner" className="btn btn-primary btn-large btn-arrow">Was bringt mir das?</a>
              <a href="/#selbsttest" className="btn btn-secondary btn-large">Bin ich geeignet?</a>
            </div>
            <div className="trust-bar">
              <div className="trust-item"><span className="icon">✓</span> Bis zu 80% Förderung</div>
              <div className="trust-item"><span className="icon">✓</span> Erstes Projekt inklusive</div>
              <div className="trust-item"><span className="icon">✓</span> Max. 2.800€ Zuschuss</div>
            </div>
          </div>
          <div className="hero-right">
            <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:'2rem',boxShadow:'var(--shadow-lg)',border:'1px solid var(--border)'}}>
              <div style={{textAlign:'center',marginBottom:'1.5rem'}}>
                <div style={{fontSize:'2.5rem',marginBottom:'.5rem'}}>💰</div>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.25rem'}}>BAFA-Förderung</h3>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                <div style={{background:'var(--primary-light)',borderRadius:'var(--radius)',padding:'1.25rem',textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'2rem',color:'var(--primary)'}}>50%</div>
                  <div style={{fontSize:'.8rem',color:'var(--text-muted)',fontWeight:600}}>Alte Bundesländer</div>
                  <div style={{fontSize:'.75rem',color:'var(--text-muted)'}}>Max. 1.750€</div>
                </div>
                <div style={{background:'var(--green-bg)',borderRadius:'var(--radius)',padding:'1.25rem',textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'2rem',color:'var(--accent)'}}>80%</div>
                  <div style={{fontSize:'.8rem',color:'var(--text-muted)',fontWeight:600}}>Neue Bundesländer</div>
                  <div style={{fontSize:'.75rem',color:'var(--text-muted)'}}>Max. 2.800€</div>
                </div>
              </div>
              <p style={{textAlign:'center',fontSize:'.8rem',color:'var(--text-muted)',marginTop:'1rem'}}>
                Zuschuss für Ihre KMU-Kunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-banner">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-number">50-80%</div><div className="stat-label">Förderung für Ihre Kunden</div></div>
          <div className="stat-item"><div className="stat-number">2.800€</div><div className="stat-label">Max. Zuschuss pro Projekt</div></div>
          <div className="stat-item"><div className="stat-number">147</div><div className="stat-label">von 231 Beratern beraten KMU</div></div>
          <div className="stat-item"><div className="stat-number">35%</div><div className="stat-label">wollen mehr Aufträge</div></div>
        </div>
      </div>

      {/* VORTEILE */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Ihre Vorteile</div>
            <h2 className="section-title">Warum BAFA-Berater werden?</h2>
            <p className="section-sub">Die BAFA-Listung ist Ihr Schlüssel zu mehr Aufträgen und zufriedeneren Kunden.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon card-icon-green">📈</div>
              <h3>Mehr Aufträge gewinnen</h3>
              <p>Wenn Ihre Beratung gefördert wird, sinkt die Hürde für Ihre Kunden. Mehr Anfragen, höhere Abschlussquote, mehr Umsatz.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-blue">🎯</div>
              <h3>Wettbewerbsvorteil</h3>
              <p>Differenzieren Sie sich von Mitbewerbern. Die BAFA-Listung signalisiert Qualität und bietet Ihren Kunden einen finanziellen Vorteil.</p>
            </div>
            <div className="card">
              <div className="card-icon card-icon-yellow">💬</div>
              <h3>Kundenbindung stärken</h3>
              <p>Ihre bestehenden Kunden können ebenfalls profitieren. Bieten Sie die Förderung als zusätzlichen Service an.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI RECHNER */}
      <section className="section section-alt" id="rechner">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Rechner</div>
            <h2 className="section-title">Lohnt sich die BAFA-Listung für Sie?</h2>
            <p className="section-sub">Berechnen Sie, wie viel zusätzlichen Umsatz die BAFA-Förderung Ihnen bringen kann.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Daten aus der Praxis</div>
            <h2 className="section-title">Was Berater wie Sie motiviert</h2>
            <p className="section-sub">Basierend auf 231 befragten Unternehmensberatern – das sind die Top-Gründe für die BAFA-Zulassung:</p>
          </div>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            {[
              {label:'Mehr Aufträge gewinnen',pct:35,color:'var(--accent)'},
              {label:'Kunden fragen nach Förderung',pct:25,color:'var(--primary)'},
              {label:'Wettbewerbsvorteil',pct:16,color:'var(--yellow)'},
              {label:'Neugierig',pct:19,color:'#94a3b8'},
              {label:'Empfehlung',pct:5,color:'#cbd5e1'},
            ].map((item,i) => (
              <div key={i} style={{marginBottom:'1rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'.35rem',fontSize:'.9rem',fontWeight:600}}>
                  <span>{item.label}</span>
                  <span>{item.pct}%</span>
                </div>
                <div style={{background:'var(--border)',borderRadius:'100px',height:'10px',overflow:'hidden'}}>
                  <div style={{width:`${item.pct * 2.5}%`,height:'100%',background:item.color,borderRadius:'100px',transition:'width 1s ease'}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÖRDERREGIONEN */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">Förderhöhe</div>
            <h2 className="section-title">Förderquoten nach Bundesland</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'1.5rem',maxWidth:'800px',margin:'0 auto'}}>
            <div style={{background:'var(--green-bg)',borderRadius:'var(--radius-lg)',padding:'2rem',textAlign:'center',border:'2px solid var(--accent)'}}>
              <div style={{fontFamily:'var(--font-display)',fontSize:'3rem',color:'var(--accent)'}}>80%</div>
              <div style={{fontWeight:700,marginBottom:'.5rem'}}>Neue Bundesländer</div>
              <p style={{fontSize:'.875rem',color:'var(--text-muted)'}}>Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen + Region Lüneburg & Trier</p>
              <div style={{marginTop:'1rem',fontWeight:700,color:'var(--accent)'}}>Max. 2.800€ Zuschuss</div>
            </div>
            <div style={{background:'var(--primary-light)',borderRadius:'var(--radius-lg)',padding:'2rem',textAlign:'center',border:'2px solid var(--primary)'}}>
              <div style={{fontFamily:'var(--font-display)',fontSize:'3rem',color:'var(--primary)'}}>50%</div>
              <div style={{fontWeight:700,marginBottom:'.5rem'}}>Alte Bundesländer</div>
              <p style={{fontSize:'.875rem',color:'var(--text-muted)'}}>Bayern, Baden-Württemberg, Hessen, NRW, Niedersachsen, Schleswig-Holstein, Rheinland-Pfalz, Saarland, Bremen, Hamburg</p>
              <div style={{marginTop:'1rem',fontWeight:700,color:'var(--primary)'}}>Max. 1.750€ Zuschuss</div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS: ERSTES PROJEKT GRATIS */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="bonus-banner">
            <div className="bonus-icon">🎁</div>
            <div className="bonus-content">
              <div className="bonus-overline">Sicher starten</div>
              <h2 className="bonus-title">Ihr erstes BAFA-Projekt? Geht auf uns.</h2>
              <p className="bonus-text">
                Sie haben die Zulassung – und dann? Wir begleiten Sie kostenlos durch 
                Ihr komplettes erstes Förderprojekt mit einem echten Kunden. Antrag, 
                Beratungsbericht, Verwendungsnachweis – alles. Damit Sie vom ersten Tag 
                an souverän auftreten.
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

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-overline">FAQ</div>
            <h2 className="section-title">Häufige Fragen zur Förderberatung</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Starten Sie jetzt mit BAFA-geförderter Beratung</h2>
        <p>Prüfen Sie in 2 Minuten, ob Sie die Voraussetzungen erfüllen – und erschließen Sie ein neues Umsatzpotenzial.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap',position:'relative'}}>
            <a href="/" className="btn btn-primary btn-arrow">Jetzt Selbsttest starten →</a>
          <a href="https://qm-guru-angebote.netlify.app/" className="btn btn-secondary" style={{background:'transparent',color:'var(--white)',borderColor:'rgba(255,255,255,0.3)'}}>Direkt Angebot anfordern</a>
        </div>
      </section>
    </main>
  )
}
