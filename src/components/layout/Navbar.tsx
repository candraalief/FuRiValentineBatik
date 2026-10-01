"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/lib/constants/navigation";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FuRiLogo } from "@/components/svg";
import { Menu, X, PhoneCall, Sparkles } from "lucide-react";
import { Container } from "./Container";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-900/10 bg-[#152238]/95 text-stone-100 backdrop-blur-md transition-all">
      {/* Top Banner Notice */}
      <div className="bg-[#0c1523] px-4 py-1.5 text-center text-[11px] font-medium tracking-wide text-amber-300/90 border-b border-amber-900/20">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-amber-400" />
          Koleksi Mahakarya Batik Tulis Sutra Eksklusif & Edisi Valentine — Reservasi Private Showroom
        </span>
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
          <nav className="hidden items-center gap-8 md:flex">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
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
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-900/40"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Inquiry / VIP Concierge</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-stone-300 hover:bg-stone-800 hover:text-white md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-stone-800 py-4 md:hidden">
            <div className="flex flex-col space-y-3">
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
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs font-bold text-white"
                >
                  <PhoneCall className="h-4 w-4" />
                  VIP Concierge & Showroom
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
