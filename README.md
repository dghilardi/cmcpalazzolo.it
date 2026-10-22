# CMC Palazzolo

Landing page e sito web per [cmcpalazzolo.it](https://cmcpalazzolo.it) realizzato per il **Corpo Musicale Citta' di Palazzolo APS** e il CFM "Riccardo Mosca".

Sviluppato in **React + Vite** con pre-rendering statico (SSG / SSR prerender) per massime prestazioni, SEO e compatibilità immediata con Vercel.

---

## Sviluppo locale

Prerequisiti: Node.js >= 22

```sh
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Compila la build di produzione (con prerendering)
npm run build

# Anteprima della build locale
npm run preview
```

---

## Pubblicazione su Vercel

1. Collega il repository GitHub a [Vercel](https://vercel.com).
2. Il file [`vercel.json`](./vercel.json) è già configurato con:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Aggiungi il dominio `cmcpalazzolo.it` nelle impostazioni del progetto Vercel (Settings → Domains) e configura i record DNS indicati dal tuo registrar.

> [!NOTE]
> Per la richiesta Google Workspace for Nonprofits, la pagina deve essere pubblica e raggiungibile sul dominio dell'associazione. Collegare il sito non richiede la modifica dei record MX della posta fino all'attivazione di Google Workspace.

---

## Dati dell'associazione

- **Denominazione legale:** Corpo Musicale Citta' di Palazzolo APS
- **C.F.:** 82040890178
- **P. IVA:** 03270440989
- **Sede:** Casa della Musica, Piazzale Dante Alighieri 2, 25036 Palazzolo sull'Oglio (BS)
- **Contatti:** `info@cfmpalazzolo.it` · Tel. 030 730 1287 / 328 638 0819
- **Sito storico di riferimento:** [cfmpalazzolo.it](https://www.cfmpalazzolo.it/)
