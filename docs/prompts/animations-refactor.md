# Animation Refactor — Interaction Polish

Before making any changes, read and understand every document inside `/docs`, especially:

- `AGENTS.md`
- `animations.md`
- `ui.md`
- `code-standards.md`

Follow every existing project protocol.

This task is **animation-only**.

Do **not** redesign or reposition any UI elements.

Update `/docs/progress.md` once complete.

---

# Objective

Refine the interaction animations across the landing page so they feel smoother, more responsive, and more premium.

This is not a visual redesign.

It is purely an animation and interaction refinement pass.

---

# Button Interaction Feedback

Every clickable button throughout the landing page should provide consistent visual feedback when interacted with.

Use the **Join Waitlist** button in the navbar as the interaction reference.

Apply the same interaction language to:

- Hero "Join Waitlist" button
- Hero secondary button
- Future CTA buttons
- Any interactive buttons already implemented

The feedback should include:

- smooth press animation
- subtle scale reduction while pressed
- slight shadow reduction
- immediate visual response
- smooth release back to resting state

The interaction should feel tactile and responsive.

Avoid:

- excessive bouncing
- oversized scaling
- playful animations
- elastic effects

The goal is premium responsiveness.

---

# Navbar Collapse Performance

Refactor the navbar collapse animation that occurs after scrolling.

The transition into the compact floating navigation should feel extremely smooth.

Target:

- consistent 60 FPS perception
- no visible stuttering
- no layout jumps
- no flickering
- no delayed state updates

Optimise the animation by favouring GPU-accelerated properties wherever possible.

Prefer animating:

- transform
- opacity
- blur (where appropriate)

Avoid animating expensive layout properties such as:

- width
- height
- top
- left
- margin

unless absolutely necessary.

If layout changes are required, minimise reflows and repainting.

---

# Motion Quality

All interaction animations should follow the existing animation language defined in `/docs/animations.md`.

Requirements:

- ease naturally
- quick response
- smooth deceleration
- premium feel
- deterministic motion
- no abrupt transitions

Every interaction should communicate confidence without drawing unnecessary attention.

---

# Performance

Audit the new animations for runtime performance.

Avoid:

- unnecessary re-renders
- animation jank
- expensive JavaScript loops
- conflicting animations
- duplicated motion logic

Animations should remain lightweight and performant across desktop and mobile devices.

---

# Verification

Before completing this task, verify:

- All landing page buttons provide consistent press feedback.
- Hero buttons now match the navbar CTA interaction.
- Navbar collapse animation feels noticeably smoother.
- Scrolling maintains a premium 60 FPS feel.
- No UI layouts or styling were changed.
- No new lint or TypeScript errors were introduced.

Finally, update `/docs/progress.md` with the animation improvements made.