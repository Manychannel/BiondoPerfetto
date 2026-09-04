/**
 * Configurazione centrale del sito. Aggiorna qui i dati reali del salone:
 * questi valori alimentano i CTA WhatsApp, i meta tag SEO e i dati
 * strutturati (JSON-LD) su tutta la pagina.
 */
export const siteConfig = {
  businessName: "Diamoci un Taglio",
  serviceName: "Biondo Perfetto",

  whatsappNumber: "393357907909",

  // Messaggio precompilato che il cliente vedrà aprendo la chat.
  whatsappDefaultMessage:
    "Ciao! Ho visto la pagina Biondo Perfetto e vorrei prenotare una consulenza per il colore dei miei capelli.",

  phoneDisplay: "+39 335 790 7909",

  address: {
    streetAddress: "Via G. Mazzini, 13",
    addressLocality: "Cisterna di Latina",
    addressRegion: "LT",
    postalCode: "04012",
    addressCountry: "IT",
  },

  // TODO: orari reali, formato schema.org (es. "Tu-Sa 09:00-19:00").
  openingHours: "",

  // Se vuoto, l'icona non viene mostrata.
  instagramUrl: "https://www.instagram.com/diamoci.untaglio_hair_beauty/",
  facebookUrl: "https://www.facebook.com/hairstilyng.diamociuntaglio/?locale=it_IT",

  // Link alla scheda Google Business del salone. Se vuoto, il pulsante
  // "Leggi le recensioni su Google" nella sezione riprova sociale non viene mostrato.
  googleReviewsUrl: "https://share.google/b1hWArmfziP0ZRYvi",

  // TODO: dominio definitivo del sito pubblicato (per canonical / Open Graph).
  siteUrl: "https://www.diamociuntaglio.it",
} as const;

export function getWhatsAppUrl(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
