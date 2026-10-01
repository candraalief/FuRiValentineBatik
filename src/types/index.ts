export type BatikCategory = "all" | "tulis" | "cap" | "valentine" | "men" | "fabric";

export interface BatikProduct {
  id: string;
  title: string;
  slug: string;
  category: BatikCategory;
  categoryName: string;
  motif: string;
  material: string;
  origin: string;
  price: number;
  durationInDays: number;
  featured: boolean;
  description: string;
  philosophy: string;
  accentColor: string;
  tags: string[];
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
  collectionInterest: string;
  customRequirements?: string;
  message: string;
}

export interface InquiryFormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
}
