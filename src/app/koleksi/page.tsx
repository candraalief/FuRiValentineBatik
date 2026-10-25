import type { Metadata } from "next";
import { KoleksiService } from "@/features/koleksi/services/koleksiService";
import { KoleksiClientView } from "@/features/koleksi/components/KoleksiClientView";

export const metadata: Metadata = {
  title: "Koleksi Lengkap Batik Bekasi, Busana Jadi & Seragam — FuRi Valentine Batik",
  description:
    "Jelajahi seluruh portofolio FuRi Valentine Batik: busana siap pakai (kemeja, dress, tunik), mahakarya batik tulis sutra ATBM, serta layanan pesanan seragam massal untuk instansi kantor dan sekolah.",
};

const whatsappNumber = "6285866140707";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export default async function KoleksiPage() {
  // DB-Ready: Data diambil melalui KoleksiService di level server
  const initialItems = await KoleksiService.getAll();
  const categories = await KoleksiService.getCategories();

  return (
    <KoleksiClientView
      initialItems={initialItems}
      categories={categories}
      whatsappUrl={whatsappUrl}
    />
  );
}
