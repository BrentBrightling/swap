var str = window.location.href
var keyword = "code="
var sampleCode= "fcbcac5801c2700ac75636d8f5d9467933ac36379c942a8f5074891d7bf4e5ab"
var len= sampleCode.length
var n = str.indexOf(keyword)
var codekey = str.substring(n+5,n+len+5)
console.log(codekey)


$(function() {
   $.ajax({
			url: "https://whispering-earth-7145.herokuapp.com/" + codekey,
			type: "GET",
			success: function(data) {
				alert(data[1]);
			},
			error: function (xhr, ajaxOptions, thrownError) {
        		alert(xhr.status);
        		alert(thrownError);
     		}
		});
});



//curl https://api.coinbase.com/oauth/token \
//  -X POST \
//  -d 'grant_type=authorization_code&code=4e81c79a5c55b334bc695df5ac4b27fa95f5b999d0a4713f8c007ead6d5616fe&client_id=5c858248b84d2a1e128055aeec577967ff45c27ea9fa782dc4f800681323f274&client_secret=caff1da29f54829a81afd11e5bdb41d7ac263e5b396b994ab0136e50af1eecb9&redirect_uri=http://www.swapexchange.co/payment.html'


