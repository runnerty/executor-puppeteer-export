<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">A new way for processes managing</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url] 
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Executor for [Runnerty]: Puppeteer wrapper to export html to PDF/image 

#### EJS Compatible

### Configuration sample:
```json
{
  "id": "puppeteer_default",
  "type": "@runnerty-executor-puppeteer-export"
}
```

### Plan sample:
```json
{
  "id": "puppeteer_default",
  "html": "./workspace/templates/template_one.html",
  "pdf": {
    "path": "sample.pdf",
    "format": "A4"
  }
}
```

### Plan advanced:
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
      "width":1024,
      "height":900
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
    "format": "A4",
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
  "args":{
    "subject":"Sample plan",
    "message":"Value for template one EJS var"
  }
}
```


[Runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-shell.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-shell
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-shell.svg
[david-badge]: https://david-dm.org/runnerty/executor-shell.svg
[david-badge-url]: https://david-dm.org/runnerty/executor-shell