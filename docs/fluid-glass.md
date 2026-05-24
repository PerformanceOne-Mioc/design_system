# Fluid Glass Variant

## Concept

The Fluid Glass variant is the expressive register of this design system — used for hero sections, landing pages, presentations, and anywhere the interface should feel sculptural and tactile rather than functional and dense.

The aesthetic derives from organic glass sculpture photography: forms that shift from deep blue-purple shadow caps through dusk mauve, warm peach skin, sand catch-light, to a saturated terra cotta focal point. Everything sits on a barely-cool neutral ground — not warm like the core system, not cold like a typical glassmorphism UI.

## Color palette

Purple → Mauve → Peach → Sand → Orange

```
oklch(35%  .23  285)   Deep blue-purple cap
oklch(54%  .14  284)   Dusk mauve transition
oklch(73%  .11   48)   Warm peach skin (dominant)
oklch(83%  .07   54)   Sand catch-light
oklch(58%  .25   33)   Terra cotta focal point
```

Ground: `oklch(95.8% .003 258)` — barely-blue cool neutral, not white.

## Architecture

```
[blob-layer]  position: fixed, z-index: 0, pointer-events: none
  └── 4 ambient blobs (purple, peach, orange, mauve)
      filter: blur(90px), animation: 20–26s drift cycles

[glass-content]  position: relative, z-index: 1
  └── glass cards, panels, nav, forms
      backdrop-filter: blur(28–40px) saturate(1.5–1.6)
```

The blobs never overlap the UI directly — they diffuse through the backdrop-filter.

## Glass surface levels

| Class | Fill | Blur | Use |
|---|---|---|---|
| `.glass-surface-light` | 42% opacity | `blur(16px) saturate(1.3)` | Subtle overlays |
| `.glass-surface` | 68% opacity | `blur(28px) saturate(1.5)` | Standard panels, cards |
| `.glass-surface-strong` | 84% opacity | `blur(40px) saturate(1.6)` | Hero cards, nav |

All glass surfaces include `inset 0 1px 0 oklch(100% 0 0 / .58)` — the top-edge highlight that simulates physical glass thickness.

## Setup

### 1. Load CSS

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/glass/glass-tokens.css">
<link rel="stylesheet" href="css/glass/glass-base.css">
<link rel="stylesheet" href="css/glass/glass-components.css">
```

### 2. Page structure

```html
<div class="glass-variant glass-scene">

  <!-- Ambient blob layer (position: fixed) -->
  <div class="blob-layer">
    <div class="blob blob-purple blob-a"></div>
    <div class="blob blob-peach  blob-b"></div>
    <div class="blob blob-orange blob-c"></div>
    <div class="blob blob-mauve  blob-d"></div>
  </div>

  <!-- Content layer (sits above blobs) -->
  <div class="glass-content">

    <!-- Glass nav -->
    <nav class="glass-nav">
      <a href="#" class="glass-nav-item active">Home</a>
      <a href="#" class="glass-nav-item">Work</a>
    </nav>

    <!-- Glass card -->
    <div class="glass-card">
      <div class="glass-card-body">
        <h2>Campaign Performance</h2>
      </div>
    </div>

  </div>
</div>
```

### 3. In-card accent blobs (optional)

For cards that need their own internal atmosphere:

```html
<div class="glass-card" style="position: relative;">
  <div class="blob-in-card blob-orange" style="width:160px;height:160px;top:-40px;right:-40px;"></div>
  <div class="glass-card-body">...</div>
</div>
```

## Blob drift behavior

Four named drift keyframes (`blob-drift-a` through `blob-drift-d`) run at different cycle lengths (20–26s) with `animation-direction: alternate`. They use `translate + scale + rotate` — no layout properties. Each has a slightly different easing rhythm to prevent synchronized pulsing.

All blob animations respect `@media (prefers-reduced-motion: reduce)`.

## Color gradient bar

Use `.glass-gradient-bar` to show the full palette journey as a decorative strip:

```html
<div class="glass-gradient-bar"></div>
```

This renders the five-stop gradient at `height: 8px` with pill radius. Use `.glass-gradient-bar-lg` for a 20px version.

## Difference from core system

| Aspect | Core | Fluid Glass |
|---|---|---|
| Ground hue | H≈65° (amber) | H≈258° (barely-blue) |
| Accent | Copper oklch(68% .155 60) | Terra cotta oklch(59% .23 33) |
| Card surface | Opaque elevated fill | Frosted glass fill |
| Animation | Progress bars only | Ambient blob drift |
| Best for | Dashboards, data | Landing pages, presentations |
