"use client";

import React from "react";

interface ProductItem {
  id: string;
  title: string;
  category: string;
  motif: string;
  image: string;
  tag: string;
}

const ROW_1_ITEMS: ProductItem[] = [
  {
    id: "r1-1",
    title: "Sarimbit Maroon Rumah Adat",
    category: "Sarimbit Pasangan",
    motif: "Rumah Adat & Ornamen Sogan",
    image: "/images/batik_02.webp",
    tag: "Sarimbit",
  },
  {
    id: "r1-2",
    title: "Dress Arunika Marun",
    category: "Dress Terusan",
    motif: "Topeng & Geometris",
    image: "/images/batik_05.webp",
    tag: "Dress Modern",
  },
  {
    id: "r1-3",
    title: "Rompi Vest Parang Lilac",
    category: "Rompi / Outer",
    motif: "Parang & Aksen Samping",
    image: "/images/batik_06.webp",
    tag: "Rompi Etnik",
  },
  {
    id: "r1-4",
    title: "Rompi Vest Sogan Cokelat",
    category: "Rompi / Outer",
    motif: "Parang & Ornamen Tradisi",
    image: "/images/batik_07.webp",
    tag: "Rompi Sogan",
  },
  {
    id: "r1-5",
    title: "Blus Topeng Bekasi",
    category: "Blus Wanita",
    motif: "Topeng & Rumah Adat",
    image: "/images/batik_08.webp",
    tag: "Motif Khas",
  },
  {
    id: "r1-6",
    title: "Blazer Formal Marun",
    category: "Blazer / Outer",
    motif: "Flora Rawa Tembaga",
    image: "/images/batik_09.webp",
    tag: "Formal Look",
  },
  {
    id: "r1-7",
    title: "Cardigan Kimono Bambu",
    category: "Cardigan / Outer",
    motif: "Daun Bambu & Garis Kerah",
    image: "/images/batik_10.webp",
    tag: "Outer Modern",
  },
  {
    id: "r1-8",
    title: "Kemeja Sogan Kontemporer",
    category: "Kemeja Pria",
    motif: "Sogan Abstrak Coretan",
    image: "/images/batik_11.webp",
    tag: "Kemeja Pria",
  },
  {
    id: "r1-9",
    title: "Kemeja Formal Tugu Patriot",
    category: "Kemeja Pria",
    motif: "Tugu Patriot & Bunga Sogan",
    image: "/images/batik_12.webp",
    tag: "Signature Pria",
  },
  {
    id: "r1-10",
    title: "Kemeja Sutra Hitam Tekstur",
    category: "Kemeja Pria",
    motif: "Flora & Tekstur Wastra",
    image: "/images/batik_13.webp",
    tag: "Eksklusif",
  },
];

const ROW_2_ITEMS: ProductItem[] = [
  {
    id: "r2-1",
    title: "Kain Navy Tugu Patriot",
    category: "Kain Bahan",
    motif: "Tugu Patriot & Rumah Adat",
    image: "/images/batik_15.webp",
    tag: "Batik Cap Navy",
  },
  {
    id: "r2-2",
    title: "Kain Cap Topeng Maroon",
    category: "Kain Bahan",
    motif: "Topeng Bekasi & Kotak",
    image: "/images/batik_16.webp",
    tag: "Topeng Bekasi",
  },
  {
    id: "r2-3",
    title: "Kain Cap Topeng Olive",
    category: "Kain Bahan",
    motif: "Topeng Bekasi Hijau Zaitun",
    image: "/images/batik_17.webp",
    tag: "Batik Cap Halus",
  },
  {
    id: "r2-4",
    title: "Kain Panjang Tumpal Parang",
    category: "Kain Panjang",
    motif: "Tumpal Geometris & Parang",
    image: "/images/batik_19.webp",
    tag: "Kain Tradisi",
  },
  {
    id: "r2-5",
    title: "Kain Panjang Medali Teratai Biru",
    category: "Kain Panjang",
    motif: "Tumpal & Medali Teratai Biru",
    image: "/images/batik_20.webp",
    tag: "Sogan Biru",
  },
  {
    id: "r2-6",
    title: "Kain Panjang Medali Teratai Sogan",
    category: "Kain Panjang",
    motif: "Tumpal & Medali Teratai Sogan",
    image: "/images/batik_21.webp",
    tag: "Klasik Sogan",
  },
  {
    id: "r2-7",
    title: "Kain Anyaman Bambu & Teratai",
    category: "Kain Bahan",
    motif: "Anyaman Bambu & Bunga Warna",
    image: "/images/batik_22.webp",
    tag: "Bambu Runcing",
  },
  {
    id: "r2-8",
    title: "Kain Sutra Bangau & Teratai",
    category: "Kain Mahakarya",
    motif: "Burung Bangau & Teratai Emas",
    image: "/images/batik_14.webp",
    tag: "Mahakarya Sutra",
  },
  {
    id: "r2-9",
    title: "Kain Sogan Belah Ketupat",
    category: "Kain Eksklusif",
    motif: "Tugu Patriot & Sogan Marmer",
    image: "/images/batik_18.webp",
    tag: "Wastra Kolektor",
  },
  {
    id: "r2-10",
    title: "Kain Teratai Rawa Tembaga",
    category: "Batik Tulis Halus",
    motif: "Teratai Mekar & Rumah Tradisi",
    image: "/images/batik_23.webp",
    tag: "Batik Tulis",
  },
];

// Duplicate once (2x total) for ultra-efficient memory and flawless seamless loop
const ROW_1_DUPLICATED = [...ROW_1_ITEMS, ...ROW_1_ITEMS];
const ROW_2_DUPLICATED = [...ROW_2_ITEMS, ...ROW_2_ITEMS];

interface DualRowMarqueeCarouselProps {
  whatsappUrl?: string;
}

export const DualRowMarqueeCarousel: React.FC<DualRowMarqueeCarouselProps> = () => {
  return (
    <div className="relative w-full overflow-hidden py-3 select-none [contain:paint]">
      {/* Row 1: Right to Left */}
      <div className="mb-3.5 sm:mb-4 overflow-hidden">
        <div className="flex w-max gap-3 sm:gap-4 animate-marquee-left py-1 will-change-transform">
          {ROW_1_DUPLICATED.map((product, idx) => (
            <MarqueeCard key={`r1-${idx}`} product={product} />
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right (Opposite Direction) */}
      <div className="overflow-hidden">
        <div className="flex w-max gap-3 sm:gap-4 animate-marquee-right py-1 will-change-transform">
          {ROW_2_DUPLICATED.map((product, idx) => (
            <MarqueeCard key={`r2-${idx}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MarqueeCard: React.FC<{ product: ProductItem }> = ({ product }) => {
  return (
    <article className="group relative w-[185px] sm:w-[210px] md:w-[230px] shrink-0 overflow-hidden rounded-xl border border-[#10233f]/10 bg-white [contain:content] transition-all duration-200 hover:-translate-y-1 hover:border-[#c51f5d]/40 hover:shadow-md">
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
        <img
          loading="lazy"
          decoding="async"
          src={product.image}
          alt={product.title}
          width={230}
          height={288}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Soft subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Product Details */}
      <div className="p-3">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c51f5d] truncate">
            {product.category}
          </span>
          <span className="text-[9px] text-[#52627a] font-medium shrink-0">
            {product.tag}
          </span>
        </div>
        <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#10233f] truncate group-hover:text-[#c51f5d] transition-colors">
          {product.title}
        </h3>
        <p className="mt-0.5 text-[10px] sm:text-[11px] text-[#52627a] truncate">
          Motif: {product.motif}
        </p>
      </div>
    </article>
  );
};
