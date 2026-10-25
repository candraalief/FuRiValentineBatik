import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
