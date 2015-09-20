module.exports.init = function(acc_token, refresh_token) {
  console.log("initialized");
  var Client = require('coinbase').Client;
  var client = new Client({
    'accessToken': acc_token,
    'refreshToken': refresh_token,
  });
  console.log(acc_token + "     " + refresh_token);
  //showBalance();
  //transfer();
}

//Displays the value of the balance
var showBalance = function() {
  client.getAccounts(function(err, accounts) {
    console.log(accounts + '\n');
    accounts.forEach(function(acct) {
      console.log('my bal: ' + acct.balance.amount + ' ' + acct.balance.currency + ' which is equivalent to ' +
      acct.native_balance.amount + ' ' + acct.native_balance.currency + ' for ' + acct.name);
    });
  });
}

var makeTransfer = function() {
  var args = {
    "to": "user1@example.com",
    "amount": "1.234",
    "notes": "Sample transaction for you"
  };
  account.sendMoney(args, function(err, txn) {
    console.log('my txn id is: ' + txn.id);
  });
}

var transfer = function() {
  // var Client = require('coinbase').Client;
  // var client = new Client({
  //   'apiKey' : 'G8ZHFjQAthZATXsl',
  //   'apiSecret' : 'D48wh5yNujyfj7mQeSTi2I8tLnPgow4V',
  //   'baseApiUri': 'https://api.sandbox.coinbase.com/v1/',
  //   'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
  // });
  client.getBuyPrice({'qty': 1, 'currency': 'CAN'}, function(err, obj) {
    dollarsToBit(obj.total.amount)
  });
}

var dollarsToBit = function (bitCoinValue) {
  var noOfBitCoins = 0.50 / bitCoinValue;
  console.log(noOfBitCoins);
}
