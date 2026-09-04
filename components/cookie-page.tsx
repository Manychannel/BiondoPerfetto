import { PolicyPageShell } from "@/components/policy-page-shell";
import { CookiePolicySection } from "@/components/legal-policies";

export function CookiePage() {
  return (
    <PolicyPageShell
      title="Cookie Policy | Diamoci un Taglio"
      description="Cookie policy di Diamoci un Taglio."
    >
      <CookiePolicySection />
    </PolicyPageShell>
  );
}
