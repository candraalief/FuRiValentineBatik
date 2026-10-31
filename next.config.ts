import type { NextConfig } from "next";

const isCloudflare = process.env.CF_PAGES === "1" || process.env.OUTPUT_EXPORT === "true";

const nextConfig: NextConfig = {
  // Static export mode untuk Cloudflare Pages
  ...(isCloudflare && {
    output: "export",
    images: {
      unoptimized: true,
    },
  }),

  // Redirects bawaan Next.js tetap aktif untuk Vercel & local development
  ...(!isCloudflare && {
    async redirects() {
      return [
        {
          source: "/koleksi/:path*",
          destination: "/#koleksi",
          permanent: false,
        },
        {
          source: "/collections/:path*",
          destination: "/#koleksi",
          permanent: false,
        },
        {
          source: "/about",
          destination: "/#galeri",
          permanent: false,
        },
        {
          source: "/contact",
          destination: "/#kontak",
          permanent: false,
        },
        {
          source: "/cara-pemesanan",
          destination: "/#batik-kantor-sekolah",
          permanent: false,
        },
        {
          source: "/craftsmanship",
          destination: "/#koleksi",
          permanent: false,
        },
      ];
    },
  }),
};

export default nextConfig;
