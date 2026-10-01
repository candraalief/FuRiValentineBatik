"use client";

import React from "react";
import Link from "next/link";
import { useCatalogFilter } from "@/features/catalog/hooks/useCatalogFilter";
import { CatalogFilter } from "@/features/catalog/components/CatalogFilter";
import { ProductGrid } from "@/features/catalog/components/ProductGrid";
import { ArrowRight, Sparkles, MessageSquare, FileText } from "lucide-react";
import { Container } from "../layout/Container";
import { SITE_CONFIG } from "@/lib/constants/site";

export const CollectionShowcase: React.FC = () => {
  const {
    categories,
    filterState,
    filteredProducts,
    totalCount,
    setCategory,
    setSearchQuery,
    setSortBy,
    resetFilters,
  } = useCatalogFilter("all");

  return (
    <section className="py-24 bg-white" id="ekspo-koleksi">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Sparkles className="h-3.5 w-3.5" />
              Galeri Ekspo Digital Karya
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
              Ekspo Koleksi Batik FuRi Valentine
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-xl">
              Karya adiluhung persembahan Ibu Indah Turiri. Meliputi motif ikonik Kota Bekasi (Ikan Gabus, Bambu Runcing), batik tulis sutra ATBM, dan pesanan seragam dinas/kantor.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/cara-pemesanan"
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-600/30 bg-amber-50 px-3.5 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors"
            >
              <FileText className="h-3.5 w-3.5 text-amber-700" />
              Panduan Cara Memesan
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                "Halo FuRi Valentine Batik, saya ingin menanyakan katalog lengkap motif khas Bekasi."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Konsultasi WhatsApp
            </a>
          </div>
        </div>

        {/* Notice on Expo Function */}
        <div className="mb-8 rounded-2xl bg-stone-50 border border-stone-200 p-4 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            ℹ️ <strong>Informasi:</strong> Website ini berfungsi sebagai <em>katalog ekspo produk</em>. Setiap karya dapat dipesan satuan maupun partai besar (seragam kantor/keluarga) dengan menekan tombol <strong>Tanya di WhatsApp</strong> pada masing-masing produk.
          </span>
          <Link href="/cara-pemesanan" className="text-amber-800 font-bold hover:underline shrink-0">
            Pelajari Alur Order &rarr;
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="mb-10">
          <CatalogFilter
            categories={categories}
            filterState={filterState}
            onSelectCategory={setCategory}
            onSearchChange={setSearchQuery}
            onSortChange={setSortBy}
            onReset={resetFilters}
            totalCount={totalCount}
          />
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />
      </Container>
    </section>
  );
};
