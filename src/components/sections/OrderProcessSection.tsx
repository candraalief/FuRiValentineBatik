import React from "react";
import Link from "next/link";
import { ORDERING_STEPS } from "@/services/data/ordering.data";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Container } from "../layout/Container";
import {
  MessageSquare,
  Scissors,
  FileCheck,
  Flame,
  PackageCheck,
  ArrowRight,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export const OrderProcessSection: React.FC = () => {
  const getIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <MessageSquare className="h-6 w-6 text-amber-400" />;
      case 2:
        return <Scissors className="h-6 w-6 text-amber-400" />;
      case 3:
        return <FileCheck className="h-6 w-6 text-amber-400" />;
      case 4:
        return <Flame className="h-6 w-6 text-amber-400" />;
      case 5:
      default:
        return <PackageCheck className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#152238] text-white relative overflow-hidden" id="alur-pemesanan">
      {/* Ambient background lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold text-amber-300 mb-3">
            <FileCheck className="h-3.5 w-3.5" />
            Alur Pemesanan Transparan & Ramah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Bagaimana Cara Memesan Batik di{" "}
            <span className="text-gold-gradient font-serif">FuRi Valentine?</span>
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Kami memahami memesan batik tulis maupun seragam kantor adalah keputusan berharga. Berikut adalah 5 tahapan mudah mulai dari ide motif hingga batik terkirim ke alamat Anda.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {ORDERING_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-[#0d1524]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-1"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/30">
                    {getIcon(step.step)}
                  </div>
                  <span className="text-2xl font-black text-amber-400/40">
                    0{step.step}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Action Hint */}
              <div className="mt-auto border-t border-slate-800 pt-3">
                <p className="text-[11px] text-amber-200/80 font-medium flex items-start gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{step.actionHint}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Order Contact Box */}
        <div className="rounded-3xl border border-amber-600/30 bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 p-8 sm:p-10 backdrop-blur-md text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ingin Mulai Konsultasi Motif atau Seragam Sekarang?
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Ibu Indah Turiri dan tim siap membantu memilihkan motif terbaik, memberikan simulasi harga, serta mengirimkan sampel kain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                "Halo Ibu Indah Turiri / FuRi Valentine Batik, saya ingin konsultasi mengenai alur dan pemesanan batik."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-emerald-500 transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              Chat WhatsApp Langsung (Respons Cepat)
            </a>

            <Link
              href="/cara-pemesanan"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-amber-300 hover:bg-slate-800 hover:border-amber-400 transition-all"
            >
              <HelpCircle className="h-4 w-4 text-amber-400" />
              Panduan Detail & Tanya Jawab (FAQ)
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
