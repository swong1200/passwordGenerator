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

If the user does not select at least one parameter, the prompts will start over. (use a while loop to confirm at least one parameter)

Once at least one parameter has been met, I will need to grab the characters from the corresponding arrays.  (I will use for loops to achieve this.)

I will need to add the characters that were grabbed to a new array.  (I will concatenate these)

I will then select the amount of characters that the user input length designates. (Math.Floor(Math.random) using a for loop with the index set to user input length)

The final password will then appear in the field within the html. (The password text will become the password in the function)

