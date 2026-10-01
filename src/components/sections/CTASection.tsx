import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";
import { ParangPattern } from "@/components/svg";
import { MessageSquare, Calendar, Sparkles } from "lucide-react";
import { Container } from "../layout/Container";

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#152238] via-[#101b2d] to-[#0a111c] text-white py-20">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <ParangPattern color="#E8C37B" opacity={0.5} />
      </div>

      <Container className="relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold text-amber-300 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          Kunjungan Private & Konsultasi Motif
        </span>

        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
          Wujudkan Mahakarya Batik Impian Anda Bersama{" "}
          <span className="text-gold-gradient font-serif">FuRi Valentine</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Kami menyambut Anda untuk berkunjung ke Private Atelier di Menteng atau berkonsultasi secara personal dengan tim kurator wastra kami melalui WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all hover:bg-amber-500"
          >
            <Calendar className="h-4 w-4" />
            Reservasi Kunjungan Showroom
          </Link>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
              "Halo FuRi Valentine Batik, saya ingin konsultasi mengenai pesanan batik khusus."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-600/20 px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-600 hover:text-white"
          >
            <MessageSquare className="h-4 w-4" />
            Konsultasi Langsung via WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
};
