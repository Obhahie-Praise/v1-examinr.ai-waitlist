# Coding Standards

## Philosophy

This project prioritises readability, consistency, maintainability, and developer experience over clever implementations.

Every line of code should be easy to understand six months from now.

Whenever possible:

- Prefer clarity over complexity.
- Prefer composition over duplication.
- Prefer simple solutions over premature optimisation.

---

# General Principles

## Keep Components Small

A component should have one clear responsibility.

If a component becomes difficult to understand or exceeds roughly 200 lines, consider splitting it into smaller components.

---

## Reuse Before Creating

Before creating a new component, utility, or hook:

- Search the project.
- Reuse existing implementations whenever appropriate.
- Extend existing patterns instead of introducing new ones.

Consistency is more valuable than novelty.

---

## Keep Files Organised

Group related files together.

Example:

```
components/
    waitlist/
        hero.tsx
        about.tsx
        students.tsx
        institutions.tsx
```

Avoid dumping unrelated components into a single directory.

---

# Naming Conventions

## Components

Use PascalCase.

```
HeroSection.tsx

StudentCard.tsx

WaitlistForm.tsx
```

---

## Files

Use kebab-case unless exporting a React component.

```
button.tsx

hero.tsx

waitlist-form.tsx
```

---

## Variables

Use camelCase.

```
waitlistPosition

isLoading

userEmail
```

Avoid abbreviations.

Bad

```
usr

btn

itm
```

Good

```
user

button

resource
```

---

## Constants

Use UPPER_SNAKE_CASE.

```
MAX_WAITLIST_SIZE

NAVIGATION_ITEMS
```

---

# TypeScript

Always use TypeScript.

Avoid using:

```
any
```

Prefer:

- interfaces
- type aliases
- generics
- inferred types

When unsure, create a proper type instead of falling back to `any`.

---

# React

Prefer functional components.

Use hooks.

Avoid class components.

---

## Props

Destructure props.

Good

```tsx
function Hero({ title }: HeroProps) {}
```

Avoid

```tsx
function Hero(props) {}
```

---

# Styling

Use Tailwind CSS.

Avoid inline styles.

Prefer utility classes over custom CSS.

If styling becomes repetitive, extract a reusable component.

---

# UI Components

Always use existing shadcn/ui components before creating custom ones.

Maintain a consistent design language throughout the application.

---

# Icons

Use Lucide React.

Avoid mixing icon libraries.

---

# State Management

Prefer local state first.

Only introduce global state when multiple unrelated components require shared data.

Avoid unnecessary complexity.

---

# Forms

Validate both client-side and server-side.

Display clear error messages.

Never silently fail.

---

# Authentication

Authentication is handled by Better Auth.

Never bypass authentication logic.

Protected routes should always verify the user's session.

---

# API Routes

Keep API routes focused.

Each route should have one clear responsibility.

Return consistent response formats.

Handle errors gracefully.

---

# Error Handling

Never ignore errors.

Always:

- log unexpected errors
- show meaningful feedback
- fail gracefully

---

# Comments

Code should explain itself.

Only comment:

- complex business logic
- important architectural decisions
- workarounds

Avoid comments that simply describe obvious code.

Bad

```ts
// Increment count
count++;
```

Good

```ts
// Queue positions are immutable once assigned.
```

---

# Performance

Optimise only when necessary.

Do not sacrifice readability for micro-optimisations.

Lazy load large components when appropriate.

Optimise images.

Avoid unnecessary re-renders.

---

# Accessibility

Every interactive element must be keyboard accessible.

Buttons must have clear labels.

Images should include alt text where appropriate.

Maintain sufficient colour contrast.

---

# Git Workflow

Never commit directly to production.

Feature development should happen in dedicated branches.

Use descriptive commit messages.

Examples

```
feat: add waitlist success modal

fix: resolve mobile navigation overflow

refactor: simplify hero layout

docs: update README
```

---

# Pull Requests

Before opening a Pull Request:

- Ensure the project builds successfully.
- Run linting.
- Test affected functionality.
- Keep changes focused.
- Include a clear description.

---

# Code Reviews

Every Pull Request should improve the project.

Review for:

- readability
- consistency
- maintainability
- performance
- accessibility

Not just correctness.

---

# Dependencies

Avoid introducing new dependencies unless they provide significant value.

Prefer the existing stack whenever possible.

---

# Design Consistency

Every UI addition should feel like it belongs.

Do not introduce:

- inconsistent spacing
- new colour palettes
- different border radii
- conflicting typography
- excessive animations

The user experience should remain cohesive across the entire application.

---

# Definition of Done

A feature is complete only when it:

- Works correctly.
- Is responsive.
- Handles loading and error states.
- Meets accessibility expectations.
- Passes linting.
- Builds successfully.
- Matches the existing design language.
- Includes any necessary documentation updates.

Quality is measured by the overall experience, not just by working code.