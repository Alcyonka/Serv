'use strict';
const express = require('express');
const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.use('/', express.static('./static'));


app.listen(PORT, HOST);
console.log('~.~.~.~ Static Server Running on Port 80 ~.~.~.~');