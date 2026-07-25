# Animation Guidelines

## Purpose

This document defines the animation language used throughout the Examinr.ai waitlist.

Animations should enhance the experience without becoming the experience.

The interface should feel premium, smooth, and intentional.

---

# Core Philosophy

Animation exists to:

- Guide attention
- Reinforce hierarchy
- Communicate state changes
- Improve perceived performance

Animation should never exist purely for decoration.

---

# General Rules

Every animation must have a purpose.

Avoid animations that:

- distract the user
- delay interaction
- reduce readability
- feel repetitive

The user should notice the experience, not the animation.

---

# Motion Style

Preferred motion should feel:

- Smooth
- Confident
- Calm
- Premium
- Modern

Avoid motion that feels:

- Playful
- Cartoonish
- Bouncy
- Exaggerated
- Overly energetic

---

# Preferred Animation Types

Use subtle:

- Fade
- Opacity
- Blur
- Scale (95% → 100%)
- Small Y translations
- Small X translations
- Soft stagger animations

These should make the interface feel alive without drawing attention.

---

# Avoid

Never use:

- Bounce animations
- Large rotations
- Elastic effects
- Excessive scaling
- Long slide transitions
- Infinite looping animations
- Flashing effects

Animations should never compete with the content.

---

# Timing

Recommended durations:

Fast

150ms

Standard

200ms

Complex transitions

250–300ms

Avoid animations longer than 400ms unless explicitly requested.

---

# Easing

Prefer smooth easing curves.

Examples:

- ease-out
- ease-in-out

Avoid unnatural easing.

---

# Page Transitions

Pages should transition with:

- Fade
- Small upward movement
- Slight blur removal

Navigation should feel continuous rather than abrupt.

---

# Component Animations

Cards

- Fade in
- Small upward movement
- Optional stagger

Buttons

- Subtle hover colour transition
- Slight scale (optional)
- Fast press feedback

Inputs

- Smooth focus transition
- Border colour transition
- No exaggerated movement

Navigation

- Active indicator slides smoothly
- No large layout shifts

Modals

- Fade overlay
- Scale 95% → 100%
- Small upward motion

Dropdowns

- Fade
- Small vertical movement
- Fast opening

---

# Loading States

Prefer:

- Skeleton loaders
- Shimmer effects
- Fade transitions

Avoid:

- Spinners everywhere

Whenever possible, loading should preserve layout stability.

---

# Scroll Animations

Only animate elements when they first enter the viewport.

Do not repeatedly animate elements as the user scrolls.

Animations should feel like natural content reveal.

---

# Hover Effects

Hover interactions should be subtle.

Examples:

- Slight elevation
- Border colour transition
- Background transition
- Small icon movement

Avoid dramatic hover effects.

---

# Mobile

Animations on mobile should be even more restrained.

Prioritise responsiveness over visual effects.

---

# Performance

Animations must remain GPU-friendly.

Prefer animating:

- opacity
- transform

Avoid animating:

- width
- height
- top
- left
- margin

unless absolutely necessary.

---

# Accessibility

Respect the user's reduced motion preference.

If the user has enabled reduced motion:

- disable non-essential animations
- preserve usability

Accessibility takes priority over aesthetics.

---

# Consistency

Similar interactions should animate similarly.

Buttons should always feel like buttons.

Cards should always feel like cards.

Do not invent new animation styles for similar components.

---

# AI Animation Rules

When implementing animations:

- Read this document before adding motion.
- Use Framer Motion unless instructed otherwise.
- Keep animations subtle and purposeful.
- Reuse existing animation patterns.
- Do not animate every element on the page.
- Never sacrifice performance for visual effects.
- If unsure whether an animation is necessary, omit it.

Remember:

Good animation is often invisible.
The goal is to make the interface feel polished—not animated.

# Examinr Motion Principle

Motion should create the feeling that the interface is responding naturally to the user.

Users should remember how smooth the experience felt, not recall specific animations.

If an animation becomes the most memorable part of a screen, it is probably too much.