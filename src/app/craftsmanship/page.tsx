import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProcessTimeline } from "@/features/story/components/ProcessTimeline";
import { CantingIcon, EcoDyeIcon, SilkIcon } from "@/components/svg";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Sparkles, ArrowRight, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Filosofi Motif Khas Bekasi & Seni Pembuatan Batik",
  description:
    "Mengenal filosofi motif batik khas Kota Bekasi (Ikan Gabus, Bambu Runcing, Rawa Tembaga) dan proses pengerjaan canting tulis serta cap tembaga di FuRi Valentine Batik.",
};

export default function CraftsmanshipPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            <CantingIcon className="h-4 w-4 text-amber-700" />
            Kearifan Lokal Kota Patriot
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Filosofi Motif Khas Bekasi & Seni Pengerjaan Batik
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Setiap motif batik yang lahir di FuRi Valentine membawa untaian narasi tentang identitas, sejarah perjuangan, dan kearifan alam tanah Bekasi.
          </p>
        </div>

        {/* 4 Detail Motif Khas Bekasi Cards */}
        <div className="mb-20 space-y-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-stone-900">
              Kisah di Balik Motif Ikonik Bekasi
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Ragam motif yang sering dipesan oleh instansi dinas pemerintah dan pecinta budaya lokal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                01 • Ikon Fauna & Kuliner
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-3 mb-2">Motif Ikan Gabus Bekasi</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Di masa lalu saat Bekasi masih berupa hamparan rawa, ikan gabus menjadi penopang kehidupan dan bahan dasar kuliner legendaris <em>Gabus Pucung</em>. Dalam batik, stilasi sisik dan bentuk ikan gabus melambangkan kegigihan bertahan hidup dalam berbagai kondisi air.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                02 • Ikon Heroisme & Sejarah
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-3 mb-2">Motif Bambu Runcing Patriot</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Kota Bekasi berjuluk Kota Patriot berkat heroisme para pejuang di bawah pimpinan pahlawan nasional KH Noer Ali. Garis tegak bambu runcing dipadu daun bambu melambangkan keberanian, keteguhan hati, dan semangat pantang menyerah.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                03 • Lanskap Alam Bersejarah
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-3 mb-2">Motif Rawa Tembaga & Air</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Mengabadikan legenda kawasan Rawa Tembaga dan aliran Kali Malang yang membelah kota. Corak gelombang air dan lumpur tembaga menyiratkan kesuburan tanah, kelenturan berpikir, dan ketenangan jiwa.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                04 • Seni Tradisi Betawi-Bekasi
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-3 mb-2">Motif Gedung Juang & Tari Topeng</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Paduan ornamen kolonial khas Gedung Juang 45 Tambun dengan ekspresi wajah ceria topeng Betawi-Bekasi yang mencerminkan sifat ramah, terbuka, dan egaliter masyarakat Bekasi.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Tahapan Proses Pengerjaan */}
        <div className="rounded-3xl border border-stone-200 bg-stone-50/70 p-6 sm:p-12 mb-20">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Proses Pembuatan
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-900">
              Karya Tangan Asli Tanpa Cetak Sablon
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Di FuRi Valentine Batik, setiap kain diproduksi secara manual melalui teknik batik cap tembaga maupun canting tulis lilin malam panas.
            </p>
          </div>

          <ProcessTimeline />
        </div>

        {/* Tips Merawat Batik */}
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 mb-20">
          <h3 className="text-xl font-bold text-stone-900 mb-4">
            Panduan Merawat Kain & Busana Batik
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-600">
            <div className="space-y-1.5">
              <p className="font-bold text-stone-900">1. Gunakan Sabun Lerak</p>
              <p>Hindari deterjen berbahan kimia keras. Gunakan sabun khusus batik lerak atau shampoo bayi lembut untuk menjaga keawetan warna alami.</p>
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-stone-900">2. Jangan Jemur di Terik Matahari</p>
              <p>Cukup diangin-anginkan di tempat yang teduh beratap sejuk agar warna soga dan pigmen batik tidak cepat memudar.</p>
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-stone-900">3. Setrika dengan Lapisan Kain</p>
              <p>Alasi permukaan batik dengan kain tipis saat menyetrika, atau semprotkan sedikit air agar serat sutra dan katun tetap rapi berkilau.</p>
            </div>
          </div>
        </div>

        {/* Direct Action */}
        <div className="text-center rounded-3xl bg-[#152238] text-white p-8 sm:p-12">
          <Sparkles className="h-8 w-8 text-amber-400 mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl font-bold">Ingin Mengembangkan Motif Batik Khas Instansi Anda?</h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
            Kami siap membantu mendesain motif kombinasi antara identitas instansi dan motif khas Bekasi. Konsultasikan langsung bersama tim kami.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                "Halo Ibu Indah Turiri / FuRi Valentine Batik, saya ingin berdiskusi mengenai pembuatan motif batik kustom."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Chat WhatsApp Konsultasi Desain
            </a>

            <Link
              href="/cara-pemesanan"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-600 px-6 py-3 text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors"
            >
              Lihat Alur Pemesanan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
