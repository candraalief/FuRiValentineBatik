import { BatikCategory, BatikProduct } from "@/types";
import { COLLECTIONS_DATA } from "@/services/data/collections.data";

export class CatalogService {
  /**
   * Mengambil semua koleksi ekspo
   */
  static getAll(): BatikProduct[] {
    return COLLECTIONS_DATA;
  }

  /**
   * Mengambil produk unggulan
   */
  static getFeatured(): BatikProduct[] {
    return COLLECTIONS_DATA.filter((item) => item.featured);
  }

  /**
   * Mengambil produk motif khas Bekasi
   */
  static getBekasiMotifs(): BatikProduct[] {
    return COLLECTIONS_DATA.filter((item) => item.category === "bekasi");
  }

  /**
   * Mengambil produk berdasarkan slug
   */
  static getBySlug(slug: string): BatikProduct | undefined {
    return COLLECTIONS_DATA.find((item) => item.slug === slug);
  }

  /**
   * Filter koleksi
   */
  static filterProducts(options: {
    category?: string;
    searchQuery?: string;
    sortBy?: "featured" | "duration";
  }): BatikProduct[] {
    let result = [...COLLECTIONS_DATA];

    if (options.category && options.category !== "all") {
      result = result.filter((item) => item.category === options.category);
    }

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

    if (options.sortBy === "duration") {
      result.sort((a, b) => b.durationInDays - a.durationInDays);
    } else {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }

  /**
   * Kategori ekspo
   */
  static getCategories(): { id: BatikCategory; label: string }[] {
    return [
      { id: "all", label: "Semua Galeri Ekspo" },
      { id: "bekasi", label: "Motif Khas Bekasi ⭐" },
      { id: "tulis", label: "Batik Tulis Halus" },
      { id: "cap", label: "Batik Cap Tradisional" },
      { id: "seragam", label: "Pesanan Seragam Dinas/Kantor" },
      { id: "kain", label: "Kain Sutra & Selendang" },
    ];
  }
}
