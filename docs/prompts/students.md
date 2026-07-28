# Implement — "Stop Studying Harder" Section

Before making any changes, read and understand every document inside `/docs`, especially:

- `AGENTS.md`
- `ui.md`
- `animations.md`
- `code-standards.md`

Follow every existing project protocol.

Update `/docs/progress.md` after completing this task.

---

# Objective

Implement the next landing page section exactly as designed in:

```
/design_files/landing_page.svg
```

This section follows the About section.

It must be implemented as its own reusable component.

Example:

```
components/landing/StudySmarterSection.tsx
```

Do not place implementation directly inside the page.

---

# Section Layout

The layout consists of:

- Right-aligned heading
- Supporting subtitle
- Three feature cards displayed horizontally

Desktop:

```
Heading

Card | Card | Card
```

Tablet and Mobile:

Cards should stack gracefully while preserving spacing and hierarchy.

Maintain generous whitespace exactly like the design.

---

# Section Heading

Use Instrument Serif.

Large typography.

Text:

> Stop studying harder.

The word

```
Stop
```

uses the brand blue.

The remaining text is white.

Decorate the heading using:

```
/public/star.svg
```

Place the stars exactly as shown in the design.

Animate them subtly using the existing animation system.

---

# Subtitle

Directly beneath the heading.

Uppercase Commissioner.

Text:

```
START STUDYING SMARTER
```

Only

```
STUDYING SMARTER
```

uses the brand blue.

The rest remains white.

---

# Feature Cards

All three cards share the same visual language:

- dark surface
- subtle border
- soft glass appearance
- rounded corners
- gentle radial lighting
- premium shadows

Hover behaviour should follow the existing animation rules.

No exaggerated movement.

---

# Card One

## Heading

```
Stop studying everything.
```

## Supporting line

```
Study what matters.
```

---

Display the supplied UI illustration matching the SVG.

The mock interface should resemble a navigation sidebar where:

Resources is selected.

A glowing search highlight points toward:

```
Everything you are looking for
```

---

Body text:

```
Instead of reviewing everything equally, Examinr analyzes years of examination patterns to identify the topics most likely to appear and the areas you should prioritise first.
```

---

# Card Two

## Heading

```
One prompt.
```

## Supporting line

```
An entire study session.
```

---

Illustrate a prompt input surrounded by floating capability tags.

Centre prompt:

```
Organisation of Life
```

Floating tags:

- Analysis
- Quizzes
- Notes
- Video tutorials
- Memory tricks
- Flash cards

These pills should float gently and independently.

No synchronized movement.

---

Body text:

```
Generate notes, quizzes, essay questions, flashcards, memory tricks and video recommendations from one request.
```

---

# Card Three

## Heading

```
One classroom shouldn't define your education.
```

## Supporting line

```
Learn beyond your institution.
```

---

Illustrate a simple institution selector.

Label:

```
Your institutes
```

Buttons:

- UPSS
- WAEC
- Miracle centers

Below:

```
Join the institutes and access their resources
```

---

Body text:

```
Access trusted resources shared by schools, educators, universities, and the wider learning community—all in one place.
```

---

# Animations

Follow `/docs/animations.md`.

Include:

- staggered reveal when entering viewport
- subtle card hover elevation
- floating pills animation
- soft glow transitions
- smooth opacity transitions

Animation should communicate confidence.

Avoid:

- bounce
- overshoot
- excessive scaling
- playful movement

Everything should remain premium and understated.

---

# Responsiveness

Maintain visual balance across:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

Cards should reflow naturally without becoming cramped.

Typography should scale proportionally.

---

# Final Verification

Before completing:

- Matches the SVG as closely as possible.
- Uses `/public/star.svg` for decorative stars.
- Implemented as its own reusable component.
- Three feature cards match the layout and copy.
- Floating elements animate independently.
- Responsive behaviour is polished.
- No TypeScript errors.
- No ESLint errors.
- No console warnings.

Finally, update `/docs/progress.md`.