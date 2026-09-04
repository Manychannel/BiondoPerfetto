import { PolicyPageShell } from "@/components/policy-page-shell";
import { PrivacyPolicySection } from "@/components/legal-policies";

export function PrivacyPage() {
  return (
    <PolicyPageShell
      title="Privacy Policy | Diamoci un Taglio"
      description="Informativa sulla privacy di Diamoci un Taglio."
    >
      <PrivacyPolicySection />
    </PolicyPageShell>
  );
}
