"use client";

import React from "react";
import { FigmaIcon } from "./FigmaIcons";
import { SITE_CONFIG } from "@/lib/constants/site";

export const ConsultationForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const interest = formData.get("interest") || "Batik Custom Satuan";
    const message = formData.get("message") || "";
    const text = `Halo FuRi Valentine Batik, saya ${name}. Saya ingin berkonsultasi mengenai ${interest}. ${message}`;
    window.open(
      `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(text.toString())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      className="rounded-3xl bg-white p-5 text-[#10233f] shadow-2xl sm:p-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">
          Nama Anda
          <input
            className="form-input"
            name="name"
            placeholder="Nama lengkap"
            required
          />
        </label>
        <label className="form-label">
          Nomor WhatsApp
          <input
            className="form-input"
            name="phone"
            type="tel"
            placeholder="08xx xxxx xxxx"
            required
          />
        </label>
      </div>

      <label className="form-label mt-5">
        Kebutuhan
        <select
          className="form-input"
          name="interest"
          defaultValue="Batik Custom Satuan"
        >
          <option>Batik Custom Satuan</option>
          <option>Pesanan Bulk</option>
          <option>Koleksi Busana Jadi</option>
          <option>Kain Bahan</option>
          <option>Reservasi Galeri</option>
        </select>
      </label>

      <label className="form-label mt-5">
        Kebutuhan Anda
        <textarea
          className="form-input min-h-28 resize-none"
          name="message"
          placeholder="Motif, jumlah, dan waktu pemesanan"
        />
      </label>

      <button
        className="button-primary button-large mt-6 w-full"
        type="submit"
      >
        Kirim via WhatsApp <FigmaIcon name="arrow" />
      </button>
    </form>
  );
};
