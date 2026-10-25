---
name: browser-visual-testing
description: >-
  Workflows, procedures, and best practices for automated browser validation, visual regression testing,
  responsive layout auditing, and user-flow verification. Use this skill when testing UI changes,
  debugging layout shifts, verifying modal/popup interactions, or auditing cross-device responsiveness.
---

# Browser Visual Testing & Quality Assurance Runbook

This skill provides step-by-step runbooks for validating user interfaces using browser automation, visual inspection, and accessibility verification.

---

## 🔍 1. Standard Visual Audit Checklist

When reviewing any web page or component update:

### A. Breakpoint Audit
1. **Mobile (375px & 414px)**:
   - Does horizontal scrolling occur unintentionally? (Verify with `overflow-x-hidden`).
   - Are touch targets at least 44x44px?
   - Do multi-column grids collapse to 1 or 2 columns cleanly?
2. **Tablet (768px & 820px)**:
   - Does navigation switch gracefully between mobile drawer and desktop navbar?
   - Are cards in grids visually aligned with matching heights?
3. **Desktop (1280px & 1440px+)**:
   - Is container width constrained (e.g. `max-w-7xl mx-auto`) to avoid over-stretching on wide monitors?
   - Is whitespace generous and balanced?

---

## 🧪 2. Modal & Lightbox Validation Runbook

When testing lightbox zoom or popup modals:
1. **Trigger**:
   - Verify hover state: Does the thumbnail provide a visual cue (`cursor-zoom-in`, overlay badge)?
   - Verify keyboard: Can the user trigger the modal with `Enter` or `Space`?
2. **Dismissal (Click-Outside)**:
   - Clicking directly on the dark backdrop **must** close the modal.
   - Clicking inside the modal card (image, caption, buttons) **must not** close the modal.
   - Pressing `Escape` **must** close the modal.
3. **Scroll Lock & Layout Shift**:
   - Opening the modal must lock page scrolling (`overflow: hidden`).
   - Closing the modal must restore previous scroll state.
   - The scrollbar disappearing must not cause the page to jump horizontally (compensated via dynamic `paddingRight`).
4. **Animation Quality**:
   - Entrance: Smooth fade & scale-up (`duration-300 ease-out`).
   - Exit: Smooth fade & scale-down before unmounting from DOM.

---

## ⚡ 3. Automated Flow Verification (Playwright & Headless)

For headless testing of user journeys:
```typescript
// Sample test pattern for Next.js app
import { test, expect } from '@playwright/test';

test('verify catalog filter and lightbox flow', async ({ page }) => {
  await page.goto('http://localhost:3000/koleksi');

  // 1. Verify category tabs
  const categoryTab = page.getByRole('tab', { name: 'Kemeja / Hem' });
  await categoryTab.click();
  await expect(categoryTab).toHaveAttribute('aria-selected', 'true');

  // 2. Verify zoom popup
  const firstProductCard = page.locator('article').first();
  await firstProductCard.locator('[role="button"]').first().click();

  // 3. Verify lightbox is visible
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();

  // 4. Verify ESC closes dialog
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
});
```
