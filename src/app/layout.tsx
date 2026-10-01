import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/features/contact/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "FuRi Valentine Batik",
    "Batik Tulis Sutra",
    "Batik Cap Kontemporer",
    "Batik Heritage Indonesia",
    "Batik Mewah",
    "Batik Solo Yogyakarta",
    "Wastra Nusantara",
  ],
  authors: [{ name: "FuRi Valentine Batik" }],
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
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
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A1A1A] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
