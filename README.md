# passwordGenerator

Goal:  to create a website that will generate a password based upon user-selected criteria.

Once the user pushes the button, they will be asked how long they want their password to be.  The character length will be between 8-128 only.
If the user fails to select a value between 8-128, they will continue receiving the same prompt until they do.

Once they select the character length, there are then fourparameters that the user can select for their password:

*Uppercase letters
*Lowercase letters
*Numbers
*Special Characters

If the user does not select at least one parameter, the prompts will start over.

Once the user answers the prompts, javascript code will run through either one array or four arrays or four arrays inside an array to generate random characters.
The code will only select as many characters as the user selected.
The final password will then appear in the field within the html.

