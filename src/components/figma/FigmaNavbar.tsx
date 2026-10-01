"use client";

import React, { useState } from "react";
import { FigmaIcon } from "./FigmaIcons";
import { SITE_CONFIG } from "@/lib/constants/site";

export const FigmaNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Koleksi", href: "#koleksi" },
    { label: "Kisah Kami", href: "#kisah" },
    { label: "Kunjungi Galeri", href: "#galeri" },
    { label: "Kontak", href: "#kontak" },
  ];

  const phoneLink = `tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#10233f]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 lg:px-10">
        <a className="group flex shrink-0 items-center gap-3" href="#beranda">
          <span className="flex size-8 rotate-45 items-center justify-center border border-[#c51f5d] sm:size-9">
            <span className="-rotate-45 font-serif text-base text-[#c51f5d] sm:text-lg">
              FV
            </span>
          </span>
          <strong className="whitespace-nowrap font-serif text-base font-normal leading-tight tracking-normal sm:text-xl">
            {SITE_CONFIG.name}
          </strong>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium xl:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex xl:ml-0">
          <a className="button-outline hidden xl:inline-flex" href={phoneLink}>
            <FigmaIcon name="phone" size={17} /> Telepon
          </a>
          <a
            className="button-primary"
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FigmaIcon name="whatsapp" size={18} /> Konsultasi Custom
          </a>
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Buka menu"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#10233f]/20 xl:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <FigmaIcon name="menu" />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="grid gap-1 border-t border-[#10233f]/10 bg-white p-5 text-sm font-medium xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="rounded-lg px-3 py-3 hover:bg-white/70"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-[#10233f]/10">
            <a className="button-outline w-full justify-center" href={phoneLink}>
              <FigmaIcon name="phone" size={17} /> Telepon ({SITE_CONFIG.phone})
            </a>
            <a
              className="button-primary w-full justify-center"
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FigmaIcon name="whatsapp" size={18} /> Chat WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
