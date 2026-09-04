"use client";

import { motion } from "motion/react";
import { FaGoogle, FaStar } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { reviews } from "@/lib/reviews";

export function SocialProof() {
  return (
    <section id="recensioni" className="social-proof-section" aria-label="Recensioni">
      <motion.div
        className="social-proof-inner"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p variants={fadeUp} className="social-proof-eyebrow">
          RECENSIONI
        </motion.p>
        <motion.h2 variants={fadeUp} className="social-proof-title">
          Quello che raccontano le nostre clienti
        </motion.h2>

        <div className="social-proof-grid">
          {reviews.map((review) => (
            <motion.figure className="review-card" key={review.name} variants={fadeUp}>
              <div className="review-card-stars" aria-label={`${review.rating} stelle su 5`}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <FaStar key={index} aria-hidden="true" />
                ))}
              </div>
              <blockquote>{review.text}</blockquote>
              <figcaption>
                <span className="review-card-name">{review.name}</span>
                <span className="review-card-meta">
                  <FaGoogle aria-hidden="true" /> Recensione Google · {review.timeAgo}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {siteConfig.googleReviewsUrl && (
          <motion.a
            variants={fadeUp}
            className="social-proof-link"
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leggi tutte le recensioni su Google <span aria-hidden="true">↗</span>
          </motion.a>
        )}
      </motion.div>
    </section>
  );
}
