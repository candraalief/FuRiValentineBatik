import React from "react";
import Link from "next/link";
import { CantingIcon, EcoDyeIcon, HandmadeIcon, SilkIcon } from "@/components/svg";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { ProcessTimeline } from "@/features/story/components/ProcessTimeline";

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#152238] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Seni & Tradisi Adiluhung
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl leading-tight">
            Perjalanan Panjang Melahirkan Satu Lembar Batik Tulis.
          </h2>
          <p className="mt-4 text-stone-300 text-sm leading-relaxed">
            Tidak ada jalan pintas untuk keindahan sejati. Dibutuhkan ketekunan hingga 90 hari, ritual doa pembatik, serta dedikasi tanpa cela untuk merampungkan selembar kain batik FuRi Valentine.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <CantingIcon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Canting Tembaga Murni</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Ditempa oleh pandai tembaga tradisional untuk menghasilkan cucuk presisi berdiameter 0.3mm hingga 0.8mm.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <EcoDyeIcon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Ekstrak Botani Alami</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Memanfaatkan fermentasi Indigofera, kulit kayu Mahoni, Soga Jambal, dan tingi untuk warna tanah yang mendalam.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <SilkIcon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Sutra Tenun ATBM</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Ditenun manual helai demi helai menggunakan Alat Tenun Bukan Mesin (ATBM) menghasilkan kilau alami yang mewah.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <HandmadeIcon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">100% Buatan Tangan</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Bebas dari cetakan mesin sablon tekstil. Menjaga ruh dan nilai investasi karya seni adiluhung nusantara.
            </p>
          </div>
        </div>

        {/* Process Timeline Component */}
        <div className="rounded-3xl border border-slate-700/50 bg-[#0e1726]/80 p-8 sm:p-12">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-white">5 Tahap Sakral Pembuatan Batik</h3>
            <p className="mt-2 text-xs text-stone-400">
              Urutan proses tradisi yang diwariskan dari generasi ke generasi oleh leluhur tanah Jawa.
            </p>
          </div>

          <ProcessTimeline />

          <div className="mt-12 text-center">
            <Link
              href="/craftsmanship"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-amber-500"
            >
              Baca Selengkapnya Tentang Proses & Pengrajin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
