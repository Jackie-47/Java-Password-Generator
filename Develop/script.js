// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var userInput = window.prompt("how long do you want your password to be? ")

  var passwordlenght = parseInt (userInput)

  if (isNaN(passwordlenght)){
 window.alert("That's not a number!")
  return
}
if (passwordlenght < 8 || passwordlenght >128){
  window.alert("password length must be between 8 and 128 characters")
  return
}
var userWantsNumbers = window.confirm("Would you like to include numbers in you password?")
var userWantsSymbols = window.confirm("Would you like to include symbols in you password?")
var userWantsLowercase = window.confirm("Would you like to include lowercase letters in you password?")
var userWantsUppercase = window.confirm("Would you like to include uppercase letters in you password?")

var numberlist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolList = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowercaselist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaselist = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


var optionsCart = []

if (userWantsNumbers === true ){
  optionsCart.push(numberlist)

}

if (userWantsSymbols === true ){
  optionsCart.push(symbolList)

}

if (userWantsLowercase === true ){
  optionsCart.push(lowercaselist)
}

if (userWantsUppercase === true ){
  optionsCart.push(uppercaselist)
  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
