"use client";

import React, { useRef, useState } from "react";
import { PengadaanItem } from "../types/pengadaan.types";
import { useModalAccessibility } from "@/hooks/useModalAccessibility";

interface PengadaanModalProps {
  item: PengadaanItem | null;
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

export const PengadaanModal: React.FC<PengadaanModalProps> = ({
  item,
  isOpen,
  onClose,
  whatsappUrl,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number>(0);

  // WCAG 2.1 AA focus trap, ESC dismiss & zero-CLS scroll lock
  useModalAccessibility({
    isOpen,
    onClose,
    modalRef,
  });

  // Mobile Touch Swipe-Down to Dismiss
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchDeltaY, setTouchDeltaY] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (modalRef.current && modalRef.current.scrollTop > 5) return;
    setTouchStartY(e.touches[0].clientY);
    setTouchDeltaY(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const diff = e.touches[0].clientY - touchStartY;
    if (diff > 0) {
      setTouchDeltaY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (touchDeltaY > 80) {
      onClose();
    }
    setTouchStartY(null);
    setTouchDeltaY(0);
  };

  if (!item) return null;

  const currentGalleryItem = item.gallery[selectedGalleryIndex] || item.gallery[0];
  const waFullUrl = `${whatsappUrl}?text=${encodeURIComponent(item.waMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Bukti portofolio & testimoni ${item.title}`}
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 select-none transition-all duration-300 ease-out ${
        isOpen
          ? "bg-[#091426]/85 backdrop-blur-md opacity-100 pointer-events-auto"
          : "bg-[#091426]/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
    >
      {/* Floating Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup pratinjau (Esc)"
        title="Tutup (Esc)"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex size-11 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-[#10233f] hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-white cursor-pointer shadow-lg"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Card Container */}
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: touchDeltaY > 0 ? `translateY(${touchDeltaY}px)` : undefined,
          opacity: touchDeltaY > 0 ? Math.max(0.4, 1 - touchDeltaY / 250) : undefined,
        }}
        className={`relative max-w-4xl max-h-[92vh] w-full flex flex-col bg-white border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-out select-text ${
          isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        {/* Mobile Swipe Down Pill */}
        <div className="flex sm:hidden w-full justify-center pt-2.5 pb-1 bg-[#10233f]">
          <div className="h-1 w-10 rounded-full bg-white/30" />
        </div>

        {/* Header Ribbon */}
        <div className="flex items-center justify-between bg-[#10233f] px-5 py-3.5 sm:px-8 sm:py-4 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#c51f5d] text-white">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#eccf9e]">
                Portofolio Pengadaan Resmi
              </span>
              <h2 className="font-serif text-lg sm:text-2xl text-white leading-tight">
                {item.title}
              </h2>
            </div>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#eccf9e] border border-white/20 hidden sm:inline-block">
            {item.badge}
          </span>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-b from-[#f8fafc] to-white">
          {/* 1. Visual Proof & Gallery Section (NOT zoomed in, natural aspect ratio) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#10233f] flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#c51f5d]" />
                Bukti Visual & Hasil Produksi
              </h3>
              <span className="text-xs text-[#52627a]">
                Foto {selectedGalleryIndex + 1} dari {item.gallery.length}
              </span>
            </div>

            {/* Main Stage Image: 16/10 aspect ratio so clothing is fully visible and not zoomed in */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[440px] w-full overflow-hidden rounded-2xl bg-[#0c182b] shadow-md border border-[#10233f]/10">
              <img
                key={currentGalleryItem.url}
                src={currentGalleryItem.url}
                alt={currentGalleryItem.caption}
                className="h-full w-full object-cover object-top transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
                <p className="text-xs sm:text-sm font-medium drop-shadow-md">
                  {currentGalleryItem.caption}
                </p>
                <span className="inline-block shrink-0 rounded-full bg-[#c51f5d]/90 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-xs backdrop-blur-sm self-start sm:self-auto">
                  {currentGalleryItem.tag}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnail Switchers */}
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {item.gallery.map((gItem, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedGalleryIndex(index)}
                  className={`relative flex items-center gap-2 rounded-xl p-1.5 border transition-all text-left cursor-pointer ${
                    selectedGalleryIndex === index
                      ? "border-[#c51f5d] bg-[#c51f5d]/5 ring-2 ring-[#c51f5d]/20"
                      : "border-[#10233f]/10 bg-white hover:border-[#10233f]/25"
                  }`}
                >
                  <img
                    src={gItem.url}
                    alt={gItem.tag}
                    className="size-11 sm:size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 pr-1">
                    <p className="text-[11px] font-semibold text-[#10233f] truncate">
                      {gItem.tag}
                    </p>
                    <span className="text-[10px] text-[#52627a] line-clamp-1">
                      Klik untuk melihat
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Client Testimonial Card */}
          <div className="rounded-2xl border border-[#10233f]/10 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#854d0e]">
                {item.testimonial.verifiedBadge}
              </span>
              <span className="rounded-full bg-[#10233f]/5 px-3 py-1 text-xs font-medium text-[#10233f] border border-[#10233f]/10 self-start sm:self-auto">
                {item.testimonial.projectScope}
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xs sm:text-sm text-[#10233f] leading-relaxed italic pl-3.5 border-l-2 border-[#c51f5d]">
              &ldquo;{item.testimonial.quote}&rdquo;
            </blockquote>

            {/* Client Profile */}
            <div className="mt-4 pt-3 border-t border-[#10233f]/10">
              <h4 className="font-semibold text-xs sm:text-sm text-[#10233f]">
                {item.testimonial.name}
              </h4>
              <p className="text-[11px] text-[#52627a]">
                {item.testimonial.role} · <strong className="text-[#10233f] font-medium">{item.testimonial.institution}</strong>
              </p>
            </div>
          </div>

          {/* 3. Specs & Highlights Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#10233f] mb-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#10233f]" />
              Spesifikasi & Ketentuan Pengadaan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-[#10233f]/10 bg-white p-3.5 shadow-2xs">
                <span className="text-[11px] text-[#52627a] block">Minimum Pemesanan (MOQ):</span>
                <strong className="text-[#10233f] font-serif text-sm mt-0.5 block">
                  {item.highlights.moq}
                </strong>
              </div>
              <div className="rounded-xl border border-[#10233f]/10 bg-white p-3.5 shadow-2xs">
                <span className="text-[11px] text-[#52627a] block">Pilihan Bahan Kain:</span>
                <strong className="text-[#10233f] font-serif text-sm mt-0.5 block">
                  {item.highlights.material}
                </strong>
              </div>
              <div className="rounded-xl border border-[#10233f]/10 bg-white p-3.5 shadow-2xs">
                <span className="text-[11px] text-[#52627a] block">Estimasi Waktu Pengerjaan:</span>
                <strong className="text-[#10233f] font-serif text-sm mt-0.5 block">
                  {item.highlights.duration}
                </strong>
              </div>
              <div className="rounded-xl border border-[#10233f]/10 bg-white p-3.5 shadow-2xs">
                <span className="text-[11px] text-[#52627a] block">Jaminan & Layanan Khusus:</span>
                <strong className="text-[#10233f] font-serif text-sm mt-0.5 block">
                  {item.highlights.guarantee}
                </strong>
              </div>
            </div>
          </div>

          {/* 4. Keunggulan Produksi Checklist */}
          <div className="rounded-2xl bg-[#10233f]/[0.03] border border-[#10233f]/10 p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10233f] mb-3">
              Standard Layanan Pengadaan FuRi Valentine
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#10233f]">
              {item.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="size-4 shrink-0 text-[#c51f5d] mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Dock / Footer */}
        <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#10233f]/10 bg-white px-5 py-4 sm:px-8 shadow-lg">
          <div className="text-xs text-[#52627a] hidden sm:block">
            <span>Konsultasi gratis sampel kain & estimasi anggaran dengan desainer kami.</span>
          </div>
          <div className="flex w-full sm:w-auto items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="button-outline w-1/3 sm:w-auto text-xs sm:text-sm cursor-pointer"
            >
              Tutup
            </button>
            <a
              href={waFullUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary flex-1 sm:flex-none text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap"
            >
              <svg className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
                <path d="M8.2 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.3.4-.1.7.4.8 1.1 1.6 1.8 2.1.9.7 1.6.9 1.9 1 .3.1.5 0 .7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.2.5.4.1.2.1 1-.2 1.7-.3.7-1.5 1.4-2.1 1.4-.6 0-1.4.2-4.5-1.1-3.7-1.6-5.9-5.4-6.1-5.7-.2-.3-1.5-2-.7-3.8Z" />
              </svg>
              Konsultasi Pengadaan via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
