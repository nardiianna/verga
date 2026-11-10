# Rigenerare la guida riparazioni

Servono Node e `playwright-core` (usa il Chrome installato).

1. Schermate dal mockup: `node shots-guida.js` (le salva in `../img/`).
2. PDF: `node pdf.js ../../2026-MM-GG-guida-portale-riparazioni.pdf` (stampa `../guida-portale-riparazioni.html`).
