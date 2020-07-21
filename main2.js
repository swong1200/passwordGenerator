// Assign The Button a Variable
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  Arrays with choices to grab
var upperChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChoices = upperChoices.toLowerCase();
var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChoices = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?", "`", "~"];

// Array to add all choices to
var masterChoices = []

//  Function to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    // Clicking the button prompts the user
    var howLong = prompt("How many characters long would you like your password to be? Please select a value between 8-128");
      if (howLong >= 8  && howLong <= 128) {
        var upper = confirm("Click OK to include Uppercase letters");
        var lower = confirm("Click OK to include Lowercase letters");
        var number = confirm("Click OK to include numbers");
        var special = confirm("Click OK to include special characters");
        }
      while (howLong < 8 || howLong > 128){
        alert("Please select a value between 8-128");
        var howLong = prompt("How many characters long would you like your password to be?");
        var upper = confirm("Click OK to include Uppercase letters");
        var lower = confirm("Click OK to include Lowercase letters");
        var number = confirm("Click OK to include numbers");
        var special = confirm("Click OK to include special characters");
        }
        // Conditions confirmed by user
      if (upper == true) {
        masterChoices = upperChoices.concat()
        console.log(masterChoices)
      }
    passwordText.value = password;

  }
}