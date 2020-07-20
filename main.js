/*var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letter = [""]
for (var i = 0; i < 8; i++) {
    var letterGen = alphabet[Math.floor(Math.random() * alphabet.length)];
    letter.push(letterGen)
} */


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
    function generatePassword() {
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var letter = [""]
        for (var i = 0; i < 8; i++) {
            var letterGen = alphabet[Math.floor(Math.random() * alphabet.length)];
            letter.push(letterGen)   
        }
        return letterGen
    }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
