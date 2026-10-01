import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { KawungPattern, CantingIcon, SilkIcon } from "@/components/svg";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Sparkles, Award, Compass, MapPin, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profil UMKM FuRi Valentine Batik — Sejarah & Dedikasi Ibu Indah Turiri",
  description:
    "Kisah perjalanan UMKM FuRi Valentine Batik (Valentine Batik) sejak 7 Juli 2007 di Kota Bekasi, pelopor motif khas Ikan Gabus dan Bambu Runcing.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-900/10 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-900 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            UMKM Kota Bekasi • Berdiri Sejak 7 Juli 2007
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Perjalanan Merajut Kebanggaan Batik Khas Kota Patriot
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Didirikan oleh <strong>Ibu Indah Turiri</strong> di kawasan Jatiranggon, Jatisampurna, FuRi Valentine Batik lahir dari tekad agar Kota Bekasi memiliki identitas wastra yang bermartabat dan diakui secara nasional.
          </p>
        </div>

        {/* Founder Story Card */}
        <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-square rounded-2xl bg-slate-900 p-8 text-white relative overflow-hidden flex flex-col justify-between border border-amber-900/20">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: "radial-gradient(circle at top left, #c6923b 0%, #152238 75%)",
                  }}
                />
                <div className="relative z-10">
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">
                    Founder Spotlight
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-amber-100 mt-4">
                    Indah Turiri
                  </h3>
                  <p className="text-xs text-amber-300/80">Owner & Perancang Motif</p>
                </div>
                <div className="relative z-10 rounded-xl bg-black/40 p-4 border border-white/10 text-xs text-stone-300 italic">
                  &ldquo;Kami memadukan kekuatan produksi sentra Pekalongan dengan perancangan motif khas Bekasi dan galeri di Jatiranggon.&rdquo;
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Kilas Balik Sejarah
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                Dari Pekalongan ke Galeri Jatiranggon Bekasi
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Usaha ini didirikan pada 7 Juli 2007 melalui sinergi harmonis suami-istri. Suami Ibu Indah Turiri yang berakar dari keluarga pembatik tradisional di Pekalongan mengelola teknik produksi pembatikan (canting tulis dan cap tembaga), sedangkan Ibu Indah Turiri mengelola perancangan motif, finishing, pemasaran, dan interaksi konsumen di Kota Bekasi.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Kiprah Valentine Batik aktif dalam membangkitkan ekonomi kreatif lokal Kota Bekasi, sering berpartisipasi dalam pameran UMKM Kota Patriot, serta menjadi rujukan seragam batik resmi dinas pemerintahan dan perusahaan.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/cara-pemesanan"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-amber-900 transition-colors"
                >
                  Pelajari Alur Pemesanan
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-5 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-amber-700" />
                  Kunjungi Workshop Bekasi
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-5">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Visi</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Menjadikan batik motif khas Kota Bekasi sebagai kebanggaan budaya nusantara yang elegan, bermartabat, dan diminati oleh berbagai kalangan di tingkat daerah, nasional, hingga internasional.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-5">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Misi</h3>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-800 font-bold">•</span>
                Mengembangkan motif ikonik berbasis sejarah lokal (Ikan Gabus, Bambu Runcing, Rawa Tembaga).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-800 font-bold">•</span>
                Menyediakan kemudahan pemesanan seragam batik untuk kantor dinas, sekolah, dan hajatan keluarga.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-800 font-bold">•</span>
                Menjaga standar mutu pengerjaan batik cap dan canting tulis halus asli bukan printing mesin.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
