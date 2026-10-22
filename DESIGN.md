---
name: CMC Palazzolo
description: Continuità con il sito dell’associazione, in una pagina essenziale.
colors:
  primary: "#ae252d"
  primary-hover: "#881b22"
  paper: "#faf8f3"
  ink: "#292923"
  muted: "#62615a"
  line: "#d9d5cb"
  footer: "#eeebe3"
  footer-text: "#56564d"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(48px, 5.7vw, 76px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.12
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  button: "4px"
  image: "3px"
spacing:
  section: "66px"
  columns: "70px"
  mobile-section: "39px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
---

# Design System: CMC Palazzolo

## Overview

Pagina essenziale in continuità con il sito attuale: logo rosso, titoli Fraunces, testo sobrio e fotografia d’archivio. Queste scelte descrivono l’implementazione esistente; non introducono una nuova identità.

## Colors

Il rosso distingue il titolo e l’azione principale. Carta chiara e inchiostro scuro sostengono la lettura; testo secondario, divisori e fondo del footer usano neutri caldi. Selezione e focus riprendono il rosso.

## Typography

Fraunces Medium è ospitato localmente; Arial con fallback Helvetica serve testo e navigazione. I titoli hanno righe compatte e bilanciate. Il testo introduttivo usa 18px, quello dell’associazione 17px con misura massima 67ch; contatti e dettagli usano 15px e 12–14px.

A 760px o meno il titolo principale usa clamp(45px, 9vw, 66px), i titoli di sezione 30px, i sottotitoli 22px e l’introduzione 16px.

## Layout

Contenitore centrale di massimo 1120px, con 80px complessivi di margine minimo su desktop. Testata orizzontale; introduzione a due colonne (1.2fr / 1fr); sezioni informative a due colonne (.8fr / 1.5fr), separate da 70px. La fotografia attraversa il contenitore.

A 760px o meno il contenitore lascia 20px per lato e le sezioni diventano una colonna; la navigazione conserva Contatti. A 420px o meno anche attività e recapiti diventano una colonna. Da 1500px il margine superiore dell’introduzione passa a 80px.

## Elevation & Depth

Superfici piatte, senza ombre. Divisori sottili e il fondo del footer separano le aree.

## Shapes

Angoli appena arrotondati per azione principale e fotografia; nessun contenitore a scheda. La fotografia usa ritaglio centrale, proporzione 2.25 su desktop e 1.5 su mobile.

## Components

L’azione principale è un link pieno rosso con testo bianco semibold (14px). Il passaggio del puntatore scurisce il fondo con transizione di 0.2s. I link testuali hanno sottolineatura distanziata (5px); quelli di navigazione mostrano la sottolineatura al passaggio. Il focus visibile usa contorno rosso di 3px, distante 6px. Il collegamento per saltare al contenuto appare al focus.

Scorrimento dolce e transizione del pulsante rispettano prefers-reduced-motion. La pagina non contiene moduli o controlli con stati di caricamento.

## Do's and Don'ts

- Do mantenere logo rosso e Fraunces come elementi di continuità.
- Do mantenere recapiti leggibili e focus visibile.
- Don't introdurre qualifiche o dati dell’associazione non confermati.
