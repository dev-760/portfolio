# Hassan Karasu — Personal Portfolio & Digital Resume

A modern, high-performance portfolio and digital resume for **Hassan Karasu** (Software Builder & Business Administration Student based in Casablanca, Morocco).

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion 12**, configured for zero-overhead static HTML export.

---

## ✨ Features

- **Centralized Data Model**: All content, projects, experience, skills, and links are managed in a single source of truth (`src/data/profile.ts`).
- **Modern Dark Aesthetic**: Deep violet dark mode theme (`#050208`) with ambient glow accents, glassmorphism cards, and Geist typography.
- **Interactive Command Palette**: Press <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> anywhere to trigger quick fuzzy search across navigation and social links.
- **Keyboard Shortcuts**: Quick modal cheat sheet accessible via shortcut or floating action trigger.
- **Optimized Motion & Parallax**: Buttery smooth, responsive Framer Motion scroll and entry animations without reading-interruption fadeouts.
- **High-Performance Ambient Glow**: Direct DOM `requestAnimationFrame` cursor tracking with zero React re-render overhead.
- **Non-blocking Toast System**: Event-driven toast notifications anchored at the top-right with custom styling for copy actions and contact submissions.
- **Full SEO & Static Export**: Includes custom branded SVG favicon, OpenGraph metadata, Twitter cards, `robots.txt`, and `sitemap.xml`.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16** | React framework (App Router, Turbopack, static export) |
| **React 19** | Core UI library |
| **TypeScript 5** | Strict type safety |
| **Tailwind CSS v4** | Utility-first CSS engine with inline theme configuration |
| **Framer Motion 12** | Layout transitions and scroll-driven micro-interactions |
| **Vercel Analytics** | Privacy-focused web analytics |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg          # Branded SVG favicon (HK monogram)
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # Static XML sitemap
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── about/       # Dedicated /about page
│   │   │   ├── contact/     # Dedicated /contact page
│   │   │   ├── experience/  # Dedicated /experience page
│   │   │   ├── projects/    # Dedicated /projects page
│   │   │   ├── layout.tsx   # Site layout wrapper
│   │   │   └── page.tsx     # Homepage (all-in-one view)
│   │   ├── globals.css      # Tailwind CSS v4 & custom scrollbar styles
│   │   ├── icon.svg         # App Router branded favicon route
│   │   └── layout.tsx       # Root layout, fonts, and metadataBase
│   ├── components/
│   │   ├── About.tsx        # Bio & spoken languages
│   │   ├── Achievements.tsx # Competition awards & milestones
│   │   ├── CommandPalette.tsx # ⌘K spotlight search modal
│   │   ├── Contact.tsx      # Contact info, copy email & message form
│   │   ├── Education.tsx    # Academic background
│   │   ├── Experience.tsx   # Work & software builder history
│   │   ├── Footer.tsx       # Site footer & copyright
│   │   ├── Hero.tsx         # Interactive hero section with tech grid
│   │   ├── Highlights.tsx   # Core domain highlights
│   │   ├── KeyboardShortcuts.tsx # Shortcut modal dialog
│   │   ├── Layout.tsx       # Global overlay host (glow, progress, toasts)
│   │   ├── MouseGlow.tsx    # Ref-based cursor ambient glow
│   │   ├── Navbar.tsx       # Fixed glass navbar with scrollspy & mobile drawer
│   │   ├── PersonalStatement.tsx # Narrative & philosophy card
│   │   ├── Projects.tsx     # Software showcase cards & tech tags
│   │   ├── ScrollProgress.tsx # Top gradient scroll indicator
│   │   ├── ScrollToTop.tsx  # Floating scroll-to-top button
│   │   ├── Section.tsx      # Reusable animated section wrapper
│   │   ├── Skills.tsx       # Categorized skill pills
│   │   ├── Toast.tsx        # Notification toast manager
│   │   └── Volunteering.tsx # Community & STEM mentorship
│   ├── config/
│   │   └── site.ts          # Feature flags (e.g. SHOW_PROJECTS_PAGE)
│   └── data/
│       └── profile.ts       # Profile single source of truth
├── next.config.ts           # Next.js static export & trailingSlash config
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dev-760/portfolio.git
cd portfolio
npm install
```

### Development Server

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting

Run ESLint checks:

```bash
npm run lint
```

### Static Production Build

Build the static production export:

```bash
npm run build
```

The compiled, prerendered static assets will be output to the [`out/`](out) directory, ready for instant deployment to any static web host.

---

## ⚙️ Customization

### Updating Profile & Content

To update bio information, skills, work experience, achievements, or projects, edit [`src/data/profile.ts`](src/data/profile.ts):

```typescript
export const profile: Profile = {
  name: "Hassan Karasu",
  title: "Software Builder | Business Administration Student",
  location: "Casablanca, Morocco",
  // ...
  projects: [
    {
      title: "Project Name",
      link: "https://github.com/...",
      description: "Brief overview of what this project solves.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ],
};
```

### Feature Toggles

To toggle the dedicated `/projects` page route, update [`src/config/site.ts`](src/config/site.ts):

```typescript
export const SHOW_PROJECTS_PAGE = true;
```

---

## 🚢 Deployment

Because the project uses Next.js Static HTML Export (`output: "export"`), it can be deployed anywhere without a Node.js runtime:

- **Vercel**: Push to GitHub and import the repository. Vercel automatically detects the Next.js static build.
- **GitHub Pages**: Deploy the generated `out/` directory using GitHub Actions.
- **Cloudflare Pages**: Set build command to `npm run build` and build output directory to `out`.
- **Netlify**: Set publish directory to `out`.

---

## 📬 Contact

- **Name**: Hassan Karasu
- **Email**: [me@hassankarasu.dev](mailto:me@hassankarasu.dev)
- **GitHub**: [@dev-760](https://github.com/dev-760)
- **LinkedIn**: [Hassan Karasu](https://linkedin.com/in/hassan-karasu-a7485336b)
