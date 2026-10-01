import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma Make App",
  description:
    "Showcases FuRi Valentine Batik products with visual catalogs, direct WhatsApp contact, location details, and easy booking for gallery visits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
