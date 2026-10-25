---
name: ui-ux-design-system
description: >-
  Comprehensive guide and rules for UI/UX design, visual hierarchy, micro-interactions,
  design tokens, and accessibility (WCAG 2.1 AA). Use this skill when designing, reviewing,
  or refining components, landing pages, typography, color palettes, and responsive layouts.
---

# UI/UX & Design System Architecture Guide

This skill guides the design and implementation of modern, high-conversion, and accessible user interfaces.

---

## 🎨 1. Visual Hierarchy & Design Tokens

### Typography Hierarchy
- **Heading Display**: Serif (`DM Serif Display` or editorial serif) for brand prestige, heritage, and emotional warmth.
- **Body & UI**: Clean sans-serif (`DM Sans`, `Inter`) for maximum readability across screen densities.
- **Type Scale**:
  - Hero: `clamp(2.75rem, 5.5vw, 4.5rem)`
  - Section Title: `clamp(2rem, 3.5vw, 3rem)`
  - Card Title: `1.125rem - 1.25rem` (18px - 20px)
  - Body / Subtext: `0.875rem` (14px)
  - Badges & Eyebrows: `0.6875rem - 0.75rem` (11px - 12px, uppercase, letter-spacing `0.1em+`)

### Color Token Architecture
- **Primary Accent**: `#c51f5d` (FuRi Signature Magenta / Batik Red) — Use for primary CTAs and active states.
- **Secondary Accent**: `#d8ab5d` / `#eccf9e` (Warm Heritage Gold) — Use for trust badges and subtle highlights.
- **Surface / Background**: Layered gradients (`#ffffff` ➔ `#f1f7ff` ➔ `#d9eaff`) with subtle diagonal mesh.
- **Text & Deep Contrast**: `#10233f` (Midnight Indigo) for deep, readable text (superior to harsh `#000000`).

---

## ♿ 2. Accessibility Checklist (WCAG 2.1 AA)

- [ ] **Contrast Ratio**: Normal text must maintain at least 4.5:1 against its background; large text (18pt+) at least 3:1.
- [ ] **Touch Targets**: Minimum 44px x 44px on mobile for all buttons, links, and icon triggers.
- [ ] **Focus Rings**: Never remove outline without replacing it. Use clear rings: `focus-visible:outline-2 focus-visible:outline-[#c51f5d] focus-visible:outline-offset-2`.
- [ ] **Reduced Motion**: Always honor user motion preference:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { transition-duration: 0.01ms !important; }
  }
  ```
- [ ] **Accessible Dialogs & Modals**:
  - Must have `role="dialog"`, `aria-modal="true"`, and `aria-label`.
  - ESC key must dismiss the modal.
  - Body scroll must lock (`document.body.style.overflow = "hidden"`) with scrollbar width compensation to prevent layout shifts.

---

## 📱 3. Responsive Breakpoint Rules

| Device | Width | Columns | Spacing Rule |
|---|---|---|---|
| **Mobile** | `< 640px` | 1 or 2 col grid | Padding `px-4`, full-width touch buttons |
| **Tablet** | `640px - 1024px` | 2 or 3 col grid | Padding `px-6`, balanced card heights |
| **Desktop**| `1024px+` | 3 or 4 col grid | Padding `px-10`, generous whitespace (AERIS aesthetic) |

---

## 🛍️ 4. E-Commerce & Catalog UX Patterns

1. **Dual-Intent Funnel**:
   - For retail buyers: "Lihat Koleksi Jadi" ➔ Direct product preview ➔ WA Inquiry.
   - For corporate/institutional buyers: "Pesanan Bersama / Bulk" ➔ Dedicated section with clear MOQ and custom logo proofing.
2. **Distraction-Free Detail Views**:
   - Lightbox image zooms should open instantly with a smooth zoom transition (`scale-95` ➔ `scale-100`).
   - Clicking anywhere on the backdrop closes the modal; clicking inside does not.
