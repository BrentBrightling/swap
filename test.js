module.exports.init = function() {
  var Client = require('coinbase').Client;
  var client = new Client({
    'apiKey' : 'G8ZHFjQAthZATXsl',
    'apiSecret' : 'D48wh5yNujyfj7mQeSTi2I8tLnPgow4V',
    'baseApiUri': 'https://api.sandbox.coinbase.com/v1/',
    'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
  });

  //Displays the value of the balance
  client.getAccounts(function(err, accounts) {
    console.log(accounts + '\n');
    accounts.forEach(function(acct) {
      console.log('my bal: ' + acct.balance.amount + ' ' + acct.balance.currency + ' which is equivalent to ' +
      acct.native_balance.amount + ' ' + acct.native_balance.currency + ' for ' + acct.name);
    });
  });

  // // get balance from account
  // var Account   = require('coinbase').model.Account;
  // var myBtcAcct = new Account(client, {'id': 'muD8GAz2tndYeX87ovEhEmZkPXvi3mbJXG'});
  //
  // //console.log(myBtcAcct);
  //
  // myBtcAcct.getBalance(function(err, bal) {
  //   console.log('bal: ' + bal.amount + ' currency: ' + bal.currency);
  // });
}
