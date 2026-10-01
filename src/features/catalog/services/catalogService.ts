import { BatikCategory, BatikProduct } from "@/types";
import { COLLECTIONS_DATA } from "@/services/data/collections.data";

export class CatalogService {
  /**
   * Mengambil semua koleksi batik
   */
  static getAll(): BatikProduct[] {
    return COLLECTIONS_DATA;
  }

  /**
   * Mengambil produk unggulan (featured)
   */
  static getFeatured(): BatikProduct[] {
    return COLLECTIONS_DATA.filter((item) => item.featured);
  }

  /**
   * Mengambil produk berdasarkan slug
   */
  static getBySlug(slug: string): BatikProduct | undefined {
    return COLLECTIONS_DATA.find((item) => item.slug === slug);
  }

  /**
   * Memfilter dan mengurutkan koleksi
   */
  static filterProducts(options: {
    category?: string;
    searchQuery?: string;
    sortBy?: "featured" | "price-asc" | "price-desc" | "duration";
  }): BatikProduct[] {
    let result = [...COLLECTIONS_DATA];

    // Filter Kategori
    if (options.category && options.category !== "all") {
      result = result.filter((item) => item.category === options.category);
    }

    // Filter Pencarian
    if (options.searchQuery && options.searchQuery.trim() !== "") {
      const q = options.searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.motif.toLowerCase().includes(q) ||
          item.material.toLowerCase().includes(q) ||
          item.origin.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (options.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "duration":
        result.sort((a, b) => b.durationInDays - a.durationInDays);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }

  /**
   * Mengambil kategori yang tersedia
   */
  static getCategories(): { id: BatikCategory; label: string }[] {
    return [
      { id: "all", label: "Semua Mahakarya" },
      { id: "tulis", label: "Batik Tulis Halus" },
      { id: "cap", label: "Batik Cap Presisi" },
      { id: "valentine", label: "Edisi Valentine" },
      { id: "men", label: "Busana Pria" },
      { id: "fabric", label: "Kain Bahan & Sarung" },
    ];
  }
}
