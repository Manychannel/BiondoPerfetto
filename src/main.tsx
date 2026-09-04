import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/mona-sans";
import "../app/globals.css";
import { BlondeHero } from "@/components/blonde-hero";
import { PrivacyPage } from "@/components/privacy-page";
import { CookiePage } from "@/components/cookie-page";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/privacy") return <PrivacyPage />;
  if (path === "/cookie") return <CookiePage />;
  return <BlondeHero />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
