'use strict';

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

const Execution = global.ExecutionClass;

class puppeteerExportExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  async exec(opt) {
    const _this = this;

    const browser = await puppeteer.launch(opt.launch || {});
    const page = await browser.newPage();

    if (opt.userAgent) page.setUserAgent(opt.userAgent);

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
        if (opt.html.startsWith('file://'))
          opt.html = opt.html.replace('file://', '');
        let content = fs.readFileSync(opt.html, 'utf8');
        if (opt.args) {
          console.log(opt.args, Object.keys(opt.args).length);
          try {
            if (opt.args && Object.keys(opt.args).length) {
              content = ejs.render(content, opt.args);
            }
          } catch (err) {
            const endOptions = {
              end: 'error',
              messageLog: `Error Puppeteer Export: ${err}`,
              err_output: `Error Puppeteer Export: ${err}`,
              msg_output: ''
            };
            _this.end(endOptions);
          }
        }
        await page.setContent(content, opt.options || {});
      }

      if (opt.pdf) await page.pdf(opt.pdf);
      if (opt.screenshot) await page.screenshot(opt.screenshot);
    }
    _this.end();
    await browser.close();
  }
}
module.exports = puppeteerExportExecutor;
