import React from "react";
import Link from "next/link";
import { CantingIcon, SilkIcon, EcoDyeIcon } from "@/components/svg";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50/70 border-b border-stone-200/60">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Visual Composition */}
          <div className="relative">
            <div className="relative mx-auto aspect-4/3 max-w-lg rounded-3xl overflow-hidden bg-slate-900 p-8 text-white shadow-2xl border border-amber-900/20">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: "radial-gradient(circle at top right, #c6923b 0%, #152238 75%)",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-400/30">
                    Heritage Atelier
                  </span>
                  <h3 className="mt-4 text-2xl font-serif font-bold text-amber-100">
                    FuRi Valentine Batik
                  </h3>
                  <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                    Didirikan dengan tekad melestarikan pakem motif keraton sembari menyuntikkan keberanian warna kontemporer yang relevan untuk generasi global.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-4 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Prinsip Adiluhung
                  </p>
                  <p className="mt-1 text-xs text-stone-300">
                    &ldquo;Batik bukan sekadar corak di atas kain, melainkan doa, kesabaran, dan cermin budi pekerti pembuatnya.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-white p-4 shadow-xl border border-amber-900/10 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <CantingIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">100% Karya Tangan Maestro</p>
                  <p className="text-[11px] text-stone-500">Bukan cetak mesin / printing tekstil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Tentang FuRi Valentine Batik
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl leading-tight">
                Merawat Warisan Leluhur, Menyulam Keanggunan Masa Depan.
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              FuRi Valentine Batik lahir dari kecintaan mendalam terhadap seni batik tulis tradisional Indonesia. Kami menggabungkan standar ketat pakem motif klasik (seperti Parang, Kawung, dan Truntum) dengan material sutra halus pilihan dan pewarna botani ramah lingkungan.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Keaslian Terverifikasi (Authentic Seal)</h4>
                  <p className="text-xs text-stone-600">Setiap lembar kain disertai sertifikat keaslian dan nomor registrasi pengrajin.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Bahan Sutra ATBM & Katun Berkualitas Tinggi</h4>
                  <p className="text-xs text-stone-600">Tekstur kain lembut berkarakter, jatuh dengan anggun, dan nyaman untuk iklim tropis maupun formal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Pemberdayaan Perempuan Pengrajin Desa</h4>
                  <p className="text-xs text-stone-600">Bekerja sama secara langsung dengan puluhan ibu-ibu pembatik di sentra batik Solo, Jogja, dan Pekalongan.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950 transition-colors"
              >
                Pelajari Kisah Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
