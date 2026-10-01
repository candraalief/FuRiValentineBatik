import { SITE_CONFIG } from "@/lib/constants/site";
import { InquiryFormData } from "@/types";

export class ContactService {
  /**
   * Menghasilkan URL WhatsApp dengan format pesan inquiry otomatis
   */
  static generateWhatsAppUrl(data: Partial<InquiryFormData>): string {
    const phone = SITE_CONFIG.contact.whatsapp;
    
    let text = `Halo Concierge FuRi Valentine Batik,\nSaya tertarik untuk menanyakan karya batik berikut:\n\n`;
    if (data.fullName) text += `*Nama:* ${data.fullName}\n`;
    if (data.collectionInterest) text += `*Minat Koleksi:* ${data.collectionInterest}\n`;
    if (data.customRequirements) text += `*Kebutuhan Khusus:* ${data.customRequirements}\n`;
    if (data.message) text += `*Catatan/Pesan:* ${data.message}\n`;
    text += `\nMohon info ketersediaan dan panduan reservasi. Terima kasih.`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encoded}`;
  }

  /**
   * Simulasi pengiriman data form kontak (dapat disambungkan ke API Next.js / CRM / Email)
   */
  static async submitInquiry(data: InquiryFormData): Promise<{ success: boolean; message: string }> {
    // Simulasi delay jaringan
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Log di server / console untuk audit trail
    console.log("[INQUIRY_SUBMITTED]", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return {
      success: true,
      message: "Terima kasih! Tim Concierge FuRi Valentine Batik akan menghubungi Anda dalam waktu 1x24 jam.",
    };
  }
}
