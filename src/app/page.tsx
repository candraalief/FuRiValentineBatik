import React from "react";
import { FigmaIcon } from "@/components/figma/FigmaIcons";
import {
  ProductCarousel,
  STORE_PRODUCTS,
  BULK_PRODUCTS,
} from "@/components/figma/ProductCarousel";
import { ConsultationForm } from "@/components/figma/ConsultationForm";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function HomePage() {
  const phoneLink = `tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`;

  const marqueeItems = [
    "Koleksi Busana Jadi",
    "Batik Custom",
    "Pesanan Satuan",
    "Pesanan Bulk",
    "Kain Bahan",
    "Koleksi Busana Jadi",
    "Batik Custom",
    "Pesanan Satuan",
    "Pesanan Bulk",
    "Kain Bahan",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-[#f1f7ff] to-[#d9eaff] text-[#10233f]">
      {/* Hero Section */}
      <section className="relative pt-20" id="beranda">
        <div className="absolute bottom-0 right-0 top-20 hidden w-[43%] bg-[#10233f] lg:block" />
        <div className="batik-mark absolute left-0 top-40 size-64 opacity-[0.06]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:py-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-10 lg:py-16">
          <div className="z-10 flex flex-col justify-center">
            <p className="eyebrow">
              <FigmaIcon name="sparkle" size={16} /> Koleksi Jadi & Batik Custom
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.01em]">
              Batik Bekasi,
              <br />
              <span className="italic text-[#c51f5d]">pilihanmu.</span>
            </h1>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a className="button-primary button-large" href="#koleksi">
                Lihat Koleksi Jadi <FigmaIcon name="arrow" />
              </a>
              <a
                className="button-ghost button-large"
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  "Halo, saya ingin berkonsultasi mengenai pesanan batik custom."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <FigmaIcon name="whatsapp" /> Pesan Batik Custom
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[500px]">
            <div className="absolute left-0 top-0 h-[76%] w-[72%] overflow-hidden rounded-t-[9rem] border-[10px] border-white bg-[#d7c7b2] shadow-2xl shadow-[#091426]/20">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1635790073975-ac99496914e3?auto=format&fit=crop&w=1200&q=88"
                alt="Perajin membatik dengan canting"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[58%] w-[54%] overflow-hidden border-[9px] border-white bg-[#ad8b74] shadow-2xl shadow-[#091426]/30">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1616125162686-770bf85622b9?auto=format&fit=crop&w=900&q=88"
                alt="Detail kain batik bernuansa klasik"
              />
            </div>
            <div className="absolute bottom-[13%] left-[3%] z-10 flex size-32 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-[#d8ab5d] text-center shadow-xl">
              <span className="font-serif text-3xl italic">Batik</span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                Bekasi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-[#10233f] py-4 text-[#f6f0e5] overflow-hidden">
        <div className="marquee flex min-w-max items-center gap-8 text-xs font-bold uppercase tracking-[0.3em]">
          {marqueeItems.map((item, idx) => (
            <span key={`${item}-${idx}`} className="flex items-center gap-8">
              {item}
              <span className="text-[#d8ab5d]">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Section 1: Koleksi Toko */}
      <section className="section-shell scroll-mt-20" id="koleksi">
        <div>
          <p className="eyebrow">
            <span className="h-px w-8 bg-[#c51f5d]" /> 01 / Koleksi Toko
          </p>
          <h2 className="section-title">Lihat, suka, bawa pulang.</h2>
        </div>
        <ProductCarousel products={STORE_PRODUCTS} id="koleksi-toko" />
        <a className="button-outline mt-5" href="#galeri">
          Kunjungi toko <FigmaIcon name="arrow" size={18} />
        </a>
      </section>

      {/* Section 2: Batik Kantor dan Sekolah */}
      <section
        className="border-y border-[#10233f]/10 bg-white/45"
        id="batik-kantor-sekolah"
      >
        <div className="section-shell">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-[#c51f5d]" /> 02 / Pesanan Bersama
            </p>
            <h2 className="section-title">Batik Kantor dan Sekolah</h2>
          </div>
          <ProductCarousel
            products={BULK_PRODUCTS}
            id="koleksi-kantor-sekolah"
            custom
          />
        </div>
      </section>

      {/* Section 3: Dari ide hingga batik jadi */}
      <section className="overflow-hidden bg-[#e7f1ff]" id="kisah">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1590251869641-dd94fb569954?auto=format&fit=crop&w=1400&q=88"
              alt="Proses kreatif perajin batik"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/55 via-transparent" />
          </div>
          <div className="flex items-center px-5 py-12 sm:py-16 lg:px-10">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-[#c51f5d]" /> Produksi di Bekasi
              </p>
              <h2 className="section-title">
                Dari ide hingga{" "}
                <em className="text-[#c51f5d] not-italic italic">batik jadi.</em>
              </h2>
              <a
                className="button-outline mt-6"
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  "Halo, saya ingin menanyakan proses pemesanan batik custom."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Tanya proses custom <FigmaIcon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Workshop & Galeri */}
      <section className="section-shell" id="galeri">
        <div className="mb-6 text-center sm:mb-8">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-[#c51f5d]" /> Workshop & Galeri
          </p>
          <h2 className="section-title">Lihat bahan dan sampel langsung.</h2>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] bg-[#10233f] text-white shadow-2xl shadow-[#10233f]/15 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[300px] sm:min-h-[380px]">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-75"
              src="https://images.unsplash.com/photo-1604973104381-870c92f10343?auto=format&fit=crop&w=1400&q=88"
              alt="Suasana workshop batik"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10233f]/55" />
            <div className="absolute bottom-8 left-8 rounded-xl bg-white p-5 text-[#10233f] shadow-xl">
              <FigmaIcon name="map" size={28} />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c51f5d]">
                Workshop & Galeri
              </p>
              <strong className="mt-1 block font-serif text-2xl">
                Bekasi, Jawa Barat
              </strong>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
              {SITE_CONFIG.name}
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="icon-box">
                  <FigmaIcon name="pin" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">
                    Alamat
                  </p>
                  <p className="mt-2 leading-7 text-white/75">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.village},
                    <br />
                    {SITE_CONFIG.address.district}, {SITE_CONFIG.address.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="icon-box">
                  <FigmaIcon name="clock" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">
                    Jam Galeri
                  </p>
                  <p className="mt-2 leading-7 text-white/75">
                    Senin – Sabtu · 09.00 – 17.00 WIB
                    <br />
                    <span className="text-xs">Minggu dengan reservasi</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="icon-box">
                  <FigmaIcon name="calendar" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">
                    Reservasi Kunjungan
                  </p>
                  <p className="mt-2 leading-7 text-white/75">
                    Reservasi via WhatsApp sebelum berkunjung.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="button-gold"
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FigmaIcon name="map" /> Buka di Google Maps
              </a>
              <a
                className="button-dark-outline"
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  "Halo, saya ingin reservasi kunjungan ke galeri FuRi Valentine Batik."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <FigmaIcon name="whatsapp" /> Reservasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Kontak & Konsultasi */}
      <section
        className="bg-[#10233f] py-12 text-white sm:py-16 lg:py-20"
        id="kontak"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-10">
          <div>
            <p className="eyebrow text-[#eccf9e]">
              <span className="h-px w-8 bg-[#eccf9e]" /> Konsultasi Batik Custom
            </p>
            <h2 className="section-title">
              Ceritakan batik yang ingin Anda buat.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="contact-pill" href={phoneLink}>
                <FigmaIcon name="phone" /> Telepon Langsung
              </a>
              <a
                className="contact-pill"
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FigmaIcon name="whatsapp" /> Chat WhatsApp
              </a>
            </div>
          </div>

          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}
