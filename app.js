var fs = require('fs');
var express = require('express');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var assert = require('assert');
var client = require('./client');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// create a webserver

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.post('/send', function(req,res){

  //console.log(req);

  var acc_token = req.body.obj.access_token;
  var refresh_token = req.body.obj.refresh_token;

  console.log (acc_token);
  console.log(refresh_token);

  var receiver = req.body.sendTo;
  var amount = req.body.amt;

  var clientInfo = client.init(acc_token, refresh_token, receiver, amount);

  var clientDet = clientInfo.client;
  var numBits = clientInfo.numBits;

  console.log(numBits);
  console.log(clientDet);

  // var amount = req.body.amount;
  // var sendID = req.body.sendID;
  //
  // console.log(String(amount));
});

app.listen(80);
