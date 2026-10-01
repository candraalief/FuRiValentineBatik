import React from "react";
import Link from "next/link";
import { BatikProduct } from "@/types";
import { formatIDR } from "@/lib/utils";
import { Clock, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { CantingIcon } from "@/components/svg";

interface ProductCardProps {
  product: BatikProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-900/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-700/40 hover:shadow-xl">
      {/* Visual Header / Motif Representation Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${product.accentColor} 0%, #152238 80%)`,
          }}
        />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur-md border border-amber-500/20">
            <CantingIcon className="h-3.5 w-3.5 text-amber-400" />
            {product.categoryName}
          </span>
          {product.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-600/90 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
              Unggulan
            </span>
          )}
        </div>

        {/* Inner Motif Accent Card */}
        <div className="absolute inset-x-4 bottom-4 rounded-xl bg-slate-950/60 p-3 backdrop-blur-md border border-white/10 text-white">
          <p className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">
            Motif Filosofis
          </p>
          <p className="text-sm font-semibold truncate text-white">{product.motif}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-stone-500">
          <MapPin className="h-3.5 w-3.5 text-amber-700" />
          <span>{product.origin}</span>
          <span className="mx-1.5">•</span>
          <Clock className="h-3.5 w-3.5 text-amber-700" />
          <span>{product.durationInDays} hari pengerjaan</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-stone-900 transition-colors group-hover:text-amber-800 line-clamp-1">
          {product.title}
        </h3>

        <p className="mb-4 text-xs text-stone-600 line-clamp-2 leading-relaxed">
          {product.philosophy}
        </p>

        <div className="mb-4 flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-auto border-t border-stone-100 pt-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-stone-500 block">Mahar Karya</span>
            <span className="text-base font-bold text-amber-900">
              {formatIDR(product.price)}
            </span>
          </div>

          <Link
            href={`/collections/${product.slug}`}
            className="inline-flex items-center gap-1 rounded-lg bg-stone-900 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-amber-700"
          >
            Lihat Detail
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
