import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FigmaNavbar } from "@/components/figma/FigmaNavbar";
import { FigmaFooter } from "@/components/figma/FigmaFooter";
import { FloatingWhatsApp } from "@/components/figma/FloatingWhatsApp";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "FuRi Valentine Batik — Batik Bekasi, Pilihanmu",
    template: "%s | FuRi Valentine Batik",
  },
  description:
    "Showcases FuRi Valentine Batik products with visual catalogs, direct WhatsApp contact, location details, and easy booking for gallery visits in Bekasi.",
  keywords: [
    "FuRi Valentine Batik",
    "Batik Bekasi",
    "Batik Patriot",
    "Batik Tulis Halus",
    "Batik Cap",
    "Batik Kantor",
    "Batik Sekolah",
    "Jatisampurna Bekasi",
  ],
  icons: {
    icon: "/assets/svg/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-screen text-[#10233f] antialiased">
        <FigmaNavbar />
        {children}
        <FigmaFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
