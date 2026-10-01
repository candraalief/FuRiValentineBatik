import { SITE_CONFIG } from "@/lib/constants/site";
import { InquiryFormData } from "@/types";

export class ContactService {
  /**
   * Menghasilkan URL WhatsApp dengan format pesan inquiry otomatis
   */
  static generateWhatsAppUrl(data: Partial<InquiryFormData>): string {
    const phone = SITE_CONFIG.contact.whatsapp;
    
    let text = `Halo Ibu Indah Turiri / FuRi Valentine Batik Bekasi,\nSaya ingin berkonsultasi mengenai pemesanan batik:\n\n`;
    if (data.fullName) text += `*Nama:* ${data.fullName}\n`;
    if (data.phone) text += `*No. Telepon/WA:* ${data.phone}\n`;
    if (data.orderType) text += `*Jenis Pesanan:* ${data.orderType}\n`;
    if (data.collectionInterest) text += `*Minat Motif:* ${data.collectionInterest}\n`;
    if (data.quantity) text += `*Estimasi Jumlah:* ${data.quantity}\n`;
    if (data.message) text += `*Catatan/Pesan:* ${data.message}\n`;
    text += `\nMohon informasi ketersediaan bahan, estimasi waktu, dan panduan pemesanan. Terima kasih.`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encoded}`;
  }

  /**
   * Simulasi pengiriman data form kontak
   */
  static async submitInquiry(data: InquiryFormData): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    console.log("[INQUIRY_SUBMITTED]", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return {
      success: true,
      message: "Terima kasih! Pesanan & konsultasi Anda telah diteruskan ke Ibu Indah Turiri dan tim FuRi Valentine Batik.",
    };
  }
}
