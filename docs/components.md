# Components

## Buttons

Three tiers — use exactly one primary per view.

| Class | Appearance | Use |
|---|---|---|
| `.btn-primary` | Copper fill + copper shadow | Single primary CTA |
| `.btn-secondary` | Copper outline, transparent fill | Secondary action |
| `.btn-ghost` | Elevated surface fill, steel text | Tertiary / cancel |
| `.btn-text` | No background, link-style | Inline text action |
| `.btn-danger` | Red fill | Destructive action |

Modifiers: `.btn-sm`, `.btn-lg`, `.btn-icon`

All buttons: pill shape (`border-radius: 9999px`), display font, all-caps, `letter-spacing: 0.04em`.

**Never** use `border-left` or `border-right` > 1px as an accent stripe on any element.

---

## Cards

| Class | Use |
|---|---|
| `.card` | Standard surface card with hover lift |
| `.card-elevated` | Hero/feature placement, xl radius |
| `.card-outlined` | Minimal, border only |
| `.card-tinted` | Accent-subtle background |
| `.card-kpi` | Metric display card |
| `.card-feature` | Large two-column feature card |

Sub-parts: `.card-header`, `.card-body`, `.card-footer`

Grids: `.card-grid` (auto-fit), `.card-grid-3`, `.card-grid-4`

---

## KPI / Data display

### KPI card (`.kpi-card`)
Parts: `.kpi-eyebrow` → `.kpi-number` → `.kpi-delta` → `.kpi-compare`

Delta classes: `.up` (success green) / `.down` (danger red)

Always set `font-variant-numeric: tabular-nums` on numeric values.

### Comparison bar (`.comparison-bar`)
Two-value fill bar for before/after comparisons.

---

## Progress bars

```html
<div class="progress">
  <div class="progress-header">
    <span class="progress-label">Budget spent</span>
    <span class="progress-value">78%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill accent" data-target="78"></div>
  </div>
</div>
```

Animate via IntersectionObserver — set `data-target` value and add `.animate` class on intersection. See `showcase/index.html` for the JS pattern.

Fill color classes: `.accent`, `.success`, `.danger`, `.neutral`  
Glass fill variants: `.glass-orange`, `.glass-peach`, `.glass-mauve`, `.glass-purple`

---

## Forms

```html
<div class="form-group">
  <label class="form-label">Campaign Name</label>
  <input class="form-input" type="text" placeholder="...">
  <span class="form-hint">Optional hint text</span>
</div>
```

States: `:focus` (copper ring), `.is-error` (red ring), `.is-success` (green ring), `[disabled]` (reduced opacity)

Components: `.form-input`, `.form-select`, `.form-textarea`, `.form-check` (checkbox/radio), `.form-toggle` (switch)

---

## Badges & Tags

| Component | Class | Use |
|---|---|---|
| Status badge | `.badge .badge-{neutral\|accent\|success\|danger}` | Status indicators |
| Interactive tag | `.tag .tag-interactive` | Filterable labels |
| Eyebrow | `.eyebrow` | Section pre-headers |
| Status dot | `.status-dot .live` | Live data indicators |

---

## Table

Always wrap in `.table-wrap` for responsive scroll:

```html
<div class="table-wrap">
  <table class="table">
    <thead>...</thead>
    <tbody>...</tbody>
  </table>
</div>
```

Delta values in cells: `<span class="delta up">↑ 5.1×</span>`

Pagination: `.table-pagination` → `.pagination-controls` → `.pagination-btn`

---

## States

### Skeleton
Pre-built shapes: `.skeleton.sk-text`, `.skeleton.sk-heading`, `.skeleton.sk-avatar`, `.skeleton.sk-btn`

Combine in `.skeleton-card`:
```html
<div class="skeleton-card">
  <div class="skeleton sk-heading"></div>
  <div class="skeleton sk-text"></div>
  <div class="skeleton sk-text sk-half"></div>
</div>
```

### Empty state
```html
<div class="empty-state">
  <!-- icon -->
  <p class="empty-state-title">No campaigns yet</p>
  <p class="empty-state-body">Create your first campaign to start tracking performance.</p>
  <div class="empty-state-actions">
    <button class="btn btn-primary btn-sm">New Campaign</button>
  </div>
</div>
```

Empty states must always: describe what will appear, explain the value, and provide a clear next action.

### Toast
```html
<div class="toast-container">
  <div class="toast success" role="status">
    <svg class="toast-icon">...</svg>
    <div class="toast-body">
      <p class="toast-title">Campaign created</p>
      <p class="toast-message">Summer Launch 2026 is now live.</p>
    </div>
    <button class="toast-close" aria-label="Dismiss">×</button>
  </div>
</div>
```

---

## Anti-patterns

See `DESIGN.md` section 7 for the complete banned list. The most common violations to avoid:

- Accent stripe via `border-left` or `border-right` > 1px — **banned**
- Gradient text (`background-clip: text` + gradient) — **banned**
- Nested cards — **banned**
- Modal when a drawer, inline expand, or page navigation would work — **avoid**
- Identical card grids (same size, same structure, same icon+heading+text pattern) — **avoid**
- Long body text set in all-caps — **never**
