# design_system

Production-grade design system for performance marketing work — dashboards, client reports, landing pages, proposals.

**Dennis Mioc · Performance Marketing Freelancer**

---

## One system. Glass-native.

Frosted surfaces, organic colour palette, ambient blob atmosphere. Not a "glass variant" layered on top — this is the system.

| | |
|---|---|
| **Ground** | Cool neutral `oklch(95.8% .003 258)` |
| **Surfaces** | Frosted glass — `backdrop-filter: blur(28–40px)` |
| **Palette** | Purple → Mauve → Peach → Sand → Orange |
| **Accent** | Terra cotta `oklch(59% .23 33)` |
| **Atmosphere** | 4 ambient blobs, 20–26s organic drift |
| **Showcase** | [showcase/index.html](showcase/index.html) |

---

## Showcase

Open `showcase/index.html` — colour palette, typography scale, buttons, KPI cards, table, progress bars, forms, badges, states (skeleton, empty). Full dark mode toggle included.

**Live:** `npx serve showcase -l 3900` → [http://localhost:3900](http://localhost:3900)

---

## Structure

```
css/
  tokens.css          CSS Custom Properties (:root + [data-theme="dark"])
  base.css            Reset, font loading, root typography
  components/         Buttons, cards, forms, badges, progress, table, KPI, states
  glass/              Glass surface classes + glass-specific component styles
showcase/
  index.html          Unified system showcase (standalone, no build step)
docs/
  overview.md         Architecture and quick-start
  colors.md           Colour system deep-dive
  typography.md       Font pairing rationale and scale
  components.md       Component reference
  fluid-glass.md      Glass material architecture
DESIGN.md             Canonical spec (Google Stitch format)
.stitch/DESIGN.md     Stitch manage-design-system mirror
.impeccable.md        Impeccable skill design context
```

---

## Usage

No build step. Include CSS files in order:

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components/buttons.css">
<link rel="stylesheet" href="css/glass/glass-base.css">
<link rel="stylesheet" href="css/glass/glass-components.css">
```

Page structure for the glass atmosphere:

```html
<div class="blob-layer" aria-hidden="true">
  <div class="blob blob-a"></div>
  <div class="blob blob-b"></div>
  <div class="blob blob-c"></div>
  <div class="blob blob-d"></div>
</div>
<main class="glass-content">
  <!-- your content — all cards use .glass or .glass-strong -->
</main>
```

---

## Design principles

1. **Glass is the default surface** — not an optional layer
2. **OKLCH throughout** — perceptually uniform, neutrals tinted H≈260°
3. **One accent per view** — terra cotta only
4. **Animate only transform + opacity** — never layout properties
5. **Display font for structure, body font for reading**
6. **4pt spacing scale** — every gap a multiple of 4px
7. **`prefers-reduced-motion` respected everywhere**

---

## Canonical spec

[DESIGN.md](DESIGN.md) is the single source of truth.
