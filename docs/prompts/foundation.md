# Foundation Setup

Your task is to set up the foundational architecture for the Examinr.ai Waitlist project.

Before writing or modifying any code:

* Read **AGENTS.md**.
* Read and understand every document inside the `/docs` directory.
* Follow every documented standard without exception.
* Verify existing implementations before creating new ones.
* Stay strictly within the documented project scope.

---

## Objective

Prepare the project for development by configuring the application's core infrastructure.

This task should **not** build any UI beyond what is required for the foundation.

---

## 1. Prisma & Database Foundation

Install and configure **Prisma ORM** using **PostgreSQL**.

Generate the initial Prisma schema and create the project's first migration.

This repository is a **waitlist**, not the main Examinr.ai platform.

The onboarding experience must remain as frictionless as possible. The only information collected from users at this stage is their email address. All additional profile information will be collected later when the full platform launches.

### Create the Initial `WaitlistUser` Model

The schema should remain intentionally minimal.

Required fields:

* `id`
* `email` *(unique)*
* `utmSource` *(optional)*
* `joinedAt`
* `updatedAt`

### UTM Source Tracking

The system should support a `utm_source` query parameter.

Examples:

```
?utm_source=instagram

?utm_source=tiktok

?utm_source=waitlist-user

?utm_source=school
```

When a visitor joins the waitlist:

* If a `utm_source` parameter exists, save its value in the database.
* If no parameter exists, leave the field `null`.

This information will later be used to understand which traffic sources generate the most waitlist signups.

No additional UTM parameters (such as `utm_medium`, `utm_campaign`, or `utm_content`) should be implemented unless explicitly requested in the future.

### Waitlist Position

Do **not** store a user's waitlist position in the database.

A user's position should always be calculated dynamically based on the chronological order of registrations (using `joinedAt` or the database ordering).

This prevents duplicate data, avoids race conditions, and ensures positions always remain accurate.

### Database Standards

* Follow every rule defined in `docs/database.md`.
* Use Prisma as the single source of truth.
* Generate a proper migration.
* Use automatic timestamps.
* Keep the schema clean, minimal, and scalable.
* Do not introduce speculative fields or future platform models.

The goal of this foundation is to establish a simple, production-ready waitlist database that can evolve naturally as Examinr.ai grows.

# 2. Icon Library

Install and configure:

Lucide React

This will be the only icon library used throughout the project.

No additional icon libraries should be introduced.

---

# 3. Motion

Install Motion (formerly Framer Motion).

Prepare the project for future animations.

Do **not** animate the application yet.

The project should support both:

* Motion components
* Carefully written custom JavaScript animations when Motion is not appropriate

Animations must always follow the guidelines defined in `docs/animations.md`.

---

# 4. Typography

Configure the following fonts using Next.js font optimisation.

Primary UI Font

Commissioner

Display Font

Instrument Serif

Secondary Display Font

Instrument Sans

Expose all fonts through CSS variables.

Example naming:

* --font-primary
* --font-display
* --font-sans

Commissioner should become the default font used throughout the application.

Instrument Serif should only be used for premium display typography.

Instrument Sans should be available for future marketing and branding use.

---

# 5. Global Theme Variables

Configure the project's global stylesheet to expose the following CSS custom properties.

```css
:root {
  /* Backgrounds */
  --app-bg: #0E1318;
  --menus: #101112;
  --chat-input: #303030;
  --card: #112038;
  --trans-bg: #FFFFFF;

  /* Typography */
  --text-accent: #FFFFFF;
  --light-text-accent: #000000;
  --white-text: #FFFFFF;
  --light-dull-text: #616161;
  --text-highlight: #3B82F6;

  /* Borders */
  --light-border: #FFFFFF;

  /* Interactive */
  --dark-select: #373737;
  --link-select: #11181F;
  --small-active-tab: #2C5FB2;

  /* Inputs */
  --solid-input: #FFFFFF;

  /* Feedback */
  --success: #0FA958;
  --error-red: #FF0000;
}
```

These variables should become the single source of truth for colours across the project.

Do not hardcode colour values elsewhere.

---

# 6. Utilities

Verify the project includes the utility libraries defined in the architecture documentation.

Configure any required helper utilities.

Ensure the project structure follows the documented architecture.

---

# 7. Verification

Before completing the task, verify:

* Prisma is configured correctly.
* The migration runs successfully.
* Fonts load correctly.
* CSS variables are globally available.
* Motion is installed correctly.
* Lucide React is configured.
* No unnecessary dependencies were introduced.
* The project builds successfully.
* No linting errors exist.

---

# 8. Documentation

When finished:

Update `docs/progress.md`.

Record:

* Foundation completed.
* Prisma configured.
* Waitlist schema created.
* Fonts configured.
* Motion installed.
* Lucide React installed.
* Global theme variables configured.
* Any implementation decisions made during setup.

The repository should be left in a clean, production-ready state, ready for feature development.
