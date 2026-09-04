"use client";

import { motion, useReducedMotion } from "motion/react";

const lines = [
  "Il biondo perfetto",
  "per la tua bellezza,",
  "senza sorprese.",
];

export function AnimatedHeadline() {
  const reduce = useReducedMotion();

  return (
    <h1 className="hero-title">
      {lines.map((line, index) => (
        <span className="headline-line" key={line}>
          <motion.span
            className="headline-reveal"
            initial={reduce ? { opacity: 0 } : { y: "106%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
              reduce
                ? { duration: 0.2, delay: index * 0.05 }
                : {
                    duration: 1.08,
                    delay: 0.12 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
