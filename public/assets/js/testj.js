function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//$(function() {
//    console.log( "ready!" );
//    $("#Login").click(function() {
//    httpGet("https://www.coinbase.com/oauth/authorize?response_type=code&client_id=5c858248b84d2a1e128055aeec577967ff45c27ea9fa782dc4f800681323f274&redirect_uri=http://www.swapexchange.co/send.html&state=SECURE_RANDOM&scope=wallet:accounts:read")
//    $("a[href='payment.html']").attr('href', 'https://www.coinbase.com/oauth/authorize?client_id=5c858248b84d2a1e128055aeec577967ff45c27ea9fa782dc4f800681323f274&redirect_uri=http%3A%2F%2Fwww.swapexchange.co%2Fsend.html&response_type=code&scope=wallet%3Auser%3Aread')
//});
//});

