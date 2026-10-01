import React from "react";
import { FigmaIcon } from "./FigmaIcons";
import { SITE_CONFIG } from "@/lib/constants/site";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      className="floating-wa group"
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
    >
      <span className="hidden font-medium sm:block">Tanya kami</span>
      <FigmaIcon name="whatsapp" size={22} />
    </a>
  );
};
