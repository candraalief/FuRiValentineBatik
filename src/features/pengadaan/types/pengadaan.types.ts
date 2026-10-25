export type PengadaanCategoryKey = "kantor" | "sekolah" | "custom";

export interface PengadaanTestimonial {
  name: string;
  role: string;
  institution: string;
  avatarText: string;
  rating: number;
  quote: string;
  projectScope: string;
  verifiedBadge: string;
}

export interface PengadaanHighlights {
  moq: string;
  material: string;
  duration: string;
  guarantee: string;
}

export interface PengadaanGalleryItem {
  url: string;
  caption: string;
  tag: string;
  stepNumber?: number;
  stepTitle?: string;
  stepSubtitle?: string;
}

export interface PengadaanItem {
  id: PengadaanCategoryKey;
  categoryName: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: "building" | "users" | "palette";
  heroImage: string;
  description: string;
  gallery: PengadaanGalleryItem[];
  testimonial: PengadaanTestimonial;
  highlights: PengadaanHighlights;
  features: string[];
  waMessage: string;
}
