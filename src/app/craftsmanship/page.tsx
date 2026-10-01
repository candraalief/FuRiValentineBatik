import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProcessTimeline } from "@/features/story/components/ProcessTimeline";
import { CantingIcon, EcoDyeIcon, SilkIcon, HandmadeIcon } from "@/components/svg";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keahlian & Proses Adiluhung — Craftsmanship",
  description:
    "Mempelajari seni pembuatan batik tulis tradisional, ritual canting lilin malam, dan pewarnaan botani alami di FuRi Valentine Batik.",
};

export default function CraftsmanshipPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            <CantingIcon className="h-4 w-4 text-amber-700" />
            Seni Murni Wastra Nusantara
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Kisah Kesabaran di Balik Setiap Tetesan Malam Panas.
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Dalam dunia yang serba instan, batik tulis adalah perayaan atas waktu dan meditasi. Setiap garis canting adalah perwujudan ketenangan rasa, ketajaman mata, dan kepiawaian tangan yang diasah seumur hidup.
          </p>
        </div>

        {/* 3 Keunggulan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="rounded-3xl border border-amber-900/15 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-4">
              <CantingIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Canting Nyamplung Tradisional</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Canting dibuat oleh pandai tembaga di lereng Merapi. Bentuk corong tembaga mampu menahan panas lilin malam secara stabil agar ketebalan garis tetap konsisten.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-900/15 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-4">
              <EcoDyeIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Pewarnaan Botani Murni</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Kami memfermentasi daun Indigofera Tinctoria untuk biru bangsawan, serta merebus kulit kayu Tingi dan Soga Jambal. Warna menua dengan anggun seiring waktu.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-900/15 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-4">
              <SilkIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Serat Sutra Pilihan</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Serat kepompong ulat sutra murbei ditenun secara tradisional dengan ATBM menghasilkan kain yang jatuh berwibawa, berkilau lembut, dan nyaman di kulit.
            </p>
          </div>
        </div>

        {/* Process Timeline Section */}
        <div className="rounded-3xl border border-stone-200 bg-stone-50/70 p-6 sm:p-12 mb-20">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Tahapan Komprehensif
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-900">
              Dari Lembaran Putih Menjadi Mahakarya Wastra
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Simak bagaimana tahapan sakral batik tulis FuRi Valentine dikerjakan oleh para maestro secara berurutan.
            </p>
          </div>

          <ProcessTimeline />
        </div>

        {/* Callout */}
        <div className="text-center rounded-3xl bg-[#152238] text-white p-8 sm:p-12">
          <Sparkles className="h-8 w-8 text-amber-400 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl font-bold">Ingin Mengamati Proses Batik Secara Langsung?</h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
            Kami membuka sesi workshop eksklusif dan tur galeri privat bagi tamu VIP dan institusi dengan reservasi terlebih dahulu.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-amber-500"
            >
              Reservasi Sesi Tur Atelier
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
