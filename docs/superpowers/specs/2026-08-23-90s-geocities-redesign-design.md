# 90s GeoCities-Style Portfolio Redesign

## Goal
Replace the current neobrutalism design system with a 90s retro-web (GeoCities-era) aesthetic, moderate intensity: nostalgic but still readable for recruiters/clients.

## Layout
Three-column fixed-center layout:
- Left sidebar: ~180-200px, sticky, decorative widgets
- Center content: max-width ~760-800px, holds all real sections
- Right sidebar: ~180-200px, sticky, decorative widgets
- Outside the center column: tiled background pattern, visually distinct from center column background
- Mobile (< 1024px): sidebars hidden (or collapsed below footer, decision left to implementation); center column becomes full width

## Sidebar Widgets (decorative only, not navigation)
- "Best viewed in 1024×768" badge
- Visitor counter — CSS/JS digital-counter look, value persisted via localStorage (increments once per session)
- "Under Construction" badge with CSS-animated blink/stripe (no external gif assets)
- "Powered by React" / webring-style button row

## Marquee
Two uses, both via a shared reusable `Marquee` component (CSS keyframe scroll, pauses on hover, respects `prefers-reduced-motion`):
1. **Announcement bar** — fixed at top of page, above Navbar. Scrolling text, e.g. "✦ WELCOME TO MY PORTFOLIO ✦ AVAILABLE FOR HIRE ✦ BEST VIEWED IN NETSCAPE NAVIGATOR ✦"
2. **Tech ticker** — inside the Skills/TechStacks section, continuously scrolling tech stack badges

## Visual System (moderate intensity)
- Palette: 90s bright colors (electric blue, purple, yellow) on dark navy/black text; replaces the current `--dark/--blue/--blue-light/--white` tokens entirely in `index.css`
- Typography: retro-display font for headings (Google Font, e.g. "Press Start 2P" or a bold serif like Times-style), body text stays a readable sans-serif
- Borders/buttons: hard 2-3px solid borders with a beveled/inset Win95-style button treatment, replacing the current `.neo-*` shadow system
- Remove `.neo-border`, `.neo-shadow-*`, `.neo-btn`, `.neo-card` classes and their usages; introduce equivalent `.retro-*` classes

## Components Touched
- `src/index.css` — full rewrite: remove neo-* system, add tiled bg, marquee keyframes, retro border/button classes, new color tokens, font imports
- `src/App.jsx` / `src/components/Layout.jsx` — restructure into 3-column grid, mount announcement marquee
- New: `src/components/Marquee.jsx` — reusable scrolling marquee
- New: `src/components/SidebarWidgets.jsx` — visitor counter, badges, under-construction, webring buttons
- `src/components/Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Projects.jsx`, `Skills.jsx`, `TechStacks.jsx`, `Contact.jsx`, `Footer.jsx` — restyle to retro system; Skills/TechStacks gains the tech ticker marquee

## Testing
- Run dev server, visually verify each section
- Verify marquee animates smoothly, pauses on hover, respects `prefers-reduced-motion`
- Verify responsive behavior at mobile width (sidebars collapse/hide)
- Verify visitor counter persists across reload (localStorage) but only increments once per session
