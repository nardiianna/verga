const { chromium } = require('playwright-core');
const OUT = '/Users/anna.nardi/verga/docs/guida-riparazioni/img';
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const pg = await b.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
  const errs = []; pg.on('pageerror', e => errs.push(e.message));
  await pg.goto('file:///Users/anna.nardi/verga/mockup/index.html');
  await pg.addStyleTag({ content: '.notes-fab,#toast-root{display:none!important} *{transition:none!important;animation:none!important}' });
  const ev = fn => pg.evaluate(fn);
  const shot = async (name, maxH = 1500, full = true) => {
    await pg.evaluate(() => { document.getElementById('toast-root').innerHTML = ''; });
    await pg.waitForTimeout(400);
    const h = full ? Math.min(maxH, await pg.evaluate(() => document.documentElement.scrollHeight)) : 1000;
    await pg.screenshot({ path: `${OUT}/${name}.png`, fullPage: full, clip: { x: 236, y: 0, width: 1164, height: h } });
  };
  const click = async sel => { await pg.click(sel); await pg.waitForTimeout(150); };
  await ev(() => { S.operator = 'Marco Verdi'; S.boutique = 'Bottega Storica'; });
  // A1 elenco venditore
  await ev(() => { S.ripBO = false; go('riparazioni'); }); await shot('a1-elenco', 1400);
  // A2 nuova accettazione
  await ev(() => { go('rip-new'); S.rn.clientId = 'c1'; render(); }); await shot('a2-accettazione', 2300);
  // A3 ricevuta + etichette (busta r1)
  await ev(() => { go('busta', 'r1'); openModal({kind:'ricevuta', rid:'r1'}); }); await shot('a3-ricevuta', 1000, false);
  await ev(() => { closeModal(); openModal({kind:'etichette', rid:'r1'}); }); await shot('a3-etichette', 1000, false);
  await ev(() => closeModal());
  // A4 seguire la pratica: r1 in lavorazione
  await ev(() => go('busta', 'r1')); await shot('a4-busta', 1530);
  // A5 attesa cliente r2 + preventivo online
  await ev(() => go('busta', 'r2')); await shot('a5-attesa', 1230);
  await ev(() => go('prev', 'r2')); await shot('a5-preventivo-cliente', 1230);
  // A6 riconsegna r5
  await ev(() => go('busta', 'r5')); await shot('a6-riconsegna', 1230);
  // A7 cambio pila
  await ev(() => { go('rip-new'); S.rn.clientId = 'c4'; S.rn.tipo = 'Cambio pila'; S.rn.motivo = 'Cambio pila'; S.rn.obj.marca = 'Tudor'; S.rn.obj.modello = 'Black Bay 58'; S.rn.obj.ref = 'M79030N-0001'; act(Object.assign(document.createElement('button'), {}), new Event('x')); });
  await ev(() => { const el = document.createElement('button'); el.dataset.act = 'rn-save'; document.body.appendChild(el); el.click(); });
  await ev(() => { const r = repairs[repairs.length - 1]; r.ric = true; r.et = true; closeModal(); render(); });
  await shot('a7-cambio-pila', 1000);
  // B1 elenco backoffice
  await ev(() => { S.ripBO = true; go('riparazioni'); }); await shot('b1-elenco', 1400);
  // B2 valutazione tecnica (r6 garanzia? usiamo r3)
  await ev(() => { R('r3').tecnico = 'Andrea Galli'; go('busta', 'r3'); }); await shot('b2-valutazione', 1530);
  // B3 redazione preventivo: r3 avanzata
  await ev(() => { const r = R('r3'); r.tecnico = 'Andrea Galli'; advanceTo(r, 2); r.prev.voci = [{d:'Sostituzione vetro zaffiro', p:280, ok:true},{d:'Test impermeabilità', p:60, ok:true}]; r.costoPrev = 40; render(); }); await shot('b3-preventivo', 1230);
  // B4 preventivo accettato r9 con settimane
  await ev(() => { const r = R('r9'); r.tecnico = 'Andrea Galli'; go('busta', 'r9'); }); await shot('b4-assegnazione', 1300);
  // B5 controllo prodotto: r9 avanzata
  await ev(() => { const r = R('r9'); advanceTo(r, 5); advanceTo(r, 6); advanceTo(r, 7); render(); }); await shot('b5-controllo', 1300);
  // B6 esterna: preventivo casa madre (r6? usiamo una copia: r8 è chiusa) -> r3 è già usata; riusiamo r6 garanzia? serve riparazione: creiamo da r2 clone
  await ev(() => { const src = R('r3'); const r = JSON.parse(JSON.stringify(src)); r.id = 'rx'; r.busta = 'B-2026-0429'; r.esterna = true; r.tecnico = 'Casa madre (esterno)'; r.ubic = 'Casa madre (riparazione esterna)'; r.ddt = 'DDT 2026/0193'; r.prev = {stato:'bozza', voci:[]}; r.si = 1; r.dates = {0:src.dates[0], 1:src.dates[1]}; r.log = [...src.log]; repairs.push(r); advanceTo(r, 2); advanceTo(r, 3); r.prevCM = {voci:[{d:'Revisione completa movimento', p:620},{d:'Vetro zaffiro originale', p:180}], file:'Preventivo_casa_madre_B-0429.pdf'}; go('busta', 'rx'); }); await shot('b6-casa-madre', 1300);
  await ev(() => go('busta', 'r4')); await shot('b6-esterna', 1300);
  // B7 CPO in redazione offerta
  await ev(() => { const r = R('r7'); advanceTo(r, 2); r.prev.voci = [{d:'Offerta di acquisto Submariner 116610LN', p:9800, ok:true}]; go('busta', 'r7'); }); await shot('b7-cpo', 1500);
  console.log('ERRORS', JSON.stringify(errs));
  await b.close();
})();
