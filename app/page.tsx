import type { Metadata } from "next";
import { BlondeHero } from "@/components/blonde-hero";

export const metadata: Metadata = {
  title: "Biondo Perfetto | Parrucchiere a Cisterna di Latina – Diamoci un Taglio",
  description:
    "Diamoci un Taglio, salone a Cisterna di Latina: diagnosi del capello, progetto colore su misura e trattamento mirato per il tuo Biondo Perfetto. Prenota la consulenza su WhatsApp.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <BlondeHero />;
}
