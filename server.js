'use strict';

const express = require('express');

const index = './index.html';

const app = express();
app.use(express.static('./'));
app.get('/', (req, res) => {
  res.sendFile(index);
});

const PORT = 80;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);