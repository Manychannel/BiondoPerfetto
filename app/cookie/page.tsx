import type { Metadata } from "next";
import { CookiePage } from "@/components/cookie-page";

export const metadata: Metadata = {
  title: "Cookie Policy | Diamoci un Taglio",
  description: "Cookie policy di Diamoci un Taglio.",
  alternates: {
    canonical: "/cookie",
  },
};

export default function Page() {
  return <CookiePage />;
}
