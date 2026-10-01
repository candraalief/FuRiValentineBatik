import React from "react";
import Link from "next/link";
import { BatikProduct } from "@/types";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Clock, MapPin, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { CantingIcon } from "@/components/svg";

interface ProductCardProps {
  product: BatikProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const waMessage = encodeURIComponent(
    `Halo Ibu Indah Turiri / FuRi Valentine Batik Bekasi,\n\nSaya tertarik dengan karya di katalog ekspo Anda:\n*${product.title}*\nMotif: ${product.motif}\n\nBisakah saya berkonsultasi mengenai ketersediaan atau pemesanan batik ini? Terima kasih.`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${waMessage}`;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-700/40 hover:shadow-xl">
      {/* Visual Canvas Representation */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-85 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${product.accentColor} 0%, #0d1524 85%)`,
          }}
        />
        {/* Subtle texture grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md border border-amber-500/25">
            <CantingIcon className="h-3.5 w-3.5 text-amber-400" />
            {product.categoryName}
          </span>
          {product.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-600/90 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
              Unggulan Bekasi
            </span>
          )}
        </div>

        {/* Motif Label Overlay */}
        <div className="absolute inset-x-3.5 bottom-3.5 rounded-xl bg-slate-950/70 p-3.5 backdrop-blur-md border border-white/10 text-white">
          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
            Motif Filosofis
          </span>
          <p className="text-sm font-bold truncate text-white mt-0.5">{product.motif}</p>
        </div>
      </div>

      {/* Body Info */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-stone-500">
          <MapPin className="h-3.5 w-3.5 text-amber-700 shrink-0" />
          <span className="truncate">{product.origin}</span>
        </div>

        <h3 className="mb-2 text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
          {product.title}
        </h3>

        <p className="mb-4 text-xs text-stone-600 leading-relaxed line-clamp-2">
          {product.philosophy}
        </p>

        {/* Material & Duration Badges */}
        <div className="mb-4 space-y-1.5 rounded-xl bg-stone-50 border border-stone-100 p-2.5 text-xs text-stone-600">
          <div className="flex justify-between">
            <span className="text-stone-400">Bahan:</span>
            <span className="font-medium text-stone-800 truncate ml-2">{product.material}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-400">Pengerjaan:</span>
            <span className="font-semibold text-amber-900 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {product.durationInDays} hari manual
            </span>
          </div>
        </div>

        {/* Actions (Focus on Easy Contact & Order Understanding) */}
        <div className="mt-auto space-y-2 pt-3 border-t border-stone-100">
          {/* Direct WhatsApp Consultation */}
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-emerald-800 shadow-sm"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Tanya Motif Ini di WhatsApp
          </a>

          {/* View Details / Philosophy */}
          <Link
            href={`/collections/${product.slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-xs font-semibold text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            Lihat Makna & Detail
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
