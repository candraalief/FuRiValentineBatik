"use client";

import React from "react";
import { PENGADAAN_ITEMS } from "../data/pengadaanData";
import { PengadaanCategoryKey } from "../types/pengadaan.types";

interface PengadaanInlineShowcaseProps {
  whatsappUrl: string;
}

const CATEGORIES: PengadaanCategoryKey[] = ["kantor", "sekolah", "custom"];

export const PengadaanInlineShowcase: React.FC<PengadaanInlineShowcaseProps> = ({
  whatsappUrl,
}) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {CATEGORIES.map((key) => {
        const item = PENGADAAN_ITEMS[key];
        if (!item) return null;

        const waUrl = `${whatsappUrl}?text=${encodeURIComponent(item.waMessage)}`;

        return (
          <article
            key={item.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#10233f]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c51f5d]/30 hover:shadow-xl"
          >
            <div>
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-white border-b border-[#10233f]/10">
                <img
                  loading="lazy"
                  src={item.heroImage}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/40 via-transparent to-black/5 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#10233f] shadow-xs border border-[#10233f]/10">
                    {item.categoryName}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#10233f] group-hover:text-[#c51f5d] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#52627a] leading-relaxed">
                  {item.description}
                </p>

                {/* Features Checklist */}
                <ul className="mt-4 space-y-2 border-t border-[#10233f]/10 pt-4 text-xs text-[#10233f]/90">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="size-4 shrink-0 text-[#c51f5d] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Direct CTA */}
            <div className="p-5 sm:p-6 pt-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#10233f] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-[#c51f5d] active:scale-98 shadow-sm"
              >
                <svg
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
                  <path d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
                </svg>
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};
