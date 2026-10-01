import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants/site";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { CantingIcon } from "@/components/svg";

export const metadata: Metadata = {
  title: "Kontak & Showroom Atelier — Reservasi & Konsultasi",
  description:
    "Hubungi concierge FuRi Valentine Batik untuk reservasi kunjungan showroom Menteng Jakarta atau pemesanan kustom batik pernikahan & korporasi.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            <CantingIcon className="h-4 w-4 text-amber-700" />
            Layanan Concierge Personal
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Terhubung Bersama Atelier FuRi Valentine.
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Baik untuk memilih busana formal kenegaraan, bingkisan romantis edisi Valentine, maupun pesanan seragam keluarga istimewa, tim kurator wastra kami siap mendampingi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact Details (Left: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Informasi Galeri & Showroom
              </h3>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold text-xs uppercase tracking-wide">
                      Alamat Showroom Utama
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
                      Jam Layanan Atelier
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
                      Email Concierge
                    </strong>
                    <span className="text-xs leading-relaxed">{SITE_CONFIG.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Viewing Notice */}
            <div className="rounded-3xl border border-amber-900/15 bg-amber-50/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Sparkles className="h-4 w-4 text-amber-700" />
                <span>Protokol Private Viewing</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Demi kenyamanan optimal, kunjungan showroom disarankan dengan membuat reservasi terlebih dahulu agar kurator kami dapat menyiapkan kain dan motif sesuai preferensi Anda.
              </p>
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
