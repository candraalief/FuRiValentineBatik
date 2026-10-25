"use client";

import React from "react";

interface KoleksiBulkNoticeProps {
  whatsappUrl: string;
}

export const KoleksiBulkNotice: React.FC<KoleksiBulkNoticeProps> = ({ whatsappUrl }) => {
  const bulkWaText = encodeURIComponent(
    "Halo FuRi Valentine Batik, saya ingin berkonsultasi mengenai rencana pemesanan seragam batik bulk / partai besar untuk kantor/sekolah kami. Bisakah dijadwalkan diskusi sampel dan penawaran harga?"
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-[#10233f]/15 bg-gradient-to-r from-[#10233f] to-[#1c355e] p-6 sm:p-8 text-white shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#d8ab5d] border border-white/15">
            <span>🏛️</span> Layanan Seragam Korporat & Sekolah
          </div>
          <h3 className="mt-3 font-serif text-2xl sm:text-3xl text-white leading-tight">
            Membutuhkan Seragam Batik Kantor atau Sekolah?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
            Kami melayani pembuatan seragam batik partai besar mulai dari 20 pcs dengan pilihan motif eksklusif, penyisipan logo instansi, pemilihan jenis bahan (katun prima, dobby, sutra), hingga jahit jadi berbagai ukuran.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/85">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Sampel bahan & proofing motif
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Bisa DP & faktur resmi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Jahit rapi presisi motif
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
          <a
            href={`${whatsappUrl}?text=${bulkWaText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c51f5d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a7194d] active:scale-95 shadow-lg whitespace-nowrap"
          >
            <svg className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
              <path d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
            </svg>
            Konsultasi Pesanan Bulk via WA
          </a>
          <a
            href="/cara-pemesanan"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs sm:text-sm font-medium text-white transition hover:bg-white/20 whitespace-nowrap"
          >
            Pelajari Alur Pemesanan &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
