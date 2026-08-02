# Navbar Active Section Indicator

Refactor the navbar's section-link styling so it clearly communicates which section of the landing page the user is currently viewing.

## Behaviour

- As the user scrolls through the landing page, detect the section currently in view.
- The corresponding navbar link should become the **active link**.
- The active link should use the existing **blue → white text gradient** used by the site's visual language.
- As the user moves between sections, the active state should transition smoothly between links.
- Scrolling upward should work exactly the same way; the active state must always reflect the section currently in view.
- Use a reliable approach such as `IntersectionObserver` or an equivalent performant method rather than constantly running expensive scroll calculations.

## Important

- **Do not change the navbar layout, spacing, typography, links, or existing styling.**
- **Do not change the existing scroll-collapse animation.**
- This is only an enhancement to the active-section indication.
- Keep the implementation performant and smooth, especially on laptop/mobile scrolling.
- Make sure it works correctly with the existing section IDs/components and does not interfere with anchor navigation.