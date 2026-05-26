# Design System: Dennis Mioc — Performance Marketing

## 1. Visual Theme & Atmosphere

**Density 6 / Variance 7 / Motion 6 / Creativity 9**

A performance marketing system with a deliberately sculptural material language. Frosted glass surfaces sit above a cool neutral ground animated by organic colour blobs — the visual palette derived from organic glass sculpture photography. The interface feels physically grounded: tactile, refractive, dense with data but never clinical.

The glass material is not a stylistic add-on. It is the default surface treatment for every card, panel, nav bar, and form in the system. All contexts — dashboards, client reports, landing pages, proposals — use the same material language. There is no separate "glass variant": there is only the system.

**Atmosphere:**
- Ambient blob layer (4 blobs, `position: fixed`, `z-index: 0`) always present
- Blobs drift on 20–26s cycles with `ease-in-out` and `animation-direction: alternate`
- Glass surfaces refract the blob colours through `backdrop-filter: blur(28–40px) saturate(1.5–1.6)`
- Dark mode: same palette, deeper ground (`oklch(13% .008 260)`), blobs appear more vivid

---

## 2. Color Palette & Roles

### Organic palette (theme-independent stops)

| Name | OKLCH | Hex (approx) | Character |
|---|---|---|---|
| Purple | `oklch(35% .23 285)` | `#3A1A78` | Deep blue-violet shadow cap |
| Mauve | `oklch(54% .14 284)` | `#7A5090` | Dusk transition, purple→peach bridge |
| Peach | `oklch(73% .11 48)` | `#D4A080` | Warm skin tone, dominant mid-zone |
| Sand | `oklch(83% .07 54)` | `#D8BC98` | Catch-light, surface highlight |
| Orange | `oklch(58% .25 33)` | `#C05030` | Terra cotta, saturated focal point |
| Cream | `oklch(90% .05 58)` | `#EAD8C0` | Translucent rim, edge highlight |

Gradient story (left→right): **purple → mauve → peach → sand → orange**

```css
linear-gradient(90deg,
  oklch(35%  .23  285)   0%,
  oklch(54%  .14  284)  22%,
  oklch(73%  .11   48)  50%,
  oklch(83%  .07   54)  68%,
  oklch(58%  .25   33) 100%
)
```

### System roles — Light

| Token | OKLCH | Use |
|---|---|---|
| `--canvas` | `oklch(95.8% .003 258)` | Page ground — barely-blue cool neutral |
| `--glass` | `oklch(97.5% .003 260 / .68)` | Standard glass fill |
| `--glass-strong` | `oklch(96.5% .003 260 / .84)` | Hero cards, nav bar |
| `--glass-light` | `oklch(98.5% .002 260 / .42)` | Inputs, subtle overlays |
| `--gb-top` | `oklch(100% 0 0 / .58)` | Top-edge highlight (glass thickness) |
| `--gb-outer` | `oklch(84% .004 258 / .40)` | Outer structural border |
| `--ink` | `oklch(18% .008 260)` | `#20201E` | Primary text |
| `--steel` | `oklch(42% .007 260)` | `#666560` | Secondary text, labels |
| `--smoke` | `oklch(60% .005 260)` | `#989590` | Tertiary, placeholders |
| `--whisper` | `oklch(78% .005 258)` | `#C5C2BC` | Structural dividers (1px) |
| `--accent` | `oklch(59% .23 33)` | `#B84830` | Terra cotta — single CTA accent |
| `--accent-hover` | `oklch(54% .23 33)` | `#A84028` | Accent hover (darken) |
| `--accent-subtle` | `oklch(93% .06 48)` | `#F0E4D8` | Accent-tinted background |
| `--success` | `oklch(52% .16 145)` | `#2E8050` | Positive delta, success |
| `--danger` | `oklch(55% .20 25)` | `#C43828` | Negative delta, error |

### System roles — Dark

| Role | Light value | Dark value |
|---|---|---|
| Canvas | `95.8% .003 258` | `13% .008 260` |
| Glass fill | `97.5% .003 260 / .68` | `22% .020 260 / .82` |
| Glass strong | `96.5% .003 260 / .84` | `28% .022 260 / .90` |
| Ink | `18% .008 260` | `93% .005 260` |
| Steel | `42% .007 260` | `72% .007 260` |
| Accent | `59% .23 33` | `65% .25 33` (brighter for contrast) |

### Colour rules
- All values in OKLCH — never HSL
- Neutrals tinted to H≈260° at chroma 0.003–0.022 for coherence with glass fills
- One accent per view: terra cotta `oklch(59% .23 33)`
- Chroma never exceeds 0.25
- Never pure black (#000) or pure white (#fff)

---

## 3. Typography Rules

**Display font:** Barlow Semi Condensed (`'Barlow Semi Condensed', 'Arial Narrow', sans-serif`)
Headings, eyebrow labels, button labels, KPI values, nav items, badges, tags. Industrial condensed grotesque — high information density.

**Body font:** Atkinson Hyperlegible (`'Atkinson Hyperlegible', 'Segoe UI', system-ui, sans-serif`)
Body copy, form inputs, table cells, descriptions. Engineered for maximum legibility.

| Token | Size | Line height | Use |
|---|---|---|---|
| `5xl` | `4rem` | `0.98` | Hero display (fluid `clamp()` on marketing) |
| `4xl` | `3rem` | `0.98` | KPI values, page H1 |
| `3xl` | `2.25rem` | `1.1` | Section H2 |
| `2xl` | `1.75rem` | `1.1` | Panel H3, large KPI deltas |
| `xl` | `1.375rem` | `1.4` | Sub-section heading |
| `lg` | `1.125rem` | `1.6` | Card subtitles, intro text |
| `base` | `1rem` | `1.6` | Body text, table cells, inputs |
| `sm` | `0.875rem` | `1.4` | Labels, hints, secondary nav |
| `xs` | `0.75rem` | `1.4` | Eyebrow labels (all-caps, tracking 0.12em) |

**Rules:**
- Display font for all structural text; body font for all reading text
- Max line length: `65ch` body, `42ch` intro/sub-headline
- `font-variant-numeric: tabular-nums` on all KPI and data values
- All-caps only on short labels (eyebrows, button text, badge text) — never on body or long headings
- Letter-spacing: `−0.02em` on large display, `0.12em` on eyebrow labels, `0.04em` on button labels
- No monospace used as a "technical" style signal

---

## 4. Component Stylings

### Glass surface levels

```
glass-light  → 42% opacity, blur(16px) saturate(1.3)  — inputs, subtle overlays
glass        → 68% opacity, blur(28px) saturate(1.5)  — standard cards, panels
glass-strong → 84% opacity, blur(40px) saturate(1.6)  — hero cards, nav bar
```

Every glass surface includes `inset 0 1px 0 oklch(100% 0 0 / .58)` — top-edge highlight simulating physical glass thickness.

### Buttons

| Class | Surface | Use |
|---|---|---|
| `btn-primary` | Terra cotta fill + accent shadow | Single CTA per view |
| `btn-glass` | Glass fill + backdrop-filter | Secondary action |
| `btn-outline` | Transparent + 1.5px accent border | Tertiary |

All: pill radius, Barlow SC, all-caps, `letter-spacing: 0.04em`. Hover: `translateY(-1px)` + shadow increase. Active: `scale(.97)`.

### Cards

```
card glass        → border-radius-xl, blur(28px)    — standard panel
card glass-strong → border-radius-2xl, blur(40px)   — hero / feature
```

Optional in-card accent blobs: `position: absolute; filter: blur(38–44px); pointer-events: none`. Requires `overflow: hidden` on card.

### KPI cards

Structure: `kpi-label` (xs eyebrow, smoke) → `kpi-value` (4xl, bold, ink, tabular-nums) → `kpi-delta` (.up = success / .down = danger, sm, medium weight)

### Forms

Inputs: `glass-light` background + `inset 0 1px 0 oklch(100% 0 0 / .28)`. Focus: terra cotta ring `oklch(59% .23 33 / .30)` at 3px.

Labels: Barlow SC, sm, medium, `tracking-wide`. Placeholder: smoke. Hint text: body font, sm, smoke.

### Table

Wrap in `.glass` container with `border-radius: radius-xl; overflow: hidden`. Row hover: `oklch(100% 0 0 / .10)`. Header: Barlow SC, xs, `tracking-widest`, smoke. Dividers: `1px solid whisper`. Delta cells: Barlow SC, tabular-nums, `.up` / `.down`.

### Progress bars

Track: `oklch(100% 0 0 / .20)` (transparent white blends with glass). Fills use palette stops. Animation: 1100ms `cubic-bezier(.16, 1, .3, 1)`, IntersectionObserver trigger.

### Badges & Tags

Badges: pill, Barlow SC, xs, `tracking-widest`, all-caps. Background: `oklch(palette-stop / .15)`.  
Tags: `radius-sm`, glass-light surface, `border: 1px solid whisper`, Barlow SC, xs, `tracking-wide`.

---

## 5. Layout Principles

- 4pt spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Container: `max-width: 1200px`, `padding-inline: 32px` (16px mobile)
- Card grids: `repeat(auto-fit, minmax(240px, 1fr))` — no manual breakpoints on card content
- Z-index stack: blob layer `0` → content `1` → nav `100`

**Asymmetry mandate:** No three equal-column layouts. Left-aligned section intros. Hero uses visual weight imbalance between text and panel.

---

## 6. Motion & Interaction

| Token | Duration | Use |
|---|---|---|
| `fast` | `120ms` | Active/press feedback |
| `normal` | `180ms` | Hover transitions (colour, shadow) |
| `medium` | `240ms` | Panel open/close |
| `slow` | `600ms` | Page reveals, spinner |
| `progress` | `1100ms` | Progress bar fill |
| `blob` | `20–26s` | Ambient drift cycle |

**Easing:** `cubic-bezier(.16, 1, .3, 1)` (expo-out) for interactive transitions. `ease-in-out` for blob drift. `linear` for spinner.

**Blob animation rules:**
- Only `transform: translate + scale + rotate` — never layout properties
- Four drift keyframes, each at different cycle lengths and phase → organic, non-synchronised movement
- `animation-direction: alternate` on all blobs

**`@media (prefers-reduced-motion: reduce)` on all animations — no exceptions.**

Animate ONLY `transform` and `opacity`. No bounce or elastic easing.

---

## 7. Anti-Patterns — Strictly Banned

### Typography
- Inter, DM Sans, Plus Jakarta Sans, Outfit, Fraunces, Space Mono, or any font on the Impeccable reflex list
- Monospace as a "technical" style signal
- All-caps on body copy or headings longer than a few words
- Adjacent type sizes less than 1.2× apart

### Colour
- Pure #000 or #fff
- Gray text on coloured backgrounds (use hue-tinted shade instead)
- Neon accents, cyan/purple "tech" palette, AI colour defaults
- Gradient text (`background-clip: text` + gradient fill) — banned
- More than one accent colour active in a view
- Chroma above 0.25

### Components
- `border-left` or `border-right` > 1px as coloured accent stripe on cards, callouts, alerts — **banned**
- Identical card grids (icon + heading + text, repeated 3–4 times)
- Modals when drawer/inline-expand/navigation would serve
- Decorative sparklines
- Empty states with "No items" and no next action

### Layout
- Three equal-column layouts
- Nested cards
- Glassmorphism used decoratively rather than as the system's structural surface material
- Centering everything — left-aligned asymmetric compositions

### Motion
- Animating layout properties (width, height, padding, margin, top, left)
- Bounce or elastic easing
- Canvas confetti, particle systems, cursor trails
- Animations without `prefers-reduced-motion` fallback

---

## 8. Responsive Rules

| Breakpoint | Change |
|---|---|
| `max-width: 800px` | Hero panel hidden; single-column hero text |
| `max-width: 720px` | Feature grids → single column |
| `max-width: 640px` | Container padding → 16px |
| `max-width: 600px` | Form rows → single column |
| `max-width: 480px` | Nav links hidden; logo + theme toggle remain |

Card grids: no manual breakpoints — `auto-fit / minmax` adapts automatically.

---

## 9. Implementation Notes

**Z-index architecture:**
```
position: fixed,  z-index: 0    → .blob-layer   (pointer-events: none)
position: relative, z-index: 1  → .glass-content
position: fixed,  z-index: 100  → .nav
```

**OKLCH:** All colours in `oklch(L% C H)`. Transparent surfaces: `oklch(L% C H / alpha)`. Neutrals carry chroma 0.003–0.022 tinted H≈260°.

**CSS file map:**
```
css/tokens.css           → CSS Custom Properties (:root + [data-theme="dark"])
css/base.css             → reset, font loading, root typography
css/components/          → buttons, cards, forms, badges, progress, table, kpi, states
css/glass/               → glass surface classes and glass-specific component styles
```

**Showcase:**
```
showcase/index.html      → unified system showcase (single file, no build step)
```

**Canonical spec:** This document (`DESIGN.md`) is the single source of truth. Mirrored at `.stitch/DESIGN.md` for Stitch `manage-design-system` skill compatibility.
