# Typography

## Font pairing rationale

**Barlow Semi Condensed** — display, headings, labels, buttons, KPI values  
An industrial condensed grotesque. The compressed width lets large numbers and headings read at high density without overwhelming the layout. The semi-condensed cut is readable at body sizes while remaining distinctive. Italics provide a refined counterpoint in hero headlines (`font-weight: 300, font-style: italic`).

**Atkinson Hyperlegible** — body copy, descriptions, form inputs, table cells  
Designed by the Braille Institute specifically for maximum legibility. Letterforms are engineered to be distinguishable even at small sizes and low vision — not a stylistic choice but a functional commitment to accessible reading.

Font loading: both served via Google Fonts with `display=swap`.

## Type scale

| Token | Value | Use |
|---|---|---|
| `--text-xs` | `0.75rem` | Tags, metadata, eyebrow labels |
| `--text-sm` | `0.875rem` | Form labels, secondary nav, small badges |
| `--text-base` | `1rem` | Body text, table cells, inputs |
| `--text-lg` | `1.125rem` | Card subtitles, section intros |
| `--text-xl` | `1.375rem` | Panel headings, sub-section H3 |
| `--text-2xl` | `1.75rem` | Section H2, large KPI deltas |
| `--text-3xl` | `2.25rem` | Page H1 in app context |
| `--text-4xl` | `3rem` | Marketing heading, KPI values |
| `--text-5xl` | `4rem` | Hero display (fluid via clamp in marketing) |

Ratio between adjacent steps averages ~1.2–1.25. Minimum 3 steps of size difference between body and section headings.

## Line heights

| Token | Value | Use |
|---|---|---|
| `--leading-display` | `0.98` | Large display (≥ 2.5rem) — tight for drama |
| `--leading-heading` | `1.1` | Section headings |
| `--leading-ui` | `1.4` | Buttons, labels, UI elements |
| `--leading-body` | `1.6` | Body text |
| `--leading-relaxed` | `1.65` | Long-form description text |

## Letter spacing

| Token | Value | Use |
|---|---|---|
| `--tracking-tight` | `-0.02em` | Large display headlines |
| `--tracking-normal` | `0` | Body default |
| `--tracking-wide` | `0.03em` | Nav links |
| `--tracking-wider` | `0.04em` | Button labels |
| `--tracking-widest` | `0.08em` | Small uppercase category labels |
| `--tracking-eyebrow` | `0.12em` | Eyebrow / section pre-headers |

## Measure (line length)

| Token | Value | Use |
|---|---|---|
| `--measure-body` | `65ch` | Body text max-width |
| `--measure-narrow` | `42ch` | Intro / subheadline max-width |

Never set body text wider than `65ch`. Wide lines break the reading rhythm and increase eye-tracking effort.

## Usage rules

- **Display font for all structural text**: headings H1–H6, eyebrow labels, button labels, KPI values, nav items, tags, badges.
- **Body font for all reading text**: paragraphs, form inputs, table cells, descriptions, captions.
- **Never monospace as a "technical" style signal** — it reads as cheap. Use it only for actual code.
- **Italic weight-300 in display font** is available for hero headlines when a humanizing counterpoint is needed (`<em>` inside a display heading).
- **All-caps only on short labels** — eyebrows, button text, badge text. Never on body copy or headings longer than a few words.
- **KPI values**: always `font-variant-numeric: tabular-nums` to prevent layout shift as numbers update.
