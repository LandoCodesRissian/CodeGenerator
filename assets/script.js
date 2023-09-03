//create variables that hold arrays of different types of characters


let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "?", ">", "<", "/"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];
//need a function called generate password
generatePassword = function(){
  generatePopup = parseInt(prompt("How many characters would you like your password to be? (min-8 max 128)"))
  while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
    alert('Please enter a number between 8 and 128');
    generatePopup = parseInt(prompt('How many characters would you like your password to be? (min-8 max 128)'));
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
