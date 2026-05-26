# Design System: Dennis Mioc — Performance Marketing
### Canonical specification · Stitch-compatible · Impeccable-aligned

---

## 0. Brand Foundation

### Who this is for

Performance marketing clients — mid-to-large e-commerce brands and DTC companies. The decision-maker looking at a deliverable is intelligent but time-constrained: they evaluate at a glance, read the numbers before the copy, and form a first impression within seconds. They don't need to be impressed by the interface. They need to trust it instantly.

### Brand voice

**Präzise · Datengetrieben · Verlässlich**

Quiet authority. KPIs speak louder than headlines. Every visual choice signals that the person behind this work has already thought three steps ahead.

No decoration for decoration's sake. No visual statement that isn't also a functional statement. The interface earns attention through clarity, not ornamentation.

### The core aesthetic direction

*Editorial precision meets performance dashboard.*

Reference object: the interior of a precision instrument — warm metal, matte surfaces, clear readings, zero decorative noise. You understand what you're looking at instantly. You trust it immediately. You don't wonder whether it's correct.

The glass material language serves this direction. Frosted surfaces imply layering — data above context above atmosphere — and the depth this creates reads as structural, not decorative. The blobs are not decoration either: they bring the colour palette to life without requiring it to be stated directly on the surface.

---

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

## 2. Colour System

### Why this palette

Three brand words: **Präzise · Datengetrieben · Verlässlich** — precise, data-driven, reliable.

Precise reads as: structured, not cold. Restrained, not minimal. The cool neutral ground (`oklch(95.8% .003 258)`) is barely-blue — tinted toward the purple of the organic palette at near-zero chroma. It reads as white until it's next to something truly white, and then it reads as intentionally chosen.

Data-driven and reliable both resist: neon accents, cyan/purple "tech" palettes, AI colour defaults. They also resist warm-amber genericism. Terra cotta `oklch(59% .23 33)` is the right accent because it's specific — a sculptor's pigment, not a brand template. It reads as confident, not loud. It's warm enough to anchor the cool neutral without fighting it.

The organic sculpture gradient (purple → mauve → peach → sand → orange) provides the palette stops. These are not decorative — they are the blob colours, the progress fill stops, the badge palette. They exist in the background at all times, providing a consistent chromatic context. You don't see the palette, you feel it.

### 60-30-10 weight distribution

- **60 %** — Canvas and glass surfaces. Near-neutral, OKLCH-tinted H≈260°. This is the visual field.
- **30 %** — Steel/smoke/whisper text and borders. All hue-tinted neutrals, never gray. Never HSL.
- **10 %** — Terra cotta accent. Used once per view. Used on the one thing that requires action.

If terra cotta appears more than once in a view, it stops functioning as an accent and starts functioning as noise. One accent per view — no exceptions.

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
| `--ink` | `oklch(18% .008 260)` | Primary text |
| `--steel` | `oklch(42% .007 260)` | Secondary text, labels |
| `--smoke` | `oklch(60% .005 260)` | Tertiary, placeholders |
| `--whisper` | `oklch(78% .005 258)` | Structural dividers (1px) |
| `--accent` | `oklch(59% .23 33)` | Terra cotta — single CTA accent |
| `--accent-hover` | `oklch(54% .23 33)` | Accent hover (darken) |
| `--accent-subtle` | `oklch(93% .06 48)` | Accent-tinted background |
| `--success` | `oklch(52% .16 145)` | Positive delta, success |
| `--danger` | `oklch(55% .20 25)` | Negative delta, error |

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

- All values in OKLCH — never HSL. OKLCH is perceptually uniform: equal steps in lightness look equal.
- Neutrals tinted H≈260° at chroma 0.003–0.022 for coherence with glass fills. Never pure gray.
- As you move toward maximum or minimum lightness, reduce chroma. High chroma at extreme lightness reads garish.
- One accent per view: terra cotta `oklch(59% .23 33)`. One. Per. View.
- Chroma never exceeds 0.25. Tinting throughout, never saturating.
- Never pure black (`#000`) or pure white (`#fff`). They don't exist in glass or light.

---

## 3. Typography

### Why these fonts

**Three brand words:** Präzise — Datengetrieben — Verlässlich.

These words describe a physical object as much as a personality. Precise: machined, not handmade. Data-driven: dense information, horizontal economy. Reliable: legible under pressure, misread-proof.

Before committing, the reflex options were listed and rejected:
- **Syne** — too editorial/fashion, wrong authority signal
- **IBM Plex Sans** — too developer-adjacent, signals coder not marketer
- **DM Sans** — startup genericism, no personality
- **Space Grotesk** — "designy" by training data default
- **Instrument Sans** — same failure mode

The right display font for this brand is one that reads like condensed editorial type on a precision readout — industrial grotesque with clear data density. **Barlow Semi Condensed** earns its place: the condensed width lets KPI values fill their containers with authority, the grotesque construction signals structure over decoration, the semi-weight sits exactly between delicate and bold.

The right body font for this brand is one where misreading is not an option — clients look at numbers, not prose, and when they do look at prose it needs to be unambiguous. **Atkinson Hyperlegible** was designed specifically for this: each letterform is distinctively shaped so characters cannot be confused at a glance.

**Display font:** Barlow Semi Condensed (`'Barlow Semi Condensed', 'Arial Narrow', sans-serif`)  
→ Headings, eyebrow labels, button labels, KPI values, nav items, badges, tags.

**Body font:** Atkinson Hyperlegible (`'Atkinson Hyperlegible', 'Segoe UI', system-ui, sans-serif`)  
→ Body copy, form inputs, table cells, descriptions, any text longer than a label.

### Type scale

| Token | Size | Line height | Use |
|---|---|---|---|
| `5xl` | `4rem` | `0.98` | Hero display (fluid `clamp()` on marketing pages) |
| `4xl` | `3rem` | `0.98` | KPI values, page H1 |
| `3xl` | `2.25rem` | `1.1` | Section H2 |
| `2xl` | `1.75rem` | `1.1` | Panel H3, large KPI deltas |
| `xl` | `1.375rem` | `1.4` | Sub-section heading |
| `lg` | `1.125rem` | `1.6` | Card subtitles, intro text |
| `base` | `1rem` | `1.6` | Body text, table cells, inputs |
| `sm` | `0.875rem` | `1.4` | Labels, hints, secondary nav |
| `xs` | `0.75rem` | `1.4` | Eyebrow labels (all-caps, tracking 0.12em) |

Ratio between steps is never less than 1.25× — adjacent sizes must read as visually distinct, not just technically different.

### Typography rules

- **Display font for all structural text; body font for all reading text.** Not interchangeable.
- Max line length: `65ch` body, `42ch` intro/sub-headline. Lines beyond this break scanning rhythm.
- Line-height scales inversely with size: tight on large display (0.98), open on body (1.6). For light text on dark backgrounds, add 0.05–0.1 to your normal line-height.
- `font-variant-numeric: tabular-nums` on all KPI and data values — column alignment is non-negotiable.
- All-caps only on short labels (eyebrows, button text, badge text) — never on body or headings longer than a few words.
- Letter-spacing: `−0.02em` on large display, `0.12em` on eyebrow labels, `0.04em` on button labels.
- No fluid type in product UI (app, dashboard). Fixed `rem` scales only. Fluid `clamp()` for marketing/landing pages.
- No monospace used as a "technical" style signal. This is not a developer tool.

---

## 4. Theme & Context Rationale

The default theme is **light**. This is derived from audience and context — not from "playing it safe."

Performance marketing dashboards and client reports are consumed:
- In office settings, under ambient light, on calibrated monitors
- In browser tabs alongside bright white Google Docs and spreadsheets
- In presentations and screen-shares where a dark interface creates contrast dissonance

A dark mode is provided and fully specified. Use it when:
- The client requests it
- The deliverable is a standalone screen/presentation with full environmental control
- The content is primarily visual (large images, video thumbnails)

Neither theme is the default because it's "cool" or "safe." Both are fully realized. The choice is contextual.

---

## 5. Component Stylings

### Glass surface levels

```
glass-light  → 42% opacity, blur(16px) saturate(1.3)  — inputs, subtle overlays
glass        → 68% opacity, blur(28px) saturate(1.5)  — standard cards, panels
glass-strong → 84% opacity, blur(40px) saturate(1.6)  — hero cards, nav bar
```

Every glass surface includes `inset 0 1px 0 oklch(100% 0 0 / .58)` — top-edge highlight simulating physical glass thickness. This is not decoration; it is the detail that makes glass read as glass.

### Buttons

| Class | Surface | Use |
|---|---|---|
| `btn-primary` | Terra cotta fill + accent shadow | Single CTA per view |
| `btn-glass` | Glass fill + backdrop-filter | Secondary action |
| `btn-outline` | Transparent + 1.5px accent border | Tertiary |

All: pill radius, Barlow SC, all-caps, `letter-spacing: 0.04em`.  
Hover: `translateY(-1px)` + shadow increase.  
Active: `scale(.97)`.

### Cards

```
card glass        → border-radius-xl, blur(28px)    — standard panel
card glass-strong → border-radius-2xl, blur(40px)   — hero / feature
```

Optional in-card accent blobs: `position: absolute; filter: blur(38–44px); pointer-events: none`. Requires `overflow: hidden` on card.

### KPI cards

Structure: `kpi-label` (xs eyebrow, smoke) → `kpi-value` (4xl, bold, ink, tabular-nums) → `kpi-delta` (`.up` = success / `.down` = danger, sm, medium weight).

The KPI value is the most important element in the system. It must be unambiguous at a glance: no decorative elements, no competing visual weight, no gradient fills, no sparklines unless they convey a meaningful trend and are sized to do so honestly.

### Forms

Inputs: `glass-light` background + `inset 0 1px 0 oklch(100% 0 0 / .28)`.  
Focus: terra cotta ring `oklch(59% .23 33 / .30)` at 3px.

Labels: Barlow SC, sm, medium, `tracking-wide`. Placeholder: smoke. Hint text: body font, sm, smoke.

### Table

Wrap in `.glass` container with `border-radius: radius-xl; overflow: hidden`.  
Row hover: `oklch(100% 0 0 / .10)`.  
Header: Barlow SC, xs, `tracking-widest`, smoke.  
Dividers: `1px solid whisper`.  
Delta cells: Barlow SC, tabular-nums, `.up` / `.down`.

### Progress bars

Track: `oklch(100% 0 0 / .20)` (transparent white blends with glass).  
Fills use palette stops.  
Animation: 1100ms `cubic-bezier(.16, 1, .3, 1)`, IntersectionObserver trigger.

### Badges & Tags

Badges: pill, Barlow SC, xs, `tracking-widest`, all-caps. Background: `oklch(palette-stop / .15)`.  
Tags: `radius-sm`, glass-light surface, `border: 1px solid whisper`, Barlow SC, xs, `tracking-wide`.

---

## 6. Layout Principles

- 4pt spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Every gap is a multiple of 4px.
- Container: `max-width: 1200px`, `padding-inline: 32px` (16px mobile).
- Card grids: `repeat(auto-fit, minmax(240px, 1fr))` — no manual breakpoints on card content.
- Use `gap` instead of margins for sibling spacing. It eliminates margin collapse and the cleanup it requires.
- Vary spacing for hierarchy. A section heading with extra space above it reads as more important. The same padding everywhere creates visual monotony.
- Z-index stack: blob layer `0` → content `1` → nav `100`.

**Asymmetry mandate:** No three equal-column layouts. Left-aligned section intros. Hero uses visual weight imbalance between text and panel. Centering everything reads as template, not design. Left-alignment with asymmetric compositions feels considered.

---

## 7. Motion & Interaction

| Token | Duration | Use |
|---|---|---|
| `fast` | `120ms` | Active/press feedback |
| `normal` | `180ms` | Hover transitions (colour, shadow) |
| `medium` | `240ms` | Panel open/close |
| `slow` | `600ms` | Page reveals, spinner |
| `progress` | `1100ms` | Progress bar fill |
| `blob` | `20–26s` | Ambient drift cycle |

**Easing:** `cubic-bezier(.16, 1, .3, 1)` (expo-out) for interactive transitions — natural deceleration, no bounce.  
`ease-in-out` for blob drift. `linear` for spinner.

No bounce or elastic easing. Real objects decelerate smoothly. Elastic easing signals playfulness; this system signals precision.

**Blob animation rules:**
- Only `transform: translate + scale + rotate` — never layout properties
- Four drift keyframes at different cycle lengths and phase → organic, non-synchronised movement
- `animation-direction: alternate` on all blobs

**`@media (prefers-reduced-motion: reduce)` on all animations — no exceptions.**  
Animate ONLY `transform` and `opacity`. No exceptions.

---

## 8. The Distinctiveness Test

The Impeccable AI Slop Test, translated into brand terms:

If a client looked at a deliverable and said "did you have AI make this?" — that is failure. Not because AI was involved, but because the output is indistinguishable from the ten other AI-generated dashboards they saw last week.

**What makes a Dennis Mioc deliverable recognisable:**

1. The glass is structural, not decorative. Every surface is frosted. There are no flat white cards with drop shadows.
2. The palette is specific. Terra cotta is a sculptor's pigment, not a "warm CTA colour." The blobs behind the glass are chromatic, not just atmospheric.
3. The type is precise. Barlow SC KPI values read like instrument readouts. Atkinson body text is functionally unambiguous.
4. The hierarchy is architectural. The most important number is the biggest, boldest, most isolated element on the card. Everything else is context.
5. The layout is asymmetric. Nothing is centred for comfort. Left-alignment with considered spacing signals authorship.

**Warning signs that a deliverable has drifted toward generic:**
- Any gradient applied to text (background-clip: text) — banned
- Any border-left or border-right thicker than 1px used as a colour accent stripe — banned
- Terra cotta appearing more than once in a view as an accent
- Cards that are "glass" only because they have a box-shadow and 20% opacity
- Identical card grids (icon + heading + text, repeated 3–4 times)
- KPI value competing with a decorative element on the same card
- Sparklines that look sophisticated but convey nothing

---

## 9. Anti-Patterns — Strictly Banned

### Typography
- Inter, DM Sans, Plus Jakarta Sans, Outfit, Fraunces, Space Mono, Syne, IBM Plex Sans, Space Grotesk, Instrument Sans, or any font on the Impeccable reflex list
- Monospace as a "technical" style signal
- All-caps on body copy or headings longer than a few words
- Adjacent type sizes less than 1.25× apart
- Fluid type in product UI/dashboard contexts

### Colour
- Pure `#000` or `#fff`
- Gray text on coloured backgrounds (use hue-tinted shade instead)
- Neon accents, cyan/purple "tech" palette, AI colour defaults
- Gradient text (`background-clip: text` + gradient fill) — **absolute ban**
- More than one accent colour active in a view
- Chroma above 0.25

### Components
- `border-left` or `border-right` > 1px as a coloured accent stripe on cards, callouts, alerts — **absolute ban**
- Identical card grids (icon + heading + text, repeated 3–4 times)
- Modals when drawer/inline-expand/navigation would serve
- Decorative sparklines
- Empty states with "No items" and no next action
- Nested cards

### Layout
- Three equal-column layouts
- Centering everything
- Glassmorphism used decoratively rather than as the system's structural surface material
- Same padding/spacing repeated on every element

### Motion
- Animating layout properties (width, height, padding, margin, top, left)
- Bounce or elastic easing
- Canvas confetti, particle systems, cursor trails
- Animations without `prefers-reduced-motion` fallback

---

## 10. Responsive Rules

| Breakpoint | Change |
|---|---|
| `max-width: 800px` | Hero panel hidden; single-column hero text |
| `max-width: 720px` | Feature grids → single column |
| `max-width: 640px` | Container padding → 16px |
| `max-width: 600px` | Form rows → single column |
| `max-width: 480px` | Nav links hidden; logo + theme toggle remain |

Card grids: no manual breakpoints — `auto-fit / minmax` adapts automatically.

---

## 11. Implementation Notes

**Z-index architecture:**
```
position: fixed,    z-index: 0    → .blob-layer    (pointer-events: none)
position: relative, z-index: 1    → .glass-content
position: fixed,    z-index: 100  → .nav
```

**OKLCH:** All colours in `oklch(L% C H)`. Transparent surfaces: `oklch(L% C H / alpha)`. Neutrals carry chroma 0.003–0.022 tinted H≈260°.

**Page structure — required for glass atmosphere:**
```html
<div class="blob-layer" aria-hidden="true">
  <div class="blob blob-a"></div>
  <div class="blob blob-b"></div>
  <div class="blob blob-c"></div>
  <div class="blob blob-d"></div>
</div>
<main class="glass-content">
  <!-- all cards use .glass or .glass-strong -->
</main>
```

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
