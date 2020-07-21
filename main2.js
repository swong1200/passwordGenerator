// Assign The Button a Variable
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  Arrays with choices to grab
var upperChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChoices = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "\\", "|", ";", ":", "\'", "\"", ",", "<", ".", ">", "/", "?", "`", "~"];

//  Function to write password
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    // Clicking the button prompts the user
    var howLong = prompt("How many characters long would you like your password to be? Please select a value between 8-128");
      while (howLong < 8 || howLong > 128){
        alert("Please select a value between 8-128");
        var howLong = prompt("How many characters long would you like your password to be?");
    }
    // Prompts for conditions
        var upper = confirm("Click OK to include Uppercase letters");
        var lower = confirm("Click OK to include Lowercase letters");
        var number = confirm("Click OK to include numbers");
        var special = confirm("Click OK to include special characters");

    // If user doesn't select at least one parameter, cycle again
        while ( upper == false && lower == false && number == false && special == false) {
            alert("You must click OK at least once");
            var upper = confirm("Click OK to include Uppercase letters");
            var lower = confirm("Click OK to include Lowercase letters");
            var number = confirm("Click OK to include numbers");
            var special = confirm("Click OK to include special characters");
        }
    // Array to add all selected choices to
    var masterChoices = []

        // Conditions confirmed by user
      if (upper == true) {
        masterChoices = masterChoices.concat(upperChoices)
      }
      if (lower == true) {
        masterChoices = masterChoices.concat(lowerChoices)
      }
      if (number == true) {
        masterChoices = masterChoices.concat(numberChoices)
      }
      if (special == true) {
        masterChoices = masterChoices.concat(specialChoices)
      }
    
    // New variable to placehold random generated characters
    var randomPassword = []
    //   Loop through masterChoices and grab characters
    for (var i = 0; i < howLong; i++) {
        randomPassword = randomPassword + masterChoices[Math.floor(Math.random() * masterChoices.length)];
    }
    return randomPassword;
  }
//   console.log(password)
  passwordText.value = password;
}
