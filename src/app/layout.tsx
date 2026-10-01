import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Figma Make App",
  description:
    "Showcases FuRi Valentine Batik products with visual catalogs, direct WhatsApp contact, location details, and easy booking for gallery visits.",
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
    <html
      lang="id"
      className={`scroll-smooth ${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="min-h-screen text-[#10233f] antialiased">
        {children}
      </body>
    </html>
  );
}
