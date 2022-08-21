'use strict';
const express = require('express');
// Constants
const PORT = 49162;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
  res.send('<h2>Docker and Nodejs appdemo <h2>');
});
app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
