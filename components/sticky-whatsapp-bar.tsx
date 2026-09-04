"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export function StickyWhatsAppBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-whatsapp${visible ? " is-visible" : ""}`}>
      <WhatsAppCta
        className="sticky-whatsapp__link"
        message="Ciao! Vorrei prenotare una consulenza per il colore dei miei capelli."
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
      >
        <FaWhatsapp aria-hidden="true" />
        <span>Scrivici su WhatsApp</span>
      </WhatsAppCta>
    </div>
  );
}
