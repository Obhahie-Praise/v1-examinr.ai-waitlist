# AI Workflow Rules

## Purpose

This document defines the operating rules for any AI assistant contributing to this repository.

Every AI agent must follow these instructions before making changes.

Failure to comply may result in inconsistent architecture, unnecessary complexity, or deviation from the project vision.

---

# Read Before Writing Code

Before making any changes, the AI must first read all relevant documentation inside the `/docs` directory.

At a minimum, review:

- product.md
- architecture.md
- ui.md
- coding-standards.md
- progress.md

Never make assumptions when project documentation already defines the expected behaviour.

---

# Stay Within Scope

This repository has a clearly defined responsibility.

Do not introduce features that fall outside the documented scope.

If a requested feature appears to belong in the main Examinr.ai platform rather than the waitlist, explain why before proceeding.

Never silently expand the scope of this repository.

---

# Respect Existing Architecture

Do not replace or restructure existing architecture unless explicitly requested.

Before creating new:

- components
- utilities
- hooks
- layouts
- helpers

verify that an existing implementation does not already exist.

Prefer extending existing code over creating duplicate implementations.

---

# Preserve Design Consistency

Every UI element must follow the existing design language.

Never introduce:

- new typography
- different spacing systems
- inconsistent colours
- conflicting animations
- additional icon libraries

Follow the design system defined in `ui.md`.

---

# Dependency Rules

Do not install additional packages unless absolutely necessary.

Before introducing a dependency, verify that the same problem cannot already be solved using:

- Next.js
- React
- TypeScript
- the existing dependency stack

If a new dependency is required, explain why before adding it.

---

# Verify Before Finishing

Never assume generated code is correct.

Always verify:

- imports
- exports
- types
- component usage
- route structure
- build compatibility

Before considering a task complete, ensure that:

- there are no obvious runtime errors
- the implementation follows existing patterns
- naming conventions are respected

---

# Maintain Code Quality

Generated code should always be:

- readable
- maintainable
- modular
- production-ready

Avoid:

- duplicated logic
- deeply nested components
- unnecessary abstractions
- premature optimisation

---

# Preserve Existing Functionality

Do not break working functionality while implementing new features.

Whenever modifying existing code:

- understand the current implementation
- minimise unintended side effects
- preserve backwards compatibility where appropriate

---

# Avoid Assumptions

If project requirements are unclear:

Ask.

Do not invent behaviour.

Do not guess.

Do not implement speculative features.

---

# Documentation First

Whenever a significant architectural or behavioural change is made:

Update the relevant documentation inside `/docs`.

Documentation should always reflect the current state of the project.

---

# Update Progress

At the completion of every task, update `progress.md`.

Progress updates should include:

- Features completed
- Files created or modified
- Important architectural decisions
- Outstanding work
- Known issues (if any)

The progress document should always represent the latest state of the project.

---

# Git Practices

Do not modify Git configuration.

Do not rewrite history.

Do not force push.

Do not create or delete branches unless explicitly instructed.

Assume all work is performed within the current branch.

---

# Security

Never:

- expose secrets
- hardcode credentials
- commit API keys
- log sensitive information

Use environment variables where required.

---

# Performance

Prefer:

- server components where appropriate
- minimal client-side JavaScript
- optimised assets
- efficient rendering

Avoid unnecessary complexity.

---

# Accessibility

Every UI contribution should consider:

- keyboard navigation
- focus states
- semantic HTML
- colour contrast

Accessibility is a requirement, not an enhancement.

---

# Communication

Before making large or potentially destructive changes:

Explain:

- what will change
- why it is necessary
- any trade-offs involved

Do not surprise the developer with unexpected architectural decisions.

---

# Definition of Done

A task is only complete when:

- The requested functionality has been implemented.
- Existing functionality remains intact.
- The implementation follows all project standards.
- Documentation has been updated where necessary.
- `progress.md` has been updated.
- The project remains buildable and maintainable.

---

# Core Principle

Every contribution should leave the project in a better state than it was found.

Prioritise clarity over cleverness.

Prioritise consistency over personal preference.

When in doubt, follow the existing project conventions rather than introducing new ones.

# Project Integrity

The AI assistant must never make unilateral product, UX, or architectural decisions.

If a decision affects:

- product behaviour
- user experience
- branding
- navigation
- database structure
- authentication
- deployment strategy

the assistant must pause and ask for approval before implementing it.

The role of the AI is to execute and advise, not to redefine the product.