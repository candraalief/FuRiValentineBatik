"use client";

import React, { useRef, useState } from "react";
import { FigmaIcon } from "./FigmaIcons";
import { SITE_CONFIG } from "@/lib/constants/site";

export interface ProductItem {
  category: string;
  title: string;
  image: string;
  number: string;
}

export const STORE_CATEGORIES = [
  "Semua",
  "Hem / Kemeja",
  "Blus",
  "Tunik",
  "Dress",
  "Outer",
  "Rok",
  "Setelan",
  "Kain Batik",
];

export const STORE_PRODUCTS: ProductItem[] = [
  {
    category: "Hem / Kemeja",
    title: "Kemeja Batik Patriot",
    image:
      "https://images.unsplash.com/photo-1761516659902-2994696b362e?auto=format&fit=crop&w=1000&q=85",
    number: "01",
  },
  {
    category: "Dress",
    title: "Dress Arunika",
    image:
      "https://images.unsplash.com/photo-1761516659766-c092d4b1209d?auto=format&fit=crop&w=1000&q=85",
    number: "02",
  },
  {
    category: "Kain Batik",
    title: "Batik Tulis Halus",
    image:
      "https://images.unsplash.com/photo-1680345575812-2f6878d7d775?auto=format&fit=crop&w=1000&q=85",
    number: "03",
  },
  {
    category: "Kain Batik",
    title: "Batik Cap Patriot Bekasi",
    image:
      "https://images.unsplash.com/photo-1661144050353-1d2566cbdf03?auto=format&fit=crop&w=1000&q=85",
    number: "04",
  },
];

export const BULK_PRODUCTS: ProductItem[] = [
  {
    category: "Kantor",
    title: "Batik Kantor",
    image:
      "https://images.unsplash.com/photo-1761516659902-2994696b362e?auto=format&fit=crop&w=1000&q=85",
    number: "01",
  },
  {
    category: "Sekolah",
    title: "Batik Sekolah",
    image:
      "https://images.unsplash.com/photo-1661144050353-1d2566cbdf03?auto=format&fit=crop&w=1000&q=85",
    number: "02",
  },
  {
    category: "Custom",
    title: "Motif untuk Bersama",
    image:
      "https://images.unsplash.com/photo-1680345575812-2f6878d7d775?auto=format&fit=crop&w=1000&q=85",
    number: "03",
  },
];

interface ProductCarouselProps {
  products: ProductItem[];
  id: string;
  custom?: boolean;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  id,
  custom = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = custom
    ? ["Semua", ...Array.from(new Set(products.map((p) => p.category)))]
    : STORE_CATEGORIES;

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scroll = (direction: number) => {
    const el = containerRef.current;
    if (!el) return;
    const article = el.querySelector("article");
    const width = article ? article.getBoundingClientRect().width + 16 : el.clientWidth;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.scrollBy({
      left: direction * width,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  const handleContainerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  return (
    <>
      <div className="mt-6 flex items-start justify-between gap-3 border-t border-[#10233f]/15 pt-4">
        <div
          role="group"
          aria-label={
            custom
              ? "Filter kategori batik kantor dan sekolah"
              : "Filter kategori koleksi toko"
          }
          className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              aria-controls={id}
              onClick={() => {
                setActiveCategory(cat);
                setScrollProgress(0);
              }}
              className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium leading-5 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f5d] ${
                activeCategory === cat
                  ? "border-[#c51f5d] bg-[#c51f5d] text-white"
                  : "border-[#10233f]/20 text-[#52627a] hover:border-[#c51f5d] hover:text-[#c51f5d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className={`flex shrink-0 gap-2 ${
            filteredProducts.length < 2 ? "hidden" : ""
          }`}
        >
          <button
            type="button"
            aria-label="Koleksi sebelumnya"
            aria-controls={id}
            onClick={() => scroll(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-[#10233f]/20 text-[#10233f] transition hover:border-[#c51f5d] hover:text-[#c51f5d] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span className="rotate-180">
              <FigmaIcon name="arrow" size={18} />
            </span>
          </button>
          <button
            type="button"
            aria-label="Koleksi berikutnya"
            aria-controls={id}
            onClick={() => scroll(1)}
            className="flex size-11 items-center justify-center rounded-full border border-[#10233f]/20 text-[#10233f] transition hover:border-[#c51f5d] hover:text-[#c51f5d] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <FigmaIcon name="arrow" size={18} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        id={id}
        role="region"
        aria-label={
          custom
            ? "Koleksi batik kantor dan sekolah"
            : "Koleksi siap dibeli di toko"
        }
        tabIndex={0}
        onScroll={handleContainerScroll}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f5d]"
      >
        {filteredProducts.length === 0 && (
          <div className="w-full border border-[#10233f]/10 bg-white/60 px-5 py-8 text-center sm:py-10">
            <h3 className="font-serif text-2xl leading-snug">
              Koleksi {activeCategory}
            </h3>
            <p className="mt-2 text-sm text-[#52627a]">
              Produk belum ditampilkan.
            </p>
            <a
              className="button-outline mt-6"
              href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                `Halo FuRi Valentine Batik, apakah ada koleksi ${activeCategory}? Saya ingin menanyakan pilihan dan ketersediaannya.`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <FigmaIcon name="whatsapp" size={18} /> Tanya koleksi
            </a>
          </div>
        )}

        {filteredProducts.map((product) => (
          <article
            key={product.title}
            className="group w-[85%] shrink-0 snap-start overflow-hidden border border-[#10233f]/10 bg-white/80 sm:w-[calc((100%-16px)/2)] lg:w-[38%]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d7c7b2]">
              <img
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={product.image}
                alt={product.title}
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#f6f0e5]/90 px-3 py-1.5 text-xs font-medium leading-4 backdrop-blur">
                {product.category}
              </span>
              <span className="absolute bottom-3 right-4 font-serif text-5xl italic text-white/70">
                {product.number}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl leading-snug sm:text-2xl">
                {product.title}
              </h3>
              <a
                className="mt-4 flex min-h-11 items-center justify-between gap-3 border-t border-[#10233f]/10 pt-2 text-sm font-semibold text-[#c51f5d]"
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  custom
                    ? `Halo, saya ingin berkonsultasi mengenai ${product.title}.`
                    : `Halo, saya tertarik dengan ${product.title}. Boleh info ketersediaannya untuk dibeli langsung di toko?`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                {custom ? "Konsultasikan pesanan" : "Tanya ketersediaan"}{" "}
                <FigmaIcon name="arrow" size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div
        className={`flex items-center gap-2 ${
          filteredProducts.length < 2 ? "hidden" : ""
        }`}
        aria-hidden="true"
      >
        {[0, 0.5, 1].map((dot) => (
          <span
            key={dot}
            className={`h-1 rounded-full transition-all ${
              Math.abs(scrollProgress - dot) <= 0.25
                ? "w-8 bg-[#c51f5d]"
                : "w-3 bg-[#10233f]/15"
            }`}
          />
        ))}
      </div>
    </>
  );
};
