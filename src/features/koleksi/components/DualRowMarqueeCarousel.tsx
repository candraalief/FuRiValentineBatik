"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

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

// Each copy owns its trailing gap; measuring one group gives the exact loop distance.
interface DraggableMarqueeRowProps {
  items: ProductItem[];
  direction: "left" | "right";
  speed?: number;
  className?: string;
  isPaused: boolean;
  onTogglePause: () => void;
}

const DraggableMarqueeRow: React.FC<DraggableMarqueeRowProps> = ({
  items,
  direction,
  speed = 36,
  className = "",
  isPaused,
  onTogglePause,
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const widthRef = useRef(0);
  const pointerRef = useRef<{ id: number; x: number; y: number; dragging: boolean } | null>(null);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const renderOffset = () => {
    const width = widthRef.current;
    if (!width || !trackRef.current) return;
    // Always keep one complete copy before the visible region, in either direction.
    offsetRef.current = ((offsetRef.current % width) + width) % width - width;
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    const group = groupRef.current;
    const viewport = viewportRef.current;
    if (!group || !viewport) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const measure = () => {
      const oldWidth = widthRef.current;
      const progress = oldWidth ? offsetRef.current / oldWidth : -1;
      widthRef.current = group.getBoundingClientRect().width;
      offsetRef.current = progress * widthRef.current;
      renderOffset();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    measure();
    let frame: number;
    let previous = performance.now();
    const tick = (now: number) => {
      const elapsed = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      if (!motion.matches && !isPausedRef.current && !pointerRef.current) {
        offsetRef.current += (direction === "left" ? -1 : 1) * speed * elapsed;
        renderOffset();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [direction, speed]);

  const releasePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const currentPointer = pointerRef.current;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // ignore
      }
    }
    pointerRef.current = null;
    // Jika ditekan / diklik tanpa digeser (dragging), jeda atau lanjutkan pergerakan
    if (currentPointer && !currentPointer.dragging) {
      onTogglePause();
    }
  };

  const cancelPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // ignore
      }
    }
    pointerRef.current = null;
  };

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-label={
        direction === "left"
          ? `Koleksi busana batik (${isPaused ? "dijeda" : "berjalan"})`
          : `Koleksi kain batik (${isPaused ? "dijeda" : "berjalan"})`
      }
      title={isPaused ? "Klik untuk melanjutkan pergerakan" : "Klik untuk menjeda pergerakan"}
      tabIndex={0}
      className={`product-marquee overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c51f5d] ${className}`}
      onKeyDown={(event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          offsetRef.current += event.key === "ArrowLeft" ? 220 : -220;
          renderOffset();
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onTogglePause();
        }
      }}
      onPointerDown={(event) => {
        if (event.button !== 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        pointerRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, dragging: false };
      }}
      onPointerMove={(event) => {
        const pointer = pointerRef.current;
        if (!pointer || pointer.id !== event.pointerId) return;
        const dx = event.clientX - pointer.x;
        const dy = event.clientY - pointer.y;
        if (!pointer.dragging) {
          if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
          if (Math.abs(dy) > Math.abs(dx)) { pointerRef.current = null; return; }
          pointer.dragging = true;
          event.currentTarget.setPointerCapture(event.pointerId);
        }
        offsetRef.current += dx;
        pointer.x = event.clientX;
        renderOffset();
      }}
      onPointerUp={releasePointer}
      onPointerCancel={cancelPointer}
      onLostPointerCapture={() => { pointerRef.current = null; }}
      onPointerLeave={() => { if (!pointerRef.current?.dragging) pointerRef.current = null; }}
    >
      <div ref={trackRef} className="product-marquee-track flex w-max will-change-transform">
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : undefined}
            aria-hidden={copy === 1 ? undefined : true}
            className="product-marquee-group flex shrink-0 gap-3 pr-3 py-2 sm:gap-4 sm:pr-4"
          >
            {items.map((product) => <MarqueeCard key={product.id} product={product} />)}
          </div>
        ))}
      </div>
    </div>
  );
};

interface DualRowMarqueeCarouselProps {
  whatsappUrl?: string;
}

export const DualRowMarqueeCarousel: React.FC<DualRowMarqueeCarouselProps> = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-3 select-none [contain:paint]">
      {/* Row 1: Right to Left */}
      <DraggableMarqueeRow
        items={ROW_1_ITEMS}
        direction="left"
        speed={36}
        className="mb-5 sm:mb-6"
        isPaused={isPaused}
        onTogglePause={togglePause}
      />

      {/* Row 2: Left to Right (Opposite Direction) */}
      <DraggableMarqueeRow
        items={ROW_2_ITEMS}
        direction="right"
        speed={36}
        isPaused={isPaused}
        onTogglePause={togglePause}
      />
    </div>
  );
};

const MarqueeCard: React.FC<{ product: ProductItem }> = ({ product }) => (
  <article className="group w-[185px] shrink-0 select-none overflow-hidden rounded-xl border border-[#10233f]/10 bg-white sm:w-[210px] md:w-[230px]">
    <div className="relative aspect-[4/5] overflow-hidden bg-white">
      <img
        decoding="async"
        draggable={false}
        src={product.image}
        alt={product.title}
        width={230}
        height={288}
        className="h-full w-full object-cover pointer-events-none"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
    <h3 className="px-3 py-3 text-center text-sm font-bold leading-snug text-[#10233f]">{product.title}</h3>
  </article>
);
