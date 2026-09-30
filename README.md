# Hassan Karasu — Personal Portfolio

A static, single-page portfolio for **Hassan Karasu**, a Business Administration undergraduate at FSJES Aïn Chock, Université Hassan II de Casablanca.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion 13**, configured for zero-runtime static HTML export.

---

## ✨ Features

- **Single-page anchor architecture**: five content sections on one page, with dedicated routes that redirect to their section anchor.
- **Editorial monochrome aesthetic**: deep charcoal, off-white paper, and terracotta accents. Newsreader (display) paired with Manrope (body).
- **Light & dark themes**: system-aware with manual toggle and persistence.
- **Scrollspy navigation**: the active section is tracked as you scroll, with a keyboard-accessible mobile drawer and focus trapping.
- **Reduced-motion support**: `prefers-reduced-motion` is honored across transitions.
- **SEO & structured data**: OpenGraph, Twitter cards, canonical URLs, `robots.txt`, `sitemap.xml`, and JSON-LD (`WebSite`, `ProfilePage`, `Person`, `BreadcrumbList`).- **Static export**: every route is prerendered to HTML at build time — no Node.js runtime required to host.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16** | React framework (App Router, Turbopack, static export) |
| **React 19** | Core UI library |
| **TypeScript 5** | Strict type safety |
| **Tailwind CSS v4** | Utility-first CSS engine with inline theme configuration |
| **Framer Motion 13** | Layout transitions and scroll-driven micro-interactions |
| **Vercel Analytics** | Privacy-focused web analytics |
| **ESLint 9 / Oxlint** | Linting |

---

## 📁 Project Structure

```text
portfolio/
├── public/                        # Favicons and light/dark logo + theme icons
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── about/             # Redirects to /#about
│   │   │   ├── competencies/      # Redirects to /#skills
│   │   │   ├── contact/           # Redirects to /#contact
│   │   │   ├── education/         # Redirects to /#education
│   │   │   ├── experience/        # Redirects to /#experience
│   │   │   ├── projects/          # Redirects to /#about
│   │   │   ├── skills/            # Redirects to /#skills
│   │   │   ├── work/              # Redirects to /#about
│   │   │   ├── layout.tsx         # Site layout wrapper
│   │   │   ├── page.tsx           # Homepage (all sections)
│   │   │   ├── error.tsx          # Route error boundary
│   │   │   ├── loading.tsx        # Route loading state
│   │   │   └── template.tsx       # Per-navigation template
│   │   ├── globals.css            # Tailwind CSS v4 theme & global styles
│   │   ├── icon.ico               # App Router favicon
│   │   ├── layout.tsx             # Root layout, fonts, metadataBase
│   │   ├── not-found.tsx          # 404 page
│   │   ├── robots.ts              # Crawling rules
│   │   └── sitemap.ts             # Route sitemap
│   ├── components/
│   │   ├── AboutSection.tsx       # Intro statement + education timeline
│   │   ├── ContactSection.tsx     # Contact panel & footer navigation
│   │   ├── DesktopNav.tsx         # Presentational desktop nav
│   │   ├── ExperienceSection.tsx  # Vertical experience timeline
│   │   ├── LoadingSkeleton.tsx    # Skeleton loading placeholder
│   │   ├── Navbar.tsx             # Fixed navbar with scrollspy & mobile drawer
│   │   ├── RedirectToSection.tsx  # Client-side anchor redirect helper
│   │   ├── ScrollToTopButton.tsx  # Floating scroll-to-top button
│   │   ├── SkillsSection.tsx      # "What I Do" practice card grid
│   │   ├── StructuredData.tsx     # JSON-LD graph
│   │   ├── SystemTimeline.tsx     # Animated timeline primitive
│   │   ├── ThemeToggle.tsx        # Light/dark switch
│   │   ├── Toast.tsx              # Toast notification manager
│   │   ├── TypingEffect.tsx       # Hero typing animation
│   │   ├── WebVitals.tsx          # Analytics web-vitals reporter
│   │   ├── icons/                 # Icon registry & brand icons
│   │   └── ui/                    # Shared primitives (badge, button, timeline)
│   ├── context/
│   │   └── ThemeContext.tsx       # Theme provider
│   ├── data/
│   │   ├── content.ts             # Education & experience entries
│   │   └── profile.ts             # Identity, contact, and narrative copy
│   ├── lib/
│   │   ├── metadata.ts            # Page metadata helper
│   │   └── utils.ts               # Class-name utility
│   └── motion/
│       ├── motion.css             # Shared motion styles
│       ├── tokens.ts              # Easing & duration tokens
│       ├── useActiveSection.ts    # Scrollspy hook
│       └── useReducedMotion.ts    # Reduced-motion hook
├── next.config.ts                 # Static export & image config
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

### Type Check

```bash
npx tsc --noEmit
```

### Static Production Build

Build the static production export:

```bash
npm run build
```

The compiled, prerendered static assets will be output to the [`out/`](out) directory, ready for instant deployment to any static web host.

---

## ⚙️ Customization

### Identity & Narrative Copy

Identity, contact details, and long-form narrative copy live in [`src/data/profile.ts`](src/data/profile.ts).

### Education & Experience Entries

The education and experience timelines are driven by [`src/data/content.ts`](src/data/content.ts):

```typescript
export const education: EducationData[] = [
  {
    id: "01",
    company: "Institution name",
    role: "Degree or programme",
    period: "Class of 2026",
    status: "Completed",
    stack: ["Coursework area", "…"],
    description: "One-line summary of what this covered.",
    order: 1,
  },
];
```

Both `AboutSection` and `ExperienceSection` read from this module and accept an optional override prop, so entries can be supplied from elsewhere later without editing the components.

### Sections & Navigation

Section order lives in [`src/app/(site)/page.tsx`](src/app/(site)/page.tsx). Navigation labels and the scrollspy section list are defined together in [`src/components/Navbar.tsx`](src/components/Navbar.tsx) — visible labels are matched to section ids by `href`, so a label can differ from its anchor.

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
- **Email**: [mail@hasankarasu.me](mailto:mail@hasankarasu.me)
- **GitHub**: [@dev-760](https://github.com/dev-760)
- **LinkedIn**: [Hassan Karasu](https://linkedin.com/in/hassan-karasu-a7485336b)
