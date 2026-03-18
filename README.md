# Resume - Next.js Professional CV

A modern, responsive, and performant resume/CV built with Next.js 14, TypeScript, and Tailwind CSS.

**Live:** [resume.mhannani.me](https://resume.mhannani.me)

## Features

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Dark/Light mode** with system preference detection
- **Multi-language** support (English & German)
- **PDF export** via browser print
- **Fully responsive** for all screen sizes
- **SEO optimized** with Open Graph metadata
- **Docker ready** with Traefik integration for production

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Theme | next-themes |
| Deployment | Docker + Traefik |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Docker Development

```bash
docker compose -f docker-compose.dev.yml up --build
```

### Production Build

```bash
npm run build
npm start
```

### Production with Docker + Traefik

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/page.tsx        # Main resume page (en/de)
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Locale redirector
│   ├── globals.css              # Global + print styles
│   └── api/health/route.ts      # Health check endpoint
├── components/
│   ├── sections/                # Resume sections
│   │   ├── header.tsx           # Name, role, profile photo
│   │   ├── contacts.tsx         # Contact information
│   │   ├── experience.tsx       # Work experience timeline
│   │   ├── projects.tsx         # Projects showcase
│   │   ├── education.tsx        # Education history
│   │   ├── skills.tsx           # Professional skills
│   │   ├── languages.tsx        # Language proficiency
│   │   └── certificates.tsx     # Certifications
│   ├── providers/
│   │   └── theme-provider.tsx   # Dark/light theme context
│   └── ui/
│       ├── theme-toggle.tsx     # Theme toggle button
│       ├── export-button.tsx    # PDF export button
│       └── language-switcher.tsx # EN/DE language switcher
├── data/
│   ├── resume.en.ts             # English resume data
│   ├── resume.de.ts             # German resume data
│   └── index.ts                 # Data loader
├── types/
│   └── resume.ts                # TypeScript type definitions
└── lib/
    ├── utils.ts                 # Utility functions
    └── i18n/
        ├── config.ts            # Locale configuration
        └── translations.ts      # UI translations
```

## Customization

### Resume Data

Edit your resume content in `src/data/resume.en.ts` (English) or `src/data/resume.de.ts` (German). All data is centralized and type-safe.

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- **Primary:** `#004852` (Teal)
- **Secondary:** `#2E3D50` (Navy)

### Adding a Language

1. Add the locale to `src/lib/i18n/config.ts`
2. Create a new data file `src/data/resume.{locale}.ts`
3. Add translations in `src/lib/i18n/translations.ts`

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|----------|------------|---------|
| `NODE_ENV` | Environment | `development` |
| `NEXT_PUBLIC_APP_URL` | Public URL | `http://localhost:3000` |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `1` |

## Author

**Mohamed HANNANI**
- Website: [mhannani.me](https://mhannani.me)
- GitHub: [@mhannani](https://github.com/mhannani)
- LinkedIn: [mhannani](https://linkedin.com/in/mhannani)

## License

MIT License - see [LICENSE](LICENSE) for details.
