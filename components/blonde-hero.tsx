"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa6";
import { AnimatedHeadline } from "@/components/animated-headline";
import { TextReveal } from "@/components/text-reveal";
import { Footer } from "@/components/footer";
import { Faq5, type FaqCategory } from "@/components/faq-5";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { StickyWhatsAppBar } from "@/components/sticky-whatsapp-bar";
import { StructuredData } from "@/components/structured-data";
import { SocialProof } from "@/components/social-proof";
import { fadeUp } from "@/lib/motion-variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/base-ui/accordion";

const methodSteps = [
  {
    value: "diagnosi",
    number: "01",
    title: "Ascolto e diagnosi",
    content:
      "Ricostruiamo la storia tecnica del capello e ne valutiamo struttura, elasticità, porosità e sottotono. È il momento in cui desiderio e possibilità reali trovano un punto d’incontro.",
  },
  {
    value: "progetto",
    number: "02",
    title: "Progetto colore",
    content:
      "Definiamo tonalità, tecnica, numero di sedute e tempi di posa. Il progetto è personale e progressivo: ogni scelta protegge la qualità del capello mentre costruisce il risultato.",
  },
  {
    value: "mantenimento",
    number: "03",
    title: "Trattamento e mantenimento",
    content:
      "Selezioniamo i trattamenti professionali e la routine domiciliare necessari a conservare forza, luminosità e precisione del tono tra un appuntamento e il successivo.",
  },
] as const;

const faqCategories: FaqCategory[] = [
  {
    title: "Il percorso",
    description:
      "Ogni biondo nasce da condizioni diverse. La consulenza serve a trasformare un desiderio in un progetto realistico, leggibile e rispettoso del capello.",
    items: [
      {
        question: "Perché la consulenza è indispensabile?",
        answer:
          "Perché una fotografia racconta il risultato, ma non la strada necessaria per raggiungerlo. Durante la consulenza valutiamo base naturale, lavori precedenti, qualità della fibra e sottotono, così da definire possibilità, priorità e tempi prima di iniziare.",
      },
      {
        question: "Il risultato si ottiene sempre in una sola seduta?",
        answer:
          "Non sempre, e prometterlo senza una diagnosi non sarebbe professionale. Quando il punto di partenza lo richiede, costruiamo il biondo in più appuntamenti: un percorso progressivo permette di controllare il tono e preservare l’integrità del capello.",
      },
      {
        question: "Come stabilite quanto è possibile schiarire?",
        answer:
          "Osserviamo elasticità, porosità, resistenza e storico chimico; quando necessario eseguiamo una prova su ciocca. Il livello di schiaritura viene deciso sul comportamento reale del capello, non su una promessa astratta.",
      },
    ],
  },
  {
    title: "Cura e durata",
    description:
      "Il servizio non termina in salone. Trattamento, mantenimento e appuntamenti successivi fanno parte dello stesso progetto colore.",
    items: [
      {
        question: "Come proteggete il capello durante il servizio?",
        answer:
          "Tecnica, tempi e prodotti vengono calibrati sulla diagnosi. Inseriamo trattamenti mirati dove servono e interrompiamo la schiaritura quando la fibra ha raggiunto il suo limite sicuro: la salute del capello resta il criterio principale.",
      },
      {
        question: "Ogni quanto va mantenuto il biondo?",
        answer:
          "Dipende dalla tecnica scelta, dalla ricrescita e dalla stabilità del tono. Al termine del servizio definiamo un calendario personale per tonalizzazione, trattamento e ripresa della schiaritura, evitando appuntamenti inutili o troppo ravvicinati.",
      },
      {
        question: "Quale routine devo seguire a casa?",
        answer:
          "Riceverai indicazioni essenziali e adatte alle reali necessità del tuo capello: detersione, nutrimento, protezione dal calore e gestione del tono. Pochi gesti corretti valgono più di una routine lunga ma generica.",
      },
    ],
  },
  {
    title: "Prenotazione",
    description:
      "Il primo passo verso il tuo Biondo Perfetto è un messaggio: rispondiamo direttamente su WhatsApp.",
    items: [
      {
        question: "Come prenoto la consulenza?",
        answer:
          "Scrivici su WhatsApp: ti chiediamo qualche informazione sul tuo capello (anche una foto, se vuoi) e ti proponiamo i primi orari disponibili in salone. Nessun modulo da compilare, nessuna attesa al telefono.",
      },
      {
        question: "Cosa succede durante il primo incontro?",
        answer:
          "Analizziamo insieme base naturale, storico tecnico e sottotono, e ti diciamo con chiarezza cosa è realistico ottenere, in quanti passaggi e con quale investimento, prima di fissare l'appuntamento per il servizio.",
      },
    ],
  },
];

export function BlondeHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <main id="top">
      <StructuredData faqCategories={faqCategories} />
      <section className="hero-shell" aria-label="Biondo Perfetto">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/biondo-perfetto.mp4" type="video/mp4" />
        </video>
        <div className="hero-wash" />
        <div className="hero-grain" />

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Diamoci un Taglio, torna all'inizio">
            DIAMOCI UN TAGLIO
          </a>

          <button
            className="menu-trigger"
            type="button"
            aria-label="Apri il menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
          </button>

          <a className="contact-link" href="#contatti">Contattaci</a>
        </header>

        <div
          id="site-menu"
          className={`nav-overlay${isMenuOpen ? " is-open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="nav-panel nav-panel-main">
            <div className="nav-overlay-top">
              <span className="nav-overlay-brand">DIAMOCI UN TAGLIO</span>
              <button
                className="menu-close"
                type="button"
                aria-label="Chiudi il menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Chiudi</span>
                <i aria-hidden="true" />
              </button>
            </div>

            <nav className="overlay-links" aria-label="Menu principale">
              <a href="#biondo-perfetto" onClick={() => setIsMenuOpen(false)}>
                <span>01</span>Biondo Perfetto
              </a>
              <a href="#scopri" onClick={() => setIsMenuOpen(false)}>
                <span>02</span>Il metodo
              </a>
              <a href="#risultato" onClick={() => setIsMenuOpen(false)}>
                <span>03</span>Prima e dopo
              </a>
              <a href="#recensioni" onClick={() => setIsMenuOpen(false)}>
                <span>04</span>Recensioni
              </a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>
                <span>05</span>FAQ
              </a>
            </nav>
          </div>

          <aside className="nav-panel nav-panel-contact">
            <p className="nav-contact-kicker">PARLIAMONE</p>
            <p className="nav-contact-title">
              Il tuo biondo perfetto comincia da un messaggio.
            </p>
            <WhatsAppCta onClick={() => setIsMenuOpen(false)}>
              Scrivici su WhatsApp <span aria-hidden="true">↗</span>
            </WhatsAppCta>
            <p className="nav-contact-note">
              Diagnosi, progetto colore e cura: ogni dettaglio viene definito
              prima di iniziare.
            </p>
          </aside>
        </div>

        <div id="biondo-perfetto" className="hero-content">
          <AnimatedHeadline />

          <TextReveal
            as="p"
            className="hero-copy"
            text={[
              "Diagnosi, progetto colore su misura e trattamento mirato.",
              "Il risultato che desideri, senza rischiare la salute del capello.",
            ]}
            stagger={0.08}
            delay={0.55}
            blur={10}
            yOffset="32%"
          />

          <div className="hero-actions">
            <WhatsAppCta className="primary-cta group">
              <span className="primary-cta__orb" />
              <span className="primary-cta__label">
                <FaWhatsapp aria-hidden="true" /> Prenota su WhatsApp
              </span>
            </WhatsAppCta>
            <a className="secondary-cta" href="#scopri">Scopri il metodo</a>
          </div>
          <p className="hero-trust">
            Rispondiamo direttamente in chat, senza moduli da compilare.
          </p>
        </div>
      </section>

      <section id="scopri" className="method-section" aria-label="Il metodo Biondo Perfetto">
        <div className="method-inner">
          <div className="method-heading">
            <p className="method-kicker">01 / IL METODO</p>
            <TextReveal
              as="h2"
              className="method-title"
              text={[
                "Prima il capello.",
                "Poi il colore.",
              ]}
              stagger={0.05}
              blur={8}
              yOffset="28%"
              whileInView
            />
          </div>

          <div className="method-body">
            <div className="method-story">
              <p className="method-lead">
                Un biondo impeccabile non comincia dalla schiaritura. Comincia
                da una consulenza capace di leggere ciò che il capello può
                diventare, senza ignorare ciò che è stato.
              </p>
              <p className="method-copy">
                Analizziamo struttura, storico tecnico, sottotono e abitudini.
                Da qui definiamo insieme il risultato, il numero di sedute e i
                trattamenti necessari a preservare forza, elasticità e luce.
                Ogni scelta ha una ragione; ogni fase rispetta il tempo del
                capello.
              </p>
              <Accordion
                className="method-accordion"
                type="multiple"
                defaultValue={[methodSteps[0].value]}
                aria-label="Le tre fasi del metodo"
              >
                {methodSteps.map((step) => (
                  <AccordionItem key={step.value} value={step.value}>
                    <AccordionTrigger>
                      <span className="method-accordion-number">{step.number}</span>
                      <span className="method-accordion-title">{step.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>{step.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <WhatsAppCta
                className="method-link"
                message="Ciao! Ho letto il metodo Biondo Perfetto e vorrei prenotare una consulenza."
              >
                Richiedi la consulenza <span aria-hidden="true">↗</span>
              </WhatsAppCta>
            </div>

            <figure className="method-visual">
              <img
                src="/consulenza-biondo-perfetto.jpg"
                alt="Una colorista analizza con cura i capelli biondi di una cliente"
                width={1200}
                height={900}
                loading="lazy"
              />
              <div className="method-image-glow" />
              <figcaption>Diagnosi professionale / Progetto personalizzato</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <BeforeAfterSlider />
      <SocialProof />
      <Faq5 categories={faqCategories} />

      <section id="contatti" className="final-cta-section" aria-label="Prenota la tua consulenza">
        <motion.div
          className="final-cta-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="final-cta-kicker">PARLIAMONE</p>
          <h2 className="final-cta-title">
            Il tuo Biondo Perfetto comincia da un messaggio.
          </h2>
          <p className="final-cta-copy">
            Raccontaci il tuo capello: ti rispondiamo su WhatsApp con una
            valutazione onesta e i primi orari disponibili per la consulenza.
          </p>
          <WhatsAppCta className="final-cta-button">
            <FaWhatsapp aria-hidden="true" /> Scrivici su WhatsApp
          </WhatsAppCta>
          <ul className="final-cta-points">
            <li>Diagnosi prima di ogni intervento</li>
            <li>Progetto colore su misura</li>
            <li>Nessun impegno: solo un consiglio onesto</li>
          </ul>
        </motion.div>
      </section>

      <Footer />
      <StickyWhatsAppBar />
    </main>
  );
}
