'use strict';
const express = require('express');
const PORT = 80;
const HOST = '0.0.0.0';

//Create Express Application
const app = express();

//Server All Static Contents from Static Folder
app.get('/', function(req,res){
 res.status(200).send({"message" : "Payments REST API Microservice Running", "status": "success"})
 res.end;
});
app.post('/processpayment', function(req,res){
 res.status(200).send({"status": "success", "message" : "Payment Processed"})
 res.end;
});

//Start Your WebServer & Listen on PORT 80
app.listen(PORT, HOST);
console.log('~.~.~.~ Payment Microservice Running on Port 80 ~.~.~.~');