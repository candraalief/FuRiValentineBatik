export type { BatikCategory, BatikProduct } from "@/types";

export interface CatalogFilterState {
  category: string;
  searchQuery: string;
  sortBy: "featured" | "price-asc" | "price-desc" | "duration";
}
