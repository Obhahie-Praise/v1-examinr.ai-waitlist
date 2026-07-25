# Route & Layout Foundation

Your task is to establish the application's routing architecture.

This task is **not** about implementing functionality. It is only responsible for creating the route structure, layouts, placeholders, and navigation foundation for the Examinr.ai Waitlist.

Before writing code:

* Read **AGENTS.md**.
* Read every relevant document inside `/docs`.
* Follow the documented architecture, coding standards, and UI guidelines.
* Stay strictly within the scope of this task.

---

# Objective

Create the application's routing structure and shared layouts.

Every route should render successfully with an appropriate placeholder.

Do not implement business logic or UI beyond what is required to establish the application structure.

---

# Required Routes

## Landing Page

```
/
```

The public marketing website.

This will contain:

* Hero
* About
* Student Section
* Institution Section
* Waitlist
* Footer

For now, render a simple placeholder.

---

## Research

```
/research
```

This page will showcase Examinr.ai's research, papers, technical articles, and educational insights.

The final implementation will contain tabbed navigation.

Do **not** implement the tabs yet.

Only prepare the page structure and placeholder content.

---

# Admin

```
/admin
```

The admin section should use its own layout.

Create the following routes.

---

## Dashboard

```
/admin
```

or

```
/admin/home
```

Depending on the chosen routing architecture.

This is the landing page for administrators.

Render placeholder content only.

---

## Settings

```
/admin/settings
```

Render placeholder content.

No settings functionality should be implemented.

---

# Layouts

Create reusable layouts where appropriate.

Expected structure:

```
app/

├── layout.tsx
├── page.tsx

├── research/
│   ├── layout.tsx
│   └── page.tsx

└── admin/
    ├── layout.tsx
    ├── page.tsx
    ├── home/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

Layouts should be clean, reusable, and prepared for future development.

---

# Placeholders

Every page should include:

* Page title
* Short description
* Clear indication of which route is being viewed

Keep placeholder content minimal.

Do not design the final UI.

---

# Navigation

Prepare the routing structure so future navigation can be implemented easily.

Do not implement:

* authentication
* protected routes
* active states
* navigation components

Those will be handled in future tasks.

---

# Styling

Follow the project's design system.

Use the configured fonts and colour variables.

Keep layouts clean and responsive.

Avoid unnecessary styling.

---

# Verification

Before completing the task, verify:

* Every route renders successfully.
* Layouts are correctly nested.
* No routing conflicts exist.
* No unnecessary files were created.
* The project builds successfully.
* No linting errors exist.

---

# Documentation

When finished:

Update `docs/progress.md`.

Include:

* Route architecture established.
* Layouts created.
* Placeholder pages added.
* Any architectural decisions made during implementation.

The repository should now have a clean, scalable routing foundation ready for feature development.
