export type { BatikCategory, BatikProduct } from "@/types";

export interface CatalogFilterState {
  category: string;
  searchQuery: string;
  sortBy: "featured" | "duration";
}
