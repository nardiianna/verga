# Verga · Documenti ricevuti il 24/09/2026

Fonti:
- **Kick-off di progetto** (Vicsam Group, 02/09/2026): implementazione di TS Enterprise e integrazione con il portale custom.
- **LISTA PER NUOVO CRM 2027**: requisiti scritti da Verga.
- **Relazione tecnica** (Dario): architettura TSC + eCube + TSE.

## Team di progetto (dal kick-off)
| Persona | Ruolo |
|---|---|
| Flavia Protasoni (Vicsam) | Project Manager ERP |
| Vanessa Ripamonti (Vicsam) | Supporto PM, consulente applicativo ERP AFC/Commerciale |
| Alessandro Sorgon (Vicsam) | Consulente applicativo ERP AFC/Commerciale |
| Dario Franco (Ducky Network) | Responsabile tecnico WEB |
| Vanessa Grozeva (Vicsam) | Project Manager WEB |
| Luigi Altieri (Vicsam) | Sales Account |

Fasi: kick-off → interviste ai key user → analisi di dettaglio → messa in opera → formazione → test (UAT) → go-live → handover. Dopo l'handover: assistenza di 1° livello TeamSystem via ticket, 2° livello Vicsam a canone.

## Architettura (relazione tecnica)
- **TSC** (TeamSystem Commerce) è l'unico strumento usato dagli operatori di negozio.
- **TSE** (TeamSystem Enterprise) è l'ERP: fiscale, magazzino, contabilità.
- **eCube** è il connettore: tutte le comunicazioni TSC ↔ TSE passano da lì.
- Flussi: invio ordine (asincrono, senza conferma), richiesta fattura (sincrona, torna il PDF), lista documenti e dettaglio documento (in tempo reale, niente copia locale).
- Il contatto nasce **Prospect** su TSC e diventa **Cliente** al primo ordine. A quel punto eCube trova o crea l'anagrafica su TSE.
- **Migrazione**: ~24.000 documenti di vendita (6 anni) restano su TSE e vengono letti al volo. Da migrare su TSC: clienti, prospect e ~1.000 manifestazioni attive.
- Newsletter e automazioni: MailUp.

## Novità rispetto a quanto già nel mockup (ora aggiunte)
- Anagrafica: tipologia Prospect/Cliente/Commerciante, sesso, email principale e secondaria (sempre in minuscolo), lingua (IT, EN, ES, AR, ZH), più indirizzi strutturati, dati di fatturazione (ragione sociale, indirizzo, P.IVA, SDI), misure (polso, anello medio e anulare dx/sx).
- Brand di interesse come lista chiusa: Angelus, Cartier, Gerald Charles, Girard-Perregaux, Grand Seiko, Hublot, Messika, Nomos, Norqain, Patek Philippe, Rolex, Rolex CPO, Tudor, TAG Heuer, Pomellato, Verga Pre-Owned. Anche gli interessi sono una lista chiusa.
- Professioni: VIP, impiegato, CEO, avvocato, medico…
- Valutazione del venditore 1-5 e, separata, fascia acquisti automatica Bronzo/Argento/Oro/Platino.
- Clienti dormienti (nessun passaggio, chiamata o mail da tempo).
- Legami: figlio, coniuge, padre, madre, fratello/sorella, amico, collega di.
- Note multiple firmate con utente, data e ora; non si modificano le note altrui.
- Messaggi e task ai colleghi sulla scheda cliente, anche periodici (compleanni, anniversari).
- Privacy firmata dal cliente su iPad.
- Passaggi: aggiunti la mail e il motivo del contatto (nuova manifestazione, aggiornamento manifestazione, acquisto, riparazione).
- Scheda cliente con tre sezioni separate: Acquisti, Riparazioni, Manifestazioni.
- Ricerca su qualunque voce (anche azienda e note); referenza cercata separatamente tra acquisti e manifestazioni; filtro "venduto da".
- PDA: stati Manifestazione, Preordine, Associata, Ordine, Annullata. Solo direttore vendite e titolare associano e dissociano; qualsiasi venditore trasforma in ordine; notifica a chi ha creato la PDA.
- Cassa: crea un Ordine; intestazione alla persona o alla società; richiesta fattura con PDF da stampare; scontrino di cortesia in definizione.

## Previsto ma non rappresentato nel mockup
- Automazioni MailUp: consenso privacy, follow-up dopo la visita, mail di acquisto personalizzata, presa in carico di riparazione e manifestazione, auguri di compleanno, recall revisione orologio dopo X anni. Newsletter in italiano o inglese in base alla lingua dell'anagrafica.
- Statistiche di invio newsletter (sent, open rate, click rate).
- Questionario via mail ai clienti dopo il go-live (es. misura del polso).
- Collegamento con file Excel esterni (programmazione consegne Rolex).

## Punti aperti (relazione tecnica + lista Verga)
- **TSC non consente modifiche di interfaccia**: da verificare quanto del layout del mockup è realizzabile.
- Relazioni: bastano quelle standard di TSC?
- Misure: campo del cliente o variante di prodotto?
- Brand di interesse: campo dedicato o "Categoria" esistente?
- Contenuto della lista interessi.
- Sezione Acquisti: fatture o ordini di vendita?
- Riparazioni: sola consultazione dal gestionale o anche apertura da TSC? (in stand-by)
- Uso reale dei file Excel per le consegne Rolex.
- Scontrini di cortesia (Scontrini in Cloud o simili).
- Collegamento tra anagrafiche TSC e TSE nella migrazione.
- Codifica delle matricole per articoli a taglia (anelli).
- Campi della PDA da passare al gestionale quando diventa ordine.
- Timeout della fattura sincrona e conferma di ricezione dell'ordine.
- Boutique: la relazione parla di 1 monomarca Rolex, 2 multimarca a Milano e Portofino stagionale; il sito elenca anche la boutique Patek Philippe.
- Celebrità: campo a parte o voce VIP nelle professioni?
