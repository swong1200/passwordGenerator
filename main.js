var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letter = []
for (var i = 0; i < 8; i++) {
    var letterGen = alphabet[Math.floor(Math.random() * alphabet.length)];
    letter.push(letterGen)
} 
console.log(letter)