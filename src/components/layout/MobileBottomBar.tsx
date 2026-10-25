"use client";

import React from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

interface MobileBottomBarProps {
  whatsappUrl?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  whatsappUrl = "https://wa.me/6285866140707",
}) => {
  const scrollDirection = useScrollDirection(15);

  // Auto-hide saat scroll ke bawah melewati 80px, muncul seketika saat scroll ke atas
  const isHidden = scrollDirection === "down";

  return (
    <nav
      aria-label="Navigasi Bawah Ponsel"
      className={`fixed inset-x-0 bottom-0 z-40 block md:hidden transition-transform duration-300 ease-out ${
        isHidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="border-t border-[#10233f]/10 bg-white/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom,8px)] pt-1.5 shadow-[0_-8px_30px_rgba(16,35,63,0.08)]">
        <div className="mx-auto flex max-w-md items-center justify-around px-2">
          {/* 1. Beranda */}
          <a
            href="#beranda"
            className="flex min-h-[48px] min-w-[56px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-[11px] font-semibold text-[#52627a] hover:text-[#c51f5d] transition active:scale-95"
          >
            <svg className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Beranda</span>
          </a>

          {/* 2. Koleksi */}
          <a
            href="#koleksi"
            className="flex min-h-[48px] min-w-[56px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-[11px] font-semibold text-[#52627a] hover:text-[#c51f5d] transition active:scale-95"
          >
            <svg className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
            <span>Koleksi</span>
          </a>

          {/* 3. Seragam B2B */}
          <a
            href="#batik-kantor-sekolah"
            className="flex min-h-[48px] min-w-[56px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-[11px] font-semibold text-[#52627a] hover:text-[#c51f5d] transition active:scale-95"
          >
            <svg className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Seragam</span>
          </a>

          {/* 4. Konsultasi WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Konsultasi WhatsApp"
            className="flex min-h-[48px] min-w-[56px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-[11px] font-bold text-emerald-700 transition active:scale-95"
          >
            <div className="relative">
              <svg className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
              </svg>
              <span className="absolute -top-1 -right-1 size-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="absolute -top-1 -right-1 size-2 rounded-full bg-emerald-500" />
            </div>
            <span>Konsul WA</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
