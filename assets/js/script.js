//Data
var generatePasswordIDBtn = document.getElementById;
var generatePasswordQBtn = document.querySelector("#generate");

//Character sets to choose for password
//Numeric character set
//Uppercase alphabet
//Lowercase alphabet

var strCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strCharLower = "abcdefghijklmnopqrstuvwxyz";
// escaping backslash and double-quote
var strCharSpecial = "`~!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/;";
var strCharNumeric = "0123456789";

var arrCharUpper = strCharUpper.split("");
var arrCharLower = strCharLower.split("");
var arrCharSpecial = strCharSpecial.split("");
var arrCharNumeric = strCharNumeric.split("");

// console.log(arrCharUpper);
// console.log(arrCharLower);
// console.log(arrCharSpecial);
// console.log(arrCharNumeric);

//MAIN PROCESS

//user choices of length, special chars, UC, LC, numeric chars
//Store user choices to variables

var userChoiceLength = prompt("Enter password length: ");

var userChoiceUpperChars = confirm("Upper case characters?");
var userChoiceLowerChars = confirm("Lower case characters?");
var userChoiceSpecialChars = confirm("Special characters?");
var userChoiceNumericChars = confirm("Numeric characters?");

// console.log(userChoiceLength);

// console.log(userChoiceUpperChars);
// console.log(userChoiceLowerChars);
// console.log(userChoiceSpecialChars);
// console.log(userChoiceNumericChars);

var userChoicePool = [] ;

if (userChoiceUpperChars) {
  userChoicePool = arrCharUpper;
}

if(userChoiceLowerChars){
  userChoicePool = userChoicePool.concat(arrCharLower);
}

if(userChoiceSpecialChars){
  userChoicePool = userChoicePool.concat(arrCharSpecial);
}

if(userChoiceNumericChars){
  userChoicePool = userChoicePool.concat(arrCharNumeric);
}

console.log(userChoicePool);
//create a pool of all characters
/*


useerCharsPool =[];



function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password")

  passwordTextEl.value = password

  return;
}

if(userChoiceSpecialChars){
  copyArrayPool(specialCharArr);
}

//don't use parenthesis when specifying function
generatePasswordQBtn.addEventListener("click",writePassword);

*/