# Hero Section Implementation

## Before You Begin

Before making any changes to the codebase:

1. Read **AGENTS.md** completely.
2. Read and understand every document inside the `/docs` directory.
3. Follow every documented protocol, architecture decision, coding standard, database rule, UI guideline, animation rule and workflow requirement.
4. Verify the existing implementation before modifying or creating code.
5. Stay strictly within the scope of this task.
6. Update `docs/progress.md` once the implementation is complete.

---

## Objective

Implement the landing page hero section exactly as designed.

Before writing any code, inspect and understand the following design assets:

- `/design_files/landing_page.svg` ← Source of truth for the hero layout, spacing, typography, positioning and composition.
- `/public/hero.svg` ← Hero illustration.
- `/public/wave_accent.svg` ← Animated background wave.

The implementation must faithfully match the design. Do not redesign, reinterpret or approximate any visual decisions unless absolutely necessary for responsiveness.

---

## Hero Layout

Build the hero exactly as shown in the design.

Pay close attention to:

- Overall composition
- Typography hierarchy
- Spacing
- Alignment
- Section height
- Positioning of decorative elements
- Hero illustration placement
- Background wave placement
- CTA positioning
- Responsive scaling

Desktop should match the SVG as closely as possible.

For tablet and mobile, preserve the same visual hierarchy while adapting the layout naturally.

---

## Background Wave

The wave accent is located at:

```
/public/wave_accent.svg
```

It should sit behind the hero content exactly as shown in the design.

Implement a subtle premium animation.

Animation characteristics:

- Slow
- Organic
- Seamless
- Elegant
- Almost imperceptible
- Never distracting

The animation should resemble gentle flowing fabric or soft water movement.

The preferred approach is to animate the SVG itself while preserving its original structure.

If the SVG structure makes that impractical, use lightweight JavaScript or Motion to produce an equivalent effect.

Do **not** use:

- GIFs
- Videos
- Lottie
- Canvas
- Three.js

Performance must remain excellent.

---

## Hero Illustration

Use:

```
/public/hero.svg
```

Position it exactly as shown in the design.

Implement a subtle floating animation:

- Slow movement
- Smooth easing
- Infinite loop
- Very small movement range

The illustration should feel alive without drawing attention to itself.

---

## Hero Entry Animation

Follow the project's animation rules defined in `docs/animations.md`.

Suggested sequence:

1. Navigation appears.
2. Hero text fades and moves upward.
3. Hero illustration fades in with a slight upward movement.
4. Background wave animation begins.
5. Decorative elements appear last.

Animations should overlap naturally and feel smooth, premium and unobtrusive.

---

## Responsiveness

Desktop implementation should closely match the supplied design.

Tablet should preserve proportions while adapting spacing.

Mobile should:

- Remain visually clean.
- Avoid overflow.
- Stack naturally where appropriate.
- Preserve typography hierarchy.
- Maintain comfortable spacing.

Do not simply shrink the desktop layout.

Design an intentional mobile experience.

---

## Performance

- Use Motion where appropriate.
- Use CSS transitions for lightweight interactions.
- Keep animations GPU accelerated.
- Avoid unnecessary re-renders.
- Maintain a smooth 60 FPS experience.

---

## Validation

Before completing the task, verify:

- The hero faithfully matches `/design_files/landing_page.svg`.
- Typography follows the project's design system.
- Spacing is consistent with the design.
- Animations follow `docs/animations.md`.
- Desktop, tablet and mobile layouts behave correctly.
- No TypeScript, ESLint or build errors exist.

Finally, update `docs/progress.md` with the implementation details.