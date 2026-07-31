# Final Animation & Responsive Polish Pass

## Objective

Perform a focused polish pass on the existing Examinr.ai waitlist landing page.

**IMPORTANT:** This task is strictly about animation quality and responsive behavior. Do not redesign, restructure, replace, or visually reinterpret existing components.

Read and follow **all existing context files and project protocols** before implementation, especially:

- `AGENTS.md`
- `docs/product.md`
- `docs/ui.md`
- `docs/animations.md`
- `docs/project_architecture.md`
- `docs/ai_workflow_rules.md`
- `docs/progress.md`
- Any other relevant files in `docs/`

Use **pnpm** as the package manager.

Verify all changes after implementation and update `progress.md` according to the established workflow.

---

## 1. Section Header Star Animations

Each section header already contains decorative star elements.

### Implement

Animate the **existing stars only** so that:

- They rotate slowly during normal page movement.
- When the user scrolls **down**, the stars gradually accelerate.
- The acceleration should be proportional to the user's scroll velocity.
  - Faster scrolling → faster rotation.
  - Slower scrolling → slower rotation.
- When the user scrolls **up**, the stars should rotate in the **reverse direction**.
- The rotation should feel continuous and fluid rather than snapping between speeds.
- When scrolling stops, the rotation should gracefully return toward its normal slow state.

### Strict visual constraints

**DO NOT:**

- Modify the stars themselves.
- Change their size.
- Change their position.
- Change their opacity.
- Change their blur.
- Change their shape.
- Add new stars.
- Remove existing stars.
- Change their surrounding typography or layout.

The stars already look correct.

**Only add/refine the animation behavior.**

The final effect should feel subtle, expensive, and intentional — not like a generic spinning icon.

Prioritize smoothness and avoid unnecessary React re-renders on every scroll event.

---

## 2. About Section — Pill Animation Performance

The animated pills in the About section currently do not feel sufficiently smooth.

Upgrade **only the animation implementation**.

### Goal

Make the existing pill movement feel:

- 60fps
- Smooth
- Fluid
- Premium
- Physically consistent
- Less mechanical
- Free from visible stuttering or jitter

Do not change the visual design.

### Strict constraints

**DO NOT modify:**

- Pill positions.
- Pill sizes.
- Pill text.
- Pill colors.
- Pill styling.
- Number of pills.
- Layout.
- Content.
- Timing concept/design direction unless required to eliminate the current jank.

Only improve the underlying animation quality.

Prefer performant browser-composited properties such as:

- `transform`
- `opacity`

Avoid animation approaches that cause unnecessary layout or paint work.

The animation should remain smooth on realistic lower-powered devices, not just high-end desktop machines.

---

## 3. Waitlist Input — Mobile Responsiveness

The current waitlist input/button combination does not respond well enough on small screens.

### Desktop / Large Screens

**DO NOT CHANGE THE CURRENT LARGE-SCREEN DESIGN.**

The existing input + button arrangement should remain exactly as it currently appears on larger screens.

### Mobile Screens

On mobile-sized screens:

- Separate the Join Waitlist button completely from the email input.
- The email input should occupy its own row/container.
- The Join Waitlist button should sit separately beneath it.
- The button should have an appropriate mobile width.
- Maintain the existing visual language, typography, spacing, radius, and button styling.
- Preserve the existing functionality and form behavior.

The mobile layout should feel intentional rather than like the desktop form simply wrapping because there is not enough space.

Do not change the desktop breakpoint behavior unnecessarily.

---

## 4. Implementation Rules

This is a **polish pass**, not a redesign.

Do not:

- Rewrite unrelated components.
- Change copy.
- Change section layouts.
- Change colors.
- Change typography.
- Add dependencies unless absolutely necessary.
- Replace Motion with another animation library.
- Modify existing SVG assets.
- Introduce unnecessary abstractions.

Reuse the existing animation infrastructure and components wherever possible.

Where scroll-driven animation is required, prioritize performance:

- Avoid expensive scroll handlers.
- Avoid triggering React state updates on every scroll frame.
- Use `requestAnimationFrame`, Motion's motion values, or equivalent performant mechanisms where appropriate.
- Keep animation work on the compositor where possible.
- Respect `prefers-reduced-motion` if the existing animation protocol requires it.

---

## 5. Verification

After implementation:

1. Run the project's type checking.
2. Run linting.
3. Run the production build.
4. Verify the page at desktop and mobile widths.
5. Test scrolling both upward and downward.
6. Confirm star rotation responds naturally to scroll velocity.
7. Confirm the About pills remain visually smooth.
8. Confirm the desktop waitlist form remains unchanged.
9. Confirm the mobile waitlist form separates the button from the input.
10. Check for console errors and hydration issues.

Do not consider the task complete if the build fails.

Update `docs/progress.md` with the work completed, following the existing progress documentation protocol.

## Definition of Done

The waitlist landing page should feel like the same design it is now, but with a noticeably more polished interaction layer:

**slow, responsive stars + buttery-smooth pills + intentional mobile form behavior.**

Nothing else should change.