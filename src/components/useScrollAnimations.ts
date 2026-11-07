'use client';

import { useEffect, type RefObject } from 'react';

/** One shared observer; reveals run once and floating decorations pause offscreen. */
export function useScrollAnimations(root: RefObject<HTMLElement | null>, refreshKey: string) {
  useEffect(() => {
    const container = root.current;
    if (!container || !('IntersectionObserver' in window)) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const reveals = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'));
    const decorations = Array.from(container.querySelectorAll<HTMLElement>('[data-float]'));

    const reset = () => {
      observer?.disconnect();
      reveals.forEach(element => element.classList.remove('reveal-pending'));
      decorations.forEach(element => delete element.dataset.floating);
    };

    const start = () => {
      reset();
      if (preference.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          if (element.hasAttribute('data-float')) {
            element.dataset.floating = String(entry.isIntersecting);
          } else if (entry.isIntersecting) {
            element.classList.remove('reveal-pending');
            element.dataset.revealed = 'true';
            observer?.unobserve(element);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

      // Read positions together before setting styles to avoid layout thrashing.
      const pending = reveals.filter(element => !element.dataset.revealed && element.getBoundingClientRect().top >= 0);
      pending.forEach(element => {
        element.classList.add('reveal-pending');
        observer?.observe(element);
      });
      decorations.forEach(element => observer?.observe(element));
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      reset();
      preference.removeEventListener('change', start);
    };
  }, [root, refreshKey]);
}
