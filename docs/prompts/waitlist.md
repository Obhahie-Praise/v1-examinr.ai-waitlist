# Implement — Final Call To Action (Waitlist)

Before making any changes, read every document inside `/docs` and follow all existing project protocols.

Update `/docs/progress.md` after completing this task.

---

# Objective

Implement the final landing page section exactly as designed in:

/design_files/landing_page.svg

Create it as its own reusable component.

Example:

components/landing/CTASection.tsx

---

# Layout

Centered vertically.

Large amount of whitespace above the section.

Everything should feel calm and premium.

Order:

- Heading
- Supporting paragraph
- Waitlist form
- Supporting waitlist information
- Three benefit cards

---

# Heading

Use Instrument Serif.

Text:

Ready to study differently?

"Ready" should use the brand blue.

The remaining text stays white.

Use `/public/star.svg` exactly like previous sections.

Reuse the same subtle star animation.

---

# Supporting Text

Commissioner.

Centered.

Text:

Be among the first students and institutions shaping the future of predictive learning.

Muted white.

---

# Waitlist Form

Single horizontal form.

Contains:

- Email input
- Join Waitlist button

The input should match the design.

Dark surface.

Soft blue focus ring.

Rounded corners.

Placeholder:

Your email address

The Join Waitlist button must reuse the exact component already used throughout the site.

Do not recreate another button style.

---

# Supporting Information

Below the form.

Text:

Early beta opens to the first wave of waitlist members!

Below this, display:

- small overlapping avatar placeholders
- live waitlist count

Example:

231+ already waiting

The count should be connected to the database instead of being hardcoded.

If no data exists yet, gracefully display 0.

---

# Benefit Cards

Three horizontally aligned cards.

Identical sizing.

Identical styling.

Same design language as previous sections.

---

## Card One

Title:

Early access.

Subtitle:

Start before everyone else.

Body:

Waitlist members will be among the first to access the Examinr AI beta and experience new features before public release.

Include a subtle decorative blue accent matching the SVG.

---

## Card Two

Title:

Your feedback

Continue with:

shapes Examinr.

Body:

Every beta session helps improve Examinr. Your suggestions influence new features, workflows and learning experiences before launch.

Include the floating blue geometric decoration from the design.

---

## Card Three

Title:

Every signup

Continue with:

builds momentum.

Body:

Growing the waitlist helps Examinr prove demand to schools, partners and investors, allowing us to launch with more resources and reach more students.

Include the abstract blue circular decoration positioned in the lower-right.

---

# Database Integration

The email form should submit to the existing waitlist endpoint.

Read the current URL.

If a `utm_source` parameter exists, save it.

Otherwise store NULL.

After successful submission:

Open the existing success modal.

Do not create a second confirmation UI.

---

# Animations

Follow `/docs/animations.md`.

Include:

- fade-up entrance
- staggered card reveal
- button interactions
- input focus transitions
- subtle floating decoration movement

Keep animations smooth and premium.

Avoid exaggerated movement.

---

# Responsiveness

Desktop:

Cards display in one row.

Tablet:

2 + 1 layout.

Mobile:

Single column.

Input becomes full width.

Button stacks beneath.

Everything remains centered.

---

# Verification

Before completion:

- Matches the SVG closely.
- Uses the shared button component.
- Uses the existing waitlist submission flow.
- Reads and stores `utm_source`.
- Opens the existing success modal.
- Live waitlist count comes from the database.
- Fully responsive.
- No TypeScript errors.
- No ESLint warnings.

Finally update `/docs/progress.md`.