export type TechniqueType = "Tulis Halus" | "Cap Tembaga" | "Kombinasi" | "Printing Berkualitas";

export type AvailabilityFilter = "all" | "ready" | "bulk";

export type SortOption = "featured" | "newest" | "title";

export interface KoleksiItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  motif: string;
  material: string;
  technique: TechniqueType;
  origin: string;
  estimatedPrice: string;
  durationInDays?: number;
  image: string;
  description: string;
  philosophy?: string;
  isReadyStock: boolean;
  isBulkAvailable: boolean;
  minOrder?: number;
  featured?: boolean;
  createdAt: string;
  tags: string[];
}

export interface KoleksiFilterQuery {
  category?: string;
  search?: string;
  technique?: string;
  availability?: AvailabilityFilter;
  sortBy?: SortOption;
}
