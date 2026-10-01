import { InquiryFormData } from "@/types";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = "Nama lengkap minimal 3 karakter.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Format email tidak valid.";
  }

  const phoneRegex = /^[0-9+\s\-]{9,15}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.phone = "Nomor WhatsApp/telepon tidak valid (minimal 9 digit).";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Pesan atau detail inquiry minimal 10 karakter.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
