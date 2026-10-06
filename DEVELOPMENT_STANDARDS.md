# PropScale Development Standards

This document describes the current frontend and sets conventions for future work. Keep it updated when the stack, design tokens, component structure, or development workflow changes. When a documented convention and the implementation disagree, treat the implementation as the current-state reference and update this document as part of the relevant change.

## 1. Project overview

- **Framework:** Next.js 14, using the App Router (`app/`).
- **UI runtime:** React 18 with JSX.
- **Language:** JavaScript with JSX; this repository is not currently configured for TypeScript.
- **Styling:** Tailwind CSS 3, PostCSS, and a small set of global CSS rules in `app/globals.css`.
- **Icons:** `lucide-react`. Use the shared icon package instead of introducing a second icon library for ordinary interface icons.
- **Package manager:** npm; `package-lock.json` is committed and should stay in sync with `package.json`.
- **Deployment configuration:** Next.js defaults in `next.config.mjs`; no custom Next configuration is currently defined.
- **Current product surface:** one landing page composed in `app/page.jsx` from reusable section components.

## 2. Repository structure

```text
app/
  globals.css          Tailwind layers, global element styles, shared animations, mock UI styles
  layout.jsx           Root document, global stylesheet import, page metadata
  page.jsx             Landing page composition and section order
components/
  Navbar.jsx           Main site navigation
  HeroSection.jsx      Hero content, rotating audience messages, search form
  CategoryCards.jsx    Rotating category card sets
  MicroMarketsSection.jsx  Featured micro-market cards
  MarketsSection.jsx  Market cards
  FeatureBanners.jsx  Feature callouts and supporting illustrations
  PlatformPreview.jsx Platform preview cards and CSS-built dashboard mockups
public/
  back.png             Hero background image
  unlock-blocks.svg    Decorative blocks illustration
  Untitled.png         Dotted map illustration used in “How PropSense works”
```

Keep route-level files in `app/` and reusable page sections in `components/`. Put static, browser-served assets in `public/` and reference them from the site root, such as `/back.png`. Keep a component focused on one section or cohesive UI responsibility. Move repeated, independently useful UI into a shared component when a second use appears; avoid creating abstractions for one-off markup without a clear reuse or readability benefit.

## 3. Component and rendering conventions

- Use a default export for a component file’s primary component, matching the existing section components.
- Keep page assembly and section order in `app/page.jsx`; avoid placing whole-page composition inside a section component.
- Keep content/data arrays near the component that consumes them when they are specific to that section. Extract shared content only when multiple components need it.
- Components are React Server Components by default. Add `'use client';` only when a component needs browser APIs, state, effects, event-driven interaction, or another client-only dependency. Currently `HeroSection.jsx` and `CategoryCards.jsx` use client rendering for timed message/card rotation.
- Keep timers and subscriptions inside effects and always clean them up. Respect `prefers-reduced-motion` for non-essential animation, as the current rotating sections do.
- Prefer semantic HTML (`header`, `nav`, `main`, `section`, `article`, headings, lists, forms, buttons, and links) and meaningful heading order.
- Use `<button>` for actions and `<a>` for navigation. Give icon-only controls an accessible name. Give informative images useful alt text; use empty alt text and `aria-hidden` for decorative images.
- Provide stable React keys for mapped elements. Avoid array indexes as keys when records have stable identifiers.

## 4. Styling and responsive layout

- Use Tailwind utility classes for component layout, spacing, typography, colors, borders, and responsive changes.
- Use `app/globals.css` for global resets, shared keyframes, shared utility classes, and complex mock dashboard styling that would be unwieldy as JSX class strings. Give custom classes descriptive, component-related names.
- Keep component-specific styles close to the component when practical. If adding a global class, document its purpose and avoid generic names that could collide.
- Follow mobile-first Tailwind breakpoints. Add `sm:`, `md:`, `lg:`, and larger overrides only when the layout actually changes at that width. Check narrow screens for overflow and preserve usable tap targets.
- Prefer existing spacing and color tokens before adding arbitrary values. Arbitrary values are already used to reproduce specific design references; use them intentionally and consolidate repeated values into tokens when they become a stable system.
- Use `max-w-*` containers and responsive grid/flex layouts to keep content readable at wide sizes. Avoid fixed widths that cause horizontal scrolling on small screens.
- Keep decorative imagery positioned within a `relative` container and prevent it from obscuring text or controls. Use `object-fit`/background sizing appropriate to the source asset; verify the crop at the target component dimensions.

## 5. Typography standards

### Current font

The global stack in `app/globals.css` is **Arial, Helvetica, sans-serif**, with antialiasing enabled. No custom font is currently loaded. Preserve this stack unless a product-wide font change is intentional; if changed, load it centrally in `app/layout.jsx` (or the approved font-loading mechanism) rather than loading separate fonts in individual components.

### Existing size scale and usage

The site currently uses Tailwind defaults plus explicit pixel sizes to match a compact visual design. These are common current sizes, not a strict exhaustive token set:

| Approximate size | Common use in this site |
| --- | --- |
| 7–10px | Dense dashboard mockup labels, small badges, hero controls, preview-card metadata |
| 11–12px | Supporting copy, card descriptions, compact body text |
| 13–14px | Compact card headings, buttons, section-level supporting UI |
| 16px (`text-base`) | Main desktop navigation and ordinary control text |
| 20–21px | Landing page section headings |
| 30px | Hero heading |

Use a consistent hierarchy in new user-facing sections: one primary heading, clear section headings, readable body copy, and smaller labels only for metadata. Do not copy the tiny typography used inside simulated product screenshots into normal page content. Prefer Tailwind's semantic size utilities for new work (`text-sm`, `text-base`, `text-lg`, etc.); retain explicit pixel sizes where a specific visual reference or dense mockup requires them. Verify readability on mobile and at browser zoom.

## 6. Color and visual tokens

### Defined tokens

- **Brand violet:** `#704cf6`, configured as `brand` in `tailwind.config.js`. Use `text-brand`, `bg-brand`, `border-brand`, etc. for primary actions, emphasized text, and selected states.
- **Soft shadow:** `0 8px 28px rgba(39, 29, 87, .07)`, configured as `shadow-soft` in `tailwind.config.js`. Use sparingly for elevation and hover states.
- **Global text/background:** body text `#171923`, white page background; light color scheme.
- **Selection:** pale violet `#e8e1ff` with dark violet `#5033d8` text.

### Existing usage pattern

- Primary CTA and brand emphasis: `brand` / violet.
- Main headings: near-black, commonly `text-slate-950` or `text-slate-900`.
- Secondary copy and labels: slate gray, commonly `text-slate-500` or `text-slate-400`.
- Borders and separators: light slate (`border-slate-200`) or light violet for branded panels.
- Category card accents: violet, orange, emerald, rose, and blue; each card combines a pale background, a matching border, and a stronger icon/accent color.
- Positive market signals: emerald; caution/medium states: amber. Do not communicate status through color alone; include text or another visual cue.

Use the configured `brand` token instead of repeating the brand hex value. If recurring colors or semantic statuses emerge, define named Tailwind theme tokens rather than scattering new one-off hex colors through components. Arbitrary hex values are currently used for a few section backgrounds and mockup details; keep those local unless they become shared design tokens.

## 7. Motion and interaction

- Keep transitions short and purposeful (hover color, elevation, small movement); avoid animating layout in ways that make content jump.
- Use the existing `hero-copy-in` entrance animation and staggered `.category-card` animation as references for simple reveal effects.
- Honor `prefers-reduced-motion: reduce` for non-essential motion. Any new looping, auto-advancing, or entrance animation should have a reduced-motion path.
- Auto-rotation should remain slow enough to read, pause/stop where required for accessibility, and not be the only way to reach content. Keep content available without waiting for an animation.
- Preserve keyboard focus visibility. Hover effects must have an equivalent focus state for interactive controls.

## 8. Assets and images

- Store project-owned image and vector assets under `public/` and use root-relative paths such as `/unlock-blocks.svg`.
- Use descriptive filenames for new assets. Existing names such as `Untitled.png` should be renamed only when updating every reference and there is a clear reason to do so.
- Provide descriptive alt text for informative images. For decorative art, use `alt=""` and `aria-hidden="true"`.
- Use optimized, appropriately sized source assets. For remote images, configure the framework’s image handling if adopting `next/image`; do not add remote image hosts to Next config unless that feature is actually being used and the host is known.
- Check `object-fit`, position, aspect ratio, fade overlays, and responsive dimensions at the component’s real display sizes. Do not rely on how an image looks only at its original dimensions.
- Current page cards use remote Unsplash image URLs, while hero and feature illustrations use local public assets.

## 9. Accessibility and content

- Use one clear page-level `<h1>` and organize section headings beneath it. Avoid skipping heading levels for visual styling; style semantic headings with classes instead.
- Ensure all functionality is keyboard-accessible and focusable, with visible focus indicators.
- Label form controls programmatically; `aria-label` is acceptable when a visible label is not part of the design.
- Keep link text descriptive and button labels action-oriented. Avoid clickable non-interactive elements.
- Maintain sufficient contrast for text, especially small gray text on pale backgrounds. Do not rely on color alone to express meaning.
- Preserve reduced-motion preferences and do not make important information available only through animation.
- Use UK English spelling and property terminology consistently with the product copy (for example, “analyse” and “micro-market”).

## 10. Data and behavior

- Keep static presentation data in plain arrays/objects close to the UI that renders it, following the existing `markets`, `items`, `cards`, and `heroMessages` patterns.
- Separate data from markup when it improves scanning and consistency. Use stable IDs or names as React keys.
- Do not imply that demonstration values, mock dashboards, or sample market scores are live data. Clearly label sample/demo content when it could be mistaken for a real investment signal.
- Keep forms and controls honest: do not show a working-looking search, account, or navigation action without implementing its behavior or clearly marking it as a prototype.
- Do not place secrets or private credentials in client-side code or tracked files. Use environment variables for server-side secrets and keep local `.env*` files ignored; only commit a safe `.env.example` template.

## 11. Development workflow and commands

Run these from the repository root:

```bash
npm install       # install dependencies from package-lock.json
npm run dev       # start the local Next.js development server
npm run build     # create a production build
npm run start     # serve the production build locally
```

The current `package.json` does not define lint, format, or test scripts. Do not assume they are available. When adding a quality tool or test framework, add a package script, document how to run it here, and keep configuration aligned with the existing JavaScript/Next.js setup. For UI changes, inspect the affected page at mobile and desktop widths and verify interactive states and reduced-motion behavior when relevant.

## 12. Change checklist

Before considering a frontend change complete:

1. Keep the change within the relevant route/component/style files and avoid unrelated redesigns.
2. Reuse the brand color, shadow, icon library, and established typography hierarchy where appropriate.
3. Check small and wide viewport layouts, image crop/fade, spacing, and text wrapping.
4. Check semantics, accessible names, keyboard focus, contrast, and reduced-motion behavior for affected UI.
5. Confirm all asset paths and links point to valid destinations; keep sample data clearly identifiable.
6. Run the relevant project command when verification is requested or needed for the change, and report what was run. Update this guide if the change establishes or alters a project-wide standard.

