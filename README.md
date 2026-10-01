# FuRiValentineBatik — Company Profile Website

> Website profil perusahaan resmi **FuRi Valentine Batik**, mahakarya seni batik nusantara (Batik Tulis Halus Sutra, Batik Cap Kontemporer, dan Edisi Romansa Valentine) yang dibangun di atas framework **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

---

## 🏛️ Arsitektur Proyek & Folder Structure

Proyek ini menggunakan pemisahan tanggung jawab (*Separation of Concerns*) yang ketat antara **Logika Bisnis (Logic Layer)**, **Komponen Antarmuka (UI Components)**, dan **Aset Vektor (SVG System)**:

```text
FuRiValentineBatik/
├── public/
│   └── assets/
│       └── svg/                     # [STATIC SVG ASSETS]
│           ├── brand/               # SVG Logo brand & ikon favicon
│           │   ├── logo-full.svg    # Logo horizontal lengkap dengan tipografi
│           │   ├── logo-mark.svg    # Emblem monogram bulat berornamen
│           │   └── favicon.svg      # Favicon web browser
│           ├── patterns/            # SVG Motif Batik berulang untuk background
│           │   ├── batik-kawung.svg # Motif Kawung (kebijaksanaan & kemurnian)
│           │   ├── batik-parang.svg # Motif Parang Rusak (pantang menyerah)
│           │   └── batik-megamendung.svg # Motif Megamendung (keteduhan jiwa)
│           ├── icons/               # SVG Icon alat & filosofi batik
│           │   ├── canting.svg      # Alat canting tembaga tradisional
│           │   ├── fabric.svg       # Kain sutra tenun
│           │   ├── natural-dye.svg  # Pewarna botani indigofera & soga
│           │   └── stamp.svg        # Cap tembaga batik
│           └── ornaments/           # SVG Elemen dekoratif
│               ├── corner-motif.svg # Hiasan sudut klasik
│               └── divider.svg      # Garis pemisah ornamen batik
│
├── src/
│   ├── app/                         # [NEXT.JS APP ROUTER]
│   │   ├── layout.tsx               # Root Layout (Navbar, Footer, SEO metadata)
│   │   ├── page.tsx                 # Halaman Beranda (Hero, Showcase, Craft, Testi, CTA)
│   │   ├── about/page.tsx           # Halaman Profil Perusahaan, Visi & Misi
│   │   ├── collections/page.tsx     # Galeri Katalog Lengkap
│   │   ├── collections/[slug]/page.tsx # Halaman Detail Koleksi & Filosofi
│   │   ├── craftsmanship/page.tsx   # Kisah Keahlian Canting & Pewarna Alami
│   │   ├── contact/page.tsx         # Kontak Showroom Menteng & Formulir Reservasi
│   │   └── globals.css              # Konfigurasi Tailwind theme & token warna batik
│   │
│   ├── components/
│   │   ├── common/                  # UI Primitives Reusable (Button, Badge, Card)
│   │   ├── layout/                  # Layout Structure (Navbar, Footer, Container)
│   │   ├── sections/                # Sections Landing Page (Hero, Showcase, dll)
│   │   └── svg/                     # [REACT SVG COMPONENTS]
│   │       ├── brand/               # FuRiLogo.tsx, BrandMonogram.tsx
│   │       ├── patterns/            # KawungPattern.tsx, ParangPattern.tsx
│   │       ├── icons/               # CantingIcon.tsx, EcoDyeIcon.tsx, HandmadeIcon.tsx, SilkIcon.tsx
│   │       └── index.ts             # Barrel export untuk kemudahan import
│   │
│   ├── features/                    # [FEATURE-DRIVEN LOGIC LAYER]
│   │   ├── catalog/                 # Domain Katalog Koleksi
│   │   │   ├── components/          # ProductCard, CatalogFilter, ProductGrid
│   │   │   ├── hooks/               # useCatalogFilter.ts (filter, debounce, sort)
│   │   │   ├── services/            # catalogService.ts (query, filter, metadata)
│   │   │   └── types/               # catalog.types.ts
│   │   ├── contact/                 # Domain Formulir & Reservasi
│   │   │   ├── components/          # ContactForm, WhatsAppCTA
│   │   │   ├── hooks/               # useInquiryForm.ts (validasi & state)
│   │   │   ├── services/            # contactService.ts (WhatsApp API link builder)
│   │   │   └── types/               # contact.types.ts
│   │   └── story/                   # Domain Kisah Pengrajin & Proses
│   │       ├── components/          # ProcessTimeline.tsx
│   │       └── types/               # story.types.ts
│   │
│   ├── hooks/                       # [SHARED CUSTOM HOOKS]
│   │   ├── useScrollDirection.ts    # Deteksi arah scroll layar
│   │   ├── useDebounce.ts           # Debounce input pencarian
│   │   └── useMediaQuery.ts         # Deteksi breakpoint responsive
│   │
│   ├── lib/                         # [UTILITIES & CONSTANTS]
│   │   ├── utils.ts                 # Helper cn() (clsx + tailwind-merge), formatIDR, slugify
│   │   ├── constants/
│   │   │   ├── site.ts              # Konfigurasi metadata brand, kontak, showroom
│   │   │   └── navigation.ts        # Daftar navigasi menu
│   │   └── validations/
│   │       └── contact.schema.ts    # Validasi formulir inquiry
│   │
│   ├── services/
│   │   └── data/                    # Mock & Data Store Koleksi Batik
│   │       ├── collections.data.ts  # Data katalog komprehensif
│   │       └── stories.data.ts      # Data tahapan pembuatan & pengrajin
│   │
│   └── types/                       # Definisi tipe global TypeScript
│       └── index.ts
```

---

## 🎨 Panduan Penggunaan Aset SVG

Proyek ini mendukung **dua cara penggunaan SVG**:

### 1. Sebagai React Component Dinamis (Rekomendasi untuk Ikon & UI Interaktif)
SVG yang berada di `src/components/svg/` dibuat sebagai komponen React yang menerima props standar SVG (`className`, `color`, `width`, `height`, dll).
Warna dan ukuran dapat dikontrol langsung melalui utility class Tailwind CSS:

```tsx
import { CantingIcon, KawungPattern, FuRiLogo } from "@/components/svg";

export default function Contoh() {
  return (
    <div>
      {/* Logo dinamis */}
      <FuRiLogo variant="horizontal" accentColor="#C6923B" />

      {/* Ikon dengan warna Tailwind */}
      <CantingIcon className="h-6 w-6 text-amber-600 hover:text-amber-500 transition-colors" />

      {/* Pattern background yang responsif */}
      <div className="relative h-64 w-full bg-slate-900">
        <KawungPattern color="#C6923B" opacity={0.25} />
      </div>
    </div>
  );
}
```

### 2. Sebagai Static Asset (Cocok untuk CSS background, `<img>`, atau Next `<Image />`)
SVG statis disimpan di `public/assets/svg/` dan dapat diakses langsung dari root web:

```tsx
import Image from "next/image";

// Contoh penggunaan Next.js Image
<Image 
  src="/assets/svg/brand/logo-full.svg" 
  alt="FuRi Valentine Batik" 
  width={240} 
  height={60} 
/>

// Atau di CSS background
// background-image: url('/assets/svg/patterns/batik-kawung.svg');
```

---

## 🧠 Panduan Menambah Logika Baru (Logic Guidelines)

1. **Logika Spesifik Fitur (*Feature-driven*)**:
   - Jika Anda menambahkan modul baru (misal: `newsletter`, `cart`, atau `showroom-booking`), buat direktori di `src/features/<feature-name>/`.
   - Pisahkan menjadi `hooks/` untuk state & interaksi React, `services/` untuk kalkulasi/API, dan `components/` untuk representasi UI.

2. **Logika Umum (*Cross-cutting logic*)**:
   - Fungsi pembantu murni (format string, angka, kalkulasi) letakkan di `src/lib/utils.ts`.
   - Custom hook yang digunakan lintas halaman (misal: geolocation, window size) letakkan di `src/hooks/`.

---

## 🚀 Menjalankan Proyek Secara Lokal

Pastikan Node.js (v18+) telah terpasang di komputer Anda.

```bash
# 1. Masuk ke direktori proyek
cd /home/candra/Documents/GitHub/FuRiValentineBatik

# 2. Jalankan mode pengembangan
npm run dev

# 3. Buka browser di http://localhost:3000
```

### Script Tambahan
- `npm run build`: Kompilasi proyek untuk produksi.
- `npm run start`: Menjalankan server produksi hasil build.
- `npm run lint`: Memeriksa standar kode dengan ESLint.
