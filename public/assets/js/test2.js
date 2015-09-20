var str = window.location.href
var keyword = "code="
var sampleCode= "fcbcac5801c2700ac75636d8f5d9467933ac36379c942a8f5074891d7bf4e5ab"
var len= sampleCode.length
var n = str.indexOf(keyword)
var code = str.substring(n,n+len+5)
console.log(code)