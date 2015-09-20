var str = window.location.href;
var keyword = "code=";
var sampleCode= "fcbcac5801c2700ac75636d8f5d9467933ac36379c942a8f5074891d7bf4e5ab";
var len= sampleCode.length;
var n = str.indexOf(keyword);
var codekey = str.substring(n+5,n+len+5);
//var client = require('./client');
console.log(codekey);

var welc = document.getElementbyUD("Welcome");
welc.text ="Welcome!";

$(function() {
  var obj;
   $.ajax({
			url: "https://whispering-earth-7145.herokuapp.com/" + codekey,
			type: "GET",
			success: function(data) {
				//console.log(data);
				obj = JSON.parse(data);
			},
			error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
       	}
    	});

   $('#payment #submit').on('click', function(){
      if ($('#recipient').val() !== "" && $('#amount').val() !== "") {
      	alert('yo');
        submitData (obj, $('#recipient').val(), $('#amount').val());
      }
   });
});


function submitData (obj, sendTo, amt) {
  $.ajax({
    url: "/send",
    type: 'POST',
    data: {
        obj: obj,
        sendTo: sendTo,
        amt: amt
      }
    });
}

var init = function(acc_token, refresh_token) {
  console.log("2");
  var Client = require('coinbase').Client;
  var client = new Client({
    'accessToken': acc_token,
    'refreshToken': refresh_token,
  });
  console.log(acc_token + "     " + refresh_token);
  showBalance();
};

//Displays the value of the balance
var showBalance = function() {
  client.getAccounts(function(err, accounts) {
    console.log(accounts + '\n');
    accounts.forEach(function(acct) {
      console.log('my bal: ' + acct.balance.amount + ' ' + acct.balance.currency + ' which is equivalent to ' +
      acct.native_balance.amount + ' ' + acct.native_balance.currency + ' for ' + acct.name);
    });
  });
};



//curl https://api.coinbase.com/oauth/token \
//  -X POST \
//  -d 'grant_type=authorization_code&code=4e81c79a5c55b334bc695df5ac4b27fa95f5b999d0a4713f8c007ead6d5616fe&client_id=5c858248b84d2a1e128055aeec577967ff45c27ea9fa782dc4f800681323f274&client_secret=caff1da29f54829a81afd11e5bdb41d7ac263e5b396b994ab0136e50af1eecb9&redirect_uri=http://www.swapexchange.co/payment.html'
