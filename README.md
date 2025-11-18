# ULRM Explorer

A lightweight Next.js site that presents the ULRM+ (Universal Linguistic Resonance Machine) research notes as individual pages. The index page explains how to navigate the material, while each sub-page dives into a focused topic—in this case, Structural Coherence.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Deployment & DNS
- Production traffic should use **https://ulrm.solveforce.com**.
- The `public/CNAME` file ships with that hostname so static exports (e.g., GitHub Pages) retain the correct custom domain.
- When deploying elsewhere (Vercel, Netlify, etc.), configure your DNS provider so the `ulrm.solveforce.com` record targets yo
ur hosting vendor and keep the `CNAME` file in place.

## Available Pages
- `/` – Index page describing the ULRM+ architecture and linking to each deep-dive page.
- `/structural-coherence` – A full-page adaptation of the Structural Coherence modal that contrasts lawful ULRM+ structure with symbolic chaos.
- `/structural-coherence-modal` – Interactive recreation of the floating knowledge capsule with open/close controls.
