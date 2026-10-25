"use client";

import React from "react";
import { KoleksiItem } from "../types/koleksi.types";

interface KoleksiCardProps {
  item: KoleksiItem;
  onOpenZoom: () => void;
  whatsappUrl: string;
}

export const KoleksiCard: React.FC<KoleksiCardProps> = ({ item, onOpenZoom, whatsappUrl }) => {
  const isFabric = item.category === "Kain Batik" || item.category === "Aksesori";

  const waText = encodeURIComponent(
    `Halo FuRi Valentine Batik,\nSaya melihat koleksi *${item.title}* (${item.category}) di katalog website.\n\n` +
      (item.isBulkAvailable && !item.isReadyStock
        ? `Saya ingin menanyakan detail pemesanan seragam / pesanan partai besar untuk kantor/sekolah kami. Bisakah dibantu?`
        : `Apakah produk ini masih tersedia atau bisa dipesan? Terima kasih.`)
  );

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#10233f]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c51f5d]/30 hover:shadow-[0_12px_32px_rgba(16,35,63,0.08)]">
      {/* Visual Image Box with Zoom Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`Perbesar foto ${item.title}`}
        title="Klik untuk memperbesar foto"
        onClick={onOpenZoom}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenZoom();
          }
        }}
        className={`relative ${
          isFabric ? "aspect-square" : "aspect-[3/4]"
        } w-full cursor-zoom-in overflow-hidden bg-[#f5f0eb] focus-visible:outline-2 focus-visible:outline-[#c51f5d] focus-visible:outline-offset-2`}
      >
        <img
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={item.image}
          alt={item.title}
        />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#10233f] backdrop-blur-md shadow-xs border border-white/50">
            {item.category}
          </span>
          {item.isReadyStock ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-xs backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
              Ready Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#10233f]/85 px-2.5 py-1 text-[10px] font-bold text-[#eccf9e] shadow-xs backdrop-blur-md border border-[#eccf9e]/30">
              Bulk Order
            </span>
          )}
        </div>

        {/* Hover zoom-in overlay hint */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#10233f]/25 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#10233f] shadow-xl transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <svg className="size-4 text-[#c51f5d]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
            Perbesar Detail
          </span>
        </div>
      </div>

      {/* Content & Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between text-xs text-[#52627a] mb-1.5">
          <span className="font-semibold text-[#a7194d]">{item.technique}</span>
          <span className="truncate max-w-[130px] text-[11px] text-[#52627a]">{item.origin.split(",")[0]}</span>
        </div>

        <h3 className="font-serif text-lg font-normal leading-snug text-[#10233f] group-hover:text-[#c51f5d] transition-colors line-clamp-1">
          {item.title}
        </h3>

        <p className="mt-1.5 text-xs text-[#52627a] line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Material & Pricing Bar */}
        <div className="mt-4 pt-3 border-t border-[#10233f]/10 flex flex-col gap-1.5 text-xs">
          <div className="flex justify-between text-[#52627a]">
            <span>Bahan:</span>
            <span className="font-medium text-[#10233f] truncate ml-2">{item.material}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-[11px] text-[#52627a]">Estimasi:</span>
            <span className="font-serif font-semibold text-sm text-[#10233f]">
              {item.estimatedPrice}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-1">
          <a
            href={`${whatsappUrl}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full min-h-11 items-center justify-center gap-2 rounded-xl bg-[#c51f5d] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#a7194d] active:scale-98 shadow-xs"
          >
            <svg className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
              <path d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
            </svg>
            {item.isBulkAvailable && !item.isReadyStock ? "Pesan Seragam Bulk" : "Tanya Ketersediaan"}
          </a>
        </div>
      </div>
    </article>
  );
};
