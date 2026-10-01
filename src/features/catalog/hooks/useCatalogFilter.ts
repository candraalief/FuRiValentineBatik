"use client";

import { useState, useMemo } from "react";
import { CatalogService } from "../services/catalogService";
import { useDebounce } from "@/hooks/useDebounce";
import { CatalogFilterState } from "../types/catalog.types";

export function useCatalogFilter(initialCategory = "all") {
  const [filterState, setFilterState] = useState<CatalogFilterState>({
    category: initialCategory,
    searchQuery: "",
    sortBy: "featured",
  });

  const debouncedSearch = useDebounce(filterState.searchQuery, 250);

  const categories = useMemo(() => CatalogService.getCategories(), []);

  const filteredProducts = useMemo(() => {
    return CatalogService.filterProducts({
      category: filterState.category,
      searchQuery: debouncedSearch,
      sortBy: filterState.sortBy,
    });
  }, [filterState.category, debouncedSearch, filterState.sortBy]);

  const setCategory = (category: string) => {
    setFilterState((prev) => ({ ...prev, category }));
  };

  const setSearchQuery = (searchQuery: string) => {
    setFilterState((prev) => ({ ...prev, searchQuery }));
  };

  const setSortBy = (sortBy: CatalogFilterState["sortBy"]) => {
    setFilterState((prev) => ({ ...prev, sortBy }));
  };

  const resetFilters = () => {
    setFilterState({
      category: "all",
      searchQuery: "",
      sortBy: "featured",
    });
  };

  return {
    categories,
    filterState,
    filteredProducts,
    totalCount: filteredProducts.length,
    setCategory,
    setSearchQuery,
    setSortBy,
    resetFilters,
  };
}
