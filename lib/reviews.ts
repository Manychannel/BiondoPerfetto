export interface Review {
  name: string;
  rating: number;
  timeAgo: string;
  text: string;
}

// Recensioni reali pubblicate sulla scheda Google Business del salone.
export const reviews: Review[] = [
  {
    name: "Salvatore Tammaro",
    rating: 5,
    timeAgo: "1 mese fa",
    text: "Salone top di Cisterna di Latina, molto professionali sotto la guida super di Francesca, che lavora con passione e serietà. Consigliato.",
  },
  {
    name: "Silvia Zappari",
    rating: 5,
    timeAgo: "10 mesi fa",
    text: "Se vuoi il colore perfetto, questo è il posto giusto. Professionali, gentili e con una naturale attenzione verso il cliente.",
  },
  {
    name: "Alessandra Nocella",
    rating: 5,
    timeAgo: "un anno fa",
    text: "Sono esattamente 32 anni che frequento il negozio di Francesca. Gentilezza, professionalità e soprattutto non si esce dal negozio scontenta.",
  },
  {
    name: "Francesca Caligiuri",
    rating: 5,
    timeAgo: "3 anni fa",
    text: "Sono rimasta molto soddisfatta del taglio e della piega. Francesca è molto brava e lo staff altrettanto: l'ambiente è tranquillo e accogliente. Lo consiglio vivamente.",
  },
];
