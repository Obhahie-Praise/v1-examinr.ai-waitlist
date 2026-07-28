# Refactor — Landing Page About Section

Before making any changes, read and understand every document inside `/docs`, especially:

- `AGENTS.md`
- `ui.md`
- `animations.md`
- `code-standards.md`

Follow every existing project protocol.

Do **not** modify any other section of the landing page.

Update `/docs/progress.md` once this task is complete.

---

# Objective

Implement the **About Section** exactly as designed in:

```
/design_files/landing_page.svg
```

This section immediately follows the Hero section.

It should remain its own reusable React component.

Example:

```
components/landing/AboutSection.tsx
```

The page should simply compose the component.

---

# Background Wave Improvements

Refactor the animated wave introduced in the Hero.

The wave should now feel more alive.

Requirements:

- Increase its visibility slightly.
- Increase opacity subtly.
- Increase animation speed slightly.
- Keep the movement elegant and premium.
- Avoid exaggerated motion.
- Continue using smooth easing.
- No repetitive or robotic looping.
- Keep GPU-friendly performance.

The animation should still feel like a luxury product rather than a flashy landing page.

The wave continues to live in the shared layout/background layer so it is unaffected by page padding or margins.

---

# Section Header

The section begins with a large heading.

Reference the SVG design carefully.

Use:

```
/public/star.svg
```

for the decorative stars placed around the heading.

Do not recreate them with CSS.

The stars should animate subtly using the existing animation rules.

Very slow.

Very soft.

Almost unnoticeable.

---

## Heading

Large Instrument Serif heading.

Text:

> Building the future of confident learning.

The word **Building** should use the primary blue highlight exactly as shown in the design.

The remaining text is white.

Typography should closely match the Hero section.

---

## Subtitle

Directly underneath:

```
STUDY WITH AI WITH PREDICTIVE INTELLIGENCE
```

Rules:

- Commissioner
- Uppercase
- Medium weight
- Tight tracking
- White text

Only

```
PREDICTIVE INTELLIGENCE
```

uses the brand blue highlight.

---

# Card Layout

Below the heading is a responsive two-column layout.

Desktop:

```
Large Card
      |
      |------ Top Right Card
      |
      |------ Bottom Right Card
```

Mobile:

Cards stack vertically.

Maintain generous spacing.

---

# Card 1 (Large Left Card)

Dark glass-style card.

Rounded corners.

Soft border.

Very subtle radial glow.

Inside:

### Heading

```
Education has been reactive for DECADES.
```

"DECADES."

uses the blue highlight.

---

### Supporting line

```
We're making it predictive.
```

The word

```
predictive.
```

uses the blue highlight.

---

### Body

```
Examinr analyzes years of examination patterns, combines them with institution-approved resources, and turns them into personalized learning experiences that help students prepare with greater direction and confidence.
```

---

### Floating Pills

Scatter several floating pills naturally inside the lower half of the card.

Use soft blur.

Small blue glass pills.

Texts:

- Past data analysis
- Finds patterns
- Practice
- Predictable outcomes
- Personalized journey

These should gently float using very slow independent animations.

Different timing.

Different delays.

No synchronized movement.

---

# Card 2 (Top Right)

Glass card.

Contains:

## Heading

```
Stop searching.
```

Second line:

```
Start preparing intelligently.
```

The word

```
intelligently.
```

uses the purple accent exactly as shown in the design.

---

### Body

```
One platform where institutions publish trusted resources, AI identifies recurring examination patterns, and students focus on what matters most.
```

---

### Floating Pills

Purple glass pills.

Texts:

- Uniformed resource indexing
- Access endless resources
- Lock in what matters
- Institute grade resources

Use the same premium floating animation language.

---

# Card 3 (Bottom Right)

Smaller horizontal card.

Heading:

```
The future of learning isn't more content—
```

The word

```
content
```

is highlighted using the green accent from the design.

Maintain the underline/scribble style exactly as shown in the SVG.

---

Subheading:

```
It's better direction.
```

---

Body:

```
Students don't need another chatbot. They need an intelligent system that understands examinations, trusted resources, and how they learn best.
```

---

# Animations

Continue following `/docs/animations.md`.

Specifically:

- staggered fade-up on section reveal
- floating pills
- subtle star movement
- gentle radial glow
- premium hover states
- zero spring bounce
- no exaggerated scaling
- no playful motion

Everything should feel calm, deliberate, and premium.

---

# Responsiveness

Ensure the section adapts cleanly across:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

Do not simply shrink elements.

Reflow the layout appropriately.

---

# Final Verification

Before completion verify:

- Matches the SVG as closely as possible.
- Uses `/public/star.svg`.
- About section is its own reusable component.
- Wave animation is more visible and slightly faster.
- Typography matches the design.
- Floating pills animate independently.
- Responsive layout is polished.
- No lint errors.
- No TypeScript errors.
- No console warnings.

Finally, update `/docs/progress.md`.