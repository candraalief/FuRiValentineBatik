import React from "react";
import { FigmaIcon } from "./FigmaIcons";
import { SITE_CONFIG } from "@/lib/constants/site";

export const FigmaFooter: React.FC = () => {
  return (
    <footer className="bg-[#0b172a] py-7 text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center text-sm sm:flex-row sm:text-left lg:px-10">
        <div className="flex items-center gap-3 text-white">
          <span className="font-serif text-2xl">FuRi Valentine</span>
          <span className="h-4 w-px bg-white/20" />
          <span className="text-xs uppercase tracking-widest text-[#d8ab5d]">
            Batik Bekasi
          </span>
        </div>
        <p>
          © 2025 {SITE_CONFIG.name}. Karya dari Bekasi untuk Nusantara.
        </p>
        <a
          className="flex items-center gap-2 text-white hover:text-[#d8ab5d] transition-colors"
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FigmaIcon name="instagram" /> Instagram
        </a>
      </div>
    </footer>
  );
};
