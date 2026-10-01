"use client";

import { useState } from "react";
import { InquiryFormData, InquiryFormState } from "@/types";
import { validateInquiryForm } from "@/lib/validations/contact.schema";
import { ContactService } from "../services/contactService";

const initialFormData: InquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  collectionInterest: "Batik Tulis Halus Sutra",
  customRequirements: "",
  message: "",
};

export function useInquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [formState, setFormState] = useState<InquiryFormState>({
    status: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Hapus error field saat user mengetik
    if (formState.errors?.[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setFormState({
        status: "error",
        errors: validation.errors,
        message: "Mohon lengkapi formulir dengan benar.",
      });
      return;
    }

    setFormState({ status: "loading" });

    try {
      const response = await ContactService.submitInquiry(formData);
      if (response.success) {
        setFormState({
          status: "success",
          message: response.message,
        });
        setFormData(initialFormData);
      }
    } catch {
      setFormState({
        status: "error",
        message: "Terjadi kendala saat mengirimkan pesan. Silakan coba kembali atau hubungi via WhatsApp.",
      });
    }
  };

  const openWhatsAppDirect = () => {
    const url = ContactService.generateWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return {
    formData,
    formState,
    handleChange,
    handleSubmit,
    openWhatsAppDirect,
  };
}
