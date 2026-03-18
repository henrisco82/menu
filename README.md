# DI AE Control Center — Menu Files

A set of plain HTML + CSS application launcher pages. No JavaScript, no frameworks, no external dependencies.

---

## Files

| File | Description |
|------|-------------|
| `di-ae-control-center.html` | Main launcher — matches the original design (blue bg, header, card grid) |
| `dell-dark.html` | Dark theme variant — glassmorphism cards, Dell blue accents |
| `dell-light.html` | Light theme variant — sidebar layout, enterprise portal style |
| `index.html` | Generic app menu — neutral palette, reusable starting point |

---

## How to add a new menu item to `di-ae-control-center.html`

### Step 1 — Copy a card block

Open `di-ae-control-center.html` and find the `<div class="grid">` section.
Copy any existing `<a class="card">` block and paste it directly after the last one:

```html
<!-- ⑥ My New App -->
<a class="card" href="#my-new-app"
   aria-label="My New App — Short description here">

  <div class="card__icon">
    <!-- Paste your SVG icon here (viewBox="0 0 72 72" recommended) -->
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="16" y="16" width="40" height="40" rx="6" fill="#0076CE"/>
    </svg>
  </div>

  <span class="card__title">My New App</span>
  <span class="card__desc">Short description here</span>
</a>
```

That's it. The CSS grid reflows automatically — no style changes needed.

---

### Step 2 — Choose an icon

Each card uses an inline SVG with `viewBox="0 0 72 72"`. You have three options:

#### Option A — Use a simple shape (quickest)

```html
<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Example: a shield -->
  <path d="M36 8 L60 18 L60 38 C60 52 36 64 36 64 C36 64 12 52 12 38 L12 18 Z"
        fill="#E53E6D"/>
</svg>
```

#### Option B — Use an emoji (simplest)

Replace the entire `<div class="card__icon">` with:

```html
<div class="card__icon" style="font-size: 3rem; line-height: 1;">
  📊
</div>
```

#### Option C — Paste a Heroicons / Feather SVG

Copy any 24×24 icon SVG and scale it to the 72×72 viewBox by wrapping it in a `<g transform="scale(3)">`:

```html
<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g transform="scale(3)">
    <!-- paste 24×24 icon path here -->
    <circle cx="12" cy="12" r="10" stroke="#0076CE" stroke-width="2"/>
  </g>
</svg>
```

---

### Step 3 — Mark a card as selected (optional)

Add the `card--active` class to give a card a blue border and subtle shadow:

```html
<a class="card card--active" href="#my-new-app" ...>
```

Remove it from any other card that was previously active — only one card should be active at a time.

---

### Step 4 — Link to a real URL

Replace `href="#my-new-app"` with any URL:

```html
<a class="card" href="https://your-internal-tool.dell.com" ...>
```

To open in a new tab:

```html
<a class="card" href="https://your-tool.dell.com" target="_blank" rel="noopener noreferrer" ...>
```

---

## How to add a new menu item to `dell-dark.html`

Find any `<div class="grid">` section and paste a card block with a `--card-accent` CSS variable to control the glow and arrow colour:

```html
<!-- New card for dell-dark.html -->
<a class="card" href="#my-app" style="--card-accent: var(--cat-teal);">
  <div class="card__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--cat-teal)"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  </div>
  <div class="card__body">
    <span class="card__title">My App</span>
    <span class="card__desc">Short description of what this app does.</span>
  </div>
  <div class="card__foot">
    <span class="card__badge card__badge--new">New</span>
    <span class="card__arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
           stroke="currentColor" stroke-width="1.8">
        <path d="M2.5 9.5 9.5 2.5M5 2.5h4.5V7"/>
      </svg>
    </span>
  </div>
</a>
```

Available `--card-accent` colour tokens:

| Token | Colour |
|-------|--------|
| `var(--cat-blue)` | Dell Blue `#0076CE` |
| `var(--cat-cyan)` | Cyan `#00B4D8` |
| `var(--cat-teal)` | Teal `#00897B` |
| `var(--cat-indigo)` | Indigo `#5C6BC0` |
| `var(--cat-violet)` | Violet `#7E57C2` |
| `var(--cat-rose)` | Rose `#E53E6D` |
| `var(--cat-amber)` | Amber `#F59E0B` |
| `var(--cat-green)` | Green `#00C48C` |

---

## How to add a new menu item to `dell-light.html`

Find any `<div class="grid">` and paste a card with `--card-color` (stripe + CTA colour) and `--card-bg` (icon background):

```html
<!-- New card for dell-light.html -->
<a class="card" href="#my-app"
   style="--card-color: #0076CE; --card-bg: #EBF5FB;">
  <div class="card__stripe"></div>
  <div class="card__inner">
    <div class="card__header">
      <div class="card__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="#0076CE"
             stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      </div>
      <span class="card__status card__status--online">Online</span>
    </div>
    <span class="card__title">My App</span>
    <span class="card__desc">Short description of what this app does.</span>
  </div>
  <div class="card__foot">
    <span class="card__badge card__badge--new">New</span>
    <span class="card__cta">
      Open
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
           stroke="currentColor" stroke-width="2">
        <path d="M2.5 9.5 9.5 2.5M5 2.5h4.5V7"/>
      </svg>
    </span>
  </div>
</a>
```

Status badge options:

```html
<span class="card__status card__status--online">Online</span>   <!-- green dot -->
<span class="card__status card__status--warn">Warning</span>    <!-- amber dot -->
<span class="card__status card__status--off">Offline</span>     <!-- grey dot  -->
```

Badge options:

```html
<span class="card__badge card__badge--new">New</span>           <!-- green  -->
<span class="card__badge card__badge--beta">Beta</span>         <!-- amber  -->
<span class="card__badge card__badge--soon">Coming Soon</span>  <!-- grey   -->
<span class="card__badge">v1.0</span>                           <!-- neutral -->
```

---

## How to add a new section / category

In any file, sections group related cards under a label. Add a new section by pasting:

### `di-ae-control-center.html` — add a second panel

Wrap a second `.app-panel` beneath the first inside `.main` (change `flex-direction` to `column` and `align-items` to `center` on `.main` if needed):

```html
<div class="app-panel" role="region" aria-labelledby="panel-2-heading"
     style="margin-top: 20px;">
  <h2 class="app-panel__heading" id="panel-2-heading">
    <span class="app-panel__heading-icon">⚙</span>
    Admin Tools
  </h2>
  <div class="grid">
    <!-- cards here -->
  </div>
</div>
```

### `dell-dark.html` / `dell-light.html` — add a new section

```html
<section class="section" aria-labelledby="lbl-mygroup">
  <div class="section__header">
    <span class="section__label" id="lbl-mygroup">My Group</span>
    <div class="section__line"></div>
  </div>
  <div class="grid">
    <!-- cards here -->
  </div>
</section>
```

---

## Updating the warning banner

In `di-ae-control-center.html`, find `.header__warning` and change the text:

```html
<div class="header__warning" role="alert">
  <!-- warning triangle SVG — leave as-is -->
  <span class="header__warning-text">YOUR NEW WARNING MESSAGE HERE</span>
</div>
```

To hide it completely, add `style="display:none"` to the element.

---

## Colour reference — Dell brand palette

| Usage | Hex |
|-------|-----|
| Primary Blue | `#0076CE` |
| Dark Blue | `#005BA1` |
| Light Blue tint | `#EBF5FB` |
| White | `#FFFFFF` |
| Body text | `#1A1A2E` |
| Secondary text | `#5A6A80` |
