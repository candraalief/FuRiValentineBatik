import { OrderingStep } from "@/types";

export const ORDERING_STEPS: OrderingStep[] = [
  {
    step: 1,
    title: "Eksplorasi & Konsultasi Awal",
    subtitle: "Konsultasi Santai via WhatsApp atau Workshop",
    duration: "Hari ke-1",
    description:
      "Pilih motif yang Anda sukai dari ekspo galeri kami (misal: Motif Ikan Gabus, Bambu Runcing Patriot, atau Sutra Tulis). Jika Anda ingin memesan seragam kantor/keluarga dengan motif kustom, diskusikan konsepnya bersama Ibu Indah Turiri dan tim.",
    actionHint: "Bisa chat via WhatsApp atau reservasi kunjungan langsung ke workshop Jatiranggon Bekasi.",
    iconName: "MessageSquare",
  },
  {
    step: 2,
    title: "Pemilihan Bahan & Estimasi Ukuran",
    subtitle: "Kain Lembaran atau Busana Jadi",
    duration: "Hari ke-1 s/d 2",
    description:
      "Tentukan jenis kain yang sesuai dengan kebutuhan dan anggaran: Katun Primissima (sejuk & klasik), Katun Dobby Jacquard (bertekstur mewah), atau Sutra ATBM tenunan tangan. Anda juga dapat memilih memesan kain bahan saja atau busana siap pakai berfuring halus.",
    actionHint: "Tersedia panduan ukuran lengkap (S hingga 5L) atau ukuran kustom sesuai ukuran badan Anda.",
    iconName: "Scissors",
  },
  {
    step: 3,
    title: "Persetujuan Desain & Jadwal Produksi",
    subtitle: "Rincian Biaya Transparan & Uang Muka",
    duration: "Hari ke-3",
    description:
      "Kami menyusun rincian penawaran biaya resmi, waktu pengerjaan, serta sketsa tata letak motif (mockup pola kemeja/dress). Setelah disepakati dan pembayaran tanda jadi (DP), kain langsung dijadwalkan masuk dapur pembatikan.",
    actionHint: "Transparansi penuh: tanpa biaya tersembunyi, estimasi waktu jelas sejak awal.",
    iconName: "FileCheck",
  },
  {
    step: 4,
    title: "Proses Pembatikan Tradisional",
    subtitle: "Karya Tangan Tembaga & Canting Malam",
    duration: "7 - 14 Hari (Cap) / 30 - 90 Hari (Tulis)",
    description:
      "Kain dikerjakan dengan penuh ketekunan oleh pembatik berpengalaman di sentra Pekalongan dan workshop Bekasi. Melalui tahapan nyorek, pencantingan lilin malam panas, pencelupan warna alami/sintetis berulang kali, hingga pelorotan.",
    actionHint: "Anda akan mendapatkan laporan berkala foto/video progres pengerjaan batik Anda.",
    iconName: "Flame",
  },
  {
    step: 5,
    title: "Quality Check & Pengiriman Terpercaya",
    subtitle: "Pengemasan Eksklusif Sampai ke Alamat Anda",
    duration: "Hari Terakhir",
    description:
      "Setiap helai kain diinspeksi secara ketat agar tidak ada cacat lilin atau warna yang memudar, lalu disetrika uap dan dikemas dengan packaging eksklusif FuRi Valentine Batik sebelum dikirim dengan asuransi ke seluruh Indonesia.",
    actionHint: "Resi pengiriman langsung diberikan, pengiriman didukung JNE, J&T, SiCepat, maupun kurir instan Jabodetabek.",
    iconName: "PackageCheck",
  },
];

export const ORDERING_FAQS = [
  {
    q: "Apakah bisa memesan batik dalam jumlah satuan (1 potong)?",
    a: "Tentu saja! Untuk kain batik tulis halus dan busana koleksi pribadi, kami melayani pemesanan satuan dengan konsultasi motif personal.",
  },
  {
    q: "Berapa minimal pemesanan untuk seragam batik kantor / instansi?",
    a: "Untuk pemesanan batik cap seragam instansi/perusahaan atau seragam keluarga, minimal pemesanan mulai dari 20–30 potong, dengan keuntungan harga grosir khusus UMKM dan opsi penambahan logo instansi tersembunyi dalam motif.",
  },
  {
    q: "Berapa lama estimasi pembuatan batik kustom?",
    a: "Untuk batik cap biasanya memakan waktu 7 hingga 14 hari kerja tergantung kuantitas. Sedangkan untuk batik tulis sutra halus membutuhkan waktu 30 hingga 90 hari kerja karena dikerjakan canting manual helai demi helai.",
  },
  {
    q: "Apakah saya bisa datang langsung ke workshop untuk melihat bahan?",
    a: "Sangat disarankan! Workshop dan Galeri kami berlokasi di Jl. Transad X No. 1A, RT 01/08, Jatiranggon, Jatisampurna, Kota Bekasi. Anda bisa melihat langsung contoh kain, motif khas Bekasi, dan berkonsultasi langsung dengan Ibu Indah Turiri.",
  },
  {
    q: "Bagaimana cara melakukan pembayaran dan pembayarannya?",
    a: "Untuk pesanan kustom/seragam, sistem pembayaran adalah Down Payment (DP) 50% di awal pengerjaan, dan pelunasan 50% setelah batik selesai di-QC dan siap dikirim.",
  },
];
