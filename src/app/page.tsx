"use client";

import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { HeroFabricSlideshow } from "@/components/common/HeroFabricSlideshow";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { PengadaanInlineShowcase } from "@/features/pengadaan/components/PengadaanInlineShowcase";
import { DualRowMarqueeCarousel } from "@/features/koleksi/components/DualRowMarqueeCarousel";

const whatsappNumber = "6285866140707";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Jl.+Transad+X+No.+1A,+Jatiranggon,+Jatisampurna,+Kota+Bekasi";
const instagramUrl = "https://www.instagram.com/indahturiri/";

type IconName =
  | "arrow"
  | "calendar"
  | "clock"
  | "instagram"
  | "map"
  | "menu"
  | "phone"
  | "pin"
  | "whatsapp"
  | "users"
  | "building"
  | "palette"
  | "close"
  | "zoom-in";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  if (name === "whatsapp") return <WhatsAppIcon size={size} />;

  const paths: Partial<Record<IconName, React.ReactNode>> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    calendar: (
      <>
        <path d="M6 2v4m12-4v4M3 9h18" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    map: (
      <>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15m6-12v15" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />,
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    building: (
      <>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" />
      </>
    ),
    palette: (
      <>
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5.6 5.6 0 0 0 6-5.5C22 6.5 17.5 2 12 2Z" />
      </>
    ),
    close: <path d="M18 6 6 18M6 6l12 12" />,
    "zoom-in": (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

/* ─── Main Page ─── */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  function submitConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Halo FuRi Valentine Batik, saya ${data.get("name")}. Saya ingin berkonsultasi mengenai ${data.get("interest")}. ${data.get("message")}`;
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf9f6] text-[#10233f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#10233f]/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 lg:px-10">
          <a className="group flex shrink-0 items-center gap-3" href="#beranda">
            <img
              src="/images/logo_furi.webp"
              alt="Logo FuRi Valentine Batik"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <strong className="whitespace-nowrap font-serif text-base font-normal leading-tight tracking-normal sm:text-xl">FuRi Valentine Batik</strong>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium xl:flex">
            <a className="nav-link" href="#koleksi">Koleksi</a>
            <a className="nav-link" href="#batik-kantor-sekolah">Batik Seragam</a>
            <a className="nav-link" href="#galeri">Kunjungi Galeri</a>
            <a className="nav-link" href="#kontak">Kontak</a>
          </nav>
          <div className="ml-auto hidden items-center gap-2 md:flex xl:ml-0">
            <a className="button-outline hidden xl:inline-flex" href={instagramUrl} target="_blank" rel="noreferrer"><Icon name="instagram" size={17} /> Instagram</a>
            <a className="button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp</a>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label="Buka menu"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#10233f]/20 xl:hidden"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name="menu" />
          </button>
        </div>
        {menuOpen && (
          <nav className="grid gap-1 border-t border-[#10233f]/10 bg-white p-5 text-sm font-medium xl:hidden">
            {[
              ["Koleksi", "#koleksi"],
              ["Batik Seragam", "#batik-kantor-sekolah"],
              ["Kunjungi Galeri", "#galeri"],
              ["Kontak", "#kontak"],
            ].map(([label, href]) => (
              <a className="rounded-lg px-3 py-3 hover:bg-white/70" href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-20 border-b border-[#10233f]/10 lg:border-b-0" id="beranda">
          <div className="relative mx-auto grid max-w-7xl gap-6 sm:gap-8 px-5 py-8 sm:py-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-10 lg:py-16">
            <div className="z-10 flex flex-col justify-center">
              <h1 className="max-w-3xl font-serif text-[2.25rem] sm:text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1.12] sm:leading-[1.08] tracking-[-0.01em]">
                Batik Bekasi,<br />
                <span className="italic text-[#c51f5d]">pilihanmu.</span>
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#2d3f57] font-normal">
                <strong className="font-semibold text-[#10233f]">FuRi Valentine Batik</strong> menyediakan seragam batik sekolah, seragam kantor, atasan wanita, kemeja, kain batik, udeng, dan scarf.
              </p>
            </div>
            <div className="relative isolate min-h-[360px] sm:min-h-[480px] lg:min-h-[530px]">
              <div className="absolute left-0 top-0 z-10 h-[92%] sm:h-[88%] w-[72%] sm:w-[74%] overflow-hidden">
                <img
                  className="h-full w-full object-contain sm:object-cover object-center sm:object-top"
                  src="/images/batik_04_hero_transparent.webp"
                  alt="Busana Tunik Batik FuRi Valentine"
                  width={753}
                  height={1080}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <HeroFabricSlideshow />
            </div>
          </div>
        </section>

        <section className="service-strip" aria-label="Layanan batik">
          <div className="service-strip-track">
            {[0, 1].map((copy) => (
              <div className="service-strip-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {["Busana siap pakai", "Batik custom", "Pesanan satuan & seragam", "Kain batik"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Koleksi FuRi Valentine Batik — Dual-Row Infinite Looping Marquee ─── */}
        <section className="py-10 sm:py-16 scroll-mt-20 overflow-hidden" id="koleksi">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-10 mb-6 sm:mb-10">
            <h2 className="section-title">Koleksi FuRi Valentine Batik</h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#52627a]">
              Menghadirkan motif ikonik khas Bekasi yang dituangkan ke dalam busana siap pakai dan kain bahan nyaman.
            </p>
          </div>

          {/* 2-Row Dual-Direction Seamless Marquee */}
          <DualRowMarqueeCarousel />
        </section>

        {/* ─── Batik Kantor & Sekolah — 3 Kolom Showcase ─── */}
        <section className="border-y border-[#10233f]/10 scroll-mt-20" id="batik-kantor-sekolah">
          <div className="section-shell py-8 sm:py-12">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="section-title">Batik Kantor dan Sekolah</h2>
              <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#52627a]">
                Pengadaan seragam batik untuk instansi pemerintah, korporat swasta, dan lembaga pendidikan.
              </p>
            </div>
            <PengadaanInlineShowcase />
          </div>
        </section>

        {/* ─── Workshop & Galeri ─── */}
        <section className="section-shell py-8 sm:py-12 my-2 sm:my-0" id="galeri">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="section-title">Lihat bahan dan sampel langsung.</h2>
          </div>
          <div className="grid overflow-hidden rounded-lg bg-[#10233f] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[240px] sm:min-h-[380px] bg-slate-900 overflow-hidden">
              <img className="absolute inset-0 h-full w-full object-cover opacity-75 blur-[1.5px] scale-105" src="/images/workshop_gallery.webp" alt="Workshop & Galeri FuRi Valentine Batik" />
              {/* Mobile bottom fade (disappears at 1/4 height from the bottom) */}
              <div className="sm:hidden absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#10233f] to-transparent pointer-events-none" />
              {/* Desktop right fade into info column */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent to-[#10233f]/75 pointer-events-none" />
              
              {/* Desktop floating map card */}
              <div className="hidden sm:block absolute bottom-8 left-8 rounded-md bg-white p-5 text-[#10233f] shadow-xl">
                <Icon name="map" size={28} />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c51f5d]">Workshop & Galeri</p>
                <strong className="mt-1 block font-serif text-2xl">Bekasi, Jawa Barat</strong>
              </div>

              {/* Clean mobile badge that leaves photo unobstructed */}
              <div className="sm:hidden absolute top-4 left-4 rounded-md bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[#10233f] shadow-lg flex items-center gap-2 backdrop-blur-xs border border-white/40">
                <Icon name="map" size={15} />
                <span>Workshop & Galeri · Bekasi</span>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <h3 className="font-serif text-2xl leading-tight sm:text-3xl">FuRi Valentine Batik</h3>
              <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                <div className="flex gap-3 sm:gap-4">
                  <span className="icon-box"><Icon name="pin" /></span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">Alamat</p><p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed sm:leading-7 text-white/80">Jl. Transad X No. 1A, Jatiranggon,<br />Jatisampurna, Kota Bekasi</p></div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <span className="icon-box"><Icon name="clock" /></span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">Jam Galeri</p><p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed sm:leading-7 text-white/80">Senin – Sabtu · 09.00 – 17.00 WIB<br /><span className="text-xs opacity-75">Minggu dengan reservasi</span></p></div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <span className="icon-box"><Icon name="calendar" /></span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">Reservasi Kunjungan</p><p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed sm:leading-7 text-white/80">Reservasi via WhatsApp sebelum berkunjung.</p></div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                <a className="button-gold" href={mapsUrl} target="_blank" rel="noreferrer"><Icon name="map" /> Buka di Google Maps</a>
                <a className="button-dark-outline" href={`${whatsappUrl}?text=${encodeURIComponent("Halo, saya ingin reservasi kunjungan ke galeri FuRi Valentine Batik.")}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Reservasi</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Kontak / Form Konsultasi ─── */}
        <section className="relative bg-[#0d1c33] border-t border-white/10 py-10 sm:py-16 lg:py-20 text-white" id="kontak">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-10">
            <div>
              <h2 className="section-title">Ceritakan batik yang ingin Anda buat.</h2>
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                <a className="contact-pill" href={instagramUrl} target="_blank" rel="noreferrer"><Icon name="instagram" /> Instagram</a>
                <a className="contact-pill" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Chat WhatsApp</a>
              </div>
            </div>
            <form className="rounded-lg bg-white p-5 text-[#10233f] sm:p-7" onSubmit={submitConsultation}>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <label className="form-label">Nama Anda<input className="form-input" name="name" placeholder="Nama lengkap" required /></label>
                <label className="form-label">Nomor WhatsApp<input className="form-input" name="phone" placeholder="08xx xxxx xxxx" required /></label>
              </div>
              <label className="form-label mt-4 sm:mt-5">Kebutuhan
                <select className="form-input" name="interest" defaultValue="Custom Satuan">
                  <option value="Custom Satuan">Custom Satuan</option>
                  <option value="Seragam Kantor">Seragam Kantor</option>
                  <option value="Seragam Sekolah">Seragam Sekolah</option>
                  <option value="Custom Bulk">Custom Bulk</option>
                  <option value="Kain Bahan satuan">Kain Bahan satuan</option>
                  <option value="Kain Bahan Bulk">Kain Bahan Bulk</option>
                  <option value="Reservasi Gallery">Reservasi Gallery</option>
                </select>
              </label>
              <label className="form-label mt-4 sm:mt-5">Kebutuhan Anda<textarea className="form-input min-h-28 resize-none" name="message" placeholder="Motif, jumlah, dan waktu pemesanan" /></label>
              <button className="button-large mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-md shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#20ba59] hover:shadow-lg hover:shadow-[#25D366]/35 active:scale-[0.99]" type="submit">
                <Icon name="whatsapp" size={22} />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#07101e] border-t border-white/10 py-7 pb-28 md:pb-7 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center text-sm sm:flex-row sm:text-left lg:px-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/images/logo_furi.webp" alt="FuRi Valentine Batik" className="h-8 w-auto object-contain brightness-0 invert" />
            <span className="font-serif text-2xl">FuRi Valentine</span><span className="h-4 w-px bg-white/20" /><span className="text-xs uppercase tracking-widest text-[#d8ab5d]">Batik Bekasi</span>
          </div>
          <p>© 2026 FuRi Valentine Batik. Karya dari Bekasi untuk Nusantara.</p>
          <a className="flex items-center gap-2 text-white hover:text-[#d8ab5d]" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /> Instagram</a>
        </div>
      </footer>


      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomBar whatsappUrl={whatsappUrl} />


    </div>
  );
}

export default App;
