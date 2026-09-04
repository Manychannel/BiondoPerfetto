import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Diamoci un Taglio",
  description: "Informativa sulla privacy di Diamoci un Taglio.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
