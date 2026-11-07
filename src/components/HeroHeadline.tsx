'use client';

import { motion, useReducedMotion } from 'motion/react';

export default function HeroHeadline() {
  const reduceMotion = useReducedMotion();

  return (
    <h1 aria-label="More than a coffee date.">
      {['More than a', 'coffee date.'].map((line, index) => (
        <motion.span
          key={line}
          className="hero-headline-line"
          aria-hidden="true"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion
            ? { duration: 0 }
            : {
                y: { type: 'spring', stiffness: 260, damping: 16, mass: 0.8, delay: 0.12 + index * 0.14 },
                opacity: { duration: 0.25, delay: 0.12 + index * 0.14 },
              }}
        >
          {index === 0 ? line : <>coffee <em>date.</em></>}
        </motion.span>
      ))}
    </h1>
  );
}
