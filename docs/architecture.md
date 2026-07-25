# Project Architecture

## Overview

This project is the official public waitlist for Examinr.ai.

It is built as a modern, production-ready Next.js application with a focus on performance, maintainability, accessibility, and excellent developer experience.

The project intentionally keeps its dependency footprint small. Before introducing any new package, always prefer the existing stack.

---

# Core Stack

## Framework

- Next.js (App Router)
- React
- TypeScript

---

## Styling

- Tailwind CSS

No additional CSS frameworks should be introduced.

---

## Database

Prisma ORM

Prisma is the single source of truth for all database access.

Avoid writing raw SQL unless absolutely necessary.

---

## Database Provider

PostgreSQL

---

## Icons

Lucide React

All icons throughout the project should come from Lucide.

Do not mix icon libraries.

---

## Fonts

Geist Sans

Geist Mono (where appropriate)

Typography should remain consistent throughout the application.

---

## Forms

React Hook Form

Use React Hook Form for all user input.

Avoid custom form state management unless necessary.

---

## Validation

Zod

All form validation should use shared Zod schemas.

Whenever possible, reuse the same schema on both the client and server.

---

## Animations

Framer Motion

Animations should remain subtle.

Prioritise performance over visual effects.

---

## Theme

next-themes

Used for theme management where applicable.

---

## Utility Libraries

clsx

tailwind-merge

Used for composing Tailwind class names.

Avoid manually concatenating class strings.

---

## Date Handling

date-fns

Avoid introducing additional date libraries.

---

## Environment Variables

dotenv (handled through Next.js)

Never hardcode:

- API keys
- Database URLs
- Secrets
- Tokens

---

# Folder Structure

```
app/

components/

lib/

hooks/

prisma/

public/

styles/

types/

utils/

docs/
```

Every folder should have a single clear responsibility.

---

# Component Architecture

Components should be organised by feature rather than by size.

Example

```
components/

    hero/

    about/

    students/

    institutions/

    waitlist/

    footer/
```

Avoid large shared folders containing unrelated components.

---

# Utilities

Shared utilities belong inside:

```
lib/

utils/
```

Do not duplicate helper functions.

---

# Assets

Static assets belong in:

```
public/
```

Optimise images before adding them.

Avoid unnecessarily large assets.

---

# API

Use Next.js Route Handlers.

Each endpoint should perform one clear responsibility.

---

# State Management

Prefer:

- React state
- Context API

Do not introduce global state libraries unless the project genuinely requires them.

---

# Error Handling

Every server action and API route should:

- validate input
- catch unexpected errors
- return meaningful responses

Never silently fail.

---

# Performance

Optimise for:

- fast first load
- minimal JavaScript
- image optimisation
- accessibility
- SEO

Avoid unnecessary dependencies.

---

# Dependency Policy

Before adding any package, ask:

1. Can this already be solved with the existing stack?

2. Does Next.js already provide this functionality?

3. Can it be implemented with native browser APIs?

If the answer is yes, do not install another dependency.

---

# AI Assistant Rules

When contributing to this project:

- Respect the existing architecture.
- Do not introduce additional frameworks.
- Do not replace existing libraries.
- Reuse utilities whenever possible.
- Keep the dependency tree small.
- Maintain a production-ready codebase at all times.

The goal is consistency, simplicity, and long-term maintainability.