import Image from "next/image";

export function WhatsAppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/whatsapp-transparent.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      unoptimized
      className={`inline-block shrink-0 object-contain ${className}`}
    />
  );
}
