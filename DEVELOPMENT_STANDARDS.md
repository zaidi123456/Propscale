# PropScale Development Standards

This document describes the current frontend and sets conventions for future work. Keep it updated when the stack, design tokens, component structure, or development workflow changes. When a documented convention and the implementation disagree, treat the implementation as the current-state reference and update this document as part of the relevant change.

## 1. Project overview

- **Framework:** Next.js 14, using the App Router (`src/app/`).
- **UI runtime:** React 18 with JSX.
- **Language:** JavaScript with JSX; this repository is not currently configured for TypeScript.
- **Styling:** Tailwind CSS 3, PostCSS, and a small set of global CSS rules in `src/app/globals.css`.
- **Icons:** `lucide-react`. Use the shared icon package instead of introducing a second icon library for ordinary interface icons.
- **Additional UI/data libraries:** The proposed product stack includes shadcn/ui or Headless UI with CVA, TanStack Table, React Hook Form with Zod, and TanStack Query or Zustand. These are not installed yet because the current product surface is a static landing page. Add them with the feature that needs them; do not include unused dependencies in the landing-page bundle.
- **Package manager:** npm; `package-lock.json` is committed and should stay in sync with `package.json`.
- **Deployment configuration:** Next.js defaults in `next.config.mjs`; no custom Next configuration is currently defined.
- **Current product surface:** one landing page composed in `src/app/page.jsx` from reusable section components.

## 2. Repository structure

```text
src/
  app/                 Next.js App Router pages and layouts
    page.jsx           Landing page composition and section order
    layout.jsx         Root document and page metadata
    globals.css        Tailwind layers, global styles, and animations
    (auth)/            Reserved for authentication routes
    (dashboard)/       Reserved for the authenticated app shell and routes
      overview/        Reserved for dashboard summary and metrics
      data-grid/       Reserved for tabular management views
    api/               Reserved for Next.js API route handlers
  components/
    ui/                Reserved for shared atomic UI
    layout/Navbar.jsx  Main site navigation
    features/          Landing page sections
      HeroSection.jsx
      CategoryCards.jsx
      MicroMarketsSection.jsx
      MarketsSection.jsx
      FeatureBanners.jsx
      PlatformPreview.jsx
  config/              Reserved for app configuration
  hooks/               Reserved for shared React hooks
  lib/                 Reserved for shared utilities and data helpers
  services/            Reserved for API clients
public/                Browser-served assets
public/
  back.png             Hero background image
  image 1.png         Source for the blocks illustration used in the “Unlock deeper intelligence” banner
  Untitled.png         Dotted map illustration used in “How PropSense works”
```

Keep route-level files in `src/app/`, shared atomic UI in `src/components/ui/`, layout elements in `src/components/layout/`, and domain-specific sections in `src/components/features/`. Put configuration, hooks, shared utilities, and API clients in their corresponding `src/` directories when needed. These folders are created as features are introduced; avoid empty placeholder modules. Put static, browser-served assets in `public/` and reference them from the site root, such as `/back.png`. Keep a component focused on one section or cohesive UI responsibility. Move repeated, independently useful UI into a shared component when a second use appears; avoid creating abstractions for one-off markup without a clear reuse or readability benefit.

## 3. Component and rendering conventions

- Use a default export for a component file’s primary component, matching the existing section components.
- Keep shared atomic primitives such as `Button`, `Input`, and `Card` in `src/components/ui/`. Define their visual styles with named variants and use those primitives in feature components instead of duplicating base styles.
- Keep page assembly and section order in `src/app/page.jsx`; avoid placing whole-page composition inside a section component.
- Keep content/data arrays near the component that consumes them when they are specific to that section. Extract shared content only when multiple components need it.
- Components are React Server Components by default. Add `'use client';` only when a component needs browser APIs, state, effects, event-driven interaction, or another client-only dependency. Currently `HeroSection.jsx` and `CategoryCards.jsx` use client rendering for timed message/card rotation.
- Keep timers and subscriptions inside effects and always clean them up. Respect `prefers-reduced-motion` for non-essential animation, as the current rotating sections do.
- Prefer semantic HTML (`header`, `nav`, `main`, `section`, `article`, headings, lists, forms, buttons, and links) and meaningful heading order.
- Use `<button>` for actions and `<a>` for navigation. Give icon-only controls an accessible name. Give informative images useful alt text; use empty alt text and `aria-hidden` for decorative images.
- Provide stable React keys for mapped elements. Avoid array indexes as keys when records have stable identifiers.

## 4. Styling and responsive layout

- Use Tailwind utility classes for component layout, spacing, typography, colors, borders, and responsive changes.
- Use `src/app/globals.css` for global resets, shared keyframes, shared utility classes, and complex mock dashboard styling that would be unwieldy as JSX class strings. Give custom classes descriptive, component-related names.
- Keep component-specific styles close to the component when practical. If adding a global class, document its purpose and avoid generic names that could collide.
- Follow mobile-first Tailwind breakpoints. Add `sm:`, `md:`, `lg:`, and larger overrides only when the layout actually changes at that width. Check narrow screens for overflow and preserve usable tap targets.
- Prefer existing spacing and color tokens before adding arbitrary values. Arbitrary values are already used to reproduce specific design references; use them intentionally and consolidate repeated values into tokens when they become a stable system.
- Use `max-w-*` containers and responsive grid/flex layouts to keep content readable at wide sizes. Avoid fixed widths that cause horizontal scrolling on small screens.
- Keep decorative imagery positioned within a `relative` container and prevent it from obscuring text or controls. Use `object-fit`/background sizing appropriate to the source asset; verify the crop at the target component dimensions.

## 5. Typography standards

### Current font

The app loads **Inter** centrally with `next/font/google` in `src/app/layout.jsx`, and applies antialiasing in `src/app/globals.css`. Keep the font global rather than loading separate fonts in individual components.

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

### Shared tokens

The source of truth for reusable visual values is the custom properties in `src/app/globals.css` under `:root`. `tailwind.config.js` maps Tailwind theme names to these variables. Use Tailwind utilities in JSX (for example, `text-brand`, `bg-surface`, `rounded-card`, or `text-section-title`) and CSS variables in global styles. Do not define a second independent value for an existing token.

The shared set includes semantic colors, page/section/card spacing, compact and display typography, line heights, letter spacing, border widths, and common radii. The soft shadow remains configured as `shadow-soft` in Tailwind. Add a token when a design value is used across components or should be consistent throughout the app; keep genuinely one-off illustration and mock screenshot details local.

### Existing usage pattern

- Primary CTA and brand emphasis: `brand` / violet.
- Main headings: near-black, commonly `text-slate-950` or `text-slate-900`.
- Secondary copy and labels: slate gray, commonly `text-slate-500` or `text-slate-400`.
- Borders and separators: light slate (`border-slate-200`) or light violet for branded panels.
- Category card accents: violet, orange, emerald, rose, and blue; each card combines a pale background, a matching border, and a stronger icon/accent color.
- Positive market signals: emerald; caution/medium states: amber. Do not communicate status through color alone; include text or another visual cue.

Use configured semantic tokens instead of repeating their values. The default Tailwind palette remains available for conventional colors and statuses; if a project color becomes recurring, add it to the shared token set and map it in Tailwind.

## 7. Motion and interaction

- Keep transitions short and purposeful (hover color, elevation, small movement); avoid animating layout in ways that make content jump.
- Use the existing `hero-copy-in` entrance animation and staggered `.category-card` animation as references for simple reveal effects.
- Honor `prefers-reduced-motion: reduce` for non-essential motion. Any new looping, auto-advancing, or entrance animation should have a reduced-motion path.
- Auto-rotation should remain slow enough to read, pause/stop where required for accessibility, and not be the only way to reach content. Keep content available without waiting for an animation.
- Preserve keyboard focus visibility. Hover effects must have an equivalent focus state for interactive controls.

## 8. Assets and images

- Store project-owned image and vector assets under `public/` and reference them with root-relative paths such as `/image%201.png`.
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

## 13. Current landing-page presentation

### Synchronized hero and market-card rotation

- `MarketRotationProvider` in `src/components/features/MarketRotationContext.jsx` owns the active landing-page message index. Keep the hero copy and the micro-market heading/card set driven by this shared state so their transitions stay in sync.
- The current three hero messages correspond to sourcing opportunities, emerging micro-markets, and development areas. Keep the message and market-set order aligned when adding or revising a rotation item.
- The rotation advances every 6.5 seconds. Its timer is created and cleaned up in an effect; when `prefers-reduced-motion: reduce` is active, it does not auto-advance.
- The market-card grid remounts on a rotation change to replay its staggered entrance. The entrance lasts 0.55 seconds per card with a 0.1-second delay between cards; disable this animation for reduced-motion users.
- Preserve useful content if rotation is paused or disabled: the initial hero message and its matching market cards remain rendered.

### Market-card content and assets

- Keep each audience-specific card set in `src/components/features/MicroMarketsSection.jsx`. The sourcing, emerging-market, and development sets are presentation examples, not live or verified investment recommendations; do not present their scores, growth figures, or liquidity labels as real-time data.
- Keep card order, heading, and details aligned with the active hero message. Use stable market names as React keys and meaningful image alt text.
- Project-owned market imagery belongs in `public/` and is referenced with a root-relative URL. The supplied Stockport image is stored as `public/stockport-sk1.png`; other market photos currently use Unsplash URLs.

### Feature banners and platform section styling

- `FeatureBanners` contains the “Unlock deeper intelligence” and “How PropSense works” cards. At desktop widths, their target dimensions are 731.39 × 301.75px and 562.61 × 303px respectively; use a centered two-column layout that preserves those dimensions where space permits, and stack/fill the available width on smaller screens.
- Keep banner illustrations decorative when appropriate (`alt=""` and `aria-hidden="true"`). The blocks illustration is sized responsively in `globals.css`; the UK map has a 164 × 245px desktop size with smaller viewport overrides.
- The final `#platform` section uses `#FAF8FF` as its background and `#EEE9FA` for its top border. Keep this section-level treatment separate from the individual preview-card surfaces.
