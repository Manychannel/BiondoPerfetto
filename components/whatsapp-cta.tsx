"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getWhatsAppUrl } from "@/lib/site-config";

interface WhatsAppCtaProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  message?: string;
  children: ReactNode;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function WhatsAppCta({ message, children, onClick, ...props }: WhatsAppCtaProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        window.dataLayer?.push({ event: "whatsapp_click", cta_message: message ?? "default" });
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
