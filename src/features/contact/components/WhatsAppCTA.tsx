"use client";

import React from "react";
import { MessageSquare, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";

export const WhatsAppCTA: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      "Halo Ibu Indah Turiri / FuRi Valentine Batik Bekasi, saya ingin berkonsultasi mengenai pemesanan batik."
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-emerald-700 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-800 hover:shadow-emerald-950/40 border border-emerald-500/30"
      title="Konsultasi WhatsApp Langsung"
    >
      <MessageSquare className="h-5 w-5" />
      <span>Chat WhatsApp</span>
      <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse hidden sm:inline" />
    </button>
  );
};
