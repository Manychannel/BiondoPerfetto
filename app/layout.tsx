import type { Metadata } from "next";
import "@fontsource-variable/mona-sans";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const title = "Biondo Perfetto | Parrucchiere a Cisterna di Latina – Diamoci un Taglio";
const description =
  "Diamoci un Taglio, salone a Cisterna di Latina: diagnosi del capello, progetto colore su misura e trattamento mirato per il tuo Biondo Perfetto. Prenota la consulenza su WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  keywords: [
    "biondo perfetto",
    "colore capelli biondo",
    "schiaritura capelli",
    "consulenza colore capelli",
    "parrucchiere colorista",
    "parrucchiere Cisterna di Latina",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.businessName,
    title,
    description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/consulenza-biondo-perfetto.jpg",
        width: 1200,
        height: 900,
        alt: "Consulenza e diagnosi del capello, percorso Biondo Perfetto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/consulenza-biondo-perfetto.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
