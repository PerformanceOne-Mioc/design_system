# design_system

Production-grade design system for performance marketing work — dashboards, client reports, landing pages, proposals.

**Dennis Mioc · Performance Marketing Freelancer**

---

## Two registers, one system

| | Core System | Fluid Glass |
|---|---|---|
| **Ground** | Amber-tinted off-white | Barely-blue cool neutral |
| **Accent** | Copper `oklch(68% .155 60)` | Terra cotta `oklch(59% .23 33)` |
| **Surface** | Opaque elevated fills | Frosted glass + backdrop-filter |
| **Atmosphere** | Static, clean, data-dense | Ambient blob drift |
| **Best for** | Dashboards, reports | Landing pages, presentations |
| **Preview** | [showcase/index.html](showcase/index.html) | [showcase/fluid-glass.html](showcase/fluid-glass.html) |

---

## Showcase

Open `showcase/index.html` for the core system: color palette, typography scale, buttons, cards, KPI metrics, tables, progress bars, forms, and states (skeleton, empty, loading, toast).

Open `showcase/fluid-glass.html` for the glass variant: organic sculpture palette, frosted panels, glass navigation, and ambient blob atmosphere.

---

## Structure

```
tokens/          DTCG JSON — colors, typography, spacing, shadows, motion
css/             CSS Custom Properties + component styles
  tokens.css     Unified :root + [data-theme] blocks
  base.css       Reset, font loading, root typography
  components/    Buttons, cards, forms, badges, progress, table, KPI, states
  glass/         Glass-variant tokens, blob layer, glass components
showcase/        Live HTML showcases (self-contained, no build step)
docs/            Markdown documentation
DESIGN.md        Canonical spec in Google Stitch format
```

---

## Usage

No build step required. Include CSS files directly:

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components/buttons.css">
```

For the glass variant, add after core:

```html
<link rel="stylesheet" href="css/glass/glass-tokens.css">
<link rel="stylesheet" href="css/glass/glass-base.css">
<link rel="stylesheet" href="css/glass/glass-components.css">
```

---

## Token format

All tokens use [DTCG (Design Token Community Group)](https://design-tokens.github.io/community-group/) format with `$value`, `$type`, and `$description`. OKLCH throughout.

```json
{
  "color": {
    "light": {
      "accent": {
        "$value": "oklch(68% .155 60)",
        "$type": "color",
        "$description": "Copper — single CTA accent"
      }
    }
  }
}
```

---

## Canonical spec

[DESIGN.md](DESIGN.md) is the single source of truth. It follows the Google Stitch `manage-design-system` format and is mirrored at [.stitch/DESIGN.md](.stitch/DESIGN.md) for Stitch skill compatibility.

---

## Design principles

1. **OKLCH throughout** — perceptually uniform, neutrals tinted to brand hue
2. **One accent per view** — copper in core, terra cotta in glass
3. **Animate only transform + opacity** — never layout properties
4. **Display font for structure, body font for reading**
5. **4pt spacing scale** — every gap is a multiple of 4px
6. **`prefers-reduced-motion` respected everywhere**
