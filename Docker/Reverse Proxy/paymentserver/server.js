'use strict';
const express = require('express');
const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get('/', function(req,res){
 res.status(200).send({"message" : "Payments REST API Microservice Running", "status": "success"})
 res.end;
});
app.post('/processpayment', function(req,res){
 res.status(200).send({"status": "success", "message" : "Payment Processed"})
 res.end;
});

app.listen(PORT, HOST);
console.log('~.~.~.~ Payment Microservice Running on Port 80 ~.~.~.~');