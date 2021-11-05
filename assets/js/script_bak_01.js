//Data
var generatePasswordIDBtn = document.getElementById;
var generatePasswordQBtn = document.querySelector("#generate");

//Character sets to choose for password
//Numeric sharacter set
//Uppercase alphabet
//Lowercase alphabet
var specialCharArr = ['~']
var specialCharStr = "`~!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
console.log(specialCharStr);

var uppCaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = uppCaseLetterStr.split("");
var lowerCaseCharsArr = lowerCaseChars.split("");
var numberArr = numbersStr.split("");
console.log(upperCaseCharArr);
console.log(specialCharArr);


//MAIN PROCESS

//user choices of length, special chars, UC, LC, numeric chars
//Store user choices to variables
var userchoiceLength = prompt("Enter password length: ");
console.log(userchoiceLength);

var userChoiceSpecialChars = confirm("Special Charactes?");
console.log(userChoiceSpecialChars);

var userChoiceUpperChars = confirm();

//create a pool of all characters
useCharsPool =[];
var myArr = ['a', 'b', 'c'];

function copyArray(arr) {
  console.log(arr)
  for (var i=0; i< myArr.length; i++) {
    useCharsPool.push(['2', '3', '4']);
    return;
  }
}


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

