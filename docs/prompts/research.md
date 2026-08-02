# Implement — Research Paper Reading Page

Before making any changes, read and understand all existing project protocols and documentation inside `/docs`.

Follow `AGENTS.md`, `ui.md`, `animations.md`, `code-standards.md`, `project-architecture.md`, and all other relevant context files.

Use **pnpm** as the package manager.

Update `/docs/progress.md` when this task is complete.

---

## Objective

Build the research paper reading experience for Examinr.ai.

The first paper already exists as Markdown:

`/research/01_vision.txt`

**Do not rewrite, paraphrase, shorten, expand, or alter the content of the paper.**

The task is to transform the existing Markdown content into a beautiful, highly readable research-paper presentation.

This is a **content presentation task**, not a content-writing task.

---

# Research Page Layout

The page should feel like a premium digital research publication.

The actual paper should be centered within the page with a comfortable reading width.

Prioritize:

- readability
- typography
- whitespace
- hierarchy
- comfortable line length
- clear section separation
- elegant spacing
- minimal distraction

Do not make the reading area unnecessarily wide.

The paper should feel closer to reading a beautifully typeset publication than reading a standard Markdown document.

---

# Research Navigation

Add a small vertical navigation component at the **top-left area of the page**.

It should remain visually separate from the main paper content.

The navigation will eventually allow users to switch between the different research papers.

For now, there is only one paper:

`01 — Vision`

Create the navigation so that it is **state-driven** and ready to support additional papers later.

Do not hardcode the architecture in a way that requires rebuilding the page when more papers are added.

---

## Navigation Buttons

The navigation should have two visual states:

### Standard

The default research-paper navigation style.

### Premium

The selected/active state should use the existing premium visual treatment from the design system.

Use React state to control which paper is currently selected.

For now:

```text
01 — Visionx