"use client";

import { useEffect, type ReactNode } from "react";
import { Footer } from "@/components/footer";
import { StickyWhatsAppBar } from "@/components/sticky-whatsapp-bar";

interface PolicyPageShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function PolicyPageShell({ title, description, children }: PolicyPageShellProps) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);

  return (
    <main className="policy-page">
      <header className="policy-page-header">
        <a className="policy-page-brand" href="/" aria-label="Diamoci un Taglio, torna alla home">
          DIAMOCI UN TAGLIO
        </a>
        <a className="policy-page-back" href="/">
          <span aria-hidden="true">←</span> Torna al sito
        </a>
      </header>
      {children}
      <Footer />
      <StickyWhatsAppBar />
    </main>
  );
}
