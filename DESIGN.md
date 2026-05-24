# Design System: Dennis Mioc — Performance Marketing
**Author:** Dennis Mioc, Freelancer Performance Marketing  
**Canonical fonts:** Barlow Semi Condensed (display) · Atkinson Hyperlegible (body)  
**Color engine:** OKLCH (perceptually uniform). Hex approximations provided for tooling compatibility.

---

## 1. Visual Theme & Atmosphere

**Design personality scores**  
Density 6 / Variance 6 / Motion 5 / Creativity 8

The interface feels like a well-calibrated instrument panel installed inside a warm Nordic studio. Surfaces carry a faint amber warmth — the color of aged paper and copper fittings — rather than the cold neutrality of generic dashboards. Every metric has a precise, unhurried voice. Numbers are large and authoritative; labels are small and restrained. There is no decorative noise.

The structural logic is editorial: headlines are condensed and typographically bold, data lives in tight tabular or card form, and white space is used generously between sections but tightly within them. The system operates in both **light** (warm canvas) and **dark** (deep charcoal) modes through a `data-theme` attribute toggle that persists via localStorage.

The **Fluid Glass variant** — used for client-facing presentations and impact slides — layers a second visual register on top of the core system: cool light-gray ground, organic amorphous blobs (purple, peach, orange) drifting slowly in the background, and translucent glass surfaces that absorb the ambient color beneath them. The two registers share the same font stack, spacing scale, radius system, and component grammar.

---

## 2. Color Palette & Roles

### Core System (Light Mode — `data-theme="light"`)

| Name | OKLCH | Hex approx. | Role |
|---|---|---|---|
| **Warm Canvas** | `oklch(97.5% .007 65)` | `#F5F0EB` | Page background — amber-tinted off-white |
| **Lifted Surface** | `oklch(94% .009 65)` | `#EDE7DE` | Card and panel fill |
| **Elevated Layer** | `oklch(91% .010 65)` | `#E4DDD2` | Raised components, dropdowns |
| **Ink** | `oklch(16% .012 65)` | `#28221A` | Primary text — near-black with amber undertone. Never pure `#000000` |
| **Steel** | `oklch(40% .010 65)` | `#5C5448` | Secondary text, labels, metadata |
| **Smoke** | `oklch(60% .008 65)` | `#8A8278` | Tertiary text, placeholders, disabled states |
| **Whisper** | `oklch(82% .010 65)` | `#CFC8BC` | Structural borders, dividers (1px only) |
| **Copper** | `oklch(68% .155 60)` | `#B5711A` | **Single accent** — CTAs, active states, focus rings, brand touches |
| **Ember Surface** | `oklch(93% .040 60)` | `#F0E4CC` | Accent-tinted backgrounds for subtle callouts |

### Core System (Dark Mode — `data-theme="dark"`)

| Name | OKLCH | Hex approx. | Role |
|---|---|---|---|
| **Deep Night** | `oklch(13% .010 65)` | `#1E1A14` | Page background |
| **Night Surface** | `oklch(19% .012 65)` | `#2D2720` | Card fill |
| **Night Elevated** | `oklch(25% .013 65)` | `#3C352C` | Raised layer |
| **Moonlight** | `oklch(93% .007 65)` | `#EDE8E0` | Primary text on dark |
| **Dusk** | `oklch(70% .008 65)` | `#A89E94` | Secondary text on dark |
| **Ember** | `oklch(50% .007 65)` | `#7A7168` | Tertiary text on dark |
| **Night Border** | `oklch(28% .013 65)` | `#433B32` | Structural borders on dark |
| **Copper Light** | `oklch(74% .150 60)` | `#C07D28` | Accent in dark mode — brighter copper for legibility |

### Fluid Glass Variant (Organic Sculpture Palette)

Derived from the physical properties of translucent amber-and-indigo glass sculptures. Used exclusively in fluid glass components and client presentation contexts.

| Name | OKLCH | Hex approx. | Role |
|---|---|---|---|
| **Cool Slate** | `oklch(95.8% .003 258)` | `#F2F2F4` | Glass scene ground — barely-blue neutral |
| **Deep Violet** | `oklch(35% .23 285)` | `#3A1A78` | Ambient blob — cool shadow, upper mass |
| **Dusk Mauve** | `oklch(54% .14 284)` | `#735090` | Ambient blob — purple-to-peach mid-transition |
| **Peach Skin** | `oklch(73% .11 48)` | `#C89068` | Ambient blob — warm skin tone, dominant mid-zone |
| **Sand Glow** | `oklch(83% .07 54)` | `#D4B898` | Catch-light on glass surfaces |
| **Terra Cotta** | `oklch(58% .25 33)` | `#C05030` | Accent for fluid glass — the hot orange focal point |
| **Cream Lobe** | `oklch(90% .05 58)` | `#E8D8C4` | Translucent glass edges and light rim |
| **Glass Surface** | `oklch(97.5% .003 260 / .68)` | `rgba(245,245,248,0.68)` | Frosted panel fill |
| **Glass Surface Strong** | `oklch(96.5% .003 260 / .84)` | `rgba(243,243,246,0.84)` | Hero card fill |

**Gradient story for fluid glass:** Purple → Dusk Mauve → Peach Skin → Sand Glow → Terra Cotta. This is the exact tonal journey across the glass sculpture from cool shadow cap to warm saturated center. All multi-stop gradients and chart fills follow this directional order.

---

## 3. Typography Rules

### Font Stack

**Display — Barlow Semi Condensed**  
Source: Google Fonts. A condensed industrial grotesque with strong optical rhythm at large sizes. Used for all headings, KPI values, navigation labels, button labels, section eyebrows, and data numbers. The condensed form creates horizontal economy in data-dense layouts while preserving authority at large display sizes.

**Body — Atkinson Hyperlegible**  
Source: Google Fonts. Designed by the Braille Institute for maximum readability. Each letterform is deliberately differentiated to eliminate misreading. Used for all body copy, form labels, descriptions, metadata, and table content. Minimum 1rem (16px).

**No monospace or code font** in the current system. If numerical precision display is needed (audit logs, API keys), use Atkinson Hyperlegible numerals with `font-variant-numeric: tabular-nums`.

### Scale

All display sizes use `clamp()` for fluid resizing on marketing and presentation pages. Dashboard/app UI uses fixed `rem` values.

| Token | Size | Usage |
|---|---|---|
| `--text-xs`  | `0.75rem`  | Tags, metadata, caption labels |
| `--text-sm`  | `0.875rem` | Form labels, secondary nav, small badges |
| `--text-base`| `1rem`     | Body text, table cells, form inputs |
| `--text-lg`  | `1.125rem` | Card subtitles, section introductions |
| `--text-xl`  | `1.375rem` | Panel headings, sub-section H3 |
| `--text-2xl` | `1.75rem`  | Section H2, large KPI deltas |
| `--text-3xl` | `2.25rem`  | Page H1 in app context |
| `--text-4xl` | `3rem`     | Marketing heading, large KPI values |
| `--text-5xl` | `4rem`     | Hero display (fluid via clamp) |

### Rules

- Heading hierarchy through weight contrast and size, not decoration
- Maximum line length 65–75ch for body text (`max-width: 65ch` on paragraphs)
- Line-height: 1.0 for large display (≥2.5rem), 1.6 for body, 1.4 for UI elements
- Letter-spacing: `-0.02em` on large display, `0.04–0.08em` on small uppercase labels
- All-caps reserved exclusively for short section labels and eyebrows (never body copy)
- Italic used only on em elements for stylistic voice (e.g., hero headline counterpoint), never for emphasis in prose

---

## 4. Component Stylings

### Buttons

Three semantic variants, all pill-shaped (`border-radius: 9999px`). Tactile push feedback on `:active` via `transform: scale(0.97)` — no outer neon glows ever. Font: Barlow Semi Condensed at `font-weight: 500`, `letter-spacing: 0.04em`.

**Primary** — Copper fill (`#B5711A` light / `#C07D28` dark). White text. Box-shadow carries a warm copper diffusion glow (`0 8px 32px oklch(67% .18 55 / .28)`). Lifts `translateY(-2px)` on hover with shadow intensification. This is the single highest-priority CTA on any surface.

**Glass** — Semi-transparent frosted fill (`oklch(98% .004 65 / .55)`) with `backdrop-filter: blur(12px)`. Border matches the ambient glass border token. Inner top-edge highlight (`inset 0 1px 0 oklch(100% 0 0 / .48)`). Used for secondary actions sitting on top of the glass layer.

**Ghost** — Fully transparent with a soft structural border. Used for tertiary or destructive actions (Cancel, Delete). No background on rest state.

### Cards / KPI Blocks

Cards are used only when elevation communicates hierarchy — not decoratively. Two elevation levels:

**Surface card** — Background at `Lifted Surface` token. `border-radius: 10px` (compact) to `24px` (prominent). `1px` border at `Whisper` token. No shadow on flat layouts; a diffused warm shadow (`0 8px 32px oklch(18% .015 65 / .10)`) when floating above the canvas.

**Glass card** (fluid variant) — `backdrop-filter: blur(28px) saturate(1.5)`. Fill: `Glass Surface` token. Border: `1px solid oklch(84% .004 258 / .40)`. Inner top-edge highlight: `inset 0 1px 0 oklch(100% 0 0 / .58)`. Contains an in-card ambient blob (a blurred radial gradient, `filter: blur(38–44px)`) positioned at the opposite corner from the dominant content. Cards lift `translateY(-4px)` on hover.

**KPI blocks** — A subset of cards with outsized numeric display. Value uses `--text-4xl` (fluid via clamp), Barlow Semi Condensed 700. Label is uppercase `--text-xs`. Delta below label uses a colored pill badge (green for positive, coral-red for negative).

### Form Inputs

Label above the field, always. No floating labels. Error text appears below the field with `role="alert"` and `aria-describedby` binding to the `<input aria-invalid="true">`. Helper text uses Smoke color and `--text-sm`.

Input surface: semi-transparent glass fill in the fluid context, solid `Lifted Surface` in the core system. `border-radius: 16px`. Focus ring: `3px solid oklch(67% .18 55 / .40)` (Copper with alpha) with `outline-offset: 3px`. On focus, border transitions to `oklch(67% .18 55 / .55)` and a diffuse glow ring appears.

### Tags / Badges

Pill-shaped (`border-radius: 9999px`). Four semantic tonal variants, each a color-family tint:
- Orange: warm-orange tint background, mid-orange text, warm-orange border at 25% opacity
- Purple: deep-violet tint background, muted-purple text
- Peach: warm-peach tint background, earthy-peach text
- Mauve: dusk-mauve tint background, muted-mauve text
- Glass: semi-transparent frosted fill for neutral/draft states

Font: Barlow Semi Condensed 700, `0.75rem`, `letter-spacing: 0.04em`. No emojis inside badges.

### Progress Bars

5px height. Track: `oklch(86% .005 258 / .55)`. Fill uses a two-stop linear gradient within the palette color family. Fills animate from `width: 0` to target via IntersectionObserver on viewport entry (`transition: width 1.1s cubic-bezier(.16, 1, .3, 1)`). Each bar has `role="progressbar"` with `aria-valuenow/min/max` and a descriptive `aria-label`.

### Data Tables

Horizontal scroll wrapper (`overflow-x: auto`) on mobile. `aria-label` on `<table>`. Long text cells use `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` with a `title` attribute for full value. Alternating row density with `hover` state.

### Skeleton Loading

Skeleton states use a CSS shimmer animation: `background: linear-gradient(90deg, surface 25%, lighter-surface 50%, surface 75%)` with `background-size: 200% 100%` animated via `@keyframes shimmer`. Skeletons match the exact layout dimensions of their content — no generic circular spinners.

### Empty States

Every zero-data screen has: a concise description of what will appear, why it matters, and a single CTA to create the first item. Visual interest via a simple geometric accent element or icon. Never just "No data yet" in isolation.

---

## 5. Layout Principles

**Spacing scale — 4pt base:**  
4, 8, 12, 16, 24, 32, 48, 64, 96px. Accessed via semantic tokens (`--s1` through `--s24`). Never `calc()` percentage hacks for spacing.

**Grid:** CSS Grid for page-level composition. `gap` for sibling spacing (no margin collapse, no cleanup hacks). Self-adjusting card grids use `repeat(auto-fit, minmax(240px, 1fr))`. Max-width containment at `1200px`, centered, with `padding-inline: 32px` (collapsing to `16px` on mobile).

**Asymmetric layouts preferred.** Centered hero sections are allowed only for section separators — full-page centered hero layouts are avoided in favor of split-screen or left-aligned compositions when variance > 4.

**The three equal-column card row is banned.** Feature rows use 2-column zig-zag, 4-column asymmetric grid, or card clusters with varied sizing.

**Section spacing:** `padding: 64px 0` per section, reducing to `56px 0` below 640px via custom property override.

**Mobile-first collapse below 768px:** All multi-column layouts collapse to single column. No exceptions. Horizontal overflow on mobile is a critical failure — use `overflow-x: hidden` on `body`.

**Minimum touch targets:** 44px × 44px for all interactive elements.

---

## 6. Motion & Interaction

**Philosophy:** Motion conveys state change — entrance, exit, response. Decoration without state change is removed. Performance: animate exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`, `padding`, or `margin`.

**Easing:** `cubic-bezier(.16, 1, .3, 1)` as the default (expo-out, heavy deceleration). Fast actions (hover feedback): `120–160ms ease`. State transitions (modal, panel): `220–280ms`. Page-level orchestrations (section reveals): `600–900ms` staggered.

**Reduced motion:** All animations and transitions respect `@media (prefers-reduced-motion: reduce)` — durations collapse to `0.01ms`, iteration counts to 1.

**Ambient blob animation (Fluid Glass variant):**  
Organic morphing via CSS `@keyframes` on `transform: translate() scale()`. Period: 16–26 seconds per blob with offset phases to prevent synchronization. Amplitude: 35–55px translate, 0.91–1.10 scale. `animation-timing-function: ease-in-out`. Blobs are `position: fixed` behind a `position: relative` page layer — the glass `backdrop-filter` picks up their color as content scrolls over them.

**Hover states:**  
Cards: `translateY(-4px)` + shadow deepening over `200ms`.  
Buttons: `translateY(-2px)` + shadow intensification over `180ms`.  
Links: color transition `160ms ease`.

**Progress fills:** Animate on IntersectionObserver at 0.4 threshold — gives a purposeful "data loading" feel on scroll into view.

**No bounce or elastic easing.** No CSS `steps()` on UI transitions. No particle systems or canvas confetti. No custom mouse cursors.

---

## 7. Anti-Patterns — Strictly Banned

These rules are non-negotiable and must be enforced in every screen, component, and generated output.

**Typography**
- ❌ Inter font in any context
- ❌ Generic serif fonts: Times New Roman, Georgia, Garamond, Palatino
- ❌ All-caps body text passages longer than 5 words
- ❌ More than one font family in a single layout module

**Color**
- ❌ Pure black `#000000` — use Ink (`oklch(16% .012 65)`) instead
- ❌ Pure white `#FFFFFF` — use Warm Canvas (`oklch(97.5% .007 65)`) instead
- ❌ The AI neon/cyber palette: cyan-on-dark, purple-to-blue gradients, neon glows
- ❌ More than one accent color in a single context (Copper is the only accent)
- ❌ Oversaturated accents (chroma above `.20` in OKLCH for fill/text accents)
- ❌ Gradient text (`background-clip: text` with a gradient fill)

**Layout**
- ❌ Colored left or right border stripes (`border-left/right > 1px`) as card accents
- ❌ Three equal-width cards in a horizontal row (the "feature row" template)
- ❌ Nested cards inside cards
- ❌ Fixed widths on text containers — use `max-width` or `ch` units
- ❌ Overlapping absolutely-positioned elements without purposeful z-index hierarchy
- ❌ Horizontal scroll on mobile (body or section overflow)

**Motion**
- ❌ Bounce or elastic easing
- ❌ Animating layout properties (`width`, `height`, `top`, `left`, `padding`, `margin`)
- ❌ Particle effects, canvas confetti, cursor trails
- ❌ Auto-playing video background
- ❌ Infinite looping text tickers used decoratively

**Content & Copy**
- ❌ AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Transform", "Empower"
- ❌ Fabricated metrics: invented ROAS percentages, CTR numbers, CPA figures the client did not provide. Use `[metric]` placeholders instead
- ❌ Fake system sections: "PERFORMANCE METRICS // 2025", "KEY STATISTICS", "BY THE NUMBERS" filled with invented data
- ❌ `LABEL // YEAR` formatting (lazy AI typographic convention)
- ❌ Generic placeholder names: "John Doe", "Acme Corp", "NextGen Solutions"
- ❌ Fake round numbers like `99.99%`, `50%`, `10,000+` without real data
- ❌ Filler UI text: "Scroll to explore", "Swipe down", bouncing chevrons, scroll arrows
- ❌ Emojis in any UI context (navigation, labels, headings, body)
- ❌ Broken image links — use `picsum.photos` or SVG shapes for placeholder imagery

**Components**
- ❌ Generic circular spinners — use skeleton loaders with exact layout dimensions
- ❌ Modals as the first-choice pattern — use inline panels, drawers, or expandable sections
- ❌ Custom mouse cursors
- ❌ Neon outer-glow box shadows
- ❌ Glassmorphism applied decoratively — glass effect only where elevation and layering are semantically meaningful (fluid glass presentation context only)

---

## 8. Responsive Rules

| Breakpoint | Behavior |
|---|---|
| `< 400px` | Card grids collapse to single column |
| `< 640px` | Nav links hidden (mobile menu). Container padding → 16px. Font scale compressed. |
| `< 768px` | All multi-column layouts → single column. Hero card hidden on fluid glass page. Dark section stacks vertically. |
| `< 900px` | Two-column form and feature grids collapse. |
| `≥ 1200px` | Container max-width reached, content centered. |

Headlines scale via `clamp()` in presentation contexts: `clamp(3rem, 5.5vw, 5rem)`.  
Body text minimum `1rem` / `16px` on all viewports.  
All interactive elements minimum `44px` tap target height.  
Section vertical gaps: `clamp(48px, 8vw, 96px)` — breathes on large screens, compresses on mobile.

---

## 9. Implementation Notes

**CSS Architecture:**  
Design tokens live in `:root` (shared) and `[data-theme="light"]` / `[data-theme="dark"]` attribute selectors. Theme switching is handled by JavaScript that toggles the `data-theme` attribute on `<html>` and persists the choice via `localStorage`. CSS `@media (prefers-color-scheme: dark)` serves as the no-JS fallback via `html:not([data-theme="light"])`.

**Color format:**  
OKLCH is the canonical color format throughout. It is perceptually uniform: equal steps in lightness look equal, which HSL does not deliver. All neutrals are tinted toward the brand hue (H≈60–65°) at very low chroma (C≈0.007–0.013) to create subconscious warmth cohesion without visible colorization.

**Fluid Glass:**  
Ambient blobs use `position: fixed; z-index: 0`. Page content uses `position: relative; z-index: 1`. Glass panels use `backdrop-filter: blur(28–40px) saturate(1.5–1.6)`. The fixed blobs are always visible behind the glass as the page scrolls — this is the intended behavior; each glass card absorbs a different color cast depending on which blob it overlaps at any given scroll position.

**Files:**  
- `H:\Meine Ablage\designsystem.html` — Core design system (colors, typography, spacing, components, tokens)  
- `H:\Meine Ablage\fluid-glass.html` — Fluid glass component library (organic palette, glass surfaces, ambient blobs)  
- `H:\Meine Ablage\.impeccable.md` — Impeccable skill context (brand voice, design decisions, font rationale)
