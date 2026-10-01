import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Container } from "../layout/Container";
import { Sparkles, ArrowRight, ShieldCheck, Compass } from "lucide-react";
import { CantingIcon } from "@/components/svg";

export const BekasiMotifsSection: React.FC = () => {
  return (
    <section className="py-20 bg-amber-50/40 border-b border-amber-900/10" id="motif-bekasi">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            Identitas Budaya Kota Patriot
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
            Ragam Motif Batik Khas Kota Bekasi
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
            Sejak 2007, FuRi Valentine Batik menjadi salah satu pelopor yang mengabadikan sejarah, kearifan lokal, dan lanskap alam Kota Bekasi ke dalam kain batik bernilai seni tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.bekasiMotifs.map((motif, idx) => (
            <div
              key={motif.name}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:border-amber-700/30 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <CantingIcon className="h-4 w-4 text-amber-700" />
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-2">
                  {motif.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {motif.symbol}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-3 mt-auto">
                <Link
                  href="/collections?category=bekasi"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
                >
                  Lihat Karya Terkait
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
