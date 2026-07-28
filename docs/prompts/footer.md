# Implement — Landing Page Footer

Before making any changes, read every document inside `/docs` and follow every existing project protocol.

Update `/docs/progress.md` after completing this task.

---

# Objective

Implement the landing page footer exactly as designed in:

/design_files/landing_page.svg

Create it as a reusable component.

Example:

components/landing/Footer.tsx

This is the final section of the landing page.

It should feel personal, minimal and authentic rather than corporate.

---

# Overall Layout

Large rounded container.

Uses the existing card background colour.

Rounded corners around 36px.

Centered within the page content.

Generous internal padding.

Desktop uses a two-column layout.

Mobile collapses into a single column.

Everything should breathe.

---

# Left Column

Small introductory text.

Commissioner.

Text:

Built by a student. For students.

Below this, the main heading.

Large typography.

Use Commissioner for:

Hi, I'm

Use Instrument Serif for:

Praise.

Keep "Praise." significantly larger and elegant.

The period should remain.

Below the heading:

Built with ☕ and too many late nights.

The coffee emoji should remain.

Muted text colour.

---

# Right Column

Right aligned on desktop.

Centered on mobile.

Three short paragraphs.

Text:

I'm a student who got tired of preparing for exams with scattered notes, unpredictable questions, and AI that doesn't understand how schools actually work.

So I'm building the platform I wish I had.

If Examinr.ai sounds like something you'd use, I'd love to hear from you.

Readable line length.

Soft muted white.

---

# Bottom Area

Two sides.

Left:

Connection links.

Right:

Copyright.

---

## Connect Label

Instrument Serif.

Italic.

Text:

Let's connect.

Include the subtle horizontal divider exactly as shown in the design.

---

## Social Links

Display inline.

Use bracket styling exactly as designed.

Example:

[ GITHUB ]
[ EMAIL ]
[ X (Twitter) ]
[ TIKTOK ]
[ WHATSAPP ]

Spacing should match the design.

Hover interaction:

- text turns blue
- underline fades in
- subtle upward movement (2px)
- smooth transition

Use proper external links.

Open in a new tab.

---

## Copyright

Right aligned.

Text:

© 2026 Examinr.ai

Below:

Designed & developed by Praise.

Muted colour.

Smaller typography.

---

# Animations

Follow `/docs/animations.md`.

Animate only once.

Include:

- fade in
- slight upward movement
- staggered appearance
- social links hover animation

No exaggerated movement.

The footer should feel calm.

---

# Responsiveness

Desktop:

Two columns.

Bottom row spaced apart.

Tablet:

Slightly reduced spacing.

Mobile:

Everything stacks vertically.

All text aligns left.

Social links wrap naturally.

Maintain generous spacing.

---

# Accessibility

External links should include:

rel="noopener noreferrer"

Use descriptive aria-labels.

Maintain keyboard focus states.

---

# Verification

Before completion verify:

- Matches the SVG closely.
- Typography matches previous sections.
- Uses existing colour variables.
- Fully responsive.
- Smooth animations.
- No TypeScript errors.
- No ESLint warnings.
- Update `/docs/progress.md`.