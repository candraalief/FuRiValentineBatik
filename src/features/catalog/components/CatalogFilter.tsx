import React from "react";
import { Search, RotateCcw } from "lucide-react";
import { CatalogFilterState } from "../types/catalog.types";

interface CatalogFilterProps {
  categories: { id: string; label: string }[];
  filterState: CatalogFilterState;
  onSelectCategory: (id: string) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (sort: CatalogFilterState["sortBy"]) => void;
  onReset: () => void;
  totalCount: number;
}

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  categories,
  filterState,
  onSelectCategory,
  onSearchChange,
  onSortChange,
  onReset,
  totalCount,
}) => {
  return (
    <div className="space-y-4 rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-sm">
      {/* Baris Atas: Search & Sort */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Cari motif (Ikan Gabus, Bambu Runcing, Rawa Tembaga), bahan, atau seragam..."
            value={filterState.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterState.sortBy}
            onChange={(e) => onSortChange(e.target.value as CatalogFilterState["sortBy"])}
            className="rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:border-amber-600 focus:bg-white focus:outline-none"
          >
            <option value="featured">Pilihan: Koleksi Unggulan</option>
            <option value="duration">Waktu Pembuatan: Paling Teliti</option>
          </select>

          {(filterState.category !== "all" || filterState.searchQuery !== "") && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-stone-100 px-3 py-2 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900"
              title="Reset Filter"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Baris Bawah: Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100">
        {categories.map((cat) => {
          const isActive = filterState.category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? "bg-amber-800 text-white shadow-sm font-semibold"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
        <span className="ml-auto text-xs text-stone-500 font-medium">
          Menampilkan: <strong className="text-amber-900">{totalCount}</strong> karya
        </span>
      </div>
    </div>
  );
};
