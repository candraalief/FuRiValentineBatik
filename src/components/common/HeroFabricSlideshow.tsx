"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const fabrics = [
  { src: "/images/batik_14.webp", alt: "Kain batik motif bangau dan teratai" },
  { src: "/images/batik_15.webp", alt: "Kain batik navy motif Tugu Patriot" },
  { src: "/images/batik_16.webp", alt: "Kain batik marun motif Topeng Bekasi" },
];

export function HeroFabricSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!motion.matches && !document.hidden) {
        setActive((index) => (index + 1) % fabrics.length);
      }
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-0 right-0 z-0 aspect-square w-[56%] overflow-hidden rounded-[2%]">
      {fabrics.map((fabric, index) => (
        <div
          key={fabric.src}
          aria-hidden={index !== active}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none"
          style={{ opacity: index === active ? 1 : 0 }}
        >
          {/* Crop the 1080 × 1350 source to (120, 378, 840, 840).
              This keeps the lower motif and excludes white margins/rounded source corners. */}
          <Image
            src={fabric.src}
            alt={fabric.alt}
            width={1080}
            height={1350}
            loading="eager"
            unoptimized
            className="absolute max-w-none"
            style={{ width: `${1080 / 840 * 100}%`, height: `${1350 / 840 * 100}%`, left: `${-120 / 840 * 100}%`, top: `${-378 / 840 * 100}%` }}
          />
        </div>
      ))}
    </div>
  );
}
