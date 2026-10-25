import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valentinebatik.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FuRi Valentine Batik — Pelopor Batik Motif Khas Kota Bekasi",
    template: "%s | FuRi Valentine Batik",
  },
  description:
    "FuRi Valentine Batik (Valentine Batik) didirikan oleh Ibu Indah Turiri sejak 2007 di Jatiranggon, Bekasi. Menyediakan seragam batik sekolah, seragam kantor dinas, atasan wanita, hem, kemeja pria, bahan batik tulis & cap, udeng, scarf, dan batik custom khas Bekasi.",
  keywords: [
    "Batik Bekasi",
    "FuRi Valentine Batik",
    "Valentine Batik",
    "Batik Khas Bekasi",
    "Seragam Batik Sekolah Bekasi",
    "Seragam Batik Kantor",
    "Batik Tulis Bekasi",
    "Batik Cap Bekasi",
    "Indah Turiri",
    "Motif Ikan Gabus Bekasi",
    "Motif Bambu Runcing Patriot",
    "Motif Rawa Tembaga",
    "Batik Jatiranggon Jatisampurna",
    "Pabrik Batik Bekasi",
  ],
  authors: [{ name: "Indah Turiri - FuRi Valentine Batik" }],
  creator: "FuRi Valentine Batik",
  publisher: "FuRi Valentine Batik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: [
      "YXpWp7iQGkPXIvBf00UmtbNRubU9UWabcLZTd_DCZ-s",
      "RuzPxBagMZ2Oaaiw7ihjpI5YrFGOVeTuZfGcLwZ4LC0",
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "FuRi Valentine Batik",
    title: "FuRi Valentine Batik — Pelopor Seni Batik Motif Khas Kota Bekasi",
    description:
      "Seragam batik sekolah, batik instansi & korporat, busana wanita, kemeja pria, bahan kain batik tulis dan cap khas Bekasi.",
    images: [
      {
        url: "/images/batik_04.webp",
        width: 1080,
        height: 1350,
        alt: "Koleksi Busana Batik Khas Bekasi - FuRi Valentine Batik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuRi Valentine Batik — Batik Khas Bekasi",
    description:
      "Penyedia seragam batik kantor, sekolah, dan kain batik tulis & cap khas Kota Bekasi.",
    images: ["/images/batik_04.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ClothingStore"],
  name: "FuRi Valentine Batik",
  alternateName: ["Valentine Batik", "FuRi Batik Bekasi"],
  image: `${siteUrl}/images/batik_04.webp`,
  logo: `${siteUrl}/images/logo_furi.png`,
  description:
    "Pelopor seni batik khas Kota Bekasi sejak 2007. Melayani pengadaan seragam batik sekolah, seragam kantor, instansi kedinasan, busana pesta, kemeja, dan kain batik tulis serta cap adiluhung.",
  url: siteUrl,
  telephone: "+6285866140707",
  founder: {
    "@type": "Person",
    name: "Indah Turiri",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Transad X No. 1A, RT 01/08",
    addressLocality: "Jatiranggon, Jatisampurna",
    addressRegion: "Kota Bekasi, Jawa Barat",
    postalCode: "17432",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.3458,
    longitude: 106.9284,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/indahturiri/",
    "https://facebook.com/valentinebatikbekasi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
