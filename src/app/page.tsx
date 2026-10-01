"use client";

import { FormEvent, useRef, useState } from "react";

const whatsappNumber = "6281234567890";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Jl.+Transad+X+No.+1A,+Jatiranggon,+Jatisampurna,+Kota+Bekasi";

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
  | "whatsapp";

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

const readyCategories = ["Semua", "Hem / Kemeja", "Blus", "Tunik", "Dress", "Outer", "Rok", "Setelan", "Kain Batik"];

const readyProducts = [
  {
    category: "Hem / Kemeja",
    title: "Kemeja Batik Patriot",
    image:
      "https://images.unsplash.com/photo-1761516659902-2994696b362e?auto=format&fit=crop&w=1000&q=85",
    number: "01",
  },
  {
    category: "Dress",
    title: "Dress Arunika",
    image:
      "https://images.unsplash.com/photo-1761516659766-c092d4b1209d?auto=format&fit=crop&w=1000&q=85",
    number: "02",
  },
  {
    category: "Kain Batik",
    title: "Batik Tulis Halus",
    image:
      "https://images.unsplash.com/photo-1680345575812-2f6878d7d775?auto=format&fit=crop&w=1000&q=85",
    number: "03",
  },
  {
    category: "Kain Batik",
    title: "Batik Cap Patriot Bekasi",
    image:
      "https://images.unsplash.com/photo-1661144050353-1d2566cbdf03?auto=format&fit=crop&w=1000&q=85",
    number: "04",
  },
];

const groupProducts = [
  {
    category: "Kantor",
    title: "Batik Kantor",
    image: readyProducts[0].image,
    number: "01",
  },
  {
    category: "Sekolah",
    title: "Batik Sekolah",
    image: readyProducts[3].image,
    number: "02",
  },
  {
    category: "Custom",
    title: "Motif untuk Bersama",
    image: readyProducts[2].image,
    number: "03",
  },
];

function ProductCarousel({
  products,
  id,
  custom = false,
}: {
  products: typeof readyProducts;
  id: string;
  custom?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = custom
    ? ["Semua", ...new Set(products.map((product) => product.category))]
    : readyCategories;
  const visibleProducts = activeCategory === "Semua"
    ? products
    : products.filter((product) => product.category === activeCategory);

  function move(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const distance = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <>
      <div className="mt-6 flex items-start justify-between gap-3 border-t border-[#10233f]/15 pt-4">
        <div role="group" aria-label={custom ? "Filter kategori batik kantor dan sekolah" : "Filter kategori koleksi toko"} className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              aria-controls={id}
              onClick={() => {
                setActiveCategory(category);
                setPosition(0);
              }}
              className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium leading-5 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f5d] ${activeCategory === category ? "border-[#c51f5d] bg-[#c51f5d] text-white" : "border-[#10233f]/20 text-[#52627a] hover:border-[#c51f5d] hover:text-[#c51f5d]"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={`flex shrink-0 gap-2 ${visibleProducts.length < 2 ? "hidden" : ""}`}>
          <button type="button" aria-label="Koleksi sebelumnya" aria-controls={id} onClick={() => move(-1)} className="flex size-11 items-center justify-center rounded-full border border-[#10233f]/20 text-[#10233f] transition hover:border-[#c51f5d] hover:text-[#c51f5d] focus-visible:outline-2 focus-visible:outline-offset-4">
            <span className="rotate-180"><Icon name="arrow" size={18} /></span>
          </button>
          <button type="button" aria-label="Koleksi berikutnya" aria-controls={id} onClick={() => move(1)} className="flex size-11 items-center justify-center rounded-full border border-[#10233f]/20 text-[#10233f] transition hover:border-[#c51f5d] hover:text-[#c51f5d] focus-visible:outline-2 focus-visible:outline-offset-4">
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
      <div
        key={activeCategory}
        ref={trackRef}
        id={id}
        role="region"
        aria-label={custom ? "Koleksi batik kantor dan sekolah" : "Koleksi siap dibeli di toko"}
        tabIndex={0}
        onScroll={(event) => {
          const track = event.currentTarget;
          const maxScroll = track.scrollWidth - track.clientWidth;
          setPosition(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
        }}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c51f5d]"
      >
        {visibleProducts.length === 0 && (
          <div className="w-full border border-[#10233f]/10 bg-white/60 px-5 py-8 text-center sm:py-10">
            <h3 className="font-serif text-2xl leading-snug">Koleksi {activeCategory}</h3>
            <p className="mt-2 text-sm text-[#52627a]">Produk belum ditampilkan.</p>
            <a className="button-outline mt-6" href={`${whatsappUrl}?text=${encodeURIComponent(`Halo FuRi Valentine Batik, apakah ada koleksi ${activeCategory}? Saya ingin menanyakan pilihan dan ketersediaannya.`)}`} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> Tanya koleksi
            </a>
          </div>
        )}
        {visibleProducts.map((product) => (
          <article className="group w-[85%] shrink-0 snap-start overflow-hidden border border-[#10233f]/10 bg-white/80 sm:w-[calc((100%-16px)/2)] lg:w-[38%]" key={product.title}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d7c7b2]">
              <img loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={product.image} alt={product.title} />
              <span className="absolute left-4 top-4 rounded-full bg-[#f6f0e5]/90 px-3 py-1.5 text-xs font-medium leading-4 backdrop-blur">{product.category}</span>
              <span className="absolute bottom-3 right-4 font-serif text-5xl italic text-white/70">{product.number}</span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl leading-snug sm:text-2xl">{product.title}</h3>
              <a className="mt-4 flex min-h-11 items-center justify-between gap-3 border-t border-[#10233f]/10 pt-2 text-sm font-semibold text-[#c51f5d]" href={`${whatsappUrl}?text=${encodeURIComponent(custom ? `Halo, saya ingin berkonsultasi mengenai ${product.title}.` : `Halo, saya tertarik dengan ${product.title}. Boleh info ketersediaannya untuk dibeli langsung di toko?`)}`} target="_blank" rel="noreferrer">
                {custom ? "Konsultasikan pesanan" : "Tanya ketersediaan"} <Icon name="arrow" size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className={`flex items-center gap-2 ${visibleProducts.length < 2 ? "hidden" : ""}`} aria-hidden="true">
        {[0, 0.5, 1].map((step) => (
          <span key={step} className={`h-1 rounded-full transition-all ${Math.abs(position - step) <= 0.25 ? "w-8 bg-[#c51f5d]" : "w-3 bg-[#10233f]/15"}`} />
        ))}
      </div>
    </>
  );
}

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
            <span className="flex size-8 rotate-45 items-center justify-center border border-[#c51f5d] sm:size-9">
              <span className="-rotate-45 font-serif text-base text-[#c51f5d] sm:text-lg">FV</span>
            </span>
            <strong className="whitespace-nowrap font-serif text-base font-normal leading-tight tracking-normal sm:text-xl">FuRi Valentine Batik</strong>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium xl:flex">
            <a className="nav-link" href="#koleksi">Koleksi</a>
            <a className="nav-link" href="#kisah">Kisah Kami</a>
            <a className="nav-link" href="#galeri">Kunjungi Galeri</a>
            <a className="nav-link" href="#kontak">Kontak</a>
          </nav>
          <div className="ml-auto hidden items-center gap-2 md:flex xl:ml-0">
            <a className="button-outline hidden xl:inline-flex" href={`tel:+${whatsappNumber}`}><Icon name="phone" size={17} /> Telepon</a>
            <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> Konsultasi Custom</a>
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
              ["Kisah Kami", "#kisah"],
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
        <section className="relative pt-20" id="beranda">
          <div className="absolute bottom-0 right-0 top-20 hidden w-[43%] bg-[#10233f] lg:block" />
          <div className="batik-mark absolute left-0 top-40 size-64 opacity-[0.06]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:py-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-10 lg:py-16">
            <div className="z-10 flex flex-col justify-center">
              <p className="eyebrow"><Icon name="sparkle" size={16} /> Koleksi Jadi & Batik Custom</p>
              <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.01em]">
                Batik Bekasi,<br />
                <span className="italic text-[#c51f5d]">pilihanmu.</span>
              </h1>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a className="button-primary button-large" href="#koleksi">Lihat Koleksi Jadi <Icon name="arrow" /></a>
                <a className="button-ghost button-large" href={`${whatsappUrl}?text=${encodeURIComponent("Halo, saya ingin berkonsultasi mengenai pesanan batik custom.")}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Pesan Batik Custom</a>
              </div>
            </div>
            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[500px]">
              <div className="absolute left-0 top-0 h-[76%] w-[72%] overflow-hidden rounded-t-[9rem] border-[10px] border-white bg-[#d7c7b2] shadow-2xl shadow-[#091426]/20">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635790073975-ac99496914e3?auto=format&fit=crop&w=1200&q=88" alt="Perajin membatik dengan canting" />
              </div>
              <div className="absolute bottom-0 right-0 h-[58%] w-[54%] overflow-hidden border-[9px] border-white bg-[#ad8b74] shadow-2xl shadow-[#091426]/30">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1616125162686-770bf85622b9?auto=format&fit=crop&w=900&q=88" alt="Detail kain batik bernuansa klasik" />
              </div>
              <div className="absolute bottom-[13%] left-[3%] z-10 flex size-32 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-[#d8ab5d] text-center shadow-xl">
                <span className="font-serif text-3xl italic">Batik</span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]">Bekasi</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#10233f] py-4 text-[#f6f0e5]">
          <div className="marquee flex min-w-max items-center gap-8 text-xs font-bold uppercase tracking-[0.3em]">
            {["Koleksi Busana Jadi", "Batik Custom", "Pesanan Satuan", "Pesanan Bulk", "Kain Bahan", "Koleksi Busana Jadi"].map((item, index) => (
              <span className="flex items-center gap-8" key={`${item}-${index}`}>{item}<span className="text-[#d8ab5d]">◆</span></span>
            ))}
          </div>
        </section>

        <section className="section-shell scroll-mt-20" id="koleksi">
          <div>
            <p className="eyebrow"><span className="h-px w-8 bg-[#c51f5d]" /> 01 / Koleksi Toko</p>
            <h2 className="section-title">Lihat, suka, bawa pulang.</h2>
          </div>
          <ProductCarousel products={readyProducts} id="koleksi-toko" />
          <a className="button-outline mt-5" href="#galeri">Kunjungi toko <Icon name="arrow" size={18} /></a>
        </section>

        <section className="border-y border-[#10233f]/10 bg-white/45" id="batik-kantor-sekolah">
          <div className="section-shell">
            <div>
              <p className="eyebrow"><span className="h-px w-8 bg-[#c51f5d]" /> 02 / Pesanan Bersama</p>
              <h2 className="section-title">Batik Kantor dan Sekolah</h2>
            </div>
            <ProductCarousel products={groupProducts} id="koleksi-kantor-sekolah" custom />
          </div>
        </section>

        <section className="overflow-hidden bg-[#e7f1ff]" id="kisah">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
              <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1590251869641-dd94fb569954?auto=format&fit=crop&w=1400&q=88" alt="Proses kreatif perajin batik" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/55 via-transparent" />
            </div>
            <div className="flex items-center px-5 py-12 sm:py-16 lg:px-10">
              <div>
                <p className="eyebrow"><span className="h-px w-8 bg-[#c51f5d]" /> Produksi di Bekasi</p>
                <h2 className="section-title">Dari ide hingga <em className="text-[#c51f5d]">batik jadi.</em></h2>
                <a className="button-outline mt-6" href={`${whatsappUrl}?text=${encodeURIComponent("Halo, saya ingin menanyakan proses pemesanan batik custom.")}`} target="_blank" rel="noreferrer">Tanya proses custom <Icon name="arrow" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell" id="galeri">
          <div className="mb-6 text-center sm:mb-8">
            <p className="eyebrow justify-center"><span className="h-px w-8 bg-[#c51f5d]" /> Workshop & Galeri</p>
            <h2 className="section-title">Lihat bahan dan sampel langsung.</h2>
          </div>
          <div className="grid overflow-hidden rounded-[2rem] bg-[#10233f] text-white shadow-2xl shadow-[#10233f]/15 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[300px] sm:min-h-[380px]">
              <img className="absolute inset-0 h-full w-full object-cover opacity-75" src="https://images.unsplash.com/photo-1604973104381-870c92f10343?auto=format&fit=crop&w=1400&q=88" alt="Suasana workshop batik" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10233f]/55" />
                <div className="absolute bottom-8 left-8 rounded-xl bg-white p-5 text-[#10233f] shadow-xl">
                <Icon name="map" size={28} />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c51f5d]">Workshop & Galeri</p>
                <strong className="mt-1 block font-serif text-2xl">Bekasi, Jawa Barat</strong>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl leading-tight sm:text-3xl">FuRi Valentine Batik</h3>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="icon-box"><Icon name="pin" /></span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">Alamat</p><p className="mt-2 leading-7 text-white/75">Jl. Transad X No. 1A, Jatiranggon,<br />Jatisampurna, Kota Bekasi</p></div>
                </div>
                <div className="flex gap-4">
                  <span className="icon-box"><Icon name="clock" /></span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">Jam Galeri</p><p className="mt-2 leading-7 text-white/75">Senin – Sabtu · 09.00 – 17.00 WIB<br /><span className="text-xs">Minggu dengan reservasi</span></p></div>
                </div>
                <div className="flex gap-4">
                  <span className="icon-box"><Icon name="calendar" /></span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-[#d8ab5d]">Reservasi Kunjungan</p><p className="mt-2 leading-7 text-white/75">Reservasi via WhatsApp sebelum berkunjung.</p></div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="button-gold" href={mapsUrl} target="_blank" rel="noreferrer"><Icon name="map" /> Buka di Google Maps</a>
                <a className="button-dark-outline" href={`${whatsappUrl}?text=${encodeURIComponent("Halo, saya ingin reservasi kunjungan ke galeri FuRi Valentine Batik.")}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Reservasi</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#10233f] py-12 text-white sm:py-16 lg:py-20" id="kontak">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-10">
            <div>
              <p className="eyebrow text-[#eccf9e]"><span className="h-px w-8 bg-[#eccf9e]" /> Konsultasi Batik Custom</p>
              <h2 className="section-title">Ceritakan batik yang ingin Anda buat.</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="contact-pill" href={`tel:+${whatsappNumber}`}><Icon name="phone" /> Telepon Langsung</a>
                <a className="contact-pill" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Chat WhatsApp</a>
              </div>
            </div>
            <form className="rounded-3xl bg-white p-5 text-[#10233f] shadow-2xl sm:p-7" onSubmit={submitConsultation}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">Nama Anda<input className="form-input" name="name" placeholder="Nama lengkap" required /></label>
                <label className="form-label">Nomor WhatsApp<input className="form-input" name="phone" placeholder="08xx xxxx xxxx" required /></label>
              </div>
              <label className="form-label mt-5">Kebutuhan
                <select className="form-input" name="interest" defaultValue="Batik Custom Satuan">
                  <option>Batik Custom Satuan</option><option>Pesanan Bulk</option><option>Koleksi Busana Jadi</option><option>Kain Bahan</option><option>Reservasi Galeri</option>
                </select>
              </label>
              <label className="form-label mt-5">Kebutuhan Anda<textarea className="form-input min-h-28 resize-none" name="message" placeholder="Motif, jumlah, dan waktu pemesanan" /></label>
              <button className="button-primary button-large mt-6 w-full" type="submit">Kirim via WhatsApp <Icon name="arrow" /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b172a] py-7 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center text-sm sm:flex-row sm:text-left lg:px-10">
          <div className="flex items-center gap-3 text-white">
            <span className="font-serif text-2xl">FuRi Valentine</span><span className="h-4 w-px bg-white/20" /><span className="text-xs uppercase tracking-widest text-[#d8ab5d]">Batik Bekasi</span>
          </div>
          <p>© 2025 FuRi Valentine Batik. Karya dari Bekasi untuk Nusantara.</p>
          <a className="flex items-center gap-2 text-white hover:text-[#d8ab5d]" href="#" aria-label="Instagram"><Icon name="instagram" /> Instagram</a>
        </div>
      </footer>

      <a className="floating-wa group" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp">
        <span className="hidden font-medium sm:block">Tanya kami</span><Icon name="whatsapp" size={22} />
      </a>
    </div>
  );
}

export default App;
