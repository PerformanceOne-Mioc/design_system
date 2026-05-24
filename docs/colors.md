# Colors

## Why OKLCH

HSL is not perceptually uniform — equal numeric steps don't look equal. `oklch(60% .15 60)` and `oklch(60% .15 180)` have the same lightness value but a green at 60% looks lighter than an orange at 60% in HSL. OKLCH corrects for this.

Benefits for this system:
- **Neutral tinting** is trivial: set `chroma: 0.007–0.013` toward brand hue
- **Accessible contrast ratios** are predictable by lightness value alone
- **Dark mode** is a lightness flip, not a full palette rethink
- **Alpha** with `/` syntax keeps values readable

## Core system palette

### Surfaces (Light)

| Token | OKLCH | Use |
|---|---|---|
| `--color-canvas` | `oklch(97.5% .007 65)` | Page background |
| `--color-surface` | `oklch(94% .009 65)` | Cards, panels |
| `--color-elevated` | `oklch(91% .010 65)` | Dropdowns, raised elements |

### Text (Light)

| Token | OKLCH | Use |
|---|---|---|
| `--color-ink` | `oklch(16% .012 65)` | Primary text |
| `--color-steel` | `oklch(40% .010 65)` | Secondary text, labels |
| `--color-smoke` | `oklch(60% .008 65)` | Tertiary, placeholders |

### Borders (Light)

| Token | OKLCH | Use |
|---|---|---|
| `--color-whisper` | `oklch(82% .010 65)` | Structural 1px dividers |
| `--color-whisper-strong` | `oklch(70% .012 65)` | Stronger borders |

### Accent — Copper

| Token | OKLCH | Use |
|---|---|---|
| `--color-accent` | `oklch(68% .155 60)` | CTA, links, active states |
| `--color-accent-hover` | `oklch(63% .155 60)` | Hover darken |
| `--color-accent-subtle` | `oklch(93% .040 60)` | Tinted background |
| `--color-accent-text` | `oklch(15% .012 65)` | Text on copper fill |
| `--color-focus-ring` | `oklch(68% .155 60 / .35)` | Keyboard focus ring |

### Semantic

| Token | OKLCH | Use |
|---|---|---|
| `--color-success` | `oklch(52% .16 145)` | Positive delta, success |
| `--color-danger` | `oklch(55% .20 25)` | Negative delta, error |

## Dark mode

Dark mode uses the same hue (H≈65°) for all neutrals — just flipped lightness. The accent gets slightly lighter for better contrast against dark backgrounds.

| Role | Light | Dark |
|---|---|---|
| Canvas | 97.5% | 13% |
| Surface | 94% | 19% |
| Elevated | 91% | 25% |
| Ink | 16% | 93% |
| Steel | 40% | 70% |
| Accent | 68% chroma .155 | 74% chroma .150 |

## Fluid Glass palette

The glass variant uses a completely different ground and a five-stop organic gradient derived from organic sculpture photography.

| Name | OKLCH | Character |
|---|---|---|
| `--glass-purple` | `oklch(35% .23 285)` | Deep blue-purple shadow cap |
| `--glass-mauve` | `oklch(54% .14 284)` | Dusk mauve, purple→peach bridge |
| `--glass-peach` | `oklch(73% .11 48)` | Warm skin tone, dominant mid-zone |
| `--glass-sand` | `oklch(83% .07 54)` | Sand catch-light, surface highlight |
| `--glass-orange` | `oklch(58% .25 33)` | Terra cotta, saturated focal point |
| `--glass-cream` | `oklch(90% .05 58)` | Cream, translucent rim edges |

The gradient journey: `purple → mauve → peach → sand → orange`

```css
background: linear-gradient(
  90deg,
  oklch(35%  .23  285)   0%,
  oklch(54%  .14  284)  22%,
  oklch(73%  .11   48)  50%,
  oklch(83%  .07   54)  68%,
  oklch(58%  .25   33) 100%
);
```

## Rules

- **Never pure black or white.** `oklch(0% 0 0)` and `oklch(100% 0 0)` don't exist in this system.
- **Never neon.** Chroma stays under 0.25 at all times.
- **One accent per view.** Copper in core, terra cotta in glass. Never both simultaneously.
- **Tint all neutrals.** Even `chroma: 0.005` is perceptible and creates cohesion.
- **No gray text on colored backgrounds.** Use a shade of the background hue instead.
