export interface NavItem {
  label: string;
  href: string;
  description?: string;
  highlight?: boolean;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Koleksi Lengkap", href: "/koleksi", description: "Batik Khas Bekasi, Tulis Halus, Cap & Seragam" },
  { label: "Alur Pemesanan", href: "/cara-pemesanan", description: "Panduan Order Satuan & Seragam", highlight: true },
  { label: "Motif Khas Bekasi", href: "/craftsmanship", description: "Filosofi Ikan Gabus, Rawa Tembaga & Bambu" },
  { label: "Profil UMKM", href: "/about", description: "Perjalanan Ibu Indah Turiri Sejak 2007" },
  { label: "Kontak & Workshop", href: "/contact", description: "Lokasi Jatiranggon & WhatsApp Direct" },
];

export const FOOTER_COLLECTIONS: NavItem[] = [
  { label: "Batik Motif Ikan Gabus Bekasi", href: "/koleksi?search=Ikan+Gabus" },
  { label: "Batik Bambu Runcing Patriot", href: "/koleksi?search=Bambu+Runcing" },
  { label: "Batik Tulis Sutra ATBM", href: "/koleksi" },
  { label: "Batik Cap Katun Prima", href: "/koleksi" },
  { label: "Pesanan Seragam Dinas / Kantor", href: "/koleksi" },
];
