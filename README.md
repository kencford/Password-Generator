# Password-Generator
Homework assignment 3 - generate a password

This program prompts for the following:
 - Length of requested password
   - It confirms that the value is between 8 and 128.
   - Otherwise, it requests it again.
 - Requests confirmation for upper case letters to be included
 - Requests confirmation for lower case letters to be included
 - Requests confirmation for special characters to be included
 - Requests confirmation for numeric characters to be included
    - It confirms that at least one type of character is selected
    - Otherwise it returns a message letting user know that selection has been omitted.
 - It uses a random algorithm to generate a password of the specified length including the character types confirmed.
 - It returns the generated password to the web browser