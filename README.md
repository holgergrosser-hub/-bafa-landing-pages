# BAFA-Berater Landing Pages

3 Landing Pages für die BAFA-Berater Zulassung – Vite + React, Netlify-ready.

## Seiten

| Pfad | Seite | Zweck |
|------|-------|-------|
| `/bafa-berater-test` | Selbsttest | Hauptlandingpage mit Typeform-Embed |
| `/qm-system-berater` | QM-System | Upsell: QM-System erstellen lassen |
| `/foerderberatung-bafa` | Förderberatung | ROI-Rechner + Förderinfos |

## Deployment auf Netlify

### Option 1: GitHub verbinden (empfohlen)
1. Repository auf GitHub pushen
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Repository auswählen
4. Build-Settings werden automatisch aus `netlify.toml` gelesen
5. **Deploy site** klicken

### Option 2: Netlify CLI
```bash
npm install
npm run build
npx netlify deploy --prod --dir=dist
```

## Lokal entwickeln

```bash
npm install
npm run dev
```

## Techstack

- **Vite** + **React 18** + **React Router**
- **Typeform Embed** (data-tf-live)
- **Netlify** Hosting mit SPA-Redirects
- Responsive Design, optimiert für Mobile

## Konfiguration

- Typeform-ID: `01KBPA8Q2JC233F3R0NDRNM8A7` (in `src/pages/SelbstTest.jsx`)
- Links zu: qm-guru.de, qm-guru-angebote.netlify.app, Calendly
