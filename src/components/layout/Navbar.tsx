"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/lib/constants/navigation";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FuRiLogo } from "@/components/svg";
import { Menu, X, MessageSquare, MapPin, Sparkles } from "lucide-react";
import { Container } from "./Container";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const waMessage = encodeURIComponent(
    "Halo Ibu Indah Turiri / FuRi Valentine Batik Bekasi, saya ingin berkonsultasi mengenai pemesanan batik."
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-900/10 bg-[#152238]/95 text-stone-100 backdrop-blur-md transition-all">
      {/* Top Banner Notice: Authentic Bekasi UMKM Information */}
      <div className="bg-[#0c1523] px-4 py-1.5 text-center text-[11px] font-medium tracking-wide text-amber-300/90 border-b border-amber-900/20">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-amber-400" />
              UMKM Pelopor Batik Motif Khas Kota Bekasi Sejak 2007 (Ibu Indah Turiri)
            </span>
            <div className="flex items-center gap-3 text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-amber-400" />
                Jatiranggon, Jatisampurna
              </span>
              <span>•</span>
              <a
                href={SITE_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline"
              >
                Peta Workshop
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <FuRiLogo
              variant="horizontal"
              accentColor="#C6923B"
              textColor="#FDFBF7"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                    item.highlight
                      ? "rounded-full bg-amber-600/30 border border-amber-500/40 px-3 py-1.5 text-amber-300 hover:bg-amber-600 hover:text-white"
                      : isActive
                      ? "text-amber-400 border-b-2 border-amber-400 pb-1"
                      : "text-stone-300 hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp Konsultasi</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-stone-300 hover:bg-stone-800 hover:text-white md:hidden"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-stone-800 py-4 md:hidden">
            <div className="flex flex-col space-y-2.5">
              {MAIN_NAVIGATION.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-amber-900/30 text-amber-400 font-bold"
                        : "text-stone-300 hover:bg-stone-800 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.highlight && (
                      <span className="ml-2 rounded-full bg-amber-600/40 text-[10px] px-2 py-0.5 text-amber-300">
                        Panduan
                      </span>
                    )}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-stone-800">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
