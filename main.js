// // Assign The Button a Variable
// var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//  Arrays with choices to grab
var upperChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChoices = upperChoices.toLowerCase()
var numberChoices = "0123456789"
var specialChoices = "!@#$%^&*()-_=+{}[]\\|;:\'\",<.>/?`~"

// Functions to grab characters
function getRandomUpper() {
  for (var i = 0; i < 8; i++) {
    var randomUpper = upperChoices[Math.floor(Math.random() * upperChoices.length)];
    console.log(randomUpper);
  }
}
// function getRandomLower() {

// }
// function getRandomNumber() {

// }
// function getRandomSpecial() {

// }


// // Write password to the #password input field
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   function generatePassword() {
//     var passwordInitial = [""]
//     // Prompts
//       var howLong = prompt("How many characters long would you like your password to be?")
//       if (howLong >= 8  && howLong <= 128) {
//         var upper = confirm("Click OK to include Uppercase letters")
//         // var lower = confirm("Click OK to include Lowercase letters")
//         // var number = confirm("Click OK to include numbers")
//         // var special = confirm("Click OK to include special characters")
//       } 
//       else {
//         var alert = alert("Password must be between 8-128 characters.  Try again.")
        
//       }
      
//       if (upper == true) {
//        //Random character maker
//         for (var i = 0; i < howLong; i++) {
//         var randomChar = upperChoices[Math.floor(Math.random() * upperChoices.length)];
//           passwordInitial.push(randomChar) 
//           console.log(passwordInitial)
//         } 
//       } 
//       // if (lower == true) {
//       //   include lowerChoices
//       // }
//       // if (number == true) {
//       //   include numberChoices
//       // }
//       // if (special == true) {
//       //   include specialChoices
//       // }

//   }
//   passwordText.value = password;

// }


// 