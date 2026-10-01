import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CatalogService } from "@/features/catalog/services/catalogService";
import { COLLECTIONS_DATA } from "@/services/data/collections.data";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Container } from "@/components/layout/Container";
import { CantingIcon, KawungPattern } from "@/components/svg";
import {
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  FileText,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COLLECTIONS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = CatalogService.getBySlug(slug);

  if (!product) {
    return { title: "Koleksi Tidak Ditemukan" };
  }

  return {
    title: `${product.title} — Ekspo Batik FuRi Valentine`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = CatalogService.getBySlug(slug);

  if (!product) {
    notFound();
  }

  const waMessage = encodeURIComponent(
    `Halo Ibu Indah Turiri / FuRi Valentine Batik,\n\nSaya melihat karya di website ekspo:\n*${product.title}*\nMotif: ${product.motif}\n\nSaya ingin berkonsultasi mengenai pemesanan motif ini (kain atau busana jadi). Mohon informasi ketersediaan dan panduan selanjutnya. Terima kasih.`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${waMessage}`;

  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-amber-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Galeri Ekspo
          </Link>

          <Link
            href="/cara-pemesanan"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:underline"
          >
            <FileText className="h-3.5 w-3.5" />
            Pelajari Alur Pemesanan
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Visual Showcase (Left Column: 7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-amber-900/15">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: `radial-gradient(circle at 40% 40%, ${product.accentColor} 0%, #0d1524 85%)`,
                }}
              />
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <KawungPattern color="#ffffff" opacity={0.3} />
              </div>

              {/* Watermark Motif Info */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 p-6 backdrop-blur-md border border-white/10 text-white">
                <span className="text-xs uppercase font-medium tracking-wider text-amber-300">
                  Motif Khas Budaya
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                  {product.motif}
                </h2>
                <p className="mt-1 text-xs text-stone-300">{product.origin}</p>
              </div>
            </div>

            {/* Philosophy Box */}
            <div className="mt-8 rounded-3xl border border-amber-900/15 bg-amber-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-3">
                <Sparkles className="h-4 w-4 text-amber-700" />
                <span>Makna & Filosofi Motif</span>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed italic">
                &ldquo;{product.philosophy}&rdquo;
              </p>
              <p className="mt-4 text-xs text-stone-500">
                Setiap goresan motif dirancang untuk mengangkat identitas lokal dan memberi wibawa bagi pemakainya.
              </p>
            </div>
          </div>

          {/* Details & Inquiries (Right Column: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 mb-3">
                  <CantingIcon className="h-3.5 w-3.5 text-amber-700" />
                  {product.categoryName}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                  {product.title}
                </h1>

                <div className="mt-4 rounded-2xl bg-stone-50 border border-stone-200 p-4">
                  <span className="text-[11px] text-stone-500 block">Estimasi Investasi / Biaya:</span>
                  <span className="text-lg font-bold text-amber-900">
                    {product.estimatedPrice}
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    *Harga final menyesuaikan ukuran, jumlah pesanan, dan pilihan furing busana.
                  </span>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Specification Table */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3 text-xs shadow-sm">
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">Bahan Kain</span>
                  <span className="font-semibold text-stone-900">{product.material}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">Pusat Produksi</span>
                  <span className="font-semibold text-stone-900">{product.origin}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">Waktu Pengerjaan Manual</span>
                  <span className="font-semibold text-amber-900 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-amber-700" />
                    {product.durationInDays} Hari Kerja
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-500 font-medium">Pesanan Kustom / Seragam</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Tersedia (Bisa Tambah Logo)
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-stone-100 px-2.5 py-1 text-xs text-stone-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs: WhatsApp & Order Guide */}
            <div className="mt-8 space-y-3 pt-6 border-t border-stone-200">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-800 transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                Konsultasi & Pesan Motif Ini via WhatsApp
              </a>

              <Link
                href="/cara-pemesanan"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-6 py-3 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
              >
                Pelajari 5 Tahapan Alur Pemesanan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
