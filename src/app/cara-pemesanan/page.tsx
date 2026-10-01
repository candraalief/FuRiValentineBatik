import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { OrderProcessSection } from "@/components/sections/OrderProcessSection";
import { ORDERING_FAQS } from "@/services/data/ordering.data";
import { SITE_CONFIG } from "@/lib/constants/site";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { MessageSquare, PhoneCall, HelpCircle, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alur & Panduan Pemesanan Batik — FuRi Valentine",
  description:
    "Panduan lengkap cara memesan kain batik tulis, kemeja batik cap, dan seragam dinas/kantor kustom khas Kota Bekasi di FuRi Valentine Batik.",
};

export default function CaraPemesananPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-900 mb-3">
            Panduan Konsumen & Kemitraan
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
            Alur & Tata Cara Pemesanan Batik FuRi Valentine
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Dari pemilihan motif khas Bekasi hingga pengiriman sampai ke tangan Anda. Proses transparan, konsultasi langsung bersama perancang dan pengrajin kami.
          </p>
        </div>

        {/* 3 Kategori Pemesanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
              01 • Pesanan Satuan
            </span>
            <h3 className="mt-4 text-lg font-bold text-stone-900">Kain Tulis & Busana Siap Pakai</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Cocok bagi kolektor wastra, busana formal pria/wanita, dan kado spesial edisi Valentine. Anda dapat memilih motif yang sudah tersedia di ekspo kami atau meminta ukuran badan kustom.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Minimal order: 1 potong
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Konsultasi ukuran & furing gratis
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-900/20 bg-amber-50/50 p-7 shadow-sm">
            <span className="rounded-full bg-amber-800 px-3 py-1 text-xs font-bold text-white">
              02 • Seragam Instansi & Dinas
            </span>
            <h3 className="mt-4 text-lg font-bold text-stone-900">Batik Kantor & Pemerintahan</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Solusi seragam batik identitas instansi Kota Bekasi, BUMN, sekolah, maupun perusahaan swasta dengan motif khas patriotik Bekasi yang dapat dipadukan dengan logo instansi Anda.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Minimal order: 20–30 potong
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Harga khusus mitra & pembuatan sampel
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
              03 • Seragam Hajatan & Keluarga
            </span>
            <h3 className="mt-4 text-lg font-bold text-stone-900">Pernikahan & Acara Adat</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Kombinasi motif sarimbit (pasangan) keluarga besar dengan pilihan warna tematik serasi untuk momen pernikahan atau perayaan penting keluarga.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Fleksibel ukuran anak hingga dewasa
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Pilihan bahan sejuk di iklim tropis
              </li>
            </ul>
          </div>
        </div>

        {/* The 5 Steps */}
        <div className="mb-20">
          <OrderProcessSection />
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <HelpCircle className="h-8 w-8 text-amber-800 mx-auto mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Informasi praktis seputar pemesanan, minimal order, dan pengiriman.
            </p>
          </div>

          <div className="space-y-4">
            {ORDERING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form & Consultation CTA */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-amber-900/15 bg-white p-6 sm:p-10 shadow-lg">
          <div className="mb-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Formulir Tanya Jawab & Permintaan Penawaran
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-600">
              Kirimkan detail kebutuhan Anda, atau hubungi langsung via WhatsApp untuk respons instan.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
