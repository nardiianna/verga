const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const pg = await b.newPage();
  await pg.goto('file:///Users/anna.nardi/verga/docs/guida-riparazioni/guida-portale-riparazioni.html');
  await pg.waitForLoadState('networkidle');
  await pg.pdf({ path: process.argv[2], format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true });
  await b.close();
})();
