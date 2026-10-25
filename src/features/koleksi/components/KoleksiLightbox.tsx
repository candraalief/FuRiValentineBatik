"use client";

import React, { useEffect, useRef, useState } from "react";
import { KoleksiItem } from "../types/koleksi.types";
import { useModalAccessibility } from "@/hooks/useModalAccessibility";

interface KoleksiLightboxProps {
  item: KoleksiItem | null;
  items: KoleksiItem[];
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  whatsappUrl: string;
}

export const KoleksiLightbox: React.FC<KoleksiLightboxProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onPrev,
  onNext,
  whatsappUrl,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // WCAG 2.1 AA focus trap, ESC listener & zero-CLS scroll lock
  useModalAccessibility({
    isOpen,
    onClose,
    modalRef,
  });

  // Keyboard navigation for Prev / Next arrows
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onPrev, onNext]);

  // Touch Swipe-Down Dismiss for Mobile Thumb Ergonomics
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

  const currentIndex = items.findIndex((it) => it.id === item.id);

  const waText = encodeURIComponent(
    `Halo FuRi Valentine Batik,\nSaya melihat foto koleksi "${item.title}" (${item.category}) di website katalog.\n\n` +
      (item.isBulkAvailable && !item.isReadyStock
        ? `Apakah saya bisa berkonsultasi mengenai pemesanan seragam / pesanan partai besar untuk produk ini?`
        : `Apakah produk ini masih tersedia untuk dibeli / dipesan? Terima kasih.`)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau kurasi ${item.title}`}
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 md:p-8 select-none transition-all duration-300 ease-out ${
        isOpen
          ? "bg-[#091426]/80 backdrop-blur-md opacity-100 pointer-events-auto"
          : "bg-[#091426]/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
    >
      {/* Editorial Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup pratinjau produk (Esc)"
        title="Tutup (Esc)"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-medium text-[#10233f] shadow-md backdrop-blur-md border border-black/5 hover:bg-white transition-all active:scale-95 cursor-pointer"
      >
        <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-[#52627a]">Tutup</span>
        <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev / Next Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Koleksi sebelumnya (Panah Kiri)"
            title="Koleksi sebelumnya"
            className="absolute left-2 sm:left-6 z-40 flex size-11 items-center justify-center rounded-full bg-white/90 text-[#10233f] border border-black/5 shadow-md backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#c51f5d] cursor-pointer"
          >
            <svg className="size-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Koleksi selanjutnya (Panah Kanan)"
            title="Koleksi selanjutnya"
            className="absolute right-2 sm:right-6 z-40 flex size-11 items-center justify-center rounded-full bg-white/90 text-[#10233f] border border-black/5 shadow-md backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#c51f5d] cursor-pointer"
          >
            <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </button>
        </>
      )}

      {/* Modal Container Card: Split-View Editorial Lookbook */}
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
        className={`relative max-w-4xl max-h-[92vh] w-full flex flex-col md:flex-row bg-white border border-black/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-out select-text ${
          isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        {/* Mobile Swipe Down Pill Indicator */}
        <div className="flex md:hidden w-full justify-center pt-2.5 pb-1 bg-[#f7f5f1]">
          <div className="h-1 w-10 rounded-full bg-black/20" />
        </div>

        {/* ─── Left: Full-Height Lookbook Photography Stage ─── */}
        <div className="w-full md:w-1/2 bg-[#f7f5f1] p-5 sm:p-7 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#10233f]/10">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#52627a] uppercase mb-3">
              <span>Lookbook · {currentIndex >= 0 ? `${currentIndex + 1} / ${items.length}` : ""}</span>
              <span className="font-sans font-semibold text-[#854d0e]">{item.technique}</span>
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white shadow-xs border border-black/5 flex items-center justify-center">
              <img
                key={item.image}
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-[#52627a]">
            <span>{item.origin.split(",")[0]}</span>
            <span className="font-medium text-[#10233f]">Atelier FuRi Valentine</span>
          </div>
        </div>

        {/* ─── Right: Editorial Detail Sheet & Storytelling ─── */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[0.2em] text-[#854d0e]">
              Koleksi Busana Jadi · {item.category}
            </p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-[#10233f] leading-snug">
              {item.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52627a] leading-relaxed">
              {item.description}
            </p>

            {/* Philosophy Narrative */}
            {item.philosophy && (
              <div className="my-5 border-y border-[#10233f]/10 py-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#854d0e] block mb-1">
                  Filosofi Motif
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-[#10233f] leading-relaxed">
                  &ldquo;{item.philosophy}&rdquo;
                </p>
              </div>
            )}

            {/* Hairline Specification Sheet */}
            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52627a] mb-2">
                Spesifikasi Kain & Busana
              </p>
              <dl className="divide-y divide-[#10233f]/10 border-t border-b border-[#10233f]/10 text-xs">
                <div className="flex justify-between py-2 gap-4">
                  <dt className="text-[#52627a]">Material</dt>
                  <dd className="font-medium text-[#10233f] text-right">{item.material}</dd>
                </div>
                <div className="flex justify-between py-2 gap-4">
                  <dt className="text-[#52627a]">Teknik Pembuatan</dt>
                  <dd className="font-medium text-[#10233f] text-right">{item.technique}</dd>
                </div>
                <div className="flex justify-between py-2 gap-4">
                  <dt className="text-[#52627a]">Estimasi Nilai</dt>
                  <dd className="font-serif font-semibold text-sm text-[#10233f] text-right">
                    {item.estimatedPrice}
                  </dd>
                </div>
                <div className="flex justify-between py-2 gap-4">
                  <dt className="text-[#52627a]">Ketersediaan</dt>
                  <dd className="font-medium text-right">
                    {item.isReadyStock ? (
                      <span className="text-emerald-700">Tersedia di Toko</span>
                    ) : (
                      <span className="text-[#854d0e]">Pesanan Khusus / Bulk</span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Action Dock */}
          <div className="mt-6 pt-3 border-t border-[#10233f]/10">
            <a
              href={`${whatsappUrl}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-[#10233f] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#c51f5d] active:scale-98 shadow-sm"
            >
              <span>{item.isBulkAvailable && !item.isReadyStock ? "Konsultasi Pesanan Bulk" : "Tanyakan Ketersediaan via WA"}</span>
              <svg className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-2 text-center text-[11px] text-[#52627a]">
              Hubungi concierge kami untuk konsultasi ukuran, fitting, atau reservasi galeri.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
