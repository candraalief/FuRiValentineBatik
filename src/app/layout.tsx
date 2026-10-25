import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FuRi Valentine Batik",
  description:
    "FuRi Valentine Batik menyediakan seragam batik sekolah, seragam kantor, Atasan Wanita, Hem, Kemeja, Bahan Batik, Udeng, Scarf, dan batik custom khas Bekasi.",
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
