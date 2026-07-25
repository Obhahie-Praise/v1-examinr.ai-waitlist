# UI & Design System

## Philosophy

The Examinr.ai waitlist is designed to communicate confidence, clarity, and innovation.

The interface should feel modern, minimal, and premium without relying on excessive effects or unnecessary complexity.

Every UI decision should reinforce one idea:

> **Examinr.ai is building the future of exam preparation.**

---

# Design Principles

- Minimal before decorative.
- Consistency over creativity.
- White space is intentional.
- Typography carries the interface.
- Motion should support interaction, not distract from it.
- Every component should have a clear visual hierarchy.

---

# Typography

## Display Font

**Instrument Serif**

Used for:

- Hero headings
- Large marketing typography
- Call-to-action emphasis
- Premium branding moments

Never use Instrument Serif for body text.

---

## Primary Font

**Commissioner**

Used for:

- Navigation
- Body text
- Buttons
- Inputs
- Cards
- UI labels
- Form elements
- Footer
- Modals

This is the primary font for the entire application.

---

# Colour System

The application must expose the following CSS custom properties.

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

These variables should be referenced throughout the project instead of hardcoded colour values.

---

# Spacing

Use a consistent spacing scale.

```
4px
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

Avoid arbitrary spacing values.

---

# Border Radius

Maintain consistency across all components.

```
Cards
30px

Buttons
10px

Inputs
10px

Modals
30px

Badges
999px
```

---

# Buttons

Buttons should feel clean and confident.

Rules:

- Rounded corners
- Medium font weight
- Clear hover state
- Visible focus state
- No excessive shadows
- Smooth transitions

---

# Cards

Cards are a primary design element.

Every card should:

- Have generous padding
- Maintain consistent border radius
- Use subtle borders instead of heavy shadows
- Preserve whitespace

---

# Icons

Use **Lucide React** exclusively.

Icons should:

- Match surrounding typography
- Use consistent sizing
- Never dominate the interface

---

# Layout

The interface should rely on structured grids.

Content should never stretch excessively on large displays.

Use containers to maintain comfortable reading widths.

---

# Motion

Animations should feel intentional.

Preferred duration:

```
150ms–300ms
```

Avoid:

- Bouncy animations
- Large rotations
- Excessive scaling
- Distracting entrance effects

Prefer:

- Fade
- Blur
- Opacity
- Small translations

---

# Shadows

Shadows should be subtle.

The interface should rely more on:

- contrast
- spacing
- borders

than heavy elevation.

---

# Responsive Design

The application should be mobile-first.

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultra-wide displays

Every component should degrade gracefully.

---

# Accessibility

Maintain sufficient colour contrast.

Interactive elements must:

- be keyboard accessible
- have visible focus states
- provide clear feedback

---

# Branding

Every screen should feel recognisably Examinr.ai.

Avoid introducing:

- additional accent colours
- inconsistent typography
- different border radii
- conflicting spacing systems

The design language should remain cohesive across the entire project.

---

# AI Design Rules

When generating UI:

- Always use Commissioner for interface elements.
- Only use Instrument Serif for marketing headings.
- Use CSS variables instead of hardcoded colours.
- Prefer whitespace over visual clutter.
- Keep interfaces minimal and readable.
- Follow existing component patterns before creating new ones.
- New components should feel like a natural extension of the current design system.