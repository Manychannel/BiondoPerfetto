import { siteConfig } from "@/lib/site-config";

interface LegalBlock {
  heading: string;
  body: string;
}

const { address } = siteConfig;
const fullAddress = `${address.streetAddress}, ${address.postalCode} ${address.addressLocality} (${address.addressRegion})`;
const controller = `${siteConfig.businessName} di ${siteConfig.legalName} – ${fullAddress} – P.IVA ${siteConfig.vatNumber} – Email: ${siteConfig.email} – Telefono: ${siteConfig.phoneDisplay}`;
const lastUpdated = "Ultimo aggiornamento: 30 ottobre 2026.";

function LegalSection({
  id,
  eyebrow,
  title,
  blocks,
}: {
  id: string;
  eyebrow: string;
  title: string;
  blocks: LegalBlock[];
}) {
  return (
    <section id={id} className="legal-section" aria-label={title}>
      <div className="legal-inner">
        <p className="legal-eyebrow">{eyebrow}</p>
        <h2 className="legal-title">{title}</h2>

        {blocks.map((block) => (
          <div className="legal-block" key={block.heading}>
            <h3>{block.heading}</h3>
            <p>{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PrivacyPolicySection() {
  return (
    <LegalSection
      id="privacy"
      eyebrow="PRIVACY"
      title="Informativa sulla Privacy"
      blocks={[
        {
          heading: "Titolare del trattamento",
          body: controller,
        },
        {
          heading: "Tipologie di dati raccolti",
          body: "Nome, numero di telefono e contenuto dei messaggi che ci invii su WhatsApp (incluse eventuali foto dei capelli inviate volontariamente); informazioni sul capello e sui trattamenti precedenti fornite durante la consulenza; dati tecnici di navigazione (indirizzo IP, tipo di browser, data e ora della richiesta) registrati automaticamente dal server che ospita il sito.",
        },
        {
          heading: "Finalità del trattamento",
          body: "Rispondere alle richieste di informazioni e di consulenza, fissare e gestire gli appuntamenti in salone, garantire il corretto funzionamento e la sicurezza del sito. I dati non vengono usati per comunicazioni promozionali senza un tuo consenso specifico.",
        },
        {
          heading: "Base giuridica",
          body: "Esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR) per rispondere ai messaggi e gestire gli appuntamenti; legittimo interesse del titolare alla sicurezza del sito (art. 6.1.f GDPR) per i dati tecnici di navigazione; consenso (art. 6.1.a GDPR) per eventuali comunicazioni promozionali.",
        },
        {
          heading: "Conservazione dei dati",
          body: "I dati delle richieste vengono conservati per il tempo necessario a gestire la consulenza e gli appuntamenti e, in ogni caso, non oltre 24 mesi dall'ultimo contatto, salvo obblighi di legge (ad esempio fiscali) che ne richiedano una conservazione più lunga. I dati tecnici di navigazione vengono conservati per il periodo strettamente necessario alla sicurezza del servizio.",
        },
        {
          heading: "Comunicazione a terzi",
          body: "I messaggi su WhatsApp transitano sulla piattaforma di WhatsApp Ireland Ltd (gruppo Meta), che li tratta secondo la propria informativa privacy. Il sito è ospitato da Vercel Inc., che agisce come responsabile del trattamento; i dati tecnici possono essere trasferiti negli Stati Uniti sulla base dell'EU-US Data Privacy Framework o delle clausole contrattuali standard approvate dalla Commissione europea. I dati non vengono venduti né diffusi.",
        },
        {
          heading: "Diritti dell'interessato",
          body: `In qualsiasi momento puoi richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi dati, la loro portabilità, opporti al trattamento e revocare il consenso eventualmente prestato (artt. 15-22 GDPR), oltre a proporre reclamo al Garante per la Protezione dei Dati Personali. Per esercitare questi diritti scrivi a: ${siteConfig.email}.`,
        },
        {
          heading: "Aggiornamento",
          body: lastUpdated,
        },
      ]}
    />
  );
}

export function CookiePolicySection() {
  return (
    <LegalSection
      id="cookie"
      eyebrow="COOKIE"
      title="Cookie Policy"
      blocks={[
        {
          heading: "Cosa sono i cookie",
          body: "I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.",
        },
        {
          heading: "Cookie utilizzati da questo sito",
          body: "Questo sito non utilizza cookie di profilazione né cookie di terze parti. I link ai profili social, a Google e a WhatsApp portano l'utente fuori dal sito, su piattaforme che applicano una propria informativa cookie indipendente.",
        },
        {
          heading: "Consenso",
          body: "Poiché il sito non installa cookie non tecnici, non è richiesto alcun consenso. Se in futuro verranno introdotti strumenti di statistica o di marketing (ad esempio Google Analytics o Meta Pixel), verranno attivati solo dopo il tuo consenso, raccolto tramite un apposito banner, e questa informativa verrà aggiornata.",
        },
        {
          heading: "Come gestire i cookie dal browser",
          body: "La maggior parte dei browser consente di bloccare o cancellare i cookie dalle impostazioni sulla privacy. Disabilitando i cookie tecnici alcune funzioni del sito potrebbero non funzionare correttamente.",
        },
        {
          heading: "Titolare del trattamento",
          body: controller,
        },
        {
          heading: "Aggiornamento",
          body: lastUpdated,
        },
      ]}
    />
  );
}
