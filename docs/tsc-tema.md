# Portale venditori su TSC · versione 1

Il tema TSC si trova in `tsc-theme/`. È il backup 1791293589 con il portale aggiunto sopra. Il mockup (`mockup/index.html`) resta il riferimento grafico. Il JS del portale è stato generato dal mockup e poi adattato a TSC.

## File da caricare su TSC

| File | Stato | Cosa fa |
|---|---|---|
| `template/skeleton.html` | modificato | Con `vp_enabled = true` (prima riga) tutto il sito diventa il portale. Con `false` torna il tema originale. |
| `template/vp_skeleton.html` | nuovo | Head, scelta della vista (login, portale, pagine TSC dentro la cornice, cliente finale), invio delle mail di nuovo cliente. |
| `template/vp_data.html` | nuovo | Dati reali passati al portale (`window.VP`): clienti dell'agente, cliente selezionato, ordini, proposte, prodotti, marchi. |
| `template/vp_app.html` | nuovo | Applicazione del portale (JS). |
| `template/vp_css.html` | nuovo | Stile del portale. Le classi in conflitto con Bootstrap sono rinominate (`vbtn`, `vcard`, `vrow`, `vmodal`, `vnav`, `vtoast`, `vbadge`). |
| `template/vp_logo.html` | nuovo | Logo SVG Verga. |

`shop_rules.html` non è stato toccato. **Attenzione:** nel backup i codici del middleware (`codes`) sono vuoti. Se sul tema live sono compilati, non sovrascrivere quel file.

Nei file `vp_app.html` e `vp_css.html` non vanno mai scritte le sequenze `{{`, `{%` e `{#`: Twig le interpreterebbe e la pagina si romperebbe.

## Come funziona

- **Venditore = agente TSC**, cioè un cliente con il campo custom `role = agent`. I suoi clienti sono nel campo custom `associations` (JSON). Il direttore vendite è un "super agente" (gruppo in `shop_rules.html`) e vede tutti i clienti da `customers_list.json`.
- **Login**: `/login` con `Storeden.login` (email e password TSC). Chi non è loggato viene rimandato al login. Il cliente finale loggato vede una pagina di cortesia.
- **Pagine del portale**, tutte sotto `/profile/…` perché TSC ha URL fissi e `profile` accetta qualsiasi sottopagina:

| Vista | URL |
|---|---|
| Home | `/` |
| Clienti | `/profile/clienti` |
| Scheda cliente | `/profile/cliente/<id>` |
| Nuovo cliente | `/profile/nuovo-cliente` |
| Passaggi | `/profile/passaggi` |
| Manifestazioni | `/profile/manifestazioni` |
| Catalogo | `/profile/catalogo` |
| Cassa | `/profile/cassa` |
| Riparazioni | `/profile/riparazioni` |
| Nuova accettazione | `/profile/accettazione` |
| Scheda busta | `/profile/busta/<id>` |
| Anteprima preventivo | `/profile/preventivo/<id>` |
| Autoregistrazione | `/profile/autoregistrazione` (da loggato) e `/login/registration` (pubblica) |

- **Pagine TSC standard** (`/cart`, `/profile/orders`, `/profile/proposals`, `/product/…` ecc.) vengono mostrate dentro la cornice del portale con lo stile del tema.
- **Aprire una scheda cliente** imposta il cookie `customer_info`, come la scelta cliente dell'agente. Così cassa, ordini e proposte lavorano su quel cliente.
- **Cassa**: "Crea ordine" mette i pezzi nel carrello TSC (`Storeden.postProduct`) e apre `/cart`. Lì il checkout a proposta del tema crea la proposta o l'ordine.
- **Nuovo cliente e autoregistrazione**: il portale invia i dati con un POST alla pagina stessa. Twig li manda per mail all'amministratore del negozio (`sendEmail`), come fa già `new_customer.html`.

## Dati reali e dati provvisori

| Dato | Da dove arriva oggi |
|---|---|
| Clienti dell'agente (nome, email, telefono, CF, PEC, indirizzo di fatturazione, P.IVA) | TSC (`customers_list` / `associations`) |
| Dati completi del cliente aperto | middleware `customer_get.php` |
| Ordini del cliente aperto (tab Acquisti, con link al dettaglio) | middleware `order_frontend.php` |
| Proposte del cliente aperto (tab Manifestazioni → "Proposte su TSC") | middleware `proposal_frontend.php` |
| Catalogo (primi 500 prodotti) e marchi | `getItemsByFilter`, `getBrands` |
| Carrello e checkout | TSC |
| Passaggi, note firmate, task ai colleghi, legami, valutazione, interessi, misure, manifestazioni CRM, riparazioni, notifiche | **solo nel browser** (localStorage, chiave `vp_store_v1`). In alto c'è il banner "Versione di prova". |

## Prima prova su TSC (checklist)

1. Carica i file della tabella e apri il sito da non loggato: deve comparire il login verde a tutta altezza.
2. Entra con un utente **agente**. Deve aprirsi la Home del portale. Se compare la pagina "Benvenuto in Verga", l'utente non ha `role = agent`.
3. Vai su Clienti: devono comparire i clienti dell'agente. Se la lista è vuota, controlla il campo `associations` dell'agente oppure i codici del middleware.
4. Apri un cliente. Nel tab Acquisti devono esserci i suoi ordini. Clicca un ordine: si apre il dettaglio TSC dentro la cornice.
5. Catalogo: devono comparire i prodotti, con marca e referenza.
6. Cassa: scegli il cliente, aggiungi un pezzo e premi "Crea ordine". Deve aprirsi `/cart` con il pezzo dentro.
7. Riparazioni: la sidebar diventa grafite.
8. Manda gli screenshot e, se qualcosa non va, la **console del browser** (tasto destro → Ispeziona → Console).

Se qualcosa si rompe in modo grave, metti `vp_enabled = false` in `skeleton.html` e ricarica: torna il tema originale.

## Cosa manca (da fare insieme)

1. **Salvataggio sul server dei dati CRM.** Servono endpoint nuovi sul middleware `pda2_shared` (Ducky), con la stessa autenticazione `verifycode`/`hash` degli altri. Proposta:
   - `crm_get.php?customer_id=…` → campi CRM del cliente (valutazione, brand/modelli di interesse, interessi, misure, lingua, sesso, data di nascita o decade, professione, azienda, celebrità, privacy firmata, legami). In alternativa li salviamo come **Customer Custom Fields** di TSC tramite l'API Connect (`PUT /clients/custom_fields.json`), chiamata dal middleware.
   - `crm_save.php` (POST) → salva gli stessi campi.
   - `events.php` (GET per cliente o per boutique, POST) → passaggi e contatti con tipo, motivo, nota, follow-up, venditore, boutique e data.
   - `notes.php` e `tasks.php` → note firmate (modificabili solo dall'autore) e task ai colleghi, anche periodici, con notifiche.
   - `interests.php` → manifestazioni di interesse. Oppure le registriamo direttamente come PDA senza prezzo sul sistema proposte già esistente: da decidere con Dario.
   - `repairs.php` → buste di riparazione: anagrafica oggetto, step e attività con data e venditore, preventivo con voci, posizione e tecnico, allegati, storico, cambio intestatario CPO.
   - **Scrittura dal frontend**: Twig sa solo leggere (`fetchAndCache`). Le scritture possono partire dal JS del portale verso il middleware, con un token firmato generato da Twig per l'utente loggato, oppure con un POST alla pagina che Twig inoltra. Da decidere con chi sviluppa `pda2_shared`.
2. **Liste aggregate per tutte le boutique**: dashboard, filtri per acquisti e clienti dormienti richiedono ordini e passaggi di **tutti** i clienti, non solo di quello aperto. Serve un endpoint di ricerca o un export periodico.
3. **Creazione vera dei nuovi clienti** (oggi arriva una mail): endpoint del middleware che crei il cliente su TSC e lo associ all'agente (API Connect `POST /b2b/user.json` + custom fields), e lo faccia diventare Cliente al primo ordine via eCube.
4. **Autoregistrazione pubblica**: stessa cosa del punto 3, più il consenso privacy. `Storeden.register` richiede una password e non salva campi custom.
5. **Preventivo online per il cliente**: serve una pagina pubblica con link privato (ad es. una pagina CMS `/page/preventivo?t=…`) che legga e salvi la risposta sul middleware. Oggi c'è solo l'anteprima per il venditore.
6. **Fattura e scontrino**: emissione dal gestionale (TSE via eCube) e PDF restituito al portale.
7. **Colleghi e boutique**: la lista dei colleghi per i task è ancora d'esempio. Va letta dagli agenti TSC. La boutique del venditore può diventare un campo custom `boutique` dell'agente: il portale lo legge già, se c'è.
8. **Catalogo**: oltre i 500 prodotti serve una paginazione o una ricerca lato server. Seriale e stato "in arrivo" dipendono da come arrivano da TSE.
9. **Foto e allegati delle riparazioni**: oggi restano nel browser. Serve un upload sul middleware (o lo storage di TSC, se disponibile).
