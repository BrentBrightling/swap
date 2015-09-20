module.exports.init = function(acc_token, token_type) {
  var Client = require('coinbase').Client;
  var client = new Client({
    // 'apiKey' : 'G8ZHFjQAthZATXsl',
    // 'apiSecret' : 'D48wh5yNujyfj7mQeSTi2I8tLnPgow4V',
    // 'baseApiUri': 'https://api.sandbox.coinbase.com/v1/',
    // 'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
    'accessToken': acc_token,
    'refreshToken': token_type
  });
  console.log(acc_token + "     " + token_type);
  showBalance();
  //makeTransfer();
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

//Transfer function
// var makeTransfer = function () {
//   client.getBuyPrice({'qty': 1, 'currency': 'USD'}, function(err, obj) {
//     console.log('total amount: ' + obj.total.amount);
//   });
// }
//
// module.exports.testTransfer = function() {
//   var Client = require('coinbase').Client;
//   var client = new Client({
//     'apiKey' : 'G8ZHFjQAthZATXsl',
//     'apiSecret' : 'D48wh5yNujyfj7mQeSTi2I8tLnPgow4V',
//     'baseApiUri': 'https://api.sandbox.coinbase.com/v1/',
//     'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
//   });
//   client.getBuyPrice({'qty': 1, 'currency': 'USD'}, function(err, obj) {
//     console.log('total amount: ' + obj.total.amount);
//   });
// }
