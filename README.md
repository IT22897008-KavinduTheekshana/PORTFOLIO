# Kavindu Theekshana — Portfolio

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy

Push this repo to GitHub and import it on Vercel (vercel.com/new) — zero config needed.

## Structure

- `app/page.tsx` — assembles the page from section components
- `components/` — Hero, About, Experience, Projects, Skills, Contact, and PipelineNav
  (the left-hand "pipeline" trace that highlights the active section — a nod to the
  workflow automation / RAG pipeline work in the CV)
- `public/images/profile.png` — your photo
- Edit content directly inside each component in `components/`
