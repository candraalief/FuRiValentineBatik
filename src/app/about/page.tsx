import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { KawungPattern, CantingIcon, HandmadeIcon, SilkIcon } from "@/components/svg";
import { Sparkles, HeartHandshake, Award, Compass } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami — Kisah & Filosofi",
  description:
    "Mengenal dedikasi FuRi Valentine Batik dalam merawat keaslian seni batik tulis dan cap nusantara serta visi membawa warisan budaya ke pentas dunia.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/10 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-900 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            Warisan Sejak Lebih dari Dua Dekade
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Menghidupkan Jiwa Batik Nusantara Dalam Setiap Helaian Benang.
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            FuRi Valentine Batik berakar dari kecintaan keluarga terhadap wastra adiluhung tanah Jawa. Kami meyakini bahwa selembar batik bukan komoditas busana biasa, melainkan media doa, cermin keheningan batin, dan pusaka peradaban bangsa.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl border border-amber-900/15 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-5">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Visi Kami</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Menjadi rumah mode batik adiluhung terkemuka yang diakui dunia atas integritas pakem seni tradisi, orisinalitas karya tangan maestro, serta pelopor keberlanjutan pewarnaan alami di Asia Tenggara.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-900/15 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-5">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Misi Pelestarian</h3>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-800 font-bold">•</span>
                Menjaga keaslian teknik canting malam murni tanpa kompromi cetak sablon pabrik.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-800 font-bold">•</span>
                Memberdayakan ekosistem pembatik perempuan desa dengan sistem upah berkeadilan (Fair Trade).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-800 font-bold">•</span>
                Mendidik generasi muda mengenai filosofi luhur setiap motif batik klasik nusantara.
              </li>
            </ul>
          </div>
        </div>

        {/* Pillars of FuRi Valentine */}
        <div className="rounded-3xl bg-[#152238] text-white p-8 sm:p-14 relative overflow-hidden mb-20">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-96 h-96">
            <KawungPattern color="#C6923B" opacity={0.6} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Prinsip Kehormatan
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              Mengapa Karya FuRi Valentine Istimewa?
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <CantingIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Presisi Tangan Maestro</h4>
                  <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                    Setiap lengkung parang dan titik isen-isen digoreskan dengan napas meditasi oleh pengrajin senior dengan pengalaman puluhan tahun di Solo dan Yogyakarta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <SilkIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Kanvas Sutra & Katun Terbaik</h4>
                  <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                    Hanya menggunakan sutra ATBM tenunan tangan dan katun Primissima grade tertinggi yang telah melalui proses pengetelan alami.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Sertifikat Orisinalitas Bernomor</h4>
                  <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                    Koleksi eksklusif kami tercatat secara resmi dalam arsip galeri untuk menjamin nilai sejarah dan keaslian karya bagi para kolektor.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-amber-500"
              >
                Jadwalkan Kunjungan ke Atelier Kami
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
