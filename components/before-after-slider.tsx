"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion-variants";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);

  return (
    <section id="risultato" className="before-after-section" aria-labelledby="before-after-title">
      <div className="before-after-inner">
        <motion.header
          className="before-after-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>02 / IL RISULTATO</p>
          <h2 id="before-after-title">
            Dal punto di partenza<br />al biondo progettato.
          </h2>
        </motion.header>

        <div className="before-after-body">
          <motion.div
            className="before-after-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p>
              Una trasformazione costruita sulla persona, non replicata da
              un’immagine. Il risultato nasce dall’equilibrio tra luminosità,
              profondità e rispetto della fibra.
            </p>
            <span>Trascina per confrontare</span>
          </motion.div>

          <div className="comparison">
            <img
              className="comparison-image comparison-before"
              src="/biondo-prima.jpg"
              alt="Capelli prima del percorso Biondo Perfetto"
              draggable="false"
            />
            <div
              className="comparison-after"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              aria-hidden="true"
            >
              <img
                className="comparison-image"
                src="/biondo-dopo.jpg"
                alt=""
                draggable="false"
              />
            </div>

            <span className="comparison-label comparison-label-after">Dopo</span>
            <span className="comparison-label comparison-label-before">Prima</span>

            <div
              className="comparison-divider"
              style={{ left: `${position}%` }}
              aria-hidden="true"
            >
              <span className="comparison-handle">‹&nbsp;&nbsp;›</span>
            </div>

            <input
              className="comparison-range"
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              aria-label="Confronta il risultato prima e dopo"
              aria-valuetext={`${position}% immagine dopo`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
