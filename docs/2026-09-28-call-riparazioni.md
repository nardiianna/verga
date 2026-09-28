# Verga 1947 – Portale Riparazioni · Recap call 28/09/2026

**Tema:** come Verga gestisce oggi le riparazioni degli orologi, e cosa vorrebbe nel nuovo portale.
**Impostazione:** il portale sarà **diviso in due**. Dario propone 2 licenze TSC: una per i **Venditori** e una per le **Riparazioni**.
**Strumenti attuali:** gestionale **Arca Evolution** (processi e documenti) e un **Excel "DB RIP"** per monitorare le buste.

## 1. Flusso standard di una riparazione (recap di Dario)
1. Il cliente viene in negozio per una riparazione.
2. Il venditore compila il modulo di accettazione.
3. Si fanno le foto del prodotto.
4. Si stampa un modulo che il cliente firma: è la sua ricevuta di consegna dell'orologio.
5. Si stampano 2 etichette da mettere sulla busta.
6. L'orologio passa in laboratorio per il preventivo. Il preventivo può non essere definitivo: se emergono altri problemi si aggiungono voci.
7. Il preventivo viene mandato al cliente. Da qui si conoscono i tempi di riparazione per i lavori standard; per alcuni lavori, per esempio il cambio quadrante, non esistono tempi standard.
8. Il cliente deve accettare.
9. L'orologio entra in lavorazione e la riparazione viene pianificata.

**Se il cliente rifiuta il preventivo:** il preventivo viene chiuso e l'orologio restituito. In alcuni casi il solo preventivo ha un costo, anche se poi viene rifiutato.

**Listini:** per le riparazioni dei brand il listino lo manda la casa madre. Alcune riparazioni Verga le fa internamente.

## 2. Accettazione in negozio: dati da raccogliere
Oggi il venditore compila la scheda "Accettazione" nel gestionale. **Vorrebbero un'interfaccia migliore.**

**Dati del processo**
- Attività, per esempio Accettazione
- Processo, per esempio Accettazione Mazzini
- Area, per esempio Laboratorio Mazzini
- Data di inizio, data di fine ed "Eseguita"
- Creato da, Assegnato a
- Cliente, contatto
- Commessa, cioè il **numero della busta**
- Promemoria

**Dati dell'oggetto**
- Tipo (es. orologio, orologio da tavolo), materiale, marca, modello, referenza
- Numero cassa (Nc), numero movimento (Nm), calibro (Cal)*
- Quadrante, colore del quadrante, meccanismo, bracciale
- Motivo della riparazione (es. preventivo riparazione, cambio pila, valutazione CPO…)
- Valore dichiarato ai fini assicurativi
- Ritiro previsto
- Garanzia
- Numero di fotografie

**Note:** ci sono due sezioni, le note **principali**, che vede il cliente, e le note **interne** di riparazione. C'è anche un campo "Attributi".

**Richieste**
- Un campo con il pulsante **"Scatta foto"** collegato direttamente alla fotocamera.
- Allegati più semplici da inserire: oggi la procedura è macchinosa.

\* "Cal" come calibro è una nostra interpretazione, da confermare.

## 3. Documento, ricevuta ed etichette
- Dopo aver compilato i campi, l'operatore clicca **Azioni** e crea il documento: una bolla del ciclo attivo, con l'articolo "RIPARAZIONE".
- **Vorrebbero che i dati passassero in automatico nel documento**, senza doverli ricopiare.
- **Ricevuta stampata**, firmata dal cliente. Contiene:
  - numero riparazione e data; dati del cliente (nome, indirizzo, codice fiscale, telefono, cellulare, email, PEC);
  - dichiarazione di custodia gratuita fino al termine ultimo di ritiro;
  - dati dell'oggetto e numero di foto scattate alla presenza del cliente;
  - valore dichiarato, intervento richiesto, note.

  → **Vorrebbero poter aggiungere le CLAUSOLE.**
- **2 etichette** per la busta: una con i dati del cliente, l'altra **da chiarire**.

## 4. Fasi del processo
Oggi il processo interno ha questi passaggi:

Accettazione → Presa in carico tecnico → Redazione preventivo → Invio preventivo → Preventivo accettato → Assegnazione riparazione → Chiusura riparazione → Avviso ritiro orologio

Ogni attività ha uno stato: da fare, in ritardo, eseguita, di chiusura.

**Richieste**
- **5 step principali**, con le varie casistiche all'interno di ciascuno, divise tra eseguite e non eseguite.
- **Non vogliono data di inizio e data di fine separate** per ogni attività, perché devono coincidere.
- In chiusura inseriscono il **documento di scarico** con i pezzi usati. Oggi si può allegare un solo file: **ne servono più di uno**.
- Nell'avviso di ritiro dell'orologio è incluso lo **scontrino**.

## 5. Monitoraggio delle buste
Oggi usano l'Excel "DB RIP" e lo caricano sul portale.
- Semaforo rosso: la procedura è da fare. Il tecnico prende in mano il lavoro, clicca **"presa in carico"** e si indica quale tecnico ha preso la busta.
- Quando il lavoro è finito si inserisce la **data di chiusura**.

**Dati da tracciare**
- Data accettazione
- Data assegnazione (quando viene assegnato il tecnico)
- Data chiusura
- Data ritiro
- Data riparazione esterna (oggi non usata)
- Data preventivo rifiutato
- Busta, negozio, cliente, marca, tecnico, motivo della riparazione
- Totale del preventivo, numero e totale dello scontrino

**Richieste**
- Sapere lo **stato dell'orologio**: chi ce l'ha e fra quanti giorni arriva.
- Vedere **dove si trovano fisicamente gli orologi** (a livello di magazzino).
- Filtro per le riparazioni con **preventivo accettato ma non ancora assegnato**.
- Nuovo campo **"Presunta consegna"**.

## 6. Preventivo al cliente
**Oggi** il preventivo è un PDF su carta intestata inviato via mail. Il cliente lo restituisce compilato e firmato via mail; una conferma telefonica non vale.

**Cosa manca nel preventivo attuale**
- Una casella per ogni voce, per accettare le singole lavorazioni.
- Il totale complessivo.

**Proposta:** al posto del PDF, una **pagina online interattiva**. Il cliente sceglie quali voci accettare e invia la conferma; paga al ritiro.
- Accesso: con login e password, **oppure** con un link privato visibile solo a chi lo riceve. **Verga vorrebbe entrambi.**
- Il cliente deve poterlo anche **stampare**.
- Una volta accettato, il preventivo va registrato nel gestionale.

## 7. Scarico dei componenti
- Lo scarico dei componenti si fa **solo nel gestionale (TSE)**, ma deve riportare il **numero di busta** di riferimento.
- Dario: sarà tutto da gestire tramite **eCube**.

## 8. Casi particolari
- **Garanzia:** non c'è il preventivo; il resto del flusso è uguale.
- **Cambio pila immediato:** il preventivo viene accettato subito.

## 9. Accettazione CPO (Rolex Certified Pre-Owned)
**Verga chiede a noi come gestirla.**
- Si apre una **busta CPO** a nome del cliente che lascia un orologio che Verga potrebbe acquistare.
- Verga ha **10 giorni** per valutarlo e fare un'offerta (busta di valutazione).
- Se il cliente accetta, Verga diventa proprietaria: **la stessa busta cambia intestatario**. Quindi ci sono 2 fasi: prima intestata al cliente, poi a Verga.

**Passaggi attuali**
Accettazione → Prima valutazione del tecnico → Redazione preventivo → Comunicazione offerta → Offerta accettata → Assegnazione riparazione → Chiusura riparazione → Certificazione Rolex → Rientro certificazione Rolex → Pubblicazione foto → Orologio in vendita

In alternativa: offerta rifiutata o valutazione negativa → avviso ritiro orologio.

**Richieste**
- In fase di certificazione serve poter **allegare il documento**.
- Il prodotto deve avere **tutto lo storico registrato**.
- Esiste anche la **Quotazione** come servizio: Verga valuta l'orologio senza l'obiettivo di acquistarlo.

## 10. Conto vendita (Verga Vintage)
Si apre un'"Accettazione CV" nell'area Verga Vintage.
- Il cliente è sempre **Verga Vintage**.
- Commessa: il **numero della busta**.
- Dati: numero CV, data CV, nome cliente, valore, marca e modello.
- Se sull'oggetto ci sono lavori da fare, va segnalato.

## 11. Aree e laboratori
Nel gestionale oggi ci sono queste aree: CPO, Laboratorio Capelli, Laboratorio Mazzini, Laboratorio Patek, Verga Vintage, Amministrazione. L'Amministrazione gestisce, per esempio, l'"avviso ritiro orologio con fattura".

## 12. Punti aperti
- [ ] Contenuto della **seconda etichetta** della busta
- [ ] Testo delle **clausole** da inserire nella ricevuta
- [ ] Quali sono i **5 step principali** e quali casistiche contengono
- [ ] Significato esatto dei campi **Nc, Nm e Cal**
- [ ] **Posizione degli orologi a magazzino**: come si traccia (stanza, cassetto, tecnico…)
- [ ] Come calcolare la **presunta consegna** quando non esistono tempi standard
- [ ] **Preventivo online**: login, link privato o entrambi; firma o semplice conferma; come torna nel gestionale
- [ ] Gestione del **costo del preventivo** rifiutato
- [ ] **Listini** della casa madre: formato, e se vanno importati nel portale
- [ ] **CPO**: proposta nostra per il cambio di intestatario della busta e per lo storico del prodotto
- [ ] **Scarico componenti** via eCube: quali dati servono dal portale (numero busta, pezzi)
- [ ] **Migrazione** dello storico dall'Excel "DB RIP" e dai processi di Arca
- [ ] Conferma delle **2 licenze TSC** (Venditori e Riparazioni) e di come i due portali condividono clienti e storico
