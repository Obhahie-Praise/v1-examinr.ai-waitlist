# Hero Section Refactor

Before making changes, read and understand every document inside `/docs`.

This is **NOT** a new implementation.

This is a visual refactor of the existing Hero section.

The current implementation already contains every required element, but the composition does not match the design language of Examinr.ai.

The goal is to refine—not redesign.

---

## Overall Composition

The Hero should feel calm, spacious and premium.

It should immediately communicate confidence rather than excitement.

Every element should have room to breathe.

Avoid large empty gaps, but equally avoid making the layout feel crowded.

The Hero occupies roughly the first viewport.

---

## Content Alignment

Everything in the Hero is centre aligned.

From top to bottom the visual hierarchy is:

Announcement badge

↓

Large heading

↓

Supporting description

↓

Primary & secondary actions

↓

Large application preview

Each element is vertically centred as one composition.

---

## Announcement Badge

The announcement badge is intentionally small.

It sits slightly above the heading.

It should never compete with the headline.

Rounded pill.

Subtle background.

Small blue indicator dot.

---

## Hero Heading

The heading is intentionally elegant.

Use Instrument Serif.

Large display typography.

Thin font weight.

Very generous line height.

The blue accent should remain the strongest colour in the Hero.

The heading should never feel compressed.

It should sit comfortably in open space.

---

## Supporting Description

The paragraph is intentionally narrow.

Approximately 500–600px maximum width.

Two short lines.

Muted text.

Commissioner font.

The paragraph should visually disappear compared to the heading.

---

## CTA Buttons

Buttons remain centred.

Primary button first.

Secondary button beside it.

Spacing between buttons should remain subtle.

Do not oversize them.

---

## Application Preview

The application preview is the anchor of the Hero.

It should feel almost like a floating product showcase.

Current implementation makes it feel like an ordinary image.

Instead:

- Increase its visual importance.
- Allow it to become significantly wider.
- Maintain its aspect ratio.
- Position it directly beneath the CTA group.
- Give it generous spacing from the buttons.

The preview should visually balance the large heading above.

It should appear to float over the background rather than sit on it.

Use a soft shadow.

Avoid aggressive scaling animations.

---

## Animated Wave

The wave is decorative only.

Its purpose is adding motion—not attracting attention.

Requirements:

- Reduce its thickness.
- Reduce overall scale.
- It should span almost the full viewport width.
- Allow only the extreme left and right edges to bleed outside the screen.
- Keep opacity low.
- Keep blur subtle.
- Motion should resemble a gentle ribbon moving through air.

Most importantly:

The wave must live in the page background.

Do not render it inside the Hero container.

Container padding or max-width constraints should never clip it.

It should stretch across the browser window independently of the Hero content.

---

## Vertical Rhythm

Increase consistency between sections.

Approximate spacing should feel like:

Badge

32px

Heading

28px

Paragraph

36px

Buttons

56px

Application Preview

The Hero should feel rhythmically balanced.

---

## Shadows

The design uses shadows sparingly.

Apply soft shadows only to:

- Buttons
- Product preview

Do not add shadows to typography.

Do not overuse blur effects.

---

## Animation

Follow `/docs/animations.md`.

Refine the existing animations rather than replacing them.

Desired behaviour:

- Badge fades upward.
- Heading fades upward.
- Paragraph fades upward.
- Buttons fade upward.
- Product preview fades upward with slight scale.
- Background wave loops continuously with slow horizontal movement.

Animations should feel premium and nearly invisible.

---

## Definition of Done

The finished Hero should immediately communicate:

- Premium SaaS
- Confidence
- Simplicity
- Space
- Elegance

Do not introduce new design ideas.

Refine the existing implementation until it closely matches the approved composition.

When complete:

- Verify responsiveness.
- Verify spacing.
- Verify typography.
- Verify animation smoothness.
- Update `/docs/progress.md`.