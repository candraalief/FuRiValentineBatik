export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about", description: "Filosofi & Kisah Warisan FuRi" },
  { label: "Koleksi Batik", href: "/collections", description: "Batik Tulis, Cap & Edisi Valentine" },
  { label: "Keahlian & Proses", href: "/craftsmanship", description: "Canting, Pewarnaan Alami & Pengrajin" },
  { label: "Kontak & Showroom", href: "/contact", description: "Reservasi Kunjungan & Custom Order" },
];

export const FOOTER_COLLECTIONS: NavItem[] = [
  { label: "Batik Tulis Halus Sutra", href: "/collections?category=tulis" },
  { label: "Batik Cap Kontemporer", href: "/collections?category=cap" },
  { label: "Valentine Signature Silk", href: "/collections?category=valentine" },
  { label: "Busana Pria Eksklusif", href: "/collections?category=men" },
  { label: "Kain Sarung & Selendang", href: "/collections?category=fabric" },
];
