const puppeteer = require('puppeteer');
const URL = require('url').URL;
const ejs = require('ejs');
const fs = require('fs');

const stringIsAValidUrl = s => {
  try {
    new URL(s);
    return true;
  } catch (err) {
    return false;
  }
};

let options = {
  launch: {},
  authenticate: {
    username: '',
    password: ''
  },
  userAgent: 'Runnerty',
  extraHTTPHeaders: {
    string: 'string'
  },
  bypassCSP: false,
  offlineMode: false,
  cacheEnabled: true,
  javaScriptEnabled: true,
  cookie: {
    name: 'string',
    value: 'string'
  },
  viewport: {
    width: 1000,
    height: 1000
  },
  html: 'file:///Users/carlos/Documents/workspace/puppeteer/html.html',
  options: {
    waitUntil: 'load'
  },
  geolocation: { latitude: 59.95, longitude: 30.31667 },
  pdf: {
    path: 'test.pdf',
    format: 'A4',
    margin: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px'
    }
  },
  screenshot: {
    path: 'test.png',
    type: 'png'
  },
  args: {
    orderDate: '123456789',
    salesId: '',
    paymentMethod: '',
    salesLine: '',
    i: '',
    items: []
  }
};

run(options).catch(err => {
  console.log(err);
});

async function run(opt) {
  const browser = await puppeteer.launch(opt.launch || {});
  const page = await browser.newPage();

  if (opt.userAgent) page.setUserAgent('Runnerty');

  if (opt.viewport && opt.viewport.width && opt.viewport.height)
    await page.setViewport(opt.viewport);
  if (opt.authenticate) await page.authenticate(opt.authenticate);
  if (opt.geolocation) await page.setGeolocation(opt.geolocation);
  if (opt.extraHTTPHeaders)
    await page.setExtraHTTPHeaders(opt.extraHTTPHeaders);
  if (opt.bypassCSP)
    await page.setBypassCSP(opt.bypassCSP === 'true' ? true : false);
  if (opt.hasOwnProperty('offlineMode'))
    await page.setOfflineMode(opt.offlineMode);
  if (opt.hasOwnProperty('cacheEnabled'))
    await page.setCacheEnabled(opt.cacheEnabled);
  if (opt.hasOwnProperty('javaScriptEnabled'))
    await page.setJavaScriptEnabled(opt.javaScriptEnabled);

  if (opt.html) {
    if (stringIsAValidUrl(opt.html) && !opt.html.startsWith('file://')) {
      await page.goto(opt.html, opt.options || {});
      if (opt.cookie) await page.setCookie(opt.cookie);
    } else {
      console.log('NO ES UNA URL VÁLIDA:', opt.html);
      if (opt.html.startsWith('file://'))
        opt.html = opt.html.replace('file://', '');
      let content = fs.readFileSync(opt.html, 'utf8');
      if (opt.args) {
        try {
          content = ejs.render(content, opt.args);
        } catch (err) {}
      }
      await page.setContent(content, opt.options || {});
    }
  }

  if (opt.pdf) await page.pdf(opt.pdf);
  if (opt.screenshot) await page.screenshot(opt.screenshot);

  await browser.close();
}
