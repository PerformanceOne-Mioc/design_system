# Design System Overview

Dennis Mioc — Performance Marketing Freelancer

## What this is

A production-grade design system for client-facing marketing work: dashboards, reports, landing pages, and proposals. It has two registered variants that share the same type system and spacing scale but diverge in palette and visual character.

| Variant | Use case | Palette |
|---|---|---|
| **Core** | Dashboards, reports, proposals | Warm amber neutrals + copper accent |
| **Fluid Glass** | Hero sections, landing pages, presentations | Organic cool-neutral ground + purple→orange sculpture gradient |

## File map

```
design_system/
├── tokens/               Design Token Community Group (DTCG) JSON
│   ├── colors.json       All three palette contexts (light / dark / glass)
│   ├── typography.json   Fonts, scale, weights, line-heights, letter-spacing
│   ├── spacing.json      4pt scale, radius, container constraints
│   ├── shadows.json      Elevation layers + glass highlights
│   └── motion.json       Durations, easings, blur values, animation rules
│
├── css/
│   ├── tokens.css        CSS Custom Properties (unified :root + theme overrides)
│   ├── base.css          Reset, font loading, root typography
│   └── components/
│       ├── buttons.css
│       ├── cards.css
│       ├── forms.css
│       ├── badges.css
│       ├── progress.css
│       ├── table.css
│       ├── kpi.css
│       └── states.css    Skeleton, empty, loading, error, toast
│   └── glass/
│       ├── glass-tokens.css   Glass-variant scoped custom properties
│       ├── glass-base.css     Ambient blob layer + scene foundation
│       └── glass-components.css  Frosted panels, glass nav, glass buttons
│
├── showcase/
│   ├── index.html        Core system showcase (light + dark theme)
│   └── fluid-glass.html  Fluid Glass variant showcase
│
├── docs/
│   ├── overview.md       ← this file
│   ├── colors.md
│   ├── typography.md
│   ├── components.md
│   └── fluid-glass.md
│
├── DESIGN.md             Canonical spec (Google Stitch format)
├── .impeccable.md        Impeccable skill design context
└── .stitch/DESIGN.md     Stitch manage-design-system compatibility copy
```

## Quick start

Include the CSS files in order:

```html
<!-- Tokens first — everything else reads from these variables -->
<link rel="stylesheet" href="css/tokens.css">
<!-- Base typography and reset -->
<link rel="stylesheet" href="css/base.css">
<!-- Components as needed -->
<link rel="stylesheet" href="css/components/buttons.css">
<link rel="stylesheet" href="css/components/cards.css">
```

For the Fluid Glass variant, add the glass layer after the core files:

```html
<link rel="stylesheet" href="css/glass/glass-tokens.css">
<link rel="stylesheet" href="css/glass/glass-base.css">
<link rel="stylesheet" href="css/glass/glass-components.css">
```

Then wrap your page in:

```html
<div class="glass-variant glass-scene">
  <div class="blob-layer">
    <div class="blob blob-purple blob-a"></div>
    <div class="blob blob-peach blob-b"></div>
    <div class="blob blob-orange blob-c"></div>
    <div class="blob blob-mauve blob-d"></div>
  </div>
  <div class="glass-content">
    <!-- your content -->
  </div>
</div>
```

## Design principles

1. **One accent.** Never use more than one accent color per view. Copper (`oklch(68% .155 60)`) in the core system; terra cotta (`oklch(59% .23 33)`) in the glass variant.

2. **OKLCH throughout.** All color values use `oklch()`. The neutrals are tinted toward the brand hue (H≈65° core, H≈260° glass ground) at very low chroma (0.007–0.013) for subconscious cohesion.

3. **Animate only transform and opacity.** Never animate layout properties. All animations respect `prefers-reduced-motion`.

4. **Display font for structure, body font for reading.** Barlow Semi Condensed on all headings, labels, buttons, KPI values. Atkinson Hyperlegible on all body copy and form inputs.

5. **4pt spacing.** Every spacing value is a multiple of 4px. Use `--space-{n}` tokens.
