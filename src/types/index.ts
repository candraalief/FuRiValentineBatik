export type BatikCategory =
  | "all"
  | "bekasi"
  | "tulis"
  | "cap"
  | "seragam"
  | "kain";

export interface BatikProduct {
  id: string;
  title: string;
  slug: string;
  category: BatikCategory;
  categoryName: string;
  motif: string;
  material: string;
  origin: string;
  estimatedPrice: string;
  durationInDays: number;
  featured: boolean;
  isCustomOrderAvailable: boolean;
  description: string;
  philosophy: string;
  accentColor: string;
  tags: string[];
}

export interface OrderingStep {
  step: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  actionHint: string;
  iconName: string;
}

export interface CraftsmanshipStep {
  step: number;
  title: string;
  subtitle: string;
  javaneseTerm: string;
  description: string;
  highlight: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  orderType?: string;
  collectionInterest: string;
  quantity?: string;
  customRequirements?: string;
  message: string;
}

export interface InquiryFormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
}
