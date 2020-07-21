var upperChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChoices = upperChoices.toLowerCase()
var numberChoices = "0123456789"
var specialChoices = "!@#$%^&*()-_=+{}[]\\|;:\'\",<.>/?`~"

var choices = [upperChoices, lowerChoices, numberChoices, specialChoices]



// Assign The Button a Variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input field
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  function generatePassword() {
    // Prompts
      var howLong = prompt("How long would you like your password to be?")
      if (howLong >= 8  && howLong <= 128) {
        var upper = confirm("Click OK to include Uppercase letters")
        // var lower = confirm("Click OK to include Lowercase letters")
        // var number = confirm("Click OK to include numbers")
        // var special = confirm("Click OK to include special characters")
      } else {
        alert("Password must be between 8-128 characters.  Try again.")
        prompt(howLong)
      }
      //Random character spitter
      for (var i = 0; i < howLong; i++) {
        var spitOut = Math.floor(Math.random() * choices[0].length) + 1;
      } 
      
      
      if (upper == true) {
        // n = 0
        console.log(spitOut)
      }
      // if (lower == true) {
      //   include lowerChoices
      // }
      // if (number == true) {
      //   include numberChoices
      // }
      // if (special == true) {
      //   include specialChoices
      // }
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
