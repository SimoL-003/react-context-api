# E-commerce React App

## Descrizione

Applicazione e-commerce sviluppata in React che permette di visualizzare una lista di prodotti, filtrare i risultati tramite un sistema di budget dinamico e visualizzare la scheda dettagliata di ogni prodotto. L'interfaccia utilizza React Router per la navigazione tra le pagine e Context API per la gestione dello stato globale.

L'app scarica i prodotti da un'API esterna (FakeStoreAPI) e li gestisce localmente tramite contesti dedicati.

## Funzionalità principali

- Visualizzazione della lista dei prodotti.
- Filtraggio dei prodotti tramite budget massimo.
- Visualizzazione della pagina di dettaglio del singolo prodotto.
- Navigazione tra i prodotti precedente e successivo.
- Layout condiviso tra le pagine con Header e Footer.
- Gestione dello stato con Context API.
- Routing avanzato con React Router:
  - Home
  - About Us
  - Products
  - Single Product
  - Pagina 404 personalizzata

## Tecnologie utilizzate

- **React** — struttura dell’applicazione e gestione dello stato
- **React Router DOM** - navigazione tra le pagine
- **Context API** - creazione di un contesto globale
- **Axios** — per effettuare le chiamate HTTP
- **Tailwind CSS** — stile e layout responsive
- **JavaScript** — logica generale

## Logica principale

### ProductsContext

- Scarica tutti i prodotti dall'API.
- Calcola automaticamente il prezzo massimo tra tutti i prodotti.
- Rende disponibili lista prodotti e prezzo massimo a tutta l'app.

### BudgetContext

- Gestisce la modalità budget (attiva/disattiva).
- Memorizza il budget massimo impostato dall'utente.

### Single Product Page

- Scarica il singolo prodotto tramite ID dalla URL.
- Mostra loader durante il fetch.
- Fornisce navigazione al prodotto precedente e successivo tramite ID.
- Disabilita i pulsanti quando si raggiunge il primo o l'ultimo prodotto.

## Routing

- `/` — Homepage
- `/about-us` — Pagina informativa
- `/products` — Lista prodotti
- `/products/:id` — Scheda prodotto
- `*` — Pagina 404

## Risultato

[https://react-fake-store-sl.netlify.app/](https://react-fake-store-sl.netlify.app/)
