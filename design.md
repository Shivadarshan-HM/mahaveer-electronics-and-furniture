# MAHAVEER ELECTRONICS & FURNITURE — AGENT BUILD BRIEF

> This document is the single source of truth for building the Mahaveer website.
> Do NOT deviate from any specification here. Every decision is intentional.
> When in doubt: refer back to this file, not your defaults.

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **3D / Shaders:** React Three Fiber + custom GLSL shaders
- **Animation:** GSAP (ScrollTrigger for scroll sequences, CSS transitions for hover)
- **Styling:** Tailwind CSS (extend config with design tokens below — do not use arbitrary values)
- **Fonts:** Google Fonts — `Playfair Display` (headings) + `Inter` (body)

---

## Design Tokens

Extend `tailwind.config.js` with these exact values. Use token names throughout — never raw hex.

```js
colors: {
  'bg':         '#FAF9F5', // Warm Ivory — page background
  'ink':        '#2E221B', // Walnut Brown — primary text
  'gold':       '#D4AF37', // Champagne Gold — accent
  'stone':      '#8B8178', // Soft Stone — secondary text
},
fontFamily: {
  display: ['Playfair Display', 'serif'],
  body:    ['Inter', 'sans-serif'],
},
borderRadius: {
  DEFAULT: '24px', // All cards, images, containers — no exceptions
},
```

---

## Global Layout Rules

```
Max container width:  1440px
Desktop padding:      48px (left + right)
Tablet padding:       24px
Mobile padding:       20px
```

- Every section must use this same container. No custom widths. No random margins.
- Grid is always 12 columns. Use only: 6/6, 5/7, 4/4/4, 4/8.
- Section vertical padding: `py-16` to `py-24` maximum. Never `py-32` or above.

---

## Typography Scale

| Role | Size | Font | Line Height |
|---|---|---|---|
| Hero | 96px (min 56px) | Playfair Display 700 | 0.95 |
| Section Title | 48–64px | Playfair Display 600 | 1.1 |
| Card Title | 24–32px | Playfair Display 500 | 1.1 |
| Body | 18–20px | Inter 400 | 1.6 |

---

## Animation Rules

Use GSAP only for major section entrance sequences.

**Allowed effects:**
- `fadeUp` — elements rising into view on scroll
- `blurReveal` — text sharpening from `blur(8px)` to `blur(0)`
- `scaleReveal` — image scaling from `0.95` to `1.0`
- `staggerReveal` — staggered children with `0.1s` delay between

**Forbidden:**
- Bounce, rotation, flashy transitions
- Animations that trigger before the user scrolls to that section
- More than one GSAP sequence per section

All animations must have a `prefers-reduced-motion` CSS fallback.

---

## Section-by-Section Build Spec

---

### SECTION 1 — Hero

**Height:** `100vh`
**Layout:** Full-screen. Showroom image dominates. No split layouts. No image cards.

**Structure:**
- Floating navbar above (transparent, blurs on scroll)
- Showroom image: full bleed background, `object-cover`, fills entire viewport
- Content overlay: bottom-left aligned, max 50% width
- Headline copy:
  ```
  Furniture.
  Electronics.
  Interior Excellence.
  All Under One Roof.
  ```
- Two CTAs: `Visit Showroom` (filled gold) + `Explore Collection` (outlined)
- Trust bar below CTAs:
  ```
  13+ Years  |  500+ Brands  |  5000+ Homes
  ```

**Animation:** GSAP entrance — navbar fades down, headline staggers up line by line, CTAs fade in last. Triggered on page load, not scroll.

**Critical rule:** Hero text must NEVER overlap the navbar.

---

### SECTION 2 — Founder Story

**Purpose:** Trust. Human connection. Authenticity.
**Layout:** Editorial. NOT a boxed card. NOT a generic "About Us" grid.

**Structure:**
- 5/7 grid split (desktop)
- Left (5 cols): Large founder portrait image, `object-cover`, full column height, `border-radius: 24px`
- Right (7 cols): Elegant pull quote in Playfair Display italic, followed by founder story (3–4 short paragraphs), founder name + title in small caps

**Image rule:** Founder image is a portrait — tall aspect ratio. Do not crop the face.

---

### SECTION 3 — Premium Brands Marquee

**Layout:** Infinite horizontal scroll strip. No cards. No grid. No hover-to-explore.

**Behavior:**
- Auto-scrolls left continuously
- Pauses on hover
- Resumes on mouse leave
- Speed: comfortable reading pace (~40px/s)

**Logos:** Large, spaced generously. Minimum `160px` wide per logo slot.
**Background:** Slightly off-white (`bg` token) with subtle top/bottom border in `stone/20`.

**CRITICAL:** There is NO "hover-to-explore" interaction on this section. It is a marquee only.

---

### SECTION 4 — Curated Collection (Tabbed Gallery)

**Layout:** Interactive tabbed interface. NOT a card grid. NOT Pinterest/masonry.

**Tabs:** Sofas | Beds | Dining | Wardrobes | Office

**Structure (per tab):**
- Left: One large product/collection image (`object-cover`, `border-radius: 24px`)
- Right: Category title, 2–3 line description, material/feature highlights, CTA

**Behavior:**
- Clicking a tab crossfades (0.4s opacity) to new content
- Active tab has gold underline indicator
- No page reload, no scroll jump

---

### SECTION 5 — Curated Spaces (Luxury Accordion)

**Inspiration:** Poliform, Minotti
**Layout:** Vertical accordion. NOT oversized. NOT full-page panels.

**Categories:** Living | Bedroom | Dining | Office

**Behavior:**
- Hovering a category expands its panel (height transition, `0.5s ease`)
- Collapsed: shows category name + small thumbnail
- Expanded: shows full-width editorial image + brief descriptor text
- Only one panel open at a time

**Height constraint:** Entire section must not exceed `80vh` total.

---

### SECTION 6 — Technology Experience

**Inspiration:** Apple product page
**Layout:** 5-column text / 7-column product stage

**Categories:** TV | Refrigerator | Washing Machine | Home Theatre | Kitchen

**CRITICAL IMAGE RULE:**
```
Product images → object-contain (NEVER object-cover)
Products must NEVER be cropped.
Products must always be fully visible.
```

**Structure:**
- Left (5 cols): Category tabs (vertical list), product name, brand, key specs (3–4 bullet points), CTA
- Right (7 cols): Product centered in stage. Subtle radial spotlight behind product (gold/warm glow, low opacity). Dark stage background (`#1A1410` or similar warm dark).

**Behavior:** Switching category smoothly transitions product image (fade + slight scale). No layout shift.

**Critical rules:**
- No broken alignment between text and product stage
- No oversized black empty areas in the product stage
- Product must always be vertically centered in its container

---

### SECTION 7 — Mahaveer Heritage (Timeline)

**KEEP THIS SECTION. DO NOT REMOVE.**

**Timeline start year: 2013** (NOT 2009, NOT any other year)

**Milestones:**
```
2013 — Foundation
2016 — Expansion
2019 — Trusted Regional Brand
2023 — Complete Home Solutions
Today — 13+ Years of Excellence
```

**Layout:** Horizontal timeline (desktop), vertical (mobile)
**Height:** Maximum `70vh`. No giant vertical timelines. No excessive spacing between nodes.

**Animation:** Nodes and labels stagger in on scroll. Luxury, subtle — not playful.

---

### SECTION 8 — Showroom Experience

**Purpose:** Inspire a physical visit.
**Layout:** Dense editorial grid. NOT a scrolling gallery. NOT 500vh. NOT oversized cards.

**Structure:**
- Primary: One large showroom photograph (dominant, full-width or 7-col)
- Secondary: 2–3 smaller supporting images in a tight grid
- Copy: Short editorial lines — "Visit. Experience. Trust." style
- CTA: Directions / WhatsApp

**Constraint:** This entire section must feel like a magazine spread, not an image dump.

---

### SECTION 9 — Final CTA

**Layout:** Full-width. Centered. Luxury closing.

**Copy:**
```
Ready To Transform Your Space?
```

**CTAs:**
- `Visit Showroom` — primary (gold filled)
- `WhatsApp Us` — secondary (outlined, WhatsApp green border only)

**Animation:** Headline blurs in. CTAs scale up from `0.95`. Background: subtle warm texture or gradient — no hard colors.

---

### SECTION 10 — Footer

**Background:** Walnut Brown (`ink` token — `#2E221B`)
**Accent:** Champagne Gold (`gold` token — `#D4AF37`)

**Structure:**
- Large `MAHAVEER` watermark text at very low opacity behind content
- Three columns: Brand info + stats | Navigation links | Contact + map link
- Stats row: `13+ Years` · `500+ Brands` · `5000+ Homes`
- Bottom bar: copyright, thin gold separator line above it

---

## Critical Global Rules (Agent Must Verify Before Shipping)

```
✓ Hero text never overlaps navbar
✓ Electronics/appliance images are FULLY visible (object-contain, never cropped)
✓ Founder portrait is not cropped at face
✓ All cards are equal height within their row
✓ Border radius is 24px everywhere (cards, images, containers)
✓ Container max-width 1440px used in every section
✓ Spacing never exceeds py-24 between sections
✓ Timeline starts at 2013
✓ No hover-to-explore on the brands marquee
✓ Technology section has NO oversized empty black areas
✓ All animations have prefers-reduced-motion fallback
✓ Mobile layout works at 375px
✓ No lorem ipsum copy in final output
✓ No SaaS/startup/Framer-template aesthetic anywhere
```

---

## What This Site Must Feel Like

- Apple (product reverence, negative space with purpose)
- Poliform / Minotti (editorial luxury, furniture as art)
- Porsche (performance, trust, heritage)
- Architectural Digest (photography-first, editorial density)

## What This Site Must NOT Feel Like

- A startup landing page
- A SaaS template
- A Framer template
- An AI-generated website
- An e-commerce marketplace (Flipkart, Amazon aesthetic)

---

*Every decision in this document exists for a reason. Follow it exactly.*
