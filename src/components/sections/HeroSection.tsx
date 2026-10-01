import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { KawungPattern, ParangPattern, CantingIcon } from "@/components/svg";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "../layout/Container";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#152238] text-white py-20 lg:py-32">
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md">
            <CantingIcon className="h-4 w-4 text-amber-400" />
            <span>Mahakarya Adiluhung • Sentuhan Modern Valentine</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
            Keanggunan Warisan{" "}
            <span className="text-gold-gradient font-serif">Batik Nusantara</span>{" "}
            Berpadu Kemewahan Modern.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed font-light">
            FuRi Valentine Batik merajut filosofi leluhur ke dalam kain sutra dan katun pilihan. Setiap goresan canting dan ketukan cap tembaga dihidupkan oleh tangan-tangan maestro pengrajin terbaik Indonesia.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-amber-500 hover:shadow-amber-900/50"
            >
              Jelajahi Koleksi Batik
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/craftsmanship"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-600 bg-stone-900/60 px-6 py-3.5 text-sm font-semibold text-stone-200 backdrop-blur-md transition-all hover:bg-stone-800 hover:text-white hover:border-amber-500/40"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              Kisah & Filosofi Canting
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-slate-700/60 pt-8 sm:grid-cols-4">
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
