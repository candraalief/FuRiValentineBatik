import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valentinebatik.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Valentine Batik — FuRi Valentine Batik Motif Khas Kota Bekasi",
    template: "%s | Valentine Batik",
  },
  description:
    "Valentine Batik (FuRi Valentine Batik) didirikan oleh Ibu Indah Turiri sejak 2007 di Jatiranggon, Bekasi. Menyediakan seragam batik sekolah, seragam kantor dinas, atasan wanita, hem, kemeja pria, bahan batik tulis & cap, udeng, scarf, dan batik custom khas Bekasi.",
  keywords: [
    "Valentine Batik",
    "Batik Valentine",
    "FuRi Valentine Batik",
    "Batik Bekasi",
    "Valentine Batik Bekasi",
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
  publisher: "Valentine Batik",
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
    siteName: "Valentine Batik",
    title: "Valentine Batik — FuRi Valentine Batik Motif Khas Kota Bekasi",
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
    title: "Valentine Batik — FuRi Valentine Batik Bekasi",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Valentine Batik",
      alternateName: [
        "FuRi Valentine Batik",
        "FuRi Valentine",
        "Valentine Batik Bekasi",
      ],
      description:
        "Pusat batik khas Bekasi, seragam batik kantor, sekolah, dan kain batik adiluhung karya Valentine Batik (FuRi Valentine).",
      inLanguage: "id-ID",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": ["LocalBusiness", "ClothingStore"],
      "@id": `${siteUrl}/#organization`,
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
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
