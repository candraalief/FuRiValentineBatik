import { KoleksiFilterQuery, KoleksiItem } from "../types/koleksi.types";
import { KOLEKSI_CATEGORIES, SEED_KOLEKSI_ITEMS } from "./koleksiSeed.data";

/**
 * KoleksiService — Modular Service Layer untuk Portofolio Batik
 *
 * ARSITEKTUR DB-READY:
 * Fungsi-fungsi di sini sengaja dibuat asinkron (Promise) agar ketika Anda
 * mengintegrasikan database backend (Prisma, Supabase, PostgreSQL, MongoDB, dsb),
 * Anda HANYA perlu mengganti kode implementasi di dalam method ini
 * tanpa perlu mengubah satupun komponen UI atau halaman utama.
 */
export class KoleksiService {
  /**
   * Mengambil semua koleksi dengan dukungan filtering, searching, dan sorting
   */
  static async getAll(filter?: KoleksiFilterQuery): Promise<KoleksiItem[]> {
    // Simulasi async I/O database
    let items = [...SEED_KOLEKSI_ITEMS];

    if (!filter) return items;

    // Filter Kategori
    if (filter.category && filter.category !== "Semua") {
      items = items.filter((item) => item.category === filter.category);
    }

    // Filter Teknik Batik
    if (filter.technique && filter.technique !== "all") {
      items = items.filter((item) => item.technique === filter.technique);
    }

    // Filter Ketersediaan (Ready Stock vs Bulk Order)
    if (filter.availability && filter.availability !== "all") {
      if (filter.availability === "ready") {
        items = items.filter((item) => item.isReadyStock);
      } else if (filter.availability === "bulk") {
        items = items.filter((item) => item.isBulkAvailable);
      }
    }

    // Live Search Text Query
    if (filter.search && filter.search.trim() !== "") {
      const q = filter.search.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.motif.toLowerCase().includes(q) ||
          item.material.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.philosophy && item.philosophy.toLowerCase().includes(q)) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (filter.sortBy === "newest") {
      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (filter.sortBy === "title") {
      items.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default: Featured first
      items.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return items;
  }

  /**
   * Mengambil satu produk berdasarkan slug
   */
  static async getBySlug(slug: string): Promise<KoleksiItem | null> {
    const item = SEED_KOLEKSI_ITEMS.find((it) => it.slug === slug);
    return item || null;
  }

  /**
   * Mengambil daftar seluruh kategori koleksi
   */
  static async getCategories(): Promise<readonly string[]> {
    return KOLEKSI_CATEGORIES;
  }

  /**
   * Mengambil item terkait berdasarkan kategori
   */
  static async getRelated(currentSlug: string, category: string, limit = 4): Promise<KoleksiItem[]> {
    return SEED_KOLEKSI_ITEMS
      .filter((it) => it.slug !== currentSlug && it.category === category)
      .slice(0, limit);
  }
}
