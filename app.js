var fs = require('fs');
var express = require('express');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var assert = require('assert');
var test = require('./test');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// create a webserver

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.post('/send', function(req,res){

  test.init();

  var amount = req.body.amount;
  console.log('Amount given: ');
  console.log(String(amount));
});

app.listen(8888);
