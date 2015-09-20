function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

$("#Login").click(function() {
    httpGet("https://www.coinbase.com/oauth/authorize?response_type=code&client_id=5c858248b84d2a1e128055aeec577967ff45c27ea9fa782dc4f800681323f274&redirect_uri=http://www.swapexchange.co/send.html&state=SECURE_RANDOM&scope=wallet:accounts:read")
});