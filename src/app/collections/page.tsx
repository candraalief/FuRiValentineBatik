import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CollectionShowcase } from "@/components/sections/CollectionShowcase";
import { CantingIcon } from "@/components/svg";

export const metadata: Metadata = {
  title: "Koleksi Mahakarya Batik — Tulis, Cap & Valentine Series",
  description:
    "Jelajahi portofolio kain batik tulis sutra ATBM, busana pria modern, selendang, dan edisi spesial Valentine karya FuRi Valentine Batik.",
};

export default function CollectionsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            <CantingIcon className="h-4 w-4 text-amber-700" />
            Galeri Portofolio Lengkap
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Koleksi Batik FuRi Valentine
          </h1>
          <p className="mt-2 text-stone-600 text-sm">
            Setiap helai kain merupakan karya tunggal dengan filosofi mendalam dan waktu pengerjaan manual berminggu-minggu hingga berbulan-bulan.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-20">Memuat galeri koleksi...</div>}>
          <CollectionShowcase />
        </Suspense>
      </Container>
    </div>
  );
}
