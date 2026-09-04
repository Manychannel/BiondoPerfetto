interface LegalBlock {
  heading: string;
  body: string;
}

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
        <p className="legal-draft-notice">
          Bozza da completare prima della pubblicazione: sostituisci i testi
          tra parentesi quadre con le informazioni reali del salone.
        </p>

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
          body: "[Ragione sociale] – [Indirizzo completo] – P.IVA [numero] – Email: [indirizzo email] – Telefono: [numero]",
        },
        {
          heading: "Tipologie di dati raccolti",
          body: "[Es. nome, numero di telefono e messaggi scambiati tramite WhatsApp; dati forniti volontariamente durante la consulenza; dati di navigazione anonimi raccolti dal sito.]",
        },
        {
          heading: "Finalità del trattamento",
          body: "[Es. rispondere alle richieste di consulenza ricevute su WhatsApp, gestire gli appuntamenti, inviare comunicazioni promozionali solo previo consenso specifico.]",
        },
        {
          heading: "Base giuridica",
          body: "[Es. esecuzione di misure precontrattuali su richiesta dell'interessato; consenso dell'interessato per eventuali comunicazioni di marketing.]",
        },
        {
          heading: "Conservazione dei dati",
          body: "[Indica per quanto tempo vengono conservati i dati e i criteri usati per stabilirlo.]",
        },
        {
          heading: "Comunicazione a terzi",
          body: "[Es. i messaggi ricevuti tramite WhatsApp sono gestiti anche da WhatsApp/Meta in qualità di responsabile del trattamento, secondo la relativa informativa privacy.]",
        },
        {
          heading: "Diritti dell'interessato",
          body: "In qualsiasi momento puoi richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi dati, opporti al trattamento e proporre reclamo al Garante per la Protezione dei Dati Personali. Per esercitare questi diritti scrivi a: [email di contatto].",
        },
        {
          heading: "Aggiornamento",
          body: "Ultimo aggiornamento: [data].",
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
          body: "Al momento questo sito non utilizza cookie di profilazione o di terze parti: i link ai profili social e a WhatsApp portano l'utente fuori dal sito, su piattaforme con una propria informativa cookie indipendente. Se in futuro verranno aggiunti strumenti come Google Analytics, Meta Pixel o un pulsante WhatsApp integrato, questa sezione dovrà essere aggiornata elencandoli.",
        },
        {
          heading: "Consenso",
          body: "[Se in futuro verranno introdotti cookie non tecnici, sarà necessario raccogliere il consenso dell'utente tramite un cookie banner conforme alle linee guida del Garante Privacy prima di attivarli.]",
        },
        {
          heading: "Come gestire i cookie dal browser",
          body: "La maggior parte dei browser consente di bloccare o cancellare i cookie dalle impostazioni sulla privacy. Disabilitando i cookie tecnici alcune funzioni del sito potrebbero non funzionare correttamente.",
        },
        {
          heading: "Titolare del trattamento",
          body: "[Ragione sociale] – Email: [indirizzo email di contatto]",
        },
        {
          heading: "Aggiornamento",
          body: "Ultimo aggiornamento: [data].",
        },
      ]}
    />
  );
}
