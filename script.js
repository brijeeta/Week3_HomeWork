// global variables
var generateBtn = document.querySelector("#generate");
var selection = ["lowercase", "uppercase", "number", "special"];
var newPassword = [];
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!#\"$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var newCharacter;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    function generatePassword() {

        passwordLength = prompt("How long would like your password to be?")
        console.log(passwordLength);

        if (passwordLength >= 8 && passwordLength <= 128) {
            // call generatecharacter function
            generateCharacter();
        } else {
            alert("password length should be between 8 and 128.");
            return;
        }
    }

    // function to generatecharacter value
    function generateCharacter() {
        lowerCase = confirm("Would you like your password to include lowercase characters?");
        upperCase = confirm("Would you like your password to include uppercase characters?");
        number = confirm("Would you like your password to include number characters?");
        special = confirm("Would you like your password to include special characters?");
    }

    // manipulating the selection array based on the user input
    if (!lowerCase) {
        selection.splice(3, 1);
    }
    if (!upperCase) {
        selection.splice(2, 1);
    }
    if (!number) {
        selection.splice(1, 1);
    }
    if (!special) {
        selection.splice(0, 1);
    }

    console.log(selection.length);

    if (selection.length === 0) {
        alert("password must include atleast one character")
    }
    // call function to create password

    createPassword();

    //  function to create password
    function createPassword() {

        // selecting random charactors based in the user selection
        for (i = 0; i < selection.length; i++) {
            if (selection[i] === "lowercase") {
                newPassword[i] = lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
            } else if (selection[i] === "uppercase") {
                newPassword[i] = upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
            } else if (selection[i] === "number") {
                newPassword[i] = numberChars[Math.floor(Math.random() * numberChars.length)];
            } else if (selection[i] === "special") {
                newPassword[i] = specialChars[Math.floor(Math.random() * specialChars.length)];
            }
        }

        for (i = selection.length; i < passwordLength; i++) {
            newCharacter = Math.floor(Math.random() * selection.length)

            if (selection[newCharacter] === "lowercase") {
                newPassword[i] = lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]
            } else if (selection[newCharacter] === "uppercase") {
                newPassword[i] = upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
            } else if (selection[newCharacter] === "number") {
                newPassword[i] = numberChars[Math.floor(Math.random() * numberChars.length)]
            } else if (selection[newCharacter] === "special") {
                newPassword[i] = specialChars[Math.floor(Math.random() * specialChars.length)]
            }
        }

    }

    // return password;
    password = newPassword.join('');
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);