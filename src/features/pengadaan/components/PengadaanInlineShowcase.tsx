"use client";

import React from "react";
import { PENGADAAN_ITEMS } from "../data/pengadaanData";
import { PengadaanCategoryKey } from "../types/pengadaan.types";

const CATEGORIES: PengadaanCategoryKey[] = ["kantor", "sekolah", "custom"];

export const PengadaanInlineShowcase: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {CATEGORIES.map((key) => {
        const item = PENGADAAN_ITEMS[key];
        if (!item) return null;

        return (
          <article
            key={item.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#10233f]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c51f5d]/30 hover:shadow-xl"
          >
            <div>
              {/* Product Image Showcase with 4:5 ratio matching carousel */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#faf9f6] border-b border-[#10233f]/10">
                <img
                  loading="lazy"
                  src={item.heroImage}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between">
                <div className="md:min-h-[140px]">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#10233f] group-hover:text-[#c51f5d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-justify text-xs sm:text-sm text-[#52627a] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <ul className="mt-5 space-y-2.5 border-t border-[#10233f]/10 pt-4 text-xs text-[#10233f]/90">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-[#c51f5d]/10 text-[#c51f5d] mt-0.5">
                        <svg
                          className="size-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
