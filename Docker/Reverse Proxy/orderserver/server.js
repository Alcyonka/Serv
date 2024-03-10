'use strict';
const express = require('express');
const PORT = 80;
const HOST = '0.0.0.0';

//Create Express Application
const app = express();

//Server All Static Contents from Static Folder
app.get('/', function(req,res){
 res.status(200).send({"message" : "Order REST API Microservice Running", "status": "success"})
 res.end;
});
app.post('/createorder', function(req,res){
 res.status(200).send({"status": "success", "message" : "Order Created"})
 res.end;
});

//Start Your WebServer & Listen on PORT 80
app.listen(PORT, HOST);
console.log('~.~.~.~ Order Microservice Running on Port 80 ~.~.~.~');