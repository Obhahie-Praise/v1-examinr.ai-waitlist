# Implement — "For Institutions" Section

Before making any changes, read and understand every document inside `/docs`, especially:

- `AGENTS.md`
- `ui.md`
- `animations.md`
- `code-standards.md`

Follow every existing project protocol.

Update `/docs/progress.md` after completing this task.

---

# Objective

Implement the Institutions section exactly as designed in:

```
/design_files/landing_page.svg
```

This section comes immediately after the Student Features section.

Implement it as its own reusable component.

Example:

```
components/landing/InstitutionsSection.tsx
```

---

# Section Layout

The section mirrors the previous feature section.

Structure:

- Left-aligned heading
- Supporting subtitle
- Three feature cards displayed horizontally

Desktop:

```
Heading

Card | Card | Card
```

Tablet and mobile should stack naturally while preserving spacing and proportions.

Maintain the same generous whitespace used throughout the landing page.

---

# Section Heading

Use Instrument Serif.

Large typography.

Text:

> Stop teaching alone.

The word

```
Stop
```

uses the brand blue.

The remaining text is white.

Use:

```
/public/star.svg
```

for the decorative stars exactly like the design.

Stars should animate subtly following the existing animation rules.

---

# Subtitle

Uppercase Commissioner.

Text:

```
BUILD A SMARTER LEARNING ECOSYSTEM
```

Only

```
LEARNING
```

uses the brand blue.

Everything else remains white.

---

# Feature Cards

All cards should follow the same design language established throughout the landing page.

Requirements:

- dark card surface
- soft borders
- subtle radial lighting
- premium shadows
- consistent border radius
- hover animation matching previous sections

No playful animations.

Everything should feel calm, confident and premium.

---

# Card One

## Heading

```
Every resource.
```

Supporting text:

```
Exactly where it belongs.
```

---

Illustrate a resource management interface.

Resources displayed:

- Biology
- Mock Exam
- Teacher Guide
- Assignment

Each resource should have a category badge on the right.

Example:

- Public
- SSS3 Only
- Science Dept.
- Private Class

The selected state should use subtle blue accents.

---

Body text:

```
Upload once. Publish trusted materials to the right learners. Control who can access every note, PDF, assignment or guide—whether it's public, institution-wide or private.
```

---

# Card Two

## Heading

```
Learning leaves clues.
```

Supporting text:

```
We help you read them.
```

---

Illustrate a simple analytics panel.

Title:

```
Most Difficult Topics
```

Display horizontal progress indicators.

Topics:

- Cell Division
- Genetics
- Ecology

Each should show different completion percentages similar to the design.

Blue progress bars.

Dark tracks.

---

Body text:

```
Every study session reveals patterns. Discover struggling topics, identify learning gaps, and understand what students need before the examination arrives.
```

---

# Card Three

## Heading

```
One platform.
```

Supporting text:

```
Every examination.
```

---

Illustrate an examination management card.

Title:

```
UPSS Mock CBT
```

Status badge:

```
Ongoing
```

Statistics:

- Questions — 40
- Students — 284
- Time — 60 min

The interface should resemble an examination dashboard rather than a table.

---

Body text:

```
Create CBTs, publish online assessments, generate questions with AI and manage examinations from one place.
```

---

# Animations

Follow `/docs/animations.md`.

Include:

- staggered reveal
- subtle hover elevation
- progressive chart animation
- smooth card entrance
- soft lighting transitions

Progress bars should animate from 0% to their final values only once when entering the viewport.

Keep all motion smooth and premium.

Avoid:

- bounce
- elastic effects
- exaggerated scaling

---

# Responsiveness

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

Cards should stack naturally on smaller screens.

Maintain equal spacing and consistent typography.

Nothing should overflow.

---

# Consistency

This section should visually feel like a continuation of the previous Student Features section.

Spacing, typography, animation timing, card sizing and interaction should all remain consistent across both sections.

Users should immediately recognise both sections as belonging to the same design system.

---

# Final Verification

Before completing:

- Matches the SVG as closely as possible.
- Uses `/public/star.svg`.
- Implemented as its own reusable component.
- Three feature cards match the supplied copy and layout.
- Progress bars animate once.
- Responsive across all breakpoints.
- No TypeScript errors.
- No ESLint errors.
- No console warnings.

Finally, update `/docs/progress.md`.