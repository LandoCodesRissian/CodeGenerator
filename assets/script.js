//create variables that hold arrays of different types of characters
let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "?", ">", "<", "/"];
let lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];

//need a function called generate password
function generatePassword() {
  let passwordLength = parseInt(prompt("How many characters would you like your password to be? (min-8 max-128)"));

  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
    passwordLength = parseInt(prompt("How many characters would you like your password to be? (min-8 max-128)"));
  }

  let includeUpperCase = confirm("Would you like to include uppercase letters?");
  let includeLowerCase = confirm("Would you like to include lowercase letters?");
  let includeNumbers = confirm("Would you like to include numbers?");
  let includeSpecialChars = confirm("Would you like to include special characters?");

  // if loop to process user choices, Restart if no types selected
  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return generatePassword(); 
  }

  let selectedChars = [];
  
  if (includeUpperCase) {
    selectedChars = selectedChars.concat(upperCaseChars);
  }
  
  if (includeLowerCase) {
    selectedChars = selectedChars.concat(lowerCaseChars);
  }
  
  if (includeNumbers) {
    selectedChars = selectedChars.concat(numbers);
  }
  
  if (includeSpecialChars) {
    selectedChars = selectedChars.concat(specialChars);
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  return password;
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
