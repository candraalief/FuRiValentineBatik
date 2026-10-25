"use client";

import { FormEvent, useState } from "react";
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
  | "sparkle"
  | "whatsapp"
  | "users"
  | "building"
  | "palette"
  | "close"
  | "zoom-in";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
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
    sparkle: <path d="m12 2 1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Zm6 13 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />,
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
        <path d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-[#f1f7ff] to-[#d9eaff] text-[#10233f]">
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
            <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp</a>
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
          <div className="absolute bottom-0 right-0 top-20 hidden w-[43%] bg-[#10233f] lg:block" />
          <div className="batik-mark absolute left-0 top-40 size-64 opacity-[0.06]" />
          <div className="relative mx-auto grid max-w-7xl gap-6 sm:gap-8 px-5 py-8 sm:py-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-10 lg:py-16">
            <div className="z-10 flex flex-col justify-center">
              <p className="eyebrow"><Icon name="sparkle" size={16} /> Karya Wastra & Batik Custom</p>
              <h1 className="mt-3 sm:mt-4 max-w-3xl font-serif text-[2.25rem] sm:text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1.12] sm:leading-[1.08] tracking-[-0.01em]">
                Batik Bekasi,<br />
                <span className="italic text-[#c51f5d]">pilihanmu.</span>
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-base leading-relaxed text-[#2d3f57] font-normal">
                <strong className="font-semibold text-[#10233f]">FuRI Valentine Batik</strong> menyediakan seragam batik sekolah, seragam kantor, Atasan Wanita, Hem , Kemeja, Bahan Batik, Udeng, Scarf, dll
              </p>
            </div>
            <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-[530px]">
              <div className="absolute left-0 top-0 h-[92%] sm:h-[88%] w-[72%] sm:w-[74%] overflow-hidden rounded-t-[5rem] sm:rounded-t-[9rem] border-[8px] sm:border-[10px] border-white bg-white shadow-2xl shadow-[#091426]/20">
                <img className="h-full w-full object-contain sm:object-cover object-center sm:object-top" src="/images/batik_04.webp" alt="Busana Tunik Batik FuRi Valentine" />
              </div>
              <div className="absolute bottom-0 right-0 h-[56%] sm:h-[60%] w-[56%] sm:w-[56%] overflow-hidden rounded-2xl border-[7px] sm:border-[9px] border-white bg-[#091426] shadow-2xl shadow-[#091426]/30">
                <img className="h-full w-full object-cover object-center scale-110" src="/images/batik_14_hero.webp" alt="Kain Batik Sutra Motif Burung Bangau dan Teratai" />
              </div>
              <div className="absolute bottom-[4%] sm:bottom-[8%] left-[1%] sm:left-[2%] z-10 flex size-24 sm:size-32 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-[#d8ab5d] text-center shadow-xl">
                <span className="font-serif text-xl sm:text-3xl italic">Batik</span>
                <span className="mt-0.5 sm:mt-1 text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.2em]">Bekasi</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Marquee ─── */}
        <section className="bg-[#10233f] py-3.5 sm:py-4 text-[#f6f0e5] shadow-xs">
          <div className="marquee flex min-w-max items-center gap-8 text-xs font-bold uppercase tracking-[0.3em]">
            {["Koleksi Busana Jadi", "Batik Custom", "Pesanan Satuan", "Pesanan Bulk", "Kain Bahan", "Koleksi Busana Jadi"].map((item, index) => (
              <span className="flex items-center gap-8" key={`${item}-${index}`}>{item}<span className="text-[#d8ab5d]">◆</span></span>
            ))}
          </div>
        </section>

        {/* ─── Koleksi FuRi Valentine Batik — Dual-Row Infinite Looping Marquee ─── */}
        <section className="py-10 sm:py-16 scroll-mt-20 overflow-hidden" id="koleksi">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-10 mb-6 sm:mb-10">
            <p className="eyebrow justify-center"><span className="h-px w-8 bg-[#c51f5d]" /> Busana & Kain Batik</p>
            <h2 className="section-title">Koleksi FuRi Valentine Batik</h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#52627a]">
              Menghadirkan motif ikonik khas Bekasi yang dituangkan ke dalam busana siap pakai dan kain bahan nyaman.
            </p>
          </div>

          {/* 2-Row Dual-Direction Seamless Marquee */}
          <DualRowMarqueeCarousel />
        </section>

        {/* ─── Batik Kantor & Sekolah — 3 Kolom Showcase ─── */}
        <section className="border-y border-[#10233f]/10 bg-white/80 sm:bg-white/45 scroll-mt-20 shadow-xs" id="batik-kantor-sekolah">
          <div className="section-shell py-8 sm:py-12">
            <div className="text-center mb-6 sm:mb-8">
              <p className="eyebrow justify-center"><span className="h-px w-8 bg-[#c51f5d]" /> Pengadaan Seragam</p>
              <h2 className="section-title">Batik Kantor dan Sekolah</h2>
              <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#52627a]">
                Pengadaan seragam batik untuk instansi pemerintah, korporat swasta, dan lembaga pendidikan.
              </p>
            </div>
            <PengadaanInlineShowcase whatsappUrl={whatsappUrl} />
          </div>
        </section>

        {/* ─── Workshop & Galeri ─── */}
        <section className="section-shell py-8 sm:py-12 my-2 sm:my-0" id="galeri">
          <div className="mb-6 text-center sm:mb-8">
            <p className="eyebrow justify-center"><span className="h-px w-8 bg-[#c51f5d]" /> Workshop & Galeri</p>
            <h2 className="section-title">Lihat bahan dan sampel langsung.</h2>
          </div>
          <div className="grid overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[#10233f] text-white shadow-2xl shadow-[#10233f]/15 lg:grid-cols-[1.1fr_0.9fr] border border-[#10233f]/10">
            <div className="relative min-h-[240px] sm:min-h-[380px] bg-slate-900 overflow-hidden">
              <img className="absolute inset-0 h-full w-full object-cover opacity-75 blur-[1.5px] scale-105" src="/images/workshop_gallery.webp" alt="Workshop & Galeri FuRi Valentine Batik" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10233f] via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#10233f]/75" />
              
              {/* Desktop floating map card */}
              <div className="hidden sm:block absolute bottom-8 left-8 rounded-xl bg-white p-5 text-[#10233f] shadow-xl">
                <Icon name="map" size={28} />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c51f5d]">Workshop & Galeri</p>
                <strong className="mt-1 block font-serif text-2xl">Bekasi, Jawa Barat</strong>
              </div>

              {/* Clean mobile badge that leaves photo unobstructed */}
              <div className="sm:hidden absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[#10233f] shadow-lg flex items-center gap-2 backdrop-blur-xs border border-white/40">
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
              <p className="eyebrow text-[#eccf9e]"><span className="h-px w-8 bg-[#eccf9e]" /> Konsultasi Batik Custom</p>
              <h2 className="section-title">Ceritakan batik yang ingin Anda buat.</h2>
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                <a className="contact-pill" href={instagramUrl} target="_blank" rel="noreferrer"><Icon name="instagram" /> Instagram</a>
                <a className="contact-pill" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Chat WhatsApp</a>
              </div>
            </div>
            <form className="rounded-2xl sm:rounded-3xl bg-white p-5 text-[#10233f] shadow-2xl sm:p-7 border border-white/20" onSubmit={submitConsultation}>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <label className="form-label">Nama Anda<input className="form-input" name="name" placeholder="Nama lengkap" required /></label>
                <label className="form-label">Nomor WhatsApp<input className="form-input" name="phone" placeholder="08xx xxxx xxxx" required /></label>
              </div>
              <label className="form-label mt-4 sm:mt-5">Kebutuhan
                <select className="form-input" name="interest" defaultValue="Batik Custom Satuan">
                  <option>Batik Custom Satuan</option><option>Pesanan Bulk</option><option>Koleksi Busana Jadi</option><option>Kain Bahan</option><option>Reservasi Galeri</option>
                </select>
              </label>
              <label className="form-label mt-4 sm:mt-5">Kebutuhan Anda<textarea className="form-input min-h-28 resize-none" name="message" placeholder="Motif, jumlah, dan waktu pemesanan" /></label>
              <button className="button-primary button-large mt-6 w-full" type="submit">Kirim via WhatsApp <Icon name="arrow" /></button>
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
          <p>© 2025 FuRi Valentine Batik. Karya dari Bekasi untuk Nusantara.</p>
          <a className="flex items-center gap-2 text-white hover:text-[#d8ab5d]" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /> Instagram</a>
        </div>
      </footer>


      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomBar whatsappUrl={whatsappUrl} />


    </div>
  );
}

export default App;
