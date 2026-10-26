import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { MAIN_NAVIGATION, FOOTER_COLLECTIONS } from "@/lib/constants/navigation";
import { FuRiLogo, KawungPattern } from "@/components/svg";
import { MapPin, Mail, Clock, ExternalLink } from "lucide-react";
import { Container } from "./Container";

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-amber-900/20 bg-[#0d1524] text-stone-300 overflow-hidden">
      {/* Decorative Kawung background watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <KawungPattern color="#C6923B" opacity={0.4} />
      </div>

      <Container className="relative z-10 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <FuRiLogo
              variant="horizontal"
              accentColor="#C6923B"
              textColor="#FDFBF7"
              className="h-12 w-auto"
            />
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 text-xs text-stone-400 space-y-1">
              <p className="text-amber-400 font-bold">UMKM Kota Bekasi — Berdiri Sejak 7 Juli 2007</p>
              <p>Pendiri: <strong className="text-white">{SITE_CONFIG.founder}</strong> (Valentine Batik)</p>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/80 text-amber-400 transition-colors hover:bg-amber-600 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/80 text-amber-400 transition-colors hover:bg-amber-600 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700/80 text-white transition-colors hover:bg-emerald-600"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Jelajahi Profil
            </h4>
            <ul className="space-y-2.5 text-xs">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 transition-colors hover:text-amber-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategori Ekspo */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Koleksi & Layanan
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_COLLECTIONS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 transition-colors hover:text-amber-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Workshop & Galeri
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 font-semibold hover:underline"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 text-center text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; 2007 - {new Date().getFullYear()} {SITE_CONFIG.name} ({SITE_CONFIG.brandName}). Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-[11px] text-stone-600">
            Pelopor Batik Motif Khas Kota Bekasi • UMKM Binaan Kota Patriot
          </p>
        </div>
      </Container>
    </footer>
  );
};
