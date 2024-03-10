'use strict';
const express = require('express');
const PORT = 80;
const HOST = '0.0.0.0';

//Create Express Application
const app = express();
//Server All Static Contents from Static Folder
app.use('/', express.static('./static'));

//Start Your WebServer & Listen on PORT 80
app.listen(PORT, HOST);
console.log('~.~.~.~ Static Server Running on Port 80 ~.~.~.~');