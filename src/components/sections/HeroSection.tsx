import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { KawungPattern, ParangPattern, CantingIcon } from "@/components/svg";
import { ArrowRight, MessageSquare, MapPin, Sparkles, FileText } from "lucide-react";
import { Container } from "../layout/Container";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#152238] text-white py-20 lg:py-28">
      {/* Background Batik Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <KawungPattern color="#C6923B" opacity={0.5} />
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-5 hidden lg:block">
        <ParangPattern color="#E8C37B" opacity={0.6} />
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md">
            <CantingIcon className="h-4 w-4 text-amber-400" />
            <span>UMKM Kota Bekasi • Pelopor Motif Khas Bekasi Sejak {SITE_CONFIG.foundedYear}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Warisan Seni Batik{" "}
            <span className="text-gold-gradient font-serif">Motif Khas Bekasi</span> &{" "}
            Koleksi Nusantara Adiluhung.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base text-stone-300 leading-relaxed font-light">
            Didirikan oleh Ibu <strong>Indah Turiri</strong> sejak 2007, FuRi Valentine Batik menghadirkan kekayaan identitas Kota Patriot—seperti motif <em>Ikan Gabus, Bambu Runcing, dan Rawa Tembaga</em>—dalam balutan batik tulis sutra dan cap tembaga berkualitas tinggi.
          </p>

          {/* Action CTAs: Focused on Expo, Order Flow, and Fast Contact */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-amber-500 hover:shadow-amber-900/50"
            >
              Lihat Galeri Ekspo Produk
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/cara-pemesanan"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-600 bg-stone-900/60 px-5 py-3.5 text-xs sm:text-sm font-semibold text-stone-200 backdrop-blur-md transition-all hover:bg-stone-800 hover:text-white hover:border-amber-500/40"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              Alur & Panduan Pemesanan
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                "Halo Ibu Indah Turiri / FuRi Valentine Batik, saya ingin bertanya seputar koleksi batik khas Bekasi."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-600/30 px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              Konsultasi WhatsApp
            </a>
          </div>

          {/* Workshop Location Quick Ribbon */}
          <div className="mt-8 flex items-center gap-2 text-xs text-stone-400">
            <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Workshop & Galeri: Jatiranggon, Jatisampurna, Kota Bekasi</span>
            <span className="mx-1">•</span>
            <Link href="/contact" className="text-amber-400 font-semibold underline hover:text-amber-300">
              Lihat Peta & Jam Kunjungan
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-700/60 pt-6 sm:grid-cols-4">
            {SITE_CONFIG.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                  {stat.value}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
