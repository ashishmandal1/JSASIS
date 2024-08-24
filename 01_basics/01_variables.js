const accountId = 12115375
let accountEmail = "am0131372@gmail.com"
var accountPassword = "12345678"
accountCity = "Phagwara"
let accountState;
// accountId = 4  not allowed
/*
  prefer not to use var 
  because of issue in block scope and functional scope
*/
console.log(accountId);
accountEmail = "ashishmandal@gmail.com"
accountPassword = "1234"
accountCity = "Birgunj"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

