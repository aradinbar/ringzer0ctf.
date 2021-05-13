
var k = new Array(176,214,205,246,264,255,227,237,242,244,265,270,283)
var user = "administrator"
var password = ""
for (i=0; i < user.length ; i++){
  password = password + (String.fromCharCode(k[i] - user.charCodeAt(i) - (i*10)))
}

console.log(user)
console.log(password)
