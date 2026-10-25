"use client";

import React from "react";
import Link from "next/link";

interface KoleksiHeaderProps {
  whatsappUrl: string;
}

export const KoleksiHeader: React.FC<KoleksiHeaderProps> = ({ whatsappUrl }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#10233f]/10 bg-white/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Kiri: Logo dan Identitas Brand */}
        <Link className="group flex shrink-0 items-center gap-3" href="/" title="Kembali ke Beranda">
          <span className="flex size-8 rotate-45 items-center justify-center border border-[#c51f5d] bg-white transition-transform duration-300 group-hover:rotate-90 sm:size-9 shadow-xs">
            <span className="-rotate-45 font-serif text-sm sm:text-base font-semibold text-[#c51f5d] transition-transform duration-300 group-hover:-rotate-90">
              FV
            </span>
          </span>
          <div className="flex flex-col">
            <strong className="font-serif text-base sm:text-lg font-normal leading-none tracking-normal text-[#10233f]">
              FuRi Valentine
            </strong>
            <span className="mt-1 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#d8ab5d]">
              Batik Bekasi
            </span>
          </div>
        </Link>

        {/* Tengah: Breadcrumb Navigasi Halus */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-[#10233f]/[0.04] px-4 py-2 text-xs sm:text-sm font-medium text-[#52627a] transition-all duration-200 hover:bg-[#10233f]/[0.08] hover:text-[#10233f] active:scale-95"
            title="Kembali ke halaman utama"
          >
            <svg
              className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1 text-[#c51f5d]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Kembali ke</span> Beranda
          </Link>
        </div>

        {/* Kanan: WhatsApp Concierge Button Berkelas */}
        <div className="flex shrink-0 items-center justify-end">
          <a
            className="group inline-flex items-center gap-2 rounded-full bg-[#10233f] px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#c51f5d] hover:shadow-md active:scale-95"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Konsultasi via WhatsApp"
          >
            {/* Live Indicator */}
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#25D366]" />
            </span>

            <svg
              className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
            </svg>
            <span className="hidden md:inline">Konsultasi WA</span>
            <span className="md:hidden">WA</span>
          </a>
        </div>
      </div>
    </header>
  );
};
