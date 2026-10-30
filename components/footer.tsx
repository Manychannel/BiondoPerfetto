"use client";

import { motion, type Variants } from "motion/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppCta } from "@/components/whatsapp-cta";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Il footer è condiviso tra la home e le pagine legali standalone
// (/privacy, /cookie): i link alle sezioni sono sempre prefissati con "/"
// così funzionano da qualunque pagina, senza cambiare comportamento in home.
const columns: FooterColumn[] = [
  {
    title: "Esplora",
    links: [
      { label: "Biondo Perfetto", href: "/#biondo-perfetto" },
      { label: "Il metodo", href: "/#scopri" },
      { label: "Prima e dopo", href: "/#risultato" },
      { label: "Recensioni", href: "/#recensioni" },
      { label: "Domande frequenti", href: "/#faq" },
    ],
  },
  {
    title: "Il percorso",
    links: [
      { label: "Consulenza", href: "/#contatti" },
      { label: "Diagnosi del capello", href: "/#scopri" },
      { label: "Progetto colore", href: "/#scopri" },
      { label: "Trattamenti e cura", href: "/#scopri" },
    ],
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const wordmarkVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 1.1, bounce: 0 },
  },
};

const riseVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.65, bounce: 0 },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 7 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.42, bounce: 0 },
  },
};

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-image" aria-hidden="true" />
      <div className="footer-shade" aria-hidden="true" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="footer-stage"
      >
        <motion.div
          variants={wordmarkVariants}
          className="footer-wordmark"
          aria-hidden="true"
        >
          DIAMOCI UN TAGLIO
        </motion.div>

        <div className="footer-content">
          <div className="footer-main-grid">
            <motion.div variants={riseVariants} className="footer-brand-block">
              <a href="/#top" className="footer-brand" aria-label="Diamoci un Taglio, torna all'inizio">
                <span className="footer-brand-mark">D</span>
                <span>DIAMOCI UN TAGLIO</span>
              </a>
              <p>
                Il biondo che desideri nasce dall’ascolto, dalla competenza e
                da un progetto costruito con cura, passo dopo passo.
              </p>
            </motion.div>

            <motion.nav
              variants={sectionVariants}
              aria-label="Navigazione del footer"
              className="footer-columns"
            >
              {columns.map((column) => (
                <motion.div variants={riseVariants} key={column.title}>
                  <h3>{column.title}</h3>
                  <motion.ul variants={listVariants}>
                    {column.links.map((link) => (
                      <motion.li variants={linkVariants} key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}

              <motion.div variants={riseVariants}>
                <h3>Contatti</h3>
                <motion.ul variants={listVariants}>
                  <motion.li variants={linkVariants}>
                    <WhatsAppCta>Scrivici su WhatsApp</WhatsAppCta>
                  </motion.li>
                  <motion.li variants={linkVariants}>
                    <a href="/#contatti">Dove siamo</a>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.nav>
          </div>

          <motion.div variants={riseVariants} className="footer-bottom">
            <p>
              © 2026 {siteConfig.businessName} di {siteConfig.legalName} ·{" "}
              {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
              {siteConfig.address.addressLocality} ({siteConfig.address.addressRegion}) · P.IVA{" "}
              {siteConfig.vatNumber}
            </p>

            <div className="footer-meta">
              {(siteConfig.instagramUrl || siteConfig.facebookUrl) && (
                <motion.ul
                  id="social"
                  variants={listVariants}
                  className="footer-socials"
                  aria-label="Canali social"
                >
                  {siteConfig.instagramUrl && (
                    <motion.li variants={linkVariants}>
                      <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                      </a>
                    </motion.li>
                  )}
                  {siteConfig.facebookUrl && (
                    <motion.li variants={linkVariants}>
                      <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF />
                      </a>
                    </motion.li>
                  )}
                </motion.ul>
              )}

              <motion.ul variants={listVariants} className="footer-legal">
                <motion.li variants={linkVariants}><a href="/privacy">Privacy Policy</a></motion.li>
                <motion.li variants={linkVariants}><a href="/cookie">Cookie Policy</a></motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
