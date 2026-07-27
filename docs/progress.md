# Progress

> Last Updated: 2026-07-27

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

---

### About

- [x] About section
- [x] Typography layout
- [x] Product positioning

---

### Student Section

- [x] Section layout
- [x] AI Workspace preview
- [x] Benefit cards

---

### Institution Section

- [x] Institution messaging
- [x] Benefit cards
- [x] Illustration

---

### Waitlist

- [x] Registration form
- [x] Benefit cards
- [x] Success modal
- [x] Share functionality
- [x] Secondary CTA

---

### Footer

- [x] Contact section
- [x] Social links
- [x] Personal signature

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