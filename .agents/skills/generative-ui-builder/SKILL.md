---
name: generative-ui-builder
description: >-
  Architectural patterns and implementation guidelines for Component-Driven Generative UI (GenUI).
  Use this skill when designing interfaces that dynamically render rich React components based on
  AI outputs, building interactive widgets, or integrating streaming UI.
---

# Component-Driven Generative UI (GenUI) Architecture

Generative UI is the paradigm where user interfaces are rendered dynamically at runtime based on structured intent and data, rather than through rigid, hardcoded page views.

---

## 🏗️ 1. Core Architectural Pattern

```text
[User Intent / Query]
       │
       ▼
[AI Model with Tool Calling / Structured Output (JSON Schema)]
       │
       ▼
[Client/Server Component Registry]
  ├── <BatikRecommenderWidget props={...} />
  ├── <UniformCostEstimator props={...} />
  └── <FabricComparisonTable props={...} />
       │
       ▼
[Seamless Streamed Interactive UI]
```

### Golden Rule: Never Render Raw AI HTML
- **Anti-pattern**: Letting the model generate raw `<div><style>...</style></div>` string output. This creates security vulnerabilities (XSS), breaks design tokens, and causes style inconsistency.
- **Best practice**: The model selects an established component from a **Design System Registry** and populates its validated props via Zod or JSON Schema.

---

## 🧩 2. Widget Example: Uniform Estimator Component

```typescript
// Zod Schema for Structured Output
import { z } from 'zod';

export const UniformInquirySchema = z.object({
  institutionType: z.enum(['office', 'school', 'community']),
  estimatedQuantity: z.number().min(20),
  materialPreference: z.enum(['prima', 'dobby', 'sutra']),
  requiresCustomLogo: z.boolean(),
  notes: z.string().optional(),
});

export type UniformInquiry = z.infer<typeof UniformInquirySchema>;
```

```tsx
// React Component rendered by GenUI
export function UniformEstimatorWidget({ data }: { data: UniformInquiry }) {
  const basePricePerMeter = {
    prima: 180000,
    dobby: 250000,
    sutra: 550000,
  }[data.materialPreference];

  const estimatedTotal = basePricePerMeter * data.estimatedQuantity * 2;

  return (
    <div className="rounded-2xl border border-[#10233f]/15 bg-white p-6 shadow-xl">
      <h4 className="font-serif text-xl text-[#10233f]">Estimasi Awal Seragam Batik</h4>
      <div className="mt-4 space-y-2 text-sm text-[#52627a]">
        <p>Bahan: <strong className="text-[#10233f] capitalize">{data.materialPreference}</strong></p>
        <p>Jumlah: <strong className="text-[#10233f]">{data.estimatedQuantity} pcs</strong></p>
        <p>Perkiraan Biaya: <strong className="text-[#c51f5d] font-serif text-lg">Rp {estimatedTotal.toLocaleString('id-ID')}</strong></p>
      </div>
      <a
        href={`https://wa.me/6281234567890?text=${encodeURIComponent(
          `Halo, saya ingin menindaklanjuti estimasi seragam: ${data.estimatedQuantity} pcs bahan ${data.materialPreference}.`
        )}`}
        target="_blank"
        rel="noreferrer"
        className="button-primary mt-5 w-full"
      >
        Lanjutkan Diskusi Sampel via WA
      </a>
    </div>
  );
}
```

---

## 🚀 3. When to Use Generative UI in FuRi Valentine Batik
- **Katalog Rekomendasi**: Menampilkan 3 pilihan motif batik berdasarkan persona acara (pernikahan, jamuan diplomatik, seragam guru).
- **Kalkulator Biaya Seragam**: Membantu staf sekolah atau HR kantor menghitung estimasi anggaran seragam langsung di chat sebelum beralih ke WhatsApp.
- **Perbandingan Bahan Interaktif**: Widget perbandingan side-by-side antara Sutra ATBM, Katun Primissima, dan Dobby Jacquard.
