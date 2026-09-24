# Verga 1947 – Portale CRM/Cassa venditori · Recap call 24/09/2026

**Go-live:** 1 gennaio 2027
**Referenti cliente:** Dario, Vanessa
**Materiale in arrivo dal cliente:** documento Word con le specifiche (il cliente ha già visto una demo)

## 1. Contesto
- Verga ha **3 negozi + 1 a Portofino**, distinti per brand.
- Attività: vendita **orologi e gioielli**, **riparazioni**, vendita **usato** (gestita da un'azienda separata).
- Oggi usano **Manago** (CRM + newsletter): verrà dismesso, la newsletter passa a **MailUp**.
- Oltre agli orologi trattano brand di gioielli (es. **Pomellato, Messika**) con flusso: cliente interessato → ordine → prodotto arriva qualche giorno dopo.

## 2. Cos'è il portale
- **CRM + interfaccia di cassa** ad **uso interno** per i venditori in negozio.
- Deve essere **touch** (pensato per tablet), usabile anche da PC.
- Il venditore deve poter: **gestire anagrafiche**, **fare la cassa**, **gestire eventi/interazioni**, **cercare clienti** e **cercare prodotti**.
- Copre anche **ordini** e **riparazioni**.
- In aggiunta: interfaccia pubblica di **autoregistrazione** per i clienti.

## 3. Flusso operativo del venditore
1. Login venditore
2. Selezione cliente (se nuovo → registrazione) · modale rapida per inserire un **evento**
3. Profilazione del cliente (filtri): pagina **manifestazione di interesse** · pagina **acquisto**
4. Ricerca prodotto per **referenza**
5. Cassa associata al cliente

## 4. Anagrafica cliente
- Flusso in negozio: il cliente entra → il venditore verifica se è già registrato → se no lo registra.
- Dati base: nome, cognome, email, cellulare, indirizzo.
- Subito dopo nome/cognome: **professione** (lista: Dipendente, Manager, Libero professionista, Celebrità) e **azienda** (testo libero).
- **Brand e modelli di interesse** (lista brand).
- **Interessi/attività** (lista di ~10 voci, ampliabile nel tempo): Golf, Tennis e padel, Vela, Teatro, Ciclismo, Fashion e beauty, Beverage…
- **Data di nascita**: desiderata, ma molti clienti non la danno → ipotesi di chiedere in alternativa la **decade** (anni '80, '90, 2000, 2010). *Da valutare fattibilità.*
- Entrando nella scheda il venditore vede subito le **manifestazioni di interesse** del cliente.

## 5. Legami / parentele
- Obiettivo: sapere che due clienti sono collegati (es. la moglie di un cliente top si presenta in negozio e il venditore lo capisce dalla scheda).
- Per privacy (indicazione di Dario) **non** si strutturano dati sensibili: gestito come **nota interna**, ma il legame deve comparire **su entrambe le anagrafiche**.
- UI: sezione **LEGAMI** nella scheda cliente → scelgo il tipo ("amico di", "marito di", …) → cerco nell'anagrafica → se la persona non esiste la creo al volo (anche anagrafica "vuota", non cliente).

## 6. Autoregistrazione cliente
- Step 1 (micro, obbligatorio): nome, cognome, **email (obbligatoria)**, cellulare, brand di interesse (facoltativo).
- Step 2 (dopo la registrazione): invito a completare altri dati facoltativi; se non li compila, li chiederà il venditore in negozio.
- I dati autoinseriti andranno filtrati/validati.

## 7. Eventi / interazioni
- Tipi: **cliente passato in negozio**, **cliente ha chiamato**, **l'azienda ha chiamato il cliente**.
- Richiesta cliente: registrarlo **con un clic dalla scheda cliente**.
- Proposta Dario: anche un'interfaccia **EVENTO** separata, senza entrare nella scheda: scrivo/seleziono il cliente → "Entrato in negozio" (data/ora e venditore presi in automatico) oppure "Chiamata".
- Esiste anche il concetto di **evento/manifestazione** a cui il cliente è interessato (per profilazione).

## 8. Manifestazione di interesse e acquisto
- Il venditore registra **o un acquisto** **o una manifestazione di interesse** (es. Rolex Daytona, colore bracciale, quadrante, note).
- La manifestazione diventa una **PDA** con prodotto generico **senza prezzo**.
- Quando arriva a Verga un modello compatibile, il venditore lo **assegna** al cliente → la PDA diventa un **pre-acquisto**.
- Il prodotto va assegnato a chi l'aveva prenotato (non sempre avviene: serve gestire le eccezioni).

## 9. Cassa e catalogo
- Ci sarà un **catalogo prodotti**.
- In cassa il prodotto si inserisce tramite **codice referenza**; la cassa è **sempre associata a un cliente**.
- Scenario tipico: apro la scheda cliente → trovo il Rolex prenotato → lo metto in cassa.
- Ogni prodotto venduto è un **prodotto unico** (pezzo singolo, tracciabile).

## 10. Filtri e segmentazione clienti
- Clienti per **brand** acquistato.
- Clienti per **modello** (es. Daytona) – fattibile.
- Clienti per **referenza** (numero modello specifico, salvato nel campo **MPN**) – da valutare, *"forse non serve"*.
- Per **ultimo acquisto** (es. acquistato nell'ultimo anno / nessun acquisto da 5 anni).
- Presenza in negozio (evento "passato in negozio").
- Alcuni **filtri obbligatori richiesti dai brand** → da farsi elencare.

## 11. Ricerca
- Valutare integrazione con **SelaSearch** (nome da verificare) per la **ricerca sui clienti** e non solo sui prodotti: l'idea è inviare al motore ogni cliente come se fosse una "scheda prodotto" e costruire i filtri lato clienti.

## 12. Punti aperti / next step
- [ ] Ricevere il **file Word** con le specifiche dal cliente
- [ ] Elenco definitivo **brand**, **interessi** e **professioni**
- [ ] Elenco **filtri obbligatori** richiesti dai brand
- [ ] Decidere **data di nascita vs decade**
- [ ] Verificare fattibilità integrazione **SelaSearch** sui clienti
- [ ] Chiarire flussi **riparazioni** e **ordini** (gioielli Pomellato/Messika) e rapporto con l'azienda dell'**usato**
- [ ] Migrazione dati da **Manago** e integrazione con **MailUp**
- [ ] Gestione privacy/consensi (GDPR) per anagrafiche, legami e newsletter
- [ ] Definire ruoli/permessi venditori e gestione multi-negozio
