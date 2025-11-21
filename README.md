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
- When deploying elsewhere (Vercel, Netlify, etc.), configure your DNS provider so the `ulrm.solveforce.com` record targets your hosting vendor and keep the `CNAME` file in place.

## Cloud Build Deployment

This project includes Google Cloud Build configuration for automated builds and deployments.

### Prerequisites
- Google Cloud Platform account with a project created
- Cloud Build API enabled
- Container Registry API enabled (for Docker images)
- gcloud CLI installed and authenticated

### Building with Cloud Build

1. **Submit a build manually:**
   ```bash
   gcloud builds submit --config cloudbuild.yaml .
   ```

2. **View build history:**
   ```bash
   gcloud builds list
   ```

3. **View build logs:**
   ```bash
   gcloud builds log [BUILD_ID]
   ```

### Docker Deployment

The project includes a Dockerfile for containerization. The Cloud Build configuration automatically:
- Builds a Docker image
- Pushes it to Google Container Registry (GCR)
- Tags it with both the commit SHA and 'latest'

To run the Docker container locally:
```bash
docker build -t ulrm .
docker run -p 3000:3000 ulrm
```

### Automated Builds

You can connect Cloud Build to your repository for automatic builds on push:

1. Go to Cloud Build > Triggers in Google Cloud Console
2. Click "Create Trigger"
3. Connect your repository
4. Set the trigger to use `cloudbuild.yaml`
5. Configure branch patterns (e.g., `^main$`)

### Build Artifacts

Build artifacts are stored in Google Cloud Storage at:
```
gs://[PROJECT_ID]_cloudbuild/ulrm
```

## Available Pages
- `/` – Index page describing the ULRM+ architecture and linking to each deep-dive page.
- `/structural-coherence` – A full-page adaptation of the Structural Coherence modal that contrasts lawful ULRM+ structure with symbolic chaos.
- `/structural-coherence-modal` – Interactive recreation of the floating knowledge capsule with open/close controls.
