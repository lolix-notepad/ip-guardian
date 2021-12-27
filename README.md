Ip whitelist for you express application.

# Installation

```sh
npm i ip-guardian
```

# Usages

Global usage, it works on each route:

```js
const express = require('express');
const app = express();
const IpGuardian = require('ip-guardian');

const PORT = 3000;

/* setting whitelist */
IpGuardian.setWhitelist(['127.0.0.1']);

/* setting the middleware (checker) */
app.use(IpGuardian.checker);

app.get('/', (req, res) => {
    res.send('Helo World!');
});

app.listen(PORT);
```

Adding `ip-guardian` to specific routes

```js
const express = require('express');
const app = express();
const IpGuardian = require('ip-guardian');

const PORT = 3000;

/* setting whitelist */
IpGuardian.setWhitelist(['127.0.0.1']);

app.get('/', IpGuardian.checker, (req, res) => {
    res.send('Helo World!');
});

app.listen(PORT);
```
