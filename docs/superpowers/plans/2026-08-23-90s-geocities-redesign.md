# 90s GeoCities-Style Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current neobrutalism design system with a moderate-intensity 90s GeoCities-style retro web aesthetic: a fixed 3-column layout (decorative sidebars, centered content column), scrolling marquees, and a retro visual system, across the whole portfolio site.

**Architecture:** This is a static React + Vite site with no test framework configured (confirmed: no test runner in `package.json`). There is no existing automated test suite to extend, so every task's "test" step is a manual/visual verification via the running dev server — this is the correct approach for a CSS/JSX-only visual redesign, not a gap to fill in later. Work proceeds bottom-up: CSS foundation first (colors, fonts, retro utility classes, marquee keyframes), then two new reusable components (`Marquee`, `SidebarWidgets`), then the 3-column shell in `App.jsx`, then each section component restyled in place, finishing with a full-site manual QA pass.

**Tech Stack:** React 19, Vite, Tailwind CSS v4 (`@tailwindcss/vite`), plain CSS in `src/index.css`, lucide-react icons. No test runner — verification is via `npm run dev` + browser check.

**Spec:** [docs/superpowers/specs/2026-08-23-90s-geocities-redesign-design.md](../specs/2026-08-23-90s-geocities-redesign-design.md)

## Global Constraints

- Center content column max-width: 760-800px (spec: "Center content: max-width ~760-800px")
- Sidebars: ~180-200px each, sticky, decorative only (no navigation links)
- Sidebars hidden on screens < 1024px; center column becomes full width on mobile
- Marquee must pause on hover and respect `prefers-reduced-motion` (no motion when set)
- Visitor counter increments once per session, persisted via `localStorage`, no external gif assets — CSS-only animations for "under construction" style badges
- Remove `.neo-border`, `.neo-shadow-sm/md/lg`, `.neo-btn`, `.neo-card` and all their usages; replace with new `.retro-*` classes
- Body text stays a readable sans-serif; only headings/display text use the retro display font
- `TechStacks.jsx` currently references undefined classes (`fifth-bg`, `secondary-bg`, `primary-color`, `neo-brutal-shadow-lg`, etc.) from an even older system and is not imported anywhere — it must be rewritten to the new retro system and wired into `App.jsx` with the tech ticker marquee, per spec ("Skills/TechStacks section" gains ticker)

---

### Task 1: Retro CSS Foundation

**Files:**
- Modify: `src/index.css` (full rewrite of design-system portion, lines 1-70)
- Modify: `src/App.css` (remove conflicting `#root` centering/max-width rules)

**Interfaces:**
- Produces CSS custom properties consumed by all later tasks:
  - Colors: `--retro-bg-tile` (tiled outer background), `--retro-center-bg` (center column background), `--retro-blue`, `--retro-purple`, `--retro-yellow`, `--retro-black`, `--retro-text` (body text color)
  - Font stacks: `--font-display` (retro heading font), `--font-body` (readable sans-serif, keep existing "Space Grotesk"/"Inter" stack)
  - Utility classes: `.retro-border` (hard 2-3px solid black border), `.retro-btn` (Win95-style beveled button, inset on `:active`), `.retro-panel` (bordered content panel replacing `.neo-card`), `.retro-tile-bg` (repeating tiled pattern background), `.marquee-track` / `.marquee-content` (keyframe scroll classes, see Task 2)

- [ ] **Step 1: Add Google Fonts import for retro display font**

In `src/index.css`, replace the top of the file:

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Grotesk:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- [ ] **Step 2: Replace color tokens with 90s palette**

Replace the `:root` block:

```css
:root {
  --retro-black: #1a1a2e;
  --retro-blue: #0000ee;
  --retro-purple: #7209b7;
  --retro-yellow: #ffd60a;
  --retro-bg-tile: #3a0ca3;
  --retro-center-bg: #f5f0e8;
  --retro-text: #1a1a2e;
  --font-display: "Press Start 2P", "Courier New", monospace;
  --font-body: "Space Grotesk", "Inter", system-ui, -apple-system, sans-serif;
}
```

- [ ] **Step 3: Update body/html base styles**

Replace the `body`/`html` block:

```css
body {
  font-family: var(--font-body);
  background-color: var(--retro-bg-tile);
  color: var(--retro-text);
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 4: Add tiled background utility**

Add after the base styles:

```css
.retro-tile-bg {
  background-color: var(--retro-bg-tile);
  background-image:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 12px);
}
```

- [ ] **Step 5: Replace neobrutalism classes with retro classes**

Delete the entire "Neobrutalism system" block (`.neo-border`, `.neo-shadow-sm/md/lg`, `.neo-btn`, `.neo-card`) and replace with:

```css
/* Retro 90s system */
.retro-border {
  border: 3px solid var(--retro-black);
}

.retro-panel {
  background-color: var(--retro-center-bg);
  border: 3px solid var(--retro-black);
}

.retro-btn {
  font-family: var(--font-body);
  font-weight: 700;
  border-top: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
  border-right: 3px solid #4a4a6a;
  border-bottom: 3px solid #4a4a6a;
  background-color: var(--retro-purple);
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.05s ease;
}

.retro-btn:active {
  border-top: 3px solid #4a4a6a;
  border-left: 3px solid #4a4a6a;
  border-right: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  transform: translate(1px, 1px);
}

.retro-heading {
  font-family: var(--font-display);
  color: var(--retro-black);
}
```

- [ ] **Step 6: Update scrollbar colors to match retro palette**

Replace the scrollbar block:

```css
::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: var(--retro-center-bg); border-left: 3px solid var(--retro-black); }
::-webkit-scrollbar-thumb { background: var(--retro-purple); border: 2px solid var(--retro-black); }
::-webkit-scrollbar-thumb:hover { background: var(--retro-blue); }
```

- [ ] **Step 7: Remove centering rules from App.css that conflict with the 3-column layout**

Read `src/App.css` and replace the `#root` block:

```css
#root {
  width: 100%;
}
```

Keep the rest of `App.css` (`.logo`, `.card`, `.read-the-docs`, keyframes) as-is — unused currently but harmless and not part of this task's scope.

- [ ] **Step 8: Verify — run dev server and check base styles load**

Run: `npm run dev`

Open the printed local URL in a browser. Expected: page background is the purple tiled color (`--retro-bg-tile`), no console errors about the Google Fonts import, existing components render (unstyled/broken layout is expected at this point — later tasks fix that).

- [ ] **Step 9: Commit**

```bash
git add src/index.css src/App.css
git commit -m "Rewrite CSS foundation with 90s retro color system and utility classes"
```

---

### Task 2: Marquee Component

**Files:**
- Create: `src/components/Marquee.jsx`
- Modify: `src/index.css` (append marquee keyframes)

**Interfaces:**
- Produces: `Marquee` component, default export from `src/components/Marquee.jsx`, props:
  - `children` (ReactNode, required) — content to scroll
  - `speed` (number, optional, default `20`) — animation duration in seconds, lower = faster
  - `className` (string, optional, default `""`) — extra classes on the outer wrapper
- Consumed by: Task 4 (announcement bar in `App.jsx`) and Task 8 (tech ticker in `TechStacks.jsx`)

- [ ] **Step 1: Add marquee keyframes and classes to index.css**

Append to `src/index.css`:

```css
/* Marquee */
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee-viewport {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-track {
  display: inline-flex;
  width: max-content;
  animation: marquee-scroll linear infinite;
}

.marquee-viewport:hover .marquee-track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
```

- [ ] **Step 2: Write the Marquee component**

Create `src/components/Marquee.jsx`:

```jsx
const Marquee = ({ children, speed = 20, className = "" }) => (
  <div className={`marquee-viewport ${className}`}>
    <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
      <span className="marquee-item">{children}</span>
      <span className="marquee-item" aria-hidden="true">{children}</span>
    </div>
  </div>
);

export default Marquee;
```

- [ ] **Step 3: Verify — render a throwaway test usage**

Temporarily add to `src/App.jsx` right after the opening `<div>` (will be replaced properly in Task 4):

```jsx
import Marquee from './components/Marquee';
// ...
<Marquee speed={15}><span style={{ padding: '0 2rem' }}>TEST MARQUEE TEXT</span></Marquee>
```

Run: `npm run dev`

Expected: a horizontally scrolling line of "TEST MARQUEE TEXT" repeating seamlessly, pauses on mouse hover. Then remove this temporary usage (Task 4 adds the real one).

- [ ] **Step 4: Commit**

```bash
git add src/components/Marquee.jsx src/index.css
git commit -m "Add reusable Marquee component with hover-pause and reduced-motion support"
```

---

### Task 3: SidebarWidgets Component

**Files:**
- Create: `src/components/SidebarWidgets.jsx`
- Modify: `src/index.css` (append sidebar widget styles)

**Interfaces:**
- Produces: `SidebarWidgets` component, default export from `src/components/SidebarWidgets.jsx`, props:
  - `side` (string, required) — `"left"` or `"right"`, controls which widget subset renders (left: visitor counter + best-viewed badge; right: under-construction + webring buttons)
- Consumed by: Task 4 (`App.jsx` 3-column shell)
- Uses `localStorage` key `"portfolio_visitor_count"` for the visitor counter

- [ ] **Step 1: Add sidebar widget styles to index.css**

Append to `src/index.css`:

```css
/* Sidebar widgets */
.retro-widget {
  background-color: var(--retro-center-bg);
  border: 2px solid var(--retro-black);
  padding: 10px;
  margin-bottom: 16px;
  font-size: 0.7rem;
  text-align: center;
}

.retro-widget-title {
  font-family: var(--font-display);
  font-size: 0.55rem;
  margin-bottom: 6px;
  color: var(--retro-purple);
}

.retro-counter {
  font-family: "Courier New", monospace;
  font-weight: 700;
  background-color: var(--retro-black);
  color: var(--retro-yellow);
  padding: 4px 8px;
  letter-spacing: 2px;
  display: inline-block;
}

@keyframes retro-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.retro-blink {
  animation: retro-blink 1s step-start infinite;
}

@media (prefers-reduced-motion: reduce) {
  .retro-blink {
    animation: none;
  }
}
```

- [ ] **Step 2: Write the SidebarWidgets component**

Create `src/components/SidebarWidgets.jsx`:

```jsx
import { useEffect, useState } from "react";

const VISITOR_KEY = "portfolio_visitor_count";

const useVisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("portfolio_session_counted");
    const stored = parseInt(localStorage.getItem(VISITOR_KEY), 10);
    const current = Number.isFinite(stored) ? stored : 13042;

    if (!alreadyCounted) {
      const next = current + 1;
      localStorage.setItem(VISITOR_KEY, String(next));
      sessionStorage.setItem("portfolio_session_counted", "1");
      setCount(next);
    } else {
      setCount(current);
    }
  }, []);

  return count;
};

const LeftWidgets = () => {
  const count = useVisitorCount();
  return (
    <>
      <div className="retro-widget">
        <div className="retro-widget-title">VISITOR COUNT</div>
        <div className="retro-counter">
          {count === null ? "------" : String(count).padStart(6, "0")}
        </div>
      </div>
      <div className="retro-widget">
        <div className="retro-widget-title">DISPLAY</div>
        <div>Best viewed in<br />1024×768</div>
      </div>
    </>
  );
};

const RightWidgets = () => (
  <>
    <div className="retro-widget">
      <div className="retro-widget-title retro-blink">⚠ UNDER CONSTRUCTION ⚠</div>
      <div>This site is always<br />a work in progress</div>
    </div>
    <div className="retro-widget">
      <div className="retro-widget-title">POWERED BY</div>
      <div>⚛ React + Vite</div>
    </div>
  </>
);

const SidebarWidgets = ({ side }) => (
  <aside>{side === "left" ? <LeftWidgets /> : <RightWidgets />}</aside>
);

export default SidebarWidgets;
```

- [ ] **Step 3: Verify — visitor counter increments once per session**

Run: `npm run dev`

Temporarily render `<SidebarWidgets side="left" />` and `<SidebarWidgets side="right" />` anywhere in `src/App.jsx` to check visually (Task 4 wires these into the real layout). Reload the page multiple times in the same browser tab: counter value should stay the same after the first load (sessionStorage guard). Open a new tab (new session): counter should increment by 1. Check the "under construction" title blinks on/off every second.

- [ ] **Step 4: Commit**

```bash
git add src/components/SidebarWidgets.jsx src/index.css
git commit -m "Add SidebarWidgets component with persistent visitor counter and retro badges"
```

---

### Task 4: 3-Column Shell + Announcement Marquee in App.jsx

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/index.css` (append layout grid styles)

**Interfaces:**
- Consumes: `Marquee` (Task 2, default export, `children`/`speed` props), `SidebarWidgets` (Task 3, default export, `side` prop)
- Produces: page-level CSS classes `.retro-page-grid`, `.retro-sidebar`, `.retro-center-col`, `.retro-announcement-bar` consumed implicitly by the page structure (no further component depends on these names directly, but keep them stable since Task 5 Navbar sits inside the center column and needs to know the grid doesn't clip a `position: sticky` navbar)

- [ ] **Step 1: Add 3-column grid layout styles to index.css**

Append to `src/index.css`:

```css
/* 3-column layout */
.retro-announcement-bar {
  background-color: var(--retro-black);
  color: var(--retro-yellow);
  font-family: var(--font-display);
  font-size: 0.65rem;
  padding: 8px 0;
  border-bottom: 3px solid var(--retro-yellow);
}

.retro-page-grid {
  display: grid;
  grid-template-columns: 200px minmax(0, 800px) 200px;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  align-items: start;
}

.retro-sidebar {
  position: sticky;
  top: 24px;
}

.retro-center-col {
  background-color: var(--retro-center-bg);
  border: 3px solid var(--retro-black);
  min-width: 0;
}

@media (max-width: 1023px) {
  .retro-page-grid {
    grid-template-columns: minmax(0, 800px);
  }
  .retro-sidebar {
    display: none;
  }
}
```

- [ ] **Step 2: Rewrite App.jsx with the 3-column shell and announcement marquee**

Replace `src/App.jsx`:

```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStacks from './components/TechStacks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Marquee from './components/Marquee';
import SidebarWidgets from './components/SidebarWidgets';

function App() {
  return (
    <div className="min-h-screen retro-tile-bg">
      <Marquee speed={22} className="retro-announcement-bar">
        <span style={{ padding: '0 2rem' }}>
          ✦ WELCOME TO MY PORTFOLIO ✦ AVAILABLE FOR HIRE ✦ BEST VIEWED IN NETSCAPE NAVIGATOR ✦ THANKS FOR VISITING ✦
        </span>
      </Marquee>

      <Navbar />

      <div className="retro-page-grid">
        <div className="retro-sidebar">
          <SidebarWidgets side="left" />
        </div>

        <main className="retro-center-col">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <TechStacks />
          <Contact />
          <Footer />
        </main>

        <div className="retro-sidebar">
          <SidebarWidgets side="right" />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify — full page structure renders**

Run: `npm run dev`

Expected: purple tiled background outside center column, black announcement marquee bar at top scrolling and pausing on hover, sidebars visible with widgets on desktop width, sidebars disappear below 1024px viewport width (test via browser devtools responsive mode). Section content will look unstyled/broken inside the center column — that's expected, fixed in Tasks 5-9.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/index.css
git commit -m "Add 3-column retro layout shell with announcement marquee to App"
```

---

### Task 5: Restyle Navbar and Hero

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: `.retro-btn`, `.retro-border`, `.retro-heading`, CSS vars `--retro-blue`/`--retro-purple`/`--retro-yellow`/`--retro-black`/`--retro-center-bg` (all from Task 1)
- No new exports; both remain default exports with the same prop-free signatures

- [ ] **Step 1: Restyle Navbar.jsx**

Replace `src/components/Navbar.jsx` var references and remove the fixed positioning (nav now lives above the grid, not fixed, since the grid has its own sticky sidebars):

```jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Layout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav
      className="retro-center-bg"
      style={{ borderBottom: "3px solid var(--retro-black)" }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="retro-heading text-xs px-4 py-2"
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              border: "3px solid var(--retro-black)",
            }}
          >
            AGR.
          </a>

          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-bold text-sm px-4 py-2 transition-all hover:bg-[var(--retro-yellow)]"
                style={{
                  color: "var(--retro-black)",
                  border: "2px solid var(--retro-black)",
                }}
              >
                {l}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ border: "2px solid var(--retro-black)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div style={{ borderTop: "2px solid var(--retro-black)" }}>
          <Container>
            <div className="py-3 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-sm px-4 py-3"
                  style={{
                    color: "var(--retro-black)",
                    border: "2px solid var(--retro-black)",
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 2: Restyle Hero.jsx**

In `src/components/Hero.jsx`, replace all `var(--dark)` → `var(--retro-black)`, `var(--blue)` → `var(--retro-purple)`, `var(--blue-light)` → `var(--retro-yellow)`, `var(--white)` → `#ffffff`, `neo-btn` class → `retro-btn`, and add `retro-heading` to the `<h1>` className. Also change `bg-white` on the section to use the retro center background and drop the fixed 96px top padding (no longer needed since navbar isn't `position: fixed`):

```jsx
import { GithubIcon, LinkedinIcon, Mail, ArrowRight } from "lucide-react";
import Container from "./Layout";

const Hero = () => (
  <section
    id="home"
    style={{ paddingTop: "48px", paddingBottom: "80px", backgroundColor: "var(--retro-center-bg)" }}
  >
    <Container>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 text-sm font-bold w-fit px-4 py-2"
            style={{
              backgroundColor: "var(--retro-yellow)",
              color: "var(--retro-black)",
              border: "2px solid var(--retro-black)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--retro-purple)" }}
            />
            Available for work
          </div>

          <h1
            className="retro-heading leading-tight"
            style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "var(--retro-black)" }}
          >
            Hi, I'm{" "}
            <span
              style={{
                backgroundColor: "var(--retro-purple)",
                color: "#ffffff",
                padding: "0 10px",
                border: "3px solid var(--retro-black)",
                display: "inline-block",
              }}
            >
              Adit
            </span>
            <br />
            Software Engineer
          </h1>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--retro-black)", opacity: 0.75, maxWidth: "480px" }}
          >
            Versatile backend engineer with 4+ years building scalable
            microservices, APIs, and mobile apps across Go, Java, PHP, Kotlin, and C#.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 retro-btn"
            >
              Get In Touch <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 retro-btn"
              style={{ backgroundColor: "var(--retro-yellow)", color: "var(--retro-black)" }}
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { href: "https://github.com/chillman2101", icon: <GithubIcon size={18} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/adit-gustiana-r-8293a91b6/", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
              { href: "mailto:adit.gustianar@gmail.com", icon: <Mail size={18} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 retro-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="flex flex-col items-center justify-center gap-3"
              style={{
                width: "260px",
                height: "300px",
                backgroundColor: "var(--retro-yellow)",
                border: "3px solid var(--retro-black)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span style={{ fontSize: "4rem" }}>👨‍💻</span>
              <p className="font-bold text-base" style={{ color: "var(--retro-black)" }}>
                Your Photo Here
              </p>
            </div>
            {/* Decorative block behind */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                width: "260px",
                height: "300px",
                backgroundColor: "var(--retro-purple)",
                border: "3px solid var(--retro-black)",
                zIndex: 0,
              }}
            />
          </div>
        </div>

      </div>
    </Container>
  </section>
);

export default Hero;
```

- [ ] **Step 3: Verify**

Run: `npm run dev`. Expected: navbar and hero use purple/yellow/black retro palette, retro beveled buttons show inset effect on click, heading uses the pixel display font, layout fits inside the 800px center column without overflow.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/components/Hero.jsx
git commit -m "Restyle Navbar and Hero with retro 90s visual system"
```

---

### Task 6: Restyle About and Projects

**Files:**
- Modify: `src/components/About.jsx`
- Modify: `src/components/Projects.jsx`

**Interfaces:**
- Consumes: same retro CSS vars/classes as Task 5

- [ ] **Step 1: Restyle About.jsx**

In `src/components/About.jsx`, apply the same variable substitution as Task 5 (`var(--dark)`→`var(--retro-black)`, `var(--blue)`→`var(--retro-purple)`, `var(--blue-light)`→`var(--retro-yellow)`, `var(--white)`→`var(--retro-center-bg)`), remove all `boxShadow` lines (retro system uses hard borders, not neo-shadows), and add `retro-heading` class to the `<h2>`:

```jsx
import { Code, Layers, Zap, Users } from "lucide-react";
import Container from "./Layout";

const About = () => {
  const features = [
    { icon: <Code size={24} />, title: "Clean Architecture", desc: "Microservices, domain separation, scalable design patterns" },
    { icon: <Layers size={24} />, title: "Multi-Stack", desc: "Go, Java, PHP, Kotlin, C#, Ruby on Rails" },
    { icon: <Zap size={24} />, title: "Performance", desc: "Concurrency, Redis caching, query optimization" },
    { icon: <Users size={24} />, title: "Collaborative", desc: "Fintech, e-commerce, gaming, and healthcare teams" },
  ];

  return (
    <section id="about" style={{ backgroundColor: "var(--retro-yellow)", padding: "64px 0" }}>
      <Container>
        <div className="mb-12">
          <h2 className="retro-heading" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
            About{" "}
            <span
              style={{
                backgroundColor: "var(--retro-purple)",
                color: "#ffffff",
                padding: "0 10px",
                border: "3px solid var(--retro-black)",
                display: "inline-block",
              }}
            >
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            <div
              className="p-8"
              style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--retro-black)" }}>
                I'm a versatile software engineer based in Bandung, Indonesia with 4+ years
                of experience building scalable backend systems, microservices, and mobile apps.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--retro-black)" }}>
                I've worked across fintech, e-commerce, healthcare, and gaming —
                from QRIS payment systems and multi-tenant SaaS to Android apps
                and game backend services.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--retro-black)" }}>
                My core stack: Go, PHP (Laravel), Java, C#, and Kotlin.
                Always eager to learn and take on new challenges.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "4+", label: "Years Exp" },
                { val: "5+", label: "Companies" },
                { val: "10+", label: "Tech Stacks" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center py-5"
                  style={{
                    backgroundColor: "var(--retro-center-bg)",
                    border: "3px solid var(--retro-black)",
                  }}
                >
                  <div className="font-black text-3xl" style={{ color: "var(--retro-purple)" }}>{s.val}</div>
                  <div className="text-xs font-bold mt-1" style={{ color: "var(--retro-black)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5"
                style={{
                  backgroundColor: "var(--retro-center-bg)",
                  border: "3px solid var(--retro-black)",
                }}
              >
                <div className="mb-3" style={{ color: "var(--retro-purple)" }}>{f.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--retro-black)" }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--retro-black)", opacity: 0.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Restyle Projects.jsx**

In `src/components/Projects.jsx`, replace the `headerBg`/`headerColor` values in the `projects` array (`var(--blue)`→`var(--retro-purple)`, `var(--blue-light)`→`var(--retro-yellow)`), apply the same var substitution to the JSX, remove `boxShadow` lines, replace `neo-btn` with `retro-btn`, add `retro-heading` to `<h2>`:

```jsx
import { ExternalLink, GithubIcon } from "lucide-react";
import Container from "./Layout";

const projects = [
  {
    title: "AHAMART Platform",
    desc: "Multi-tenant SaaS e-commerce split into 5 microservices: POS, WMS, payment (Midtrans), accounting, voucher, and delivery.",
    tags: ["Go", "Rails", "PostgreSQL", "Redis", "Kafka", "Docker"],
    headerBg: "var(--retro-purple)",
    headerColor: "#ffffff",
  },
  {
    title: "Game Backend — Agate",
    desc: "Backend APIs for game client: daily login rewards with streak tracking, Battle Pass with seasonal progression and tier rewards.",
    tags: ["C#", "Game Backend", "REST API", "Battle Pass"],
    headerBg: "var(--retro-yellow)",
    headerColor: "var(--retro-black)",
  },
  {
    title: "Android Data Collection",
    desc: "Native Android app for field officers: real-time data capture, patrol feature, and offline-capable data submission.",
    tags: ["Kotlin", "Android", "Mobile"],
    headerBg: "var(--retro-purple)",
    headerColor: "#ffffff",
  },
  {
    title: "Monalisa Clinic",
    desc: "Healthcare system with BPJS API and Satu Sehat (FHIR) integration for national health insurance and patient data exchange.",
    tags: ["PHP", "Laravel", "BPJS API", "FHIR"],
    headerBg: "var(--retro-yellow)",
    headerColor: "var(--retro-black)",
  },
  {
    title: "Travel & Umrah Booking",
    desc: "Rabbani Travel and Riffy Travel booking sites for tours and Umrah packages with Midtrans and Xendit payment gateways.",
    tags: ["PHP", "CodeIgniter", "Midtrans", "Xendit"],
    headerBg: "var(--retro-purple)",
    headerColor: "#ffffff",
  },
  {
    title: "Banking Features",
    desc: "QRIS for Maspion Bank, account opening for INA Bank, interbank transfers for Papua Bank, automation testing for BWS Bank.",
    tags: ["Go", "Java", "Kotlin", "QRIS", "Appium"],
    headerBg: "var(--retro-yellow)",
    headerColor: "var(--retro-black)",
  },
];

const Projects = () => (
  <section id="projects" style={{ backgroundColor: "var(--retro-center-bg)", padding: "64px 0" }}>
    <Container>
      <div className="mb-12">
        <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
          Featured{" "}
          <span
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              padding: "0 10px",
              border: "3px solid var(--retro-black)",
              display: "inline-block",
            }}
          >
            Projects
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
          Real-world projects across fintech, e-commerce, healthcare, and gaming.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={{
              backgroundColor: "var(--retro-center-bg)",
              border: "3px solid var(--retro-black)",
            }}
          >
            <div
              className="px-5 py-4"
              style={{
                backgroundColor: p.headerBg,
                borderBottom: "3px solid var(--retro-black)",
              }}
            >
              <h3 className="font-black text-base" style={{ color: p.headerColor }}>{p.title}</h3>
            </div>

            <div className="p-5 flex flex-col flex-grow gap-4">
              <p className="text-sm leading-relaxed flex-grow" style={{ color: "var(--retro-black)", opacity: 0.8 }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs font-bold px-2 py-1"
                    style={{
                      backgroundColor: "var(--retro-yellow)",
                      color: "var(--retro-black)",
                      border: "2px solid var(--retro-black)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-bold retro-btn"
                >
                  <ExternalLink size={13} /> Demo
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-bold retro-btn"
                  style={{ backgroundColor: "var(--retro-yellow)", color: "var(--retro-black)" }}
                >
                  <GithubIcon size={13} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;
```

Note: grid changed from `md:grid-cols-2 lg:grid-cols-3` to `md:grid-cols-2` since the center column (800px max) is too narrow for 3 comfortable card columns.

- [ ] **Step 2: Verify**

Run: `npm run dev`. Expected: About and Projects sections show yellow/purple retro palette, hard borders (no drop shadows), project cards in a 2-column grid fitting the narrower center column.

- [ ] **Step 3: Commit**

```bash
git add src/components/About.jsx src/components/Projects.jsx
git commit -m "Restyle About and Projects sections with retro 90s visual system"
```

---

### Task 7: Restyle Skills

**Files:**
- Modify: `src/components/Skills.jsx`

**Interfaces:**
- Consumes: same retro CSS vars as prior tasks

- [ ] **Step 1: Restyle Skills.jsx**

Apply the same substitutions as Task 6 (`var(--dark)`→`var(--retro-black)`, `var(--blue)`→`var(--retro-purple)`, `var(--blue-light)`→`var(--retro-yellow)`, `var(--white)`→`var(--retro-center-bg)`), remove `boxShadow`, add `retro-heading` to `<h2>`:

```jsx
import Container from "./Layout";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Go", level: 80 },
      { name: "PHP (Laravel & CodeIgniter)", level: 80 },
      { name: "Java", level: 60 },
      { name: "C#", level: 70 },
      { name: "Kotlin", level: 70 },
      { name: "Ruby on Rails", level: 60 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "PostgreSQL / MySQL", level: 70 },
      { name: "Docker", level: 50 },
      { name: "Redis", level: 40 },
      { name: "Kafka", level: 30 },
      { name: "Prometheus & Grafana", level: 30 },
      { name: "Git", level: 70 },
    ],
  },
];

const badges = [
  { emoji: "⚡", title: "Fast Learner", desc: "Quick to adapt to new technologies" },
  { emoji: "🎯", title: "Problem Solver", desc: "Creative solutions to complex challenges" },
  { emoji: "🤝", title: "Team Player", desc: "Strong communication and collaboration" },
];

const Skills = () => (
  <section id="skills" style={{ backgroundColor: "var(--retro-yellow)", padding: "64px 0" }}>
    <Container>
      <div className="mb-12">
        <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
          Skills &{" "}
          <span
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              padding: "0 10px",
              border: "3px solid var(--retro-black)",
              display: "inline-block",
            }}
          >
            Expertise
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
          Technologies and tools I use to build scalable backend systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "var(--retro-center-bg)",
              border: "3px solid var(--retro-black)",
            }}
          >
            <div
              className="px-6 py-4"
              style={{
                backgroundColor: "var(--retro-purple)",
                borderBottom: "3px solid var(--retro-black)",
              }}
            >
              <h3 className="font-black text-lg" style={{ color: "#ffffff" }}>{cat.category}</h3>
            </div>

            <div className="p-6 flex flex-col gap-5">
              {cat.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm" style={{ color: "var(--retro-black)" }}>{skill.name}</span>
                    <span className="font-bold text-xs" style={{ color: "var(--retro-purple)" }}>{skill.level}%</span>
                  </div>
                  <div
                    className="w-full h-4 relative"
                    style={{
                      backgroundColor: "var(--retro-yellow)",
                      border: "2px solid var(--retro-black)",
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: "100%",
                        backgroundColor: "var(--retro-purple)",
                        borderRight: skill.level < 100 ? "2px solid var(--retro-black)" : "none",
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {badges.map((b, i) => (
          <div
            key={i}
            className="text-center p-6"
            style={{
              backgroundColor: "var(--retro-center-bg)",
              border: "3px solid var(--retro-black)",
            }}
          >
            <div style={{ fontSize: "2.5rem" }} className="mb-3">{b.emoji}</div>
            <h4 className="font-black text-sm mb-1" style={{ color: "var(--retro-black)" }}>{b.title}</h4>
            <p className="text-xs" style={{ color: "var(--retro-black)", opacity: 0.65 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Skills;
```

- [ ] **Step 2: Verify**

Run: `npm run dev`. Expected: Skills section uses yellow background, purple progress bars, hard borders, no shadows.

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills.jsx
git commit -m "Restyle Skills section with retro 90s visual system"
```

---

### Task 8: Rewrite TechStacks with Tech Ticker Marquee

**Files:**
- Modify: `src/components/TechStacks.jsx`

**Interfaces:**
- Consumes: `Marquee` (Task 2, default export, `children`/`speed` props), retro CSS vars/classes (Task 1)
- This component was previously unused/broken (referenced undefined classes, not imported anywhere) — this task fixes both problems, wiring it into `App.jsx` was already done in Task 4

- [ ] **Step 1: Rewrite TechStacks.jsx**

Replace `src/components/TechStacks.jsx` entirely — keep the existing data (stack categories, level logic) but fix the broken class references and add a scrolling tech ticker using `Marquee`:

```jsx
import Marquee from "./Marquee";

const stackCategories = [
  {
    category: "Frontend",
    stacks: [
      { name: "React", level: "Junior" },
      { name: "JavaScript", level: "Junior" },
      { name: "HTML", level: "Junior" },
      { name: "CSS", level: "Junior" },
      { name: "Tailwind CSS", level: "Junior" },
      { name: "Bootstrap", level: "Junior" },
    ],
  },
  {
    category: "Backend & Tools",
    stacks: [
      { name: "Node.js", level: "Junior" },
      { name: "Golang", level: "Intermediate" },
      { name: "MongoDB", level: "Junior" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Junior" },
      { name: "Docker Compose", level: "Junior" },
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "GitHub Actions", level: "Junior" },
      { name: "Coolify", level: "Junior" },
      { name: "GCP", level: "Junior" },
      { name: "Firebase", level: "Junior" },
      { name: "CI/CD", level: "Junior" },
    ],
  },
];

const allStackNames = stackCategories.flatMap((c) => c.stacks.map((s) => s.name));

const getSkillLevel = (level) => {
  switch (level) {
    case "Junior":
      return 100 / 3;
    case "Intermediate":
      return 100 / 2;
    case "Senior":
      return 100 / 1;
    default:
      return 0;
  }
};

const TechStacks = () => (
  <section id="stack" style={{ backgroundColor: "var(--retro-center-bg)", padding: "64px 0" }}>
    <div style={{ padding: "0 2rem" }}>
      <div className="mb-10">
        <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
          Stacks &{" "}
          <span
            style={{
              backgroundColor: "var(--retro-purple)",
              color: "#ffffff",
              padding: "0 10px",
              border: "3px solid var(--retro-black)",
              display: "inline-block",
            }}
          >
            Expertise
          </span>
        </h2>
        <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <Marquee speed={30} className="mb-10">
        <span style={{ padding: "0 1.5rem", fontFamily: "var(--font-display)", fontSize: "0.6rem", color: "var(--retro-purple)" }}>
          {allStackNames.join("   ★   ")}   ★
        </span>
      </Marquee>

      <div className="grid lg:grid-cols-2 gap-6">
        {stackCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
          >
            <div
              className="p-5"
              style={{ backgroundColor: "var(--retro-yellow)", borderBottom: "3px solid var(--retro-black)" }}
            >
              <h3 className="font-black text-xl" style={{ color: "var(--retro-black)" }}>
                {category.category}
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-5">
              {category.stacks.map((stack, stackIndex) => (
                <div key={stackIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm" style={{ color: "var(--retro-black)" }}>
                      {stack.name}
                    </span>
                    <span className="font-bold text-xs" style={{ color: "var(--retro-purple)" }}>
                      {stack.level}
                    </span>
                  </div>
                  <div
                    className="w-full h-4"
                    style={{ backgroundColor: "var(--retro-yellow)", border: "2px solid var(--retro-black)" }}
                  >
                    <div
                      style={{
                        width: `${getSkillLevel(stack.level)}%`,
                        height: "100%",
                        backgroundColor: "var(--retro-purple)",
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStacks;
```

- [ ] **Step 2: Verify**

Run: `npm run dev`. Expected: TechStacks section appears between Skills and Contact, tech names scroll continuously in a ticker, progress bars render for each stack, no console errors about undefined classes.

- [ ] **Step 3: Commit**

```bash
git add src/components/TechStacks.jsx
git commit -m "Rewrite TechStacks with retro system and tech ticker marquee"
```

---

### Task 9: Restyle Contact and Footer

**Files:**
- Modify: `src/components/Contact.jsx`
- Modify: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: same retro CSS vars/classes as prior tasks

- [ ] **Step 1: Restyle Contact.jsx**

Apply the same substitution pattern as Task 6/7 (`var(--dark)`→`var(--retro-black)`, `var(--blue)`→`var(--retro-purple)`, `var(--blue-light)`→`var(--retro-yellow)`, `var(--white)`→`var(--retro-center-bg)`), remove `boxShadow`, replace `neo-btn`→`retro-btn`, add `retro-heading` to `<h2>`:

```jsx
import { useState } from "react";
import { Mail, MapPin, Phone, Send, GithubIcon, LinkedinIcon } from "lucide-react";
import Container from "./Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent! I'll get back to you soon.");
    setTimeout(() => {
      setStatus("");
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const info = [
    { icon: <Mail size={18} />, label: "Email", value: "adit.gustianar@gmail.com", href: "mailto:adit.gustianar@gmail.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+62 896 097 428 90", href: "tel:+6289609742890" },
    { icon: <MapPin size={18} />, label: "Location", value: "Bandung, Indonesia", href: "#" },
  ];

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    border: "2px solid var(--retro-black)",
    outline: "none",
    fontSize: "0.875rem",
    color: "var(--retro-black)",
    backgroundColor: "var(--retro-center-bg)",
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--retro-center-bg)", padding: "64px 0" }}>
      <Container>
        <div className="mb-12">
          <h2 className="retro-heading mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "var(--retro-black)" }}>
            Get In{" "}
            <span
              style={{
                backgroundColor: "var(--retro-purple)",
                color: "#ffffff",
                padding: "0 10px",
                border: "3px solid var(--retro-black)",
                display: "inline-block",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--retro-black)", opacity: 0.65 }}>
            Open to collaborations, freelance work, or just a friendly chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div
              className="p-7"
              style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
            >
              <h3 className="font-black text-lg mb-4" style={{ color: "var(--retro-black)" }}>Let's Connect</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--retro-black)", opacity: 0.7 }}>
                Feel free to reach out for collaborations, opportunities, or just to say hi.
              </p>
              <div className="flex flex-col gap-3">
                {info.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 p-3 transition-colors"
                    style={{
                      border: "2px solid var(--retro-black)",
                      color: "var(--retro-black)",
                      backgroundColor: "var(--retro-yellow)",
                    }}
                  >
                    <span style={{ color: "var(--retro-purple)" }}>{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold" style={{ opacity: 0.55 }}>{item.label}</div>
                      <div className="text-sm font-semibold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-6"
              style={{ backgroundColor: "var(--retro-yellow)", border: "3px solid var(--retro-black)" }}
            >
              <h4 className="font-black mb-4" style={{ color: "var(--retro-black)" }}>Find Me On</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/chillman2101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold retro-btn"
                >
                  <GithubIcon size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adit-gustiana-r-8293a91b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold retro-btn"
                  style={{ backgroundColor: "var(--retro-purple)", color: "#ffffff" }}
                >
                  <LinkedinIcon size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div
            className="p-7"
            style={{ backgroundColor: "var(--retro-center-bg)", border: "3px solid var(--retro-black)" }}
          >
            <h3 className="font-black text-lg mb-6" style={{ color: "var(--retro-black)" }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: "var(--retro-black)" }}>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: "var(--retro-black)" }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" style={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: "var(--retro-black)" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." style={{ ...inputStyle, resize: "none" }} />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3 font-bold retro-btn"
              >
                <Send size={16} /> Send Message
              </button>
              {status && (
                <div
                  className="p-3 text-center text-sm font-bold"
                  style={{ backgroundColor: "var(--retro-yellow)", border: "2px solid var(--retro-black)", color: "var(--retro-black)" }}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 2: Restyle Footer.jsx**

```jsx
import Container from "./Layout";

const Footer = () => (
  <footer style={{ backgroundColor: "var(--retro-black)", borderTop: "3px solid var(--retro-purple)", padding: "32px 0" }}>
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span
            className="font-black text-sm px-3 py-1"
            style={{ backgroundColor: "var(--retro-purple)", color: "#ffffff", border: "2px solid var(--retro-purple)" }}
          >
            AGR.
          </span>
          <p className="text-sm font-medium" style={{ color: "#ffffff", opacity: 0.6 }}>
            © {new Date().getFullYear()} Adit Gustiana Ramadhan
          </p>
        </div>
        <div className="flex gap-5">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold transition-opacity hover:opacity-100"
              style={{ color: "#ffffff", opacity: 0.55 }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
```

- [ ] **Step 3: Verify**

Run: `npm run dev`. Expected: Contact form and Footer use retro palette, form inputs have hard borders, submit button shows beveled retro-btn press effect.

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.jsx src/components/Footer.jsx
git commit -m "Restyle Contact and Footer sections with retro 90s visual system"
```

---

### Task 10: Full-Site Manual QA Pass

**Files:**
- None (verification only); fix forward in whichever file has the issue if something is found

- [ ] **Step 1: Full desktop walkthrough**

Run: `npm run dev`. In a browser at desktop width (≥1024px), scroll through the entire page top to bottom. Verify:
- Announcement marquee scrolls continuously and pauses on hover
- Left sidebar shows visitor counter (6-digit, yellow-on-black) and "best viewed" badge, stays sticky while scrolling
- Right sidebar shows blinking "under construction" and "powered by React", stays sticky while scrolling
- Center column stays within ~800px, background is the cream/retro-center-bg color, distinct from the purple tiled outer background
- All section headings use the pixel display font; body text remains the readable sans-serif
- All buttons show the Win95 beveled inset effect when clicked
- TechStacks ticker scrolls tech names continuously
- No leftover `var(--dark)`, `var(--blue)`, `var(--blue-light)`, `var(--white)`, or `neo-*` class references anywhere (grep check in Step 3)

- [ ] **Step 2: Mobile/responsive walkthrough**

In browser devtools, switch to a viewport < 1024px wide. Verify:
- Both sidebars disappear entirely
- Center column becomes full-width and remains readable
- Navbar hamburger menu still opens/closes correctly
- Marquees still scroll correctly at narrow width

- [ ] **Step 3: Grep for stale references**

Run: `grep -rn "var(--dark)\|var(--blue)\|var(--blue-light)\|var(--white))\|neo-btn\|neo-card\|neo-border\|neo-shadow" src/`

Expected: no output. If any matches appear, fix them in the relevant file using the same substitution pattern from Tasks 5-9, then re-run this grep until clean.

- [ ] **Step 4: Check for console errors**

With the dev server running, open browser devtools console and reload the page. Expected: no errors (React warnings about missing keys, undefined CSS vars, or 404s on the font import would all be regressions to fix).

- [ ] **Step 5: Commit (only if fixes were needed in Steps 1-4)**

```bash
git add -A
git commit -m "Fix remaining issues from full-site retro redesign QA pass"
```

If no fixes were needed, skip this commit — Task 9's commit is the final state.
