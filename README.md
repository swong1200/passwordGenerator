# passwordGenerator

Goal:  to create a website that will generate a password based upon user-selected criteria which are the length, numbers, uppercase letters, lowercase letters and special characters. (variable arrays for the choices to grab)

Once the user pushes the button, they will be asked how long they want their password to be. (grab button using id of the HTML)
The character length will be between 8-128 only. (prompt) 
If the user fails to select a value between 8-128, they will continue receiving the same prompt until they do. (While loop that will alert user to pick a length between 8-128)

Once they select the character length, there are then four parameters that the user can select for their password:

*Uppercase letters - use confirm to test if true or false
*Lowercase letters - use confirm to test if true or false
*Numbers - use confirm to test if true or false
*Special Characters - use confirm to test if true or false

If the user does not select at least one parameter, the prompts will start over. (While loop to confirm at least one parameter)

I will now need to determine which parameters were selected and make them available to be chosen in a new array. (if statements and concatenation of a blank array)

I will then grab random characters from the concatenated array.  ( For loop plus Math.floor(Math.random) method)

The final password will then appear in the field within the html. (The password text will become the password in the function)

Here is a link to my [Password Generator](https://swong1200.github.io/passwordGenerator/)