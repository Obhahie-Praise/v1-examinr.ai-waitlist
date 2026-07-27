# Navigation Bar Implementation

Your task is to implement **only** the navigation bar from the provided Figma SVG export.

Do not implement any other section of the landing page.

Before writing any code:

* Read **AGENTS.md**.
* Read every document inside `/docs`.
* Follow every documented standard.
* Match the provided design as closely as possible.

---

# Objective

Build a production-ready, pixel-accurate navigation bar that faithfully reproduces the supplied design while following the project's architecture and design system.

The component should be reusable, responsive, accessible, and animation-ready.

---

# Design Fidelity

Treat the provided SVG export as the source of truth.

Implement the design as accurately as possible, including:

* spacing
* typography
* alignment
* sizing
* proportions
* visual hierarchy
* hover behaviour

Do not redesign or reinterpret the layout.

---

# Desktop Layout

The navigation bar should be:

* Absolutely positioned.
* Positioned at the top of the landing page.
* Span the full width of the viewport.

Padding:

* Horizontal: **130px**
* Vertical: **40px**

The navigation should follow the structure shown in the design.

Maintain generous spacing and a premium visual appearance.

---

# Responsive Navigation

Create a dedicated mobile experience.

For smaller screens:

* Replace the navigation links with a hamburger menu.
* Keep the logo visible.
* Keep the primary CTA visible when appropriate.
* The participant counter should **not** appear on mobile.

When the hamburger menu is opened:

Display:

* Research
* About
* Students
* Institutions

Followed by:

**Join the Waitlist**

The menu should feel clean, modern, and easy to navigate.

Avoid full-screen overlays unless necessary.

---

# Dynamic Island Navigation

Implement the navigation transformation discussed during planning.

Behaviour:

### Initial State

When the page loads:

Display the full navigation exactly as designed.

---

### Scroll Behaviour

When the user scrolls approximately **50px** down the page:

The navigation should smoothly transform into a compact floating navigation.

The transition should feel like Apple's Dynamic Island.

The transformation should include:

* Reduced width
* Reduced padding
* Rounded pill appearance
* Soft backdrop blur
* Subtle border
* Light shadow
* Compact logo
* Navigation links disappear
* Primary CTA remains visible

This should be a smooth transformation rather than an abrupt replacement.

---

### Animation Behaviour

The transformation should interpolate naturally between both states.

Avoid snapping between layouts.

Animate:

* width
* height
* padding
* border radius
* opacity
* scale
* positioning

Use Motion layout animations wherever appropriate.

---

# Page Entry Animation

When the page first loads:

Animate the navigation into view.

Preferred motion:

* Fade in
* Slight upward movement
* Soft blur removal

Duration:

Approximately **250ms**

The animation should feel smooth, premium, and unobtrusive.

---

# Hover States

Navigation links should include subtle hover interactions.

Examples:

* colour transition
* slight opacity adjustment
* underline or indicator where appropriate

Avoid exaggerated hover effects.

---

# Button Behaviour

The "Join the Waitlist" button should include:

* smooth hover transition
* active state
* keyboard focus state

Keep interactions subtle and premium.

---

# Accessibility

The navigation must be fully accessible.

Requirements:

* Semantic HTML
* Keyboard navigation
* Proper button elements
* Proper navigation landmarks
* Visible focus states
* Appropriate ARIA attributes for the mobile menu

---

# Performance

The scroll animation should only update when the navigation changes between its expanded and collapsed states.

Avoid unnecessary re-renders during scrolling.

Optimise for smooth 60fps interactions.

---

# Implementation

Use:

* Motion for layout and transition animations.
* CSS transitions for simple hover and colour changes.
* The project's global CSS variables.
* Commissioner as the primary UI font.

Do not introduce additional animation libraries.

---

# Code Quality

The component should be:

* Modular
* Reusable
* Responsive
* Maintainable
* Production-ready

Avoid hardcoded values where reusable constants or utilities are more appropriate.

---

# Verification

Before completing the task, verify:

* The navigation matches the provided SVG as closely as possible.
* Responsive behaviour works correctly.
* The hamburger menu functions correctly.
* The Dynamic Island transformation behaves smoothly.
* The entry animation works correctly.
* Accessibility requirements are met.
* No linting or TypeScript errors exist.
* The project builds successfully.

---

# Documentation

When complete:

Update `docs/progress.md`.

Include:

* Navigation bar implemented.
* Responsive navigation completed.
* Dynamic Island behaviour implemented.
* Entry animations completed.
* Any implementation decisions or compromises made.
