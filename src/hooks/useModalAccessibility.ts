"use client";

import { useEffect, useRef } from "react";

interface UseModalAccessibilityProps {
  isOpen: boolean;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * useModalAccessibility
 * Memastikan dialog modal memenuhi standar WCAG 2.1 AA & WAI-ARIA 1.2:
 * 1. Initial focus ke elemen interaktif pertama
 * 2. Focus Trap (Tab / Shift+Tab) terkurung di dalam modal
 * 3. ESC key dismissal
 * 4. Focus Restoration ke trigger semula saat ditutup
 * 5. Scroll lock body tanpa layout shift (kompensasi lebar scrollbar)
 */
export function useModalAccessibility({ isOpen, onClose, modalRef }: UseModalAccessibilityProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Simpan trigger semula
    previousActiveElement.current = document.activeElement as HTMLElement;

    // 2. Kunci scroll body dengan kompensasi scrollbar (mencegah CLS / layout shift)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPadding = document.body.style.paddingRight;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    // 3. Pindahkan initial focus
    const focusableSelectors =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const getFocusables = () => {
      if (!modalRef.current) return [];
      return Array.from(modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors));
    };

    const focusables = getFocusables();
    if (focusables.length > 0) {
      // Fokus ke close button atau elemen interaktif pertama
      focusables[0].focus();
    } else {
      modalRef.current?.focus();
    }

    // 4. Keyboard listener: ESC & Focus Trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const elements = getFocusables();
        if (elements.length === 0) return;

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab mundur
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // Tab maju
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 5. Cleanup & Focus Restoration
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPadding;

      if (previousActiveElement.current && typeof previousActiveElement.current.focus === "function") {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose, modalRef]);
}
