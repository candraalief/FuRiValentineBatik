import React from "react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Container } from "../layout/Container";
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Navigation, Sparkles } from "lucide-react";

export const WorkshopLocationSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100/70 border-t border-b border-stone-200" id="lokasi-workshop">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-2">
                <MapPin className="h-3.5 w-3.5 text-amber-700" />
                Workshop & Galeri Resmi UMKM Kota Bekasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                Kunjungi Workshop & Galeri Batik FuRi Valentine
              </h2>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                Anda dapat melihat langsung lembaran kain batik tulis sutra, berdiskusi mengenai motif kustom khas Bekasi, serta merasakan tekstur berbagai bahan kain di galeri kami di Jatisampurna.
              </p>
            </div>

            {/* Address & Hours cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2.5 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <MapPin className="h-4 w-4 text-amber-700" />
                  Alamat Galeri
                </div>
                <p className="text-xs text-stone-800 font-semibold leading-relaxed">
                  {SITE_CONFIG.contact.address}
                </p>
                <p className="text-[11px] text-stone-500 mt-1">
                  Patokan: Kawasan Transad Jatiranggon, Jatisampurna, Kota Bekasi.
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2.5 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <Clock className="h-4 w-4 text-amber-700" />
                  Jam Operasional
                </div>
                <p className="text-xs text-stone-800 font-semibold leading-relaxed">
                  {SITE_CONFIG.contact.hours}
                </p>
                <p className="text-[11px] text-stone-500 mt-1">
                  Bagi pengunjung hari Minggu, mohon konfirmasi terlebih dahulu melalui WhatsApp.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-amber-900 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Buka Petunjuk Arah (Google Maps)
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Ibu Indah Turiri / FuRi Valentine Batik, saya ingin reservasi kunjungan ke workshop Jatiranggon Bekasi."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                Reservasi Kunjungan via WA
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white px-4 py-3 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
              >
                <Phone className="h-4 w-4 text-stone-600" />
                Telepon Langsung
              </a>
            </div>
          </div>

          {/* Right Map Visual Card: 5 cols */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-amber-900/15 bg-[#152238] p-7 text-white shadow-xl">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: "radial-gradient(circle at 70% 30%, #c6923b 0%, #152238 70%)",
                }}
              />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
                    Kota Bekasi • Jawa Barat
                  </span>
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </div>

                <h3 className="text-xl font-bold font-serif text-amber-100">
                  FuRi Valentine Batik
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed">
                  Menyambut kunjungan instansi dinas, pecinta wastra nusantara, maupun keluarga yang ingin memesan seragam atau busana adat istimewa.
                </p>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400">Pendiri:</span>
                    <span className="font-semibold text-white">{SITE_CONFIG.founder}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400">Tahun Berdiri:</span>
                    <span className="font-semibold text-amber-300">7 Juli {SITE_CONFIG.foundedYear}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400">Wilayah:</span>
                    <span className="font-semibold text-white">Jatiranggon, Jatisampurna</span>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 py-3 text-xs font-bold text-white shadow-md hover:from-amber-500 hover:to-amber-600 transition-all"
                >
                  Navigasi ke Workshop Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
