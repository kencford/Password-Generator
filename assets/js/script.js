//Data
var generatePasswordIDBtn = document.getElementById;
var generatePasswordQBtn = document.querySelector("#generate");

var password = ""

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

password = generatePassword();
console.log(password);

function generatePassword() {

  //user choices of length, special chars, UC, LC, numeric chars
  //Store user choices to variables

  var userChoiceLength = prompt("Enter password length: ");
  if (userChoiceLength < 8 || userChoiceLength > 128) {
    return generatePassword();
  }

  var userChoiceUpperChars = confirm("Upper case characters?");
  var userChoiceLowerChars = confirm("Lower case characters?");
  var userChoiceSpecialChars = confirm("Special characters?");
  var userChoiceNumericChars = confirm("Numeric characters?");

  // console.log(userChoiceLength);

  // console.log(userChoiceUpperChars);
  // console.log(userChoiceLowerChars);
  // console.log(userChoiceSpecialChars);
  // console.log(userChoiceNumericChars);


  var userChoiceAllChars = [];
  password = ""

  if (userChoiceUpperChars) {
    userChoiceAll = arrCharUpper;
  }

  if (userChoiceLowerChars) {
    userChoiceAll = userChoiceAll.concat(arrCharLower);
  }

  if (userChoiceSpecialChars) {
    userChoiceAll = userChoiceAll.concat(arrCharSpecial);
  }

  if (userChoiceNumericChars) {
    userChoiceAll = userChoiceAll.concat(arrCharNumeric);
  }

  // console.log(userChoiceAll);

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userChoiceAll.length);
    // console.log(userChoiceAll)
    password += userChoiceAll[index];
  }

  return (password);
}
