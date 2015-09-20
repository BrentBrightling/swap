function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var str = window.location.href
console.log(str)

//$(function() {
//   $.ajax({
//  type: "POST",
//  url: "https://api.coinbase.com/oauth/token",
//  data: "grant_type=authorization_code&code=4c666b5c0c0d9d3140f2e0776cbe245f3143011d82b7a2c2a590cc7e20b79ae8&client_id=1532c63424622b6e9c4654e7f97ed40194a1547e114ca1c682f44283f39dfa49&client_secret=3a21f08c585df35c14c0c43b832640b29a3a3a18e5c54d5401f08c87c8be0b20&redirect_uri=https://example.com/oauth/callback',
//  success: success,
//  dataType: "json
//});
//});
//});

