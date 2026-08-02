# Progress

> Last Updated: 2026-07-28

This document tracks the current development progress of the Examinr.ai Waitlist.

It serves as the project's live status board and should always reflect the latest completed work.

Whenever a feature is completed, modified, or removed, update this file.

---

# Overall Status

Project Phase

🟢 Active Development

Current Version

v1.0.0-alpha

Repository

Examinr.ai Waitlist

Deployment

Vercel

---

# Progress Checklist

## Foundation

- [x] Repository created
- [x] GitHub configured
- [x] README written
- [x] Project structure established
- [x] Documentation created

---

## Branding

- [x] Brand identity
- [x] Typography
- [x] Colour system
- [x] Design language
- [x] Messaging

---

## Landing Page

### Hero

- [x] Navigation bar
- [x] Hero section — refactored (centred composition, vertical hierarchy)
- [x] CTA buttons — primary + secondary, centred
- [x] Hero illustration — application preview, floating card style
- [x] Background wave — moved to page background, independent of Hero container
- [x] Hero refactor (hero-refactor.md) — spacing, typography, animation, wave
- [x] Animation refactor (animations-refactor.md) — button press feedback, navbar collapse performance

---

### About

- [x] About section — full implementation (about.md prompt)
- [x] Section header with star decorations
- [x] Instrument Serif heading with blue highlight
- [x] Commissioner uppercase subtitle with blue highlight
- [x] Responsive two-column card grid (large left + right column)
- [x] Card 1 — blue theme, floating pills, glass style
- [x] Card 2 — purple theme, floating pills, glass style
- [x] Card 3 — green accent, scribble underline on "content"
- [x] Staggered scroll-reveal animations (Framer Motion, useInView)
- [x] Independent floating pill animations (different timing + delay)
- [x] Subtle hover glow states on all cards
- [x] Responsive layout (mobile stack → desktop two-column)
- [x] Background wave refactor — opacity 0.35, 15s cycle, ±3% travel

---

### Student Section

- [x] Section layout — "Stop studying harder." heading, right-aligned
- [x] Section header with star decorations (independent float animations)
- [x] Instrument Serif heading with brand blue "Stop" highlight
- [x] Commissioner uppercase subtitle with brand blue "STUDYING SMARTER" highlight
- [x] Three horizontally arranged feature cards (responsive: stacked on mobile/tablet, row on desktop)
- [x] Card 1 — sidebar navigation mock with glowing search highlight
- [x] Card 2 — prompt bubble with six independently floating capability pill tags
- [x] Card 3 — institution selector mock (UPSS, WAEC, Miracle centers)
- [x] Staggered scroll-reveal animations (Framer Motion, useInView, custom variant delay)
- [x] Subtle card hover elevation (y: -4, 250ms ease-out)
- [x] Radial glow on card hover
- [x] Floating pills animate independently (different timing + delay, no sync)
- [x] Responsive layout (1-col mobile → 2-col tablet → 3-col desktop)
- [x] prefers-reduced-motion respected on all animations
- [x] Zero TypeScript errors, zero ESLint errors

---

### Institution Section

- [x] Section layout — "Stop teaching alone." heading, left-aligned
- [x] Section header with star decorations (independent float animations)
- [x] Instrument Serif heading with brand blue "Stop" highlight
- [x] Commissioner uppercase subtitle with brand blue "LEARNING ECOSYSTEM" highlight
- [x] Three horizontally arranged feature cards (responsive: stacked on mobile/tablet, row on desktop)
- [x] Card 1 — resource list mock (Biology, Mock Exam, Teacher Guide, Assignment with access levels)
- [x] Card 2 — analytics bar chart mock (Most Difficult Topics: Cell Division, Genetics, Ecology)
- [x] Card 3 — CBT exam dashboard mock (UPSS Mock CBT, Ongoing, Questions/Students/Time stats)
- [x] Staggered scroll-reveal animations (Framer Motion, useInView, custom variant delay)
- [x] Subtle card hover elevation (y: -4, 250ms ease-out)
- [x] Radial glow on card hover
- [x] Responsive layout (1-col mobile → 2-col tablet → 3-col desktop)
- [x] prefers-reduced-motion respected on all animations
- [x] Zero TypeScript errors, zero ESLint errors

---

### Waitlist (CTA Section)

- [x] Registration form — email input, submit button, client + server validation
- [x] Benefit cards — three horizontally aligned, card 1 (early access), card 2 (feedback), card 3 (momentum)
- [x] Success modal — scale-in animation, share + copy link actions, keyboard-dismiss (Escape)
- [x] Share functionality — Web Share API with clipboard fallback
- [x] Live waitlist count — fetched from database via GET /api/waitlist
- [x] Avatar stack — five overlapping avatar initials beneath the form
- [x] utm_source capture — read from URL query string, stored to DB on submission
- [x] API route — POST /api/waitlist (submit entry), GET /api/waitlist (count)
- [x] Decorative elements — star SVG headers, per-card accent decorations (accent bar, geometric shape, arc)
- [x] Staggered scroll-reveal animations (Framer Motion, useInView, custom variant factory)
- [x] Button interactions — whileHover + whileTap matching site-wide button language
- [x] Input focus transitions — border + ring transition on focus
- [x] Fully responsive — single column mobile, 2+1 tablet, 3-col desktop cards
- [x] prefers-reduced-motion respected on all animations
- [x] Zero TypeScript errors, zero ESLint errors

---

### Footer

- [x] Contact section ("Let's connect.")
- [x] Social links (bracket styling, hover animations, proper accessibility)
- [x] Personal signature ("Built by a student. For students.", "Built with ☕")
- [x] Responsive layout (two-column desktop, single-column mobile)
- [x] Staggered fade-up animations on scroll

---

# Responsive Design

- [ ] Mobile optimisation
- [ ] Tablet optimisation
- [ ] Desktop optimisation

---

# SEO

- [x] Repository metadata
- [ ] Open Graph metadata
- [ ] Twitter cards
- [ ] Structured data
- [ ] Sitemap
- [ ] Robots.txt

---

# Authentication

- [ ] User authentication
- [ ] Waitlist account flow

---

# Database

- [x] Prisma schema
- [x] Waitlist model
- [ ] Migrations

---

# Analytics

- [ ] Visitor analytics
- [ ] Waitlist metrics

---

# Testing

- [ ] Form validation
- [ ] Responsive testing
- [ ] Cross-browser testing
- [ ] Accessibility testing

---

# Deployment

- [ ] Production deployment
- [ ] Environment variables
- [ ] Domain connection

---

# Completed Milestones

## Milestone 1

✅ Complete waitlist UI design.

Included:

- Hero
- About
- Students
- Institutions
- Waitlist
- Footer
- Success modal

---

## Milestone 2

✅ Repository setup.

Included:

- GitHub
- README
- Documentation
- Project standards

---

# Current Focus

The team is currently working on:

- Waitlist implementation
- Responsive layouts
- Database setup
- Authentication

---

# Next Milestones

Priority Order

1. Build landing page
2. Build waitlist form
3. Configure Prisma
4. Authentication
5. Database integration
6. Deploy to Vercel
7. Launch waitlist

---

# Known Issues

None.

---

# Notes

The waitlist is intentionally lightweight.

Core Examinr.ai platform development will occur in a separate repository.

---

# AI Update Rules

Whenever an AI assistant completes a task, it must update this document.

Updates should include:

- Completed work
- Current focus
- Remaining tasks
- Any new architectural decisions
- Newly discovered issues

This document should always reflect the current state of the repository.

---

# Development Log

## 2026-07-25

### Completed

- Finished waitlist UI design.
- Added repository documentation.
- Created project standards.
- Added animation guidelines.
- Completed database guidelines.
- Route architecture established (Landing Page, Research, Admin routes).
- Layouts created.
- Placeholder pages added.

### Decisions

- Waitlist and main platform will live in separate repositories.
- Vercel selected for deployment.
- Prisma chosen as the ORM.
- Lucide React selected as the only icon library.
- `/admin/home` simplified to just `/admin` as the dashboard route.

## 2026-07-27

### Completed

- Implemented Hero section and layout exactly as designed with animations.
- Refactored component architecture to move placeholders into dedicated component files.
- **Hero visual refactor** (`hero-refactor.md`) — full implementation:
  - Converted Hero from side-by-side layout to centred vertical composition.
  - Added vertical rhythm: badge → 32px → heading → 28px → paragraph → 36px → buttons → 56px → preview.
  - Heading uses Instrument Serif, font-normal, large display scale (up to 80px).
  - Paragraph constrained to max-w-[550px], muted, Commissioner.
  - Primary + secondary CTA buttons, centred, inline row on sm+.
  - Application preview promoted to full-width floating card (max-w-5xl, rounded-2xl, soft blue shadow, border).
  - Background wave extracted to `BackgroundWave` component (`/src/components/background-wave.tsx`).
  - Wave rendered at page level in `page.tsx`, outside Hero container — never clipped by padding or max-width.
  - Wave: slow horizontal loop (20s), low opacity (0.25), thin vertical scale (0.7), subtle blur.
  - All entrance animations: fade upward (y: 15→0), staggered delays 0–0.4s, ease-out, ≤800ms.
  - TypeScript: zero errors.

### Next Session

- Configure Prisma.
- Build waitlist submission flow.

## 2026-07-28

### Completed

- **Prisma v7 migration** — updated `schema.prisma` to use the `prisma-client` generator with explicit `output = "../src/generated/prisma"` (required by Prisma v7).
- **Driver adapter setup** — installed `pg`, `@prisma/adapter-pg`; created `src/lib/prisma.ts` as a singleton using `PrismaPg` pool adapter (no deprecated `url` field in schema).
- **Dependency fixes** — installed missing `clsx` and `tailwind-merge` used by `src/lib/utils.ts`.
- **Turbopack compatibility** — added `serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"]` to `next.config.ts` so Turbopack does not attempt to bundle the generated Prisma client (which uses `import.meta.url` / Node.js built-ins at module level).
- **CI/Vercel readiness** — updated `build` script in `package.json` to `prisma generate && next build` so the client is always regenerated before Next.js compiles in clean environments.
- **Import path fix** — updated `src/lib/prisma.ts` to import `PrismaClient` via the `@/generated/prisma/client` alias (resolves correctly under `bundler` moduleResolution).
- **Stale cache fix** — removed corrupted `.next/dev/types/routes.d.ts` by clearing the `.next` directory before the final clean build.
- **Verified** — `pnpm run build` completes successfully with zero TypeScript errors across all 5 routes.

### Next Session

- Build waitlist submission flow and connect it to the database.

## 2026-07-28 (Session 2)

### Completed

- **About Section** (`about.md` prompt) — full implementation:
  - Replaced placeholder `About` component with a fully designed section.
  - Section header: `/public/star.svg` decorative stars with very slow independent float animations.
  - Heading: Instrument Serif, large — "Building the future of confident learning." — "Building" in brand blue.
  - Subtitle: Commissioner, uppercase, tight tracking — "STUDY WITH AI WITH PREDICTIVE INTELLIGENCE" — "PREDICTIVE INTELLIGENCE" highlighted in brand blue.
  - Responsive card grid: large left card + right column (top + bottom) on desktop; stacked vertically on mobile.
  - Card 1 (blue): reactive→predictive copy + 5 independently floating blue glass pills.
  - Card 2 (purple): Stop searching/Start preparing copy + 4 independently floating purple glass pills.
  - Card 3 (green): "content" word highlighted green with SVG scribble underline.
  - All animations: staggered fade-up on scroll (useInView, once), GPU-friendly (opacity + transform only), prefers-reduced-motion respected.
  - Hover: subtle radial glow + border colour transition on all cards.
- **Background Wave refactor** — opacity 0.25 → 0.35, duration 20s → 15s, travel ±2% → ±3%, scale-y 0.7 → 0.75.

### Next Session

- Build waitlist submission flow and connect it to the database.

## 2026-07-28 (Session 3)

### Completed

- **Animation Refactor** (`animations-refactor.md`) — pure interaction polish pass:
  - **Navbar collapse performance** — replaced `type: "spring"` with `ease-out` tween (250ms); removed `layout` prop from all inner wrappers to eliminate continuous layout recalculation on scroll; class swaps for collapsed state now handled purely via Tailwind with CSS `transition-all duration-200 ease-out`, keeping all transitions on GPU-composited properties (opacity, transform).
  - **Navbar CTA button** — added `whileHover={{ scale: 1.03 }}` + `whileTap={{ scale: 0.96, boxShadow: "none" }}` with 150ms ease-out transition for tactile press feedback.
  - **Mobile menu button** — added `whileTap={{ scale: 0.92 }}` for consistent icon button press response.
  - **Mobile menu overlay** — entrance/exit animation tightened: `y: -20 → y: -16`, `duration: 0.2` ease-out (was easeInOut).
  - **Hero primary CTA** — converted from `<button>` to `<motion.button>` with `whileHover={{ scale: 1.03 }}` + `whileTap={{ scale: 0.96, boxShadow: "none" }}`.
  - **Hero secondary CTA** — same interaction language as primary; `whileHover={{ scale: 1.03 }}` + `whileTap={{ scale: 0.96 }}`.
  - All press interactions share a single `BUTTON_TRANSITION` constant (`{ duration: 0.15, ease: "easeOut" }`) for consistency.
  - `will-change-transform` applied to all animated buttons to promote GPU layers.
  - Zero layout or styling changes made.
  - Build verified: `pnpm run build` → zero TypeScript errors, all 5 routes compile cleanly.

### Next Session

- Build waitlist submission flow and connect it to the database.

## 2026-07-28 (Session 4)

### Completed

- **Students Section** (`students.md` prompt) — full implementation:
  - Replaced placeholder `Students` component with fully designed "Stop studying harder." section.
  - Section header: right-aligned, `/public/star.svg` decorative stars with independent very-slow float animations.
  - Heading: Instrument Serif, large (up to 64px) — "Stop studying harder." — "Stop" in brand blue.
  - Subtitle: Commissioner, uppercase, tight tracking — "START STUDYING SMARTER" — "STUDYING SMARTER" highlighted in brand blue.
  - Three feature cards in a horizontal responsive grid (1-col → 2-col → 3-col).
  - Card 1: sidebar navigation mock UI with active "Resources" item and glowing search highlight pointing to "Everything you are looking for".
  - Card 2: prompt bubble ("Organisation of Life") surrounded by 6 independently floating capability pills (Analysis, Quizzes, Notes, Video tutorials, Memory tricks, Flash cards) — no synchronized movement.
  - Card 3: institution selector mock with UPSS, WAEC, Miracle centers buttons and join CTA.
  - All animations: staggered fade-up on scroll (useInView, once), GPU-friendly (opacity + transform only), prefers-reduced-motion respected.
  - Hover: subtle y-lift (-4px, 250ms ease-out) + radial glow + border colour transition on all cards.
  - Animation stagger uses Framer Motion `custom` prop variant factory — no duplicate `transition` props.
  - Build verified: `pnpm run build` → zero TypeScript errors, all 5 routes compile cleanly.

### Next Session

- Build waitlist submission flow and connect it to the database.

## 2026-07-28 (Session 5)

### Completed

- **Institutions Section** (design screenshot reference) — full implementation:
  - Replaced placeholder `Institutions` component with fully designed "Stop teaching alone." section.
  - Section header: left-aligned, `/public/star.svg` decorative stars with independent very-slow float animations.
  - Heading: Instrument Serif, large (up to 64px) — "Stop teaching alone." — "Stop" in brand blue.
  - Subtitle: Commissioner, uppercase, tight tracking — "BUILD A SMARTER LEARNING ECOSYSTEM" — "LEARNING ECOSYSTEM" highlighted in brand blue.
  - Three feature cards in a horizontal responsive grid (1-col → 2-col → 3-col).
  - Card 1: resource list mock UI — Biology, Mock Exam, Teacher Guide, Assignment each with access level badge (Public, SSS Only, Science Dept, Private Class).
  - Card 2: analytics bar chart mock — "Most Difficult Topics" with animated bars for Cell Division, Genetics, Ecology.
  - Card 3: CBT exam dashboard — UPSS Mock CBT with "Ongoing" badge, Questions/Students/Time stats.
  - All animations: staggered fade-up on scroll (useInView, once), GPU-friendly (opacity + transform only), prefers-reduced-motion respected.
  - Hover: subtle y-lift (-4px, 250ms ease-out) + radial glow + border colour transition on all cards.
  - Animation stagger uses Framer Motion `custom` prop variant factory — no duplicate `transition` props.
  - Build verified: `pnpm run build` → zero TypeScript errors, all 5 routes compile cleanly.

### Next Session

- Connect live database and run migrations for production deployment.

## 2026-07-28 (Session 6)

### Completed

- **Waitlist CTA Section** (`waitlist.md` prompt) — full implementation:
  - Replaced placeholder `Waitlist` component with fully designed CTA section.
  - Section header: centered, `/public/star.svg` decorative stars with independent very-slow float animations.
  - Heading: Instrument Serif, large (up to 64px) — "Ready to study differently?" — "Ready" in brand blue.
  - Supporting paragraph: Commissioner, centered, muted white.
  - Horizontal waitlist form: dark-surface email input with soft blue focus ring + "Join Waitlist" button (reuses exact site-wide button gradient + whileHover/whileTap interactions).
  - Client-side + server-side email validation with clear error messages.
  - utm_source capture from URL query string — saved to DB on submission, stored NULL when absent.
  - Supporting info: "Early beta opens..." notice + overlapping avatar stack + live waitlist count fetched from DB.
  - Success modal: scale-in AnimatePresence animation, CheckCircle icon, share (Web Share API) + copy-link (Clipboard API fallback) actions, Escape key dismiss, backdrop click dismiss.
  - Three benefit cards in responsive grid (1-col → 2+1 tablet → 3-col desktop).
  - Card 1 (Early access): left-edge blue gradient accent bar.
  - Card 2 (Your feedback): floating blue outer ring + rotating inner diamond + satellite dot decoration.
  - Card 3 (Every signup): animated arc / partial-ring SVG positioned lower-right.
  - API route (`/api/waitlist`) — POST (upsert entry + utm_source) + GET (live count).
  - All animations: staggered fade-up on scroll (useInView, once), GPU-friendly, prefers-reduced-motion respected.
  - Hover: subtle y-lift (-4px, 250ms ease-out) + radial glow + border colour transition on all cards.
  - Build verified: `pnpm run build` → zero TypeScript errors, all routes compile cleanly.

### Next Session

- Implement Footer.

## 2026-07-28 (Session 7)

### Completed

- **Footer Section** (`footer.md` prompt) — full implementation:
  - Replaced placeholder `Footer` component with fully designed footer section.
  - Overall layout: large rounded container (`bg-[#0D1929]/80`, `rounded-[36px]`) with generous padding.
  - Left Column: "Built by a student. For students." (Commissioner, muted), main heading "Hi, I'm Praise." (Commissioner + Instrument Serif italic for "Praise."), "Built with ☕ and too many late nights."
  - Right Column: three short paragraphs explaining the motivation behind Examinr.ai.
  - Bottom area: "Let's connect." (Instrument Serif italic) with a horizontal divider (`bg-white/[0.08]`).
  - Social links: inline bracket styling (`[ GITHUB ]`, etc.) with hover interaction (text turns blue, underline fades in, subtle 2px upward movement).
  - Copyright info right-aligned (desktop) / left-aligned (mobile).
  - Accessibility: `rel="noopener noreferrer"` and `aria-label`s on all external links.
  - Animations: staggered fade-up on scroll (`useInView`, once) for a calm, premium feel.
  - Responsive: two columns on desktop, single column stacking on mobile with left alignment.
  - Build verified: zero TypeScript errors, zero ESLint errors.

### Next Session

- Run Prisma migration and connect to production Neon database.
- Deploy to Vercel.

## 2026-07-31 (Animation Polish)

### Completed

- **Animation & Responsive Polish Pass**:
  - Extracted `DecorativeStar` component to avoid duplication and implemented a scroll-driven velocity animation using `framer-motion`. Stars accelerate smoothly on scroll down, reverse on scroll up, and gracefully return to baseline speed.
  - Improved About section pill animations by applying `will-change-transform` for hardware-accelerated, jitter-free rendering.
  - Refactored Waitlist form layout to separate the input and button into distinct blocks on mobile, while retaining the unified pill layout on desktop.

### Next Session

- Deploy to Vercel and verify animations in production.

## 2026-08-01 (Footer Icons Refactor)

### Completed

- **Simple Icons Integration**:
  - Installed `simple-icons` to leverage official brand SVGs.
  - Replaced text-based social links (GITHUB, EMAIL, X, TIKTOK, WHATSAPP) in the Footer with their respective SVG icons (`siGithub`, `siGmail`, `siX`, `siTiktok`, `siWhatsapp`).
  - Preserved original layout, spacing, and responsive behavior (icons scale with font size using `w-[1.2em] h-[1.2em]`).
  - Retained the existing hover interactions and custom animated underlines.
  - Verified accessibility by preserving `aria-label`s and adding `<title>` inside SVGs.
  - Build verified: zero TypeScript errors, zero ESLint errors.

### Next Session

- Run Prisma migration and connect to production Neon database.
- Deploy to Vercel.

## 2026-08-01 (User Avatars)

### Completed

- **Avatar Population**:
  - Replaced the placeholder empty circles in the `navbar.tsx` avatar stack with `user-1.jpg`, `user-2.jpg`, and `user-3.jpg` using Next.js `Image` components.
  - Replaced the initial-based placeholder avatars in the `waitlist.tsx` section with the full sequence of user images (`user-1.jpg` through `user-5.jpg`).
  - Preserved all existing avatar constraints (sizes, borders, overlapping layout, and responsive behavior).
  - Build verified: zero TypeScript errors, zero ESLint errors.

### Next Session

- Run Prisma migration and connect to production Neon database.
- Deploy to Vercel.

## 2026-08-02 (UTM Persistence)

### Completed

- **UTM Persistence Implementation** (`utm.md` prompt):
  - Renamed `utmSource` to `utm` in `prisma/schema.prisma` `WaitlistUser` model.
  - Updated `src/app/api/waitlist/route.ts` to expect and save the `utm` field, saving `null` if absent.
  - Implemented `sessionStorage` in `Waitlist` component (`src/components/waitlist/waitlist.tsx`) to capture and persist the `?utm=` URL parameter across the session, preventing data loss if users navigate before submitting.
  - Ensured the existing UI, email flow, and form validation remain untouched.

### Next Session

- Run Prisma migration (currently failing due to unreachable Neon database) and connect to production.
- Deploy to Vercel.