"use client";

import React, { useEffect, useMemo, useRef } from "react";

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

// Helper row with high-performance requestAnimationFrame loop and pointer drag support
const DraggableMarqueeRow: React.FC<{
  items: ProductItem[];
  direction: "left" | "right";
  speed?: number;
  className?: string;
}> = ({ items, direction, speed = 36, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const isHoveredRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const hasCapturedPointerRef = useRef(false);

  // Quadruple items to guarantee seamless looping without empty space when dragged in either direction
  const duplicatedItems = useMemo(() => [...items, ...items, ...items, ...items], [items]);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    // Start from middle chunk so left and right drags both have continuous content
    if (trackRef.current) {
      const chunkWidth = trackRef.current.scrollWidth / 4;
      offsetRef.current = -chunkWidth;
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const track = trackRef.current;
      if (track) {
        const chunkWidth = track.scrollWidth / 4;

        if (!isDraggingRef.current && chunkWidth > 0) {
          if (Math.abs(velocityRef.current) > 0.4) {
            offsetRef.current += velocityRef.current;
            velocityRef.current *= 0.94; // inertia friction
          } else {
            velocityRef.current = 0;
            if (!isHoveredRef.current) {
              const delta = (direction === "left" ? -speed : speed) * dt;
              offsetRef.current += delta;
            }
          }

          // Seamless modulo wrap
          while (offsetRef.current > 0) {
            offsetRef.current -= chunkWidth;
          }
          while (offsetRef.current < -chunkWidth * 2) {
            offsetRef.current += chunkWidth;
          }

          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [direction, speed]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDownRef.current = true;
    isDraggingRef.current = false;
    hasCapturedPointerRef.current = false;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current) return;

    const dx = e.clientX - lastXRef.current;
    const totalDx = e.clientX - startPosRef.current.x;
    const totalDy = e.clientY - startPosRef.current.y;

    if (!isDraggingRef.current) {
      if (Math.abs(totalDx) > 6) {
        if (Math.abs(totalDx) > Math.abs(totalDy)) {
          isDraggingRef.current = true;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
            hasCapturedPointerRef.current = true;
          } catch {
            // fallback
          }
        } else {
          // Native vertical scroll gesture
          isPointerDownRef.current = false;
          return;
        }
      }
    }

    if (isDraggingRef.current && trackRef.current) {
      offsetRef.current += dx;
      velocityRef.current = dx;
      lastXRef.current = e.clientX;

      const chunkWidth = trackRef.current.scrollWidth / 4;
      if (chunkWidth > 0) {
        while (offsetRef.current > 0) {
          offsetRef.current -= chunkWidth;
        }
        while (offsetRef.current < -chunkWidth * 2) {
          offsetRef.current += chunkWidth;
        }
      }

      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (hasCapturedPointerRef.current) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      hasCapturedPointerRef.current = false;
    }
    isPointerDownRef.current = false;
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUpOrCancel}
      onPointerCancel={handlePointerUpOrCancel}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-3 sm:gap-4 py-1 will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {duplicatedItems.map((product, idx) => (
          <MarqueeCard key={`${product.id}-${idx}`} product={product} />
        ))}
      </div>
    </div>
  );
};

interface DualRowMarqueeCarouselProps {
  whatsappUrl?: string;
}

export const DualRowMarqueeCarousel: React.FC<DualRowMarqueeCarouselProps> = () => {
  return (
    <div className="relative w-full overflow-hidden py-3 select-none [contain:paint]">
      {/* Row 1: Right to Left */}
      <DraggableMarqueeRow items={ROW_1_ITEMS} direction="left" speed={36} className="mb-3.5 sm:mb-4" />

      {/* Row 2: Left to Right (Opposite Direction) */}
      <DraggableMarqueeRow items={ROW_2_ITEMS} direction="right" speed={36} />
    </div>
  );
};

const MarqueeCard: React.FC<{ product: ProductItem }> = ({ product }) => {
  return (
    <article className="group relative w-[185px] sm:w-[210px] md:w-[230px] shrink-0 overflow-hidden rounded-xl border border-[#10233f]/10 bg-white [contain:content] transition-shadow duration-200 hover:border-[#c51f5d]/40 hover:shadow-md pointer-events-auto select-none">
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
        <img
          loading="lazy"
          decoding="async"
          draggable={false}
          src={product.image}
          alt={product.title}
          width={230}
          height={288}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none"
        />
        {/* Soft subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Product Details: Satu judul utama konsisten berwarna hitam/navy */}
      <div className="p-3 text-center">
        <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#10233f] truncate group-hover:text-[#c51f5d] transition-colors">
          {product.title}
        </h3>
      </div>
    </article>
  );
};
