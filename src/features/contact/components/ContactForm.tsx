"use client";

import React from "react";
import { useInquiryForm } from "../hooks/useInquiryForm";
import { Send, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const { formData, formState, handleChange, handleSubmit, openWhatsAppDirect } =
    useInquiryForm();

  return (
    <div className="rounded-2xl border border-amber-900/15 bg-white p-6 shadow-lg sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-stone-900">Reservasi & Konsultasi Motif</h3>
        <p className="mt-1 text-sm text-stone-600">
          Tertarik dengan motif tertentu atau ingin memesan batik kustom untuk momen istimewa? Hubungi kami.
        </p>
      </div>

      {formState.status === "success" && (
        <div className="mb-6 flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Inquiry Berhasil Terkirim</p>
            <p className="mt-0.5">{formState.message}</p>
          </div>
        </div>
      )}

      {formState.status === "error" && formState.message && (
        <div className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Perhatian</p>
            <p className="mt-0.5">{formState.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
            Nama Lengkap *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Contoh: Raden Ayu Sekar"
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          {formState.errors?.fullName && (
            <p className="mt-1 text-xs text-red-600">{formState.errors.fullName}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@domain.com"
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
            {formState.errors?.email && (
              <p className="mt-1 text-xs text-red-600">{formState.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Nomor WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="081234567890"
              className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
            {formState.errors?.phone && (
              <p className="mt-1 text-xs text-red-600">{formState.errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
            Kategori Minat Koleksi
          </label>
          <select
            name="collectionInterest"
            value={formData.collectionInterest}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="Batik Tulis Halus Sutra">Batik Tulis Halus Sutra</option>
            <option value="Valentine Special Edition">Valentine Special Edition</option>
            <option value="Batik Cap Kontemporer">Batik Cap Kontemporer</option>
            <option value="Kemeja Pria Eksklusif (Bespoke)">Kemeja Pria Eksklusif (Bespoke)</option>
            <option value="Seragam Korporasi / Wedding Package">Seragam Korporasi / Wedding Package</option>
            <option value="Kain Sarung & Koleksi Antik">Kain Sarung & Koleksi Antik</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
            Catatan atau Pertanyaan *
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tuliskan ukuran, motif yang diinginkan, atau pertanyaan terkait pengiriman..."
            className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          {formState.errors?.message && (
            <p className="mt-1 text-xs text-red-600">{formState.errors.message}</p>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={formState.status === "loading"}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-900 hover:shadow-lg disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {formState.status === "loading" ? "Mengirim..." : "Kirim Formulir Inquiry"}
          </button>

          <button
            type="button"
            onClick={openWhatsAppDirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
          >
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            Hubungi via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};
