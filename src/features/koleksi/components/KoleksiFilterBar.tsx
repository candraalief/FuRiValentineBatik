"use client";

import React from "react";
import { AvailabilityFilter, SortOption } from "../types/koleksi.types";

interface KoleksiFilterBarProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  availability: AvailabilityFilter;
  onAvailabilityChange: (av: AvailabilityFilter) => void;
  totalCount: number;
}

export const KoleksiFilterBar: React.FC<KoleksiFilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  availability,
  onAvailabilityChange,
  totalCount,
}) => {
  return (
    <div className="space-y-6">
      {/* Category Tabs (AERIS underline style) */}
      <div className="flex items-center justify-center border-b border-[#10233f]/10">
        <div
          role="tablist"
          aria-label="Kategori Koleksi Batik"
          className="flex gap-2 overflow-x-auto pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(category)}
                className={`relative whitespace-nowrap px-4 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f5d] ${
                  isActive
                    ? "text-[#10233f] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#10233f]"
                    : "text-[#52627a] hover:text-[#10233f]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search, Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#52627a]">
            <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari motif, kemeja, sutra, seragam..."
            className="w-full rounded-full border border-[#10233f]/15 bg-white py-2 pl-10 pr-4 text-xs sm:text-sm text-[#10233f] placeholder-[#52627a]/70 transition focus:border-[#c51f5d] focus:outline-none focus:ring-2 focus:ring-[#c51f5d]/10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Hapus kata kunci pencarian"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-[#52627a] hover:text-[#10233f]"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filters Group: Availability & Sort */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Availability Pills */}
          <div className="flex items-center rounded-full border border-[#10233f]/15 bg-white/70 p-1">
            <button
              type="button"
              onClick={() => onAvailabilityChange("all")}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                availability === "all" ? "bg-[#10233f] text-white shadow-xs" : "text-[#52627a] hover:text-[#10233f]"
              }`}
            >
              Semua
            </button>
            <button
              type="button"
              onClick={() => onAvailabilityChange("ready")}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                availability === "ready" ? "bg-[#10233f] text-white shadow-xs" : "text-[#52627a] hover:text-[#10233f]"
              }`}
            >
              Ready Stock
            </button>
            <button
              type="button"
              onClick={() => onAvailabilityChange("bulk")}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                availability === "bulk" ? "bg-[#10233f] text-white shadow-xs" : "text-[#52627a] hover:text-[#10233f]"
              }`}
            >
              Bisa Bulk Order
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 text-[#52627a]">
            <span>Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="rounded-lg border border-[#10233f]/15 bg-white px-2.5 py-1.5 text-xs text-[#10233f] focus:border-[#c51f5d] focus:outline-none"
            >
              <option value="featured">Unggulan</option>
              <option value="newest">Terbaru</option>
              <option value="title">Nama (A-Z)</option>
            </select>
          </div>

          {/* Counter Tag */}
          <span className="text-xs font-medium text-[#52627a] ml-auto md:ml-2">
            ({totalCount} koleksi)
          </span>
        </div>
      </div>
    </div>
  );
};
