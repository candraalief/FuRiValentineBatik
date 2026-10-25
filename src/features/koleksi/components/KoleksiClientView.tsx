"use client";

import React, { useCallback, useEffect, useState, useTransition } from "react";
import { AvailabilityFilter, KoleksiFilterQuery, KoleksiItem, SortOption } from "../types/koleksi.types";
import { KoleksiService } from "../services/koleksiService";
import { KoleksiHeader } from "./KoleksiHeader";
import { KoleksiFilterBar } from "./KoleksiFilterBar";
import { KoleksiCard } from "./KoleksiCard";
import { KoleksiLightbox } from "./KoleksiLightbox";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

interface KoleksiClientViewProps {
  initialItems: KoleksiItem[];
  categories: readonly string[];
  whatsappUrl: string;
}

export const KoleksiClientView: React.FC<KoleksiClientViewProps> = ({
  initialItems,
  categories,
  whatsappUrl,
}) => {
  const [items, setItems] = useState<KoleksiItem[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");
  const [isPending, startTransition] = useTransition();

  // Lightbox Modal State
  const [activeItem, setActiveItem] = useState<KoleksiItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Modular Data Fetching via KoleksiService (DB-Ready Architecture)
  const fetchFilteredData = useCallback(() => {
    startTransition(async () => {
      const query: KoleksiFilterQuery = {
        category: selectedCategory,
        search: searchQuery,
        sortBy,
        availability,
      };
      const result = await KoleksiService.getAll(query);
      setItems(result);
    });
  }, [selectedCategory, searchQuery, sortBy, availability]);

  useEffect(() => {
    fetchFilteredData();
  }, [fetchFilteredData]);

  // Open Lightbox
  const handleOpenZoom = (item: KoleksiItem) => {
    setActiveItem(item);
    requestAnimationFrame(() => {
      setIsLightboxOpen(true);
    });
  };

  // Close Lightbox
  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => {
      setActiveItem(null);
    }, 280);
  };

  // Lightbox Navigation
  const handlePrevItem = () => {
    if (!activeItem || items.length <= 1) return;
    const currentIndex = items.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex - 1 + items.length) % items.length;
    setActiveItem(items[nextIndex]);
  };

  const handleNextItem = () => {
    if (!activeItem || items.length <= 1) return;
    const currentIndex = items.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % items.length;
    setActiveItem(items[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f1f7ff] to-[#d9eaff] text-[#10233f]">
      {/* Header & Nav */}
      <KoleksiHeader whatsappUrl={whatsappUrl} />

      <main className="mx-auto max-w-7xl px-5 py-8 sm:py-10 lg:px-10 pb-28 md:pb-12">
        {/* Filter Bar with AERIS Underline Tabs */}
        <div className="mb-8">
          <KoleksiFilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            availability={availability}
            onAvailabilityChange={setAvailability}
            totalCount={items.length}
          />
        </div>

        {/* Product Grid */}
        {isPending ? (
          <div className="py-20 text-center text-[#52627a]">
            <div className="inline-block size-8 animate-spin rounded-full border-2 border-[#c51f5d] border-t-transparent mb-3" />
            <p className="text-sm">Memperbarui daftar koleksi...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-[#10233f]/10 bg-white/70 p-10 text-center sm:p-14">
            <h3 className="font-serif text-2xl text-[#10233f]">Koleksi Tidak Ditemukan</h3>
            <p className="mt-2 text-sm text-[#52627a] max-w-md mx-auto">
              Tidak ada produk yang cocok dengan kriteria pencarian &ldquo;{searchQuery}&rdquo; di kategori &ldquo;{selectedCategory}&rdquo;.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSearchQuery("");
                  setAvailability("all");
                }}
                className="button-outline"
              >
                Reset Semua Filter
              </button>
              <a
                href={`${whatsappUrl}?text=${encodeURIComponent(
                  `Halo FuRi Valentine Batik, saya mencari batik untuk kebutuhan khusus (${searchQuery || selectedCategory}). Apakah ada pilihan motif lain di workshop?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Tanya Motif Khusus via WA
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <KoleksiCard
                key={item.id}
                item={item}
                onOpenZoom={() => handleOpenZoom(item)}
                whatsappUrl={whatsappUrl}
              />
            ))}
          </div>
        )}
      </main>

      {/* Lightbox Zoom Modal */}
      <KoleksiLightbox
        item={activeItem}
        items={items}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onPrev={handlePrevItem}
        onNext={handleNextItem}
        whatsappUrl={whatsappUrl}
      />

      {/* Footer */}
      <footer className="mt-20 border-t border-[#10233f]/10 bg-[#0b172a] py-8 pb-28 md:pb-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm sm:flex-row sm:text-left lg:px-10">
          <div className="flex items-center gap-3 text-white">
            <span className="font-serif text-2xl">FuRi Valentine</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-xs uppercase tracking-widest text-[#d8ab5d]">Katalog Lengkap</span>
          </div>
          <p>© 2025 FuRi Valentine Batik. Semua motif orisinal dilindungi hak cipta.</p>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomBar whatsappUrl={whatsappUrl} />
    </div>
  );
};
