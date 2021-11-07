//Data
var generatePasswordIDBtn = document.getElementById("generate");
// var generatePasswordQBtn = document.querySelector("#generate");

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

// password = generatePassword();
// console.log(password);

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
    userChoiceAllChars = arrCharUpper;
  }

  if (userChoiceLowerChars) {
    userChoiceAllChars = userChoiceAllChars.concat(arrCharLower);
  }

  if (userChoiceSpecialChars) {
    userChoiceAllChars = userChoiceAllChars.concat(arrCharSpecial);
  }

  if (userChoiceNumericChars) {
    userChoiceAllChars = userChoiceAllChars.concat(arrCharNumeric);
  }

  // console.log(userChoiceAll);

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userChoiceAllChars.length);
    // console.log(userChoiceAll)
    password += userChoiceAllChars[index];
  }

  return (password);
}

//This makes function_log_button_clicked *called" on the event of button getting clicked
generatePasswordIDBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
  
    // getting reference to element in HTML identified with id="password"
    var passwordTextElement = document.getElementById("password");
    //giving that element the password value
    //note for me ... notice importance of adding ".value"
    passwordTextElement.value = password;
  
}