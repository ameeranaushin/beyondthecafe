'use client';

import { useEffect, useRef } from 'react';
import styles from './FloatingIllustration.module.css';

export type FloatingIllustrationProps = {
  src: string;
  /** Use an empty string for purely decorative illustrations. */
  alt: string;
  /** Tailwind sizing and positioning, e.g. absolute left-4 top-8 w-20 md:w-32. */
  className?: string;
  animationType?: 'bob' | 'drift' | 'sway' | 'none';
  /** A still frame for GIFs when the visitor prefers reduced motion. */
  staticSrc?: string;
};

export default function FloatingIllustration({
  src,
  alt,
  className = 'w-24',
  animationType = 'bob',
  staticSrc,
}: FloatingIllustrationProps) {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || animationType === 'none') return;

    let inView = !('IntersectionObserver' in window);
    const update = () => {
      element.dataset.active = String(inView && !document.hidden);
    };
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
          update();
        }, { threshold: 0 })
      : undefined;

    observer?.observe(element);
    document.addEventListener('visibilitychange', update);
    update();
    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, [animationType]);

  return (
    <span
      ref={root}
      className={`${styles.illustration} inline-block ${className}`}
      aria-hidden={alt === '' ? true : undefined}
      data-animation={animationType}
    >
      <span className={styles.motion}>
        <picture>
          {staticSrc && <source media="(prefers-reduced-motion: reduce)" srcSet={staticSrc} />}
          {/* Serve animated assets directly, preserving original frame timing. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={500} height={500}
            loading="lazy" decoding="async" draggable={false} />
        </picture>
      </span>
    </span>
  );
}
