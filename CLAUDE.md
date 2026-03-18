# Resume - Next.js Professional Resume/CV

Modern, responsive resume built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Reference

- **Dev:** `npm run dev` → http://localhost:3000
- **Build:** `npm run build && npm start`
- **Docker dev:** `docker compose -f docker-compose.dev.yml up --build`
- **Docker prod:** `docker compose -f docker-compose.prod.yml up -d --build`
- **Lint:** `npm run lint`
- **Health:** http://localhost:3000/api/health

## Architecture

- **Next.js 14** App Router with Server Components
- **Single source of truth:** Resume data in `src/data/resume.{locale}.ts`
- **i18n:** English + German, locale detection via Accept-Language header
- **Theme:** Dark/light mode via next-themes
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **PDF:** Browser print (Ctrl+P / export button)

## Project Structure

```
src/
├── app/[locale]/page.tsx     # Main resume page
├── components/sections/      # Resume sections (header, experience, etc.)
├── components/ui/            # Theme toggle, export button, language switcher
├── data/                     # Resume data (en, de)
├── types/resume.ts           # TypeScript types
└── lib/                      # Utils + i18n config
```

## Key Conventions

- Server Components by default; `'use client'` only when needed
- All resume data in `src/data/`, never inline in components
- TypeScript strict mode
- Tailwind utility classes, avoid arbitrary values
- Print styles in `globals.css` using `@media print`

## Colors

- Primary: `#004852` (Teal)
- Secondary: `#2E3D50` (Navy)
- Light bg: `#f3f2f3`
- Dark bg: `#1a1a1a`
