import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants/site";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation, Sparkles } from "lucide-react";
import { CantingIcon } from "@/components/svg";

export const metadata: Metadata = {
  title: "Kontak & Workshop Jatiranggon Bekasi — FuRi Valentine Batik",
  description:
    "Hubungi Ibu Indah Turiri / FuRi Valentine Batik di Jatiranggon Jatisampurna Kota Bekasi untuk konsultasi motif, pemesanan seragam dinas, atau reservasi galeri.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            <CantingIcon className="h-4 w-4 text-amber-700" />
            Layanan Pelanggan & Kemitraan UMKM
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Hubungi Workshop & Galeri FuRi Valentine
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Silakan berkonsultasi mengenai pemesanan seragam batik dinas/kantor, kain batik tulis halus, atau berkunjung langsung ke workshop kami di Jatisampurna, Kota Bekasi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact Details (Left: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Informasi Workshop & Galeri
              </h3>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold text-xs uppercase tracking-wide">
                      Alamat Workshop & Galeri
                    </strong>
                    <span className="text-xs leading-relaxed">{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold text-xs uppercase tracking-wide">
                      Jam Layanan
                    </strong>
                    <span className="text-xs leading-relaxed">{SITE_CONFIG.contact.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold text-xs uppercase tracking-wide">
                      Telepon Langsung
                    </strong>
                    <span className="text-xs leading-relaxed">{SITE_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold text-xs uppercase tracking-wide">
                      Email
                    </strong>
                    <span className="text-xs leading-relaxed">{SITE_CONFIG.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link */}
              <div className="pt-2 border-t border-stone-100">
                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-900 transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  Buka Peta Petunjuk Arah Google Maps
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Chat Box */}
            <div className="rounded-3xl border border-emerald-600/30 bg-emerald-50/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <MessageSquare className="h-4 w-4 text-emerald-700" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </div>
              <p className="text-xs text-emerald-800/90 leading-relaxed">
                Ingin respons paling cepat? Chat langsung dengan Ibu Indah Turiri untuk menanyakan contoh motif atau jadwal kunjungan ke workshop.
              </p>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Ibu Indah Turiri / FuRi Valentine Batik Bekasi, saya ingin berkonsultasi mengenai pemesanan batik."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors shadow-sm"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Mulai Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Form (Right: 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
