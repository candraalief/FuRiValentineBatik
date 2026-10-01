"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Send, MessageSquare, CheckCircle2, AlertCircle, Phone } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    orderType: "seragam-kantor",
    collectionInterest: "Motif Khas Bekasi (Ikan Gabus / Bambu Runcing)",
    quantity: "20-50 potong",
    message: "",
  });

  const [formState, setFormState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({
    status: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      setFormState({
        status: "error",
        message: "Mohon isi Nama Lengkap dan Nomor WhatsApp Anda.",
      });
      return;
    }

    setFormState({ status: "loading" });

    // Format WhatsApp message automatically
    const text = `Halo Ibu Indah Turiri / FuRi Valentine Batik,\n\nSaya ingin berkonsultasi mengenai pemesanan batik:\n*Nama:* ${formData.fullName}\n*No. HP/WA:* ${formData.phone}\n*Email:* ${formData.email || "-"}\n*Kategori Order:* ${formData.orderType}\n*Minat Motif:* ${formData.collectionInterest}\n*Estimasi Jumlah:* ${formData.quantity}\n*Catatan/Kebutuhan:* ${formData.message || "Mohon info katalog & estimasi harga."}\n\nTerima kasih.`;

    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;

    setFormState({
      status: "success",
      message: "Data tersimpan! Kami akan mengarahkan Anda ke WhatsApp Concierge untuk percakapan langsung.",
    });

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 600);
  };

  const openDirectWA = () => {
    const defaultText = `Halo Ibu Indah Turiri / FuRi Valentine Batik Bekasi, saya ingin berkonsultasi mengenai pemesanan batik.`;
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(defaultText)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-stone-900">
          Formulir Konsultasi & Pemesanan Batik
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-stone-600">
          Isi kebutuhan Anda di bawah ini untuk konsultasi motif khas Bekasi, seragam instansi, atau pesanan khusus.
        </p>
      </div>

      {formState.status === "success" && (
        <div className="mb-6 flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">Menghubungkan ke WhatsApp...</p>
            <p className="mt-0.5">{formState.message}</p>
          </div>
        </div>
      )}

      {formState.status === "error" && formState.message && (
        <div className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">Perhatian</p>
            <p className="mt-0.5">{formState.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Nama Lengkap *
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Contoh: Ibu Rina / Bpk. Bambang"
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Nomor WhatsApp / HP *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="0812xxxxxxxx"
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Tipe Pesanan
            </label>
            <select
              name="orderType"
              value={formData.orderType}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:bg-white focus:outline-none"
            >
              <option value="seragam-kantor">Seragam Kantor / Instansi Dinas</option>
              <option value="seragam-keluarga">Seragam Pernikahan / Hajatan Keluarga</option>
              <option value="satuan-koleksi">Pesanan Satuan / Koleksi Pribadi</option>
              <option value="kustom-motif-bekasi">Kustom Motif Khas Bekasi Baru</option>
              <option value="kain-meteran">Kain Bahan / Sarung Lembaran</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Estimasi Jumlah
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:bg-white focus:outline-none"
            >
              <option value="1-5 potong">1 - 5 Potong (Satuan / Kolektor)</option>
              <option value="10-25 potong">10 - 25 Potong (Keluarga / Divisi)</option>
              <option value="30-100 potong">30 - 100 Potong (Kantor / Sekolah)</option>
              <option value=">100 potong">&gt; 100 Potong (Pengadaan Skala Besar)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Minat Motif atau Desain
          </label>
          <input
            type="text"
            name="collectionInterest"
            value={formData.collectionInterest}
            onChange={handleChange}
            placeholder="Misal: Motif Ikan Gabus, Bambu Runcing, Rawa Tembaga, atau motif logo sendiri"
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
            Catatan Tambahan atau Pertanyaan
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tuliskan tanggal pemakaian yang diharapkan, preferensi bahan, atau pertanyaan seputar survei bahan..."
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={formState.status === "loading"}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-800 px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-amber-900 transition-all disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {formState.status === "loading" ? "Memproses..." : "Kirim Form & Lanjut ke WhatsApp"}
          </button>

          <button
            type="button"
            onClick={openDirectWA}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-5 py-3.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            Chat WA Langsung
          </button>
        </div>
      </form>
    </div>
  );
};
