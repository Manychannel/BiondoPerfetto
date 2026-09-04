# Biondo Perfetto

Prima sezione della landing page “Biondo Perfetto” per Diamoci un Taglio.

## Avvio locale

```bash
npm install
npm run dev
```

Apri `http://127.0.0.1:3000`.

## Build di produzione

```bash
npm run build
npm run start
```

Il video di sfondo si trova in `public/biondo-perfetto.mp4`.

## Configurazione del salone

Numero WhatsApp, indirizzo, social e link recensioni Google si trovano in
`lib/site-config.ts`.

## Deploy su Vercel (da GitHub)

1. Crea un repository su GitHub e caricaci questo progetto:
   ```bash
   git add .
   git commit -m "Deploy iniziale"
   git remote add origin <url-del-tuo-repo-github>
   git push -u origin main
   ```
2. Su [vercel.com](https://vercel.com), *Add New… → Project*, seleziona il
   repository appena creato.
3. Vercel riconosce automaticamente Vite (build command `npm run build`,
   output directory `dist`, già impostati anche in `vercel.json`): lascia i
   valori proposti e clicca *Deploy*.
4. Ad ogni push su `main` Vercel farà un nuovo deploy automatico.
