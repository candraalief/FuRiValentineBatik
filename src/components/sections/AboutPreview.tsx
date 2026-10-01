import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { CantingIcon, SilkIcon, EcoDyeIcon } from "@/components/svg";
import { ArrowRight, CheckCircle2, MapPin, Award } from "lucide-react";
import { Container } from "../layout/Container";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50/70 border-b border-stone-200/60" id="profil-umkm">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Visual Composition */}
          <div className="relative">
            <div className="relative mx-auto aspect-4/3 max-w-lg rounded-3xl overflow-hidden bg-slate-900 p-8 text-white shadow-2xl border border-amber-900/20">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background: "radial-gradient(circle at top right, #c6923b 0%, #152238 75%)",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-400/30">
                    UMKM Binaan Kota Bekasi Sejak 2007
                  </span>
                  <h3 className="mt-4 text-2xl font-serif font-bold text-amber-100">
                    Ibu Indah Turiri
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium">
                    Pendiri & Perancang Motif FuRi Valentine Batik
                  </p>
                  <p className="mt-3 text-xs text-stone-300 leading-relaxed">
                    Mengawali perjalanan pada 7 Juli 2007 dengan tekad mengangkat nama Kota Bekasi lewat batik. Berkolaborasi dengan perajin sentra Pekalongan dan mengelola galeri di Jatisampurna, Bekasi.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-4 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Filosofi Ibu Indah Turiri
                  </p>
                  <p className="mt-1 text-xs text-stone-300 italic">
                    &ldquo;Bekasi punya sejarah patriotik dan kekayaan alam yang megah. Melalui batik, kami bercerita kepada generasi penerus.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-white p-4 shadow-xl border border-amber-900/10 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Batik Khas Bekasi Resmi</p>
                  <p className="text-[11px] text-stone-500">Motif Ikan Gabus & Bambu Runcing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Profil Pelopor Batik Bekasi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl leading-tight">
                Dedikasi 17 Tahun Merawat Identitas Budaya Kota Patriot.
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Valentine Batik (FuRi Valentine) bermula dari inisiatif Ibu Indah Turiri bersama suami pada tahun 2007. Proses pembuatan pola dan distribusi dilakukan di galeri Bekasi, berpadu dengan sentra produksi pengrajin di Pekalongan untuk menghadirkan kualitas batik terbaik bagi masyarakat dan instansi.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Pelopor Motif Ikonik Bekasi</h4>
                  <p className="text-xs text-stone-600">
                    Mengabadikan ikon Ikan Gabus (kuliner gabus pucung), Monumen Bambu Runcing perjuangan, serta rawa tembaga dalam kain batik bernilai luhur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Mitra Terpercaya Instansi & BUMN</h4>
                  <p className="text-xs text-stone-600">
                    Sering dipercaya pemerintah Kota Bekasi, instansi swasta, dan institusi pendidikan untuk pembuatan seragam batik resmi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Workshop & Galeri Terbuka di Jatisampurna</h4>
                  <p className="text-xs text-stone-600">
                    Koleksi lengkap dapat dilihat langsung di Jalan Transad X No. 1A, Jatiranggon, Bekasi.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950 transition-colors"
              >
                Baca Profil Lengkap
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/cara-pemesanan"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-800 px-4 py-2 text-xs font-bold text-white hover:bg-amber-900 transition-colors"
              >
                Lihat Alur Pemesanan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
