"use client";

import React from "react";
import Link from "next/link";
import { useCatalogFilter } from "@/features/catalog/hooks/useCatalogFilter";
import { CatalogFilter } from "@/features/catalog/components/CatalogFilter";
import { ProductGrid } from "@/features/catalog/components/ProductGrid";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../layout/Container";

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
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Sparkles className="h-3.5 w-3.5" />
              Galeri Karya Adiluhung
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
              Koleksi Unggulan FuRi Valentine
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-xl">
              Pilihan mahakarya batik tulis, edisi khusus Valentine, busana pria elegan, dan batik cap berkelas tinggi.
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-xs font-bold text-stone-800 transition-all hover:bg-stone-100 hover:border-amber-600"
          >
            Lihat Seluruh Katalog
            <ArrowRight className="h-4 w-4" />
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
