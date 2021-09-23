<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Puppeteer executor for [Runnerty]:

Puppeteer wrapper to export html to PDF/image with [ejs] template support.

### Installation:

Through NPM

```bash
npm i @runnerty/executor-puppeteer-export
```

You can also add modules to your project with [runnerty]

```bash
npx runnerty add @runnerty/executor-puppeteer-export
```

This command installs the module in your project, adds example configuration in your [config.json] and creates an example plan of use.

If you have installed [runnerty] globally you can include the module with this command:

```bash
runnerty add @runnerty/executor-puppeteer-export
```

### Configuration sample:

Add in [config.json]:

```json
{
  "id": "puppeteer_default",
  "type": "@runnerty-executor-puppeteer-export"
}
```

### Plan sample:

Add in [plan.json]:

```json
{
  "id": "puppeteer_default",
  "html": "./workspace/templates/template_one.html",
  "pdf": {
    "path": "sample.pdf",
    "format": "a4",
    "printBackground": false
  }
}
```

### Plan advanced:

Add in [plan.json]:

```json
{
  "id": "puppeteer_default",
  "html": "./workspace/templates/template_one.html",
  "launch": {
    "headless": false,
    "executablePath": "/path/to/Chrome"
  },
  "authenticate": {
    "username": "my_usr_name",
    "password": "my_pass"
  },
  "userAgent": "Runnerty",
  "extraHTTPHeaders": {
    "my_header": "my_header_value"
  },
  "bypassCSP": false,
  "offlineMode": false,
  "cacheEnabled": true,
  "javaScriptEnabled": true,
  "cookie": {
    "name": "string",
    "value": "string"
  },
  "viewport": {
    "width": 1024,
    "height": 900
  },
  "geolocation": {
    "latitude": 36.6,
    "longitude": 2.36
  },
  "options": {
    "waitUntil": "load"
  },
  "pdf": {
    "path": "sample.pdf",
    "format": "a4",
    "printBackground": true,
    "margin": {
      "top": "20px",
      "left": "20px",
      "right": "20px",
      "bottom": "20px"
    }
  },
  "screenshot": {
    "path": "sample.png",
    "type": "png"
  },
  "args": {
    "subject": "Sample plan",
    "message": "Value for template one EJS var"
  }
}
```

[runnerty]: https://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-puppeteer-export.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-puppeteer-export
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-puppeteer-export.svg
[david-badge]: https://david-dm.org/runnerty/executor-puppeteer-export.svg
[david-badge-url]: https://david-dm.org/runnerty/executor-puppeteer-export
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
[ejs]: https://ejs.co
