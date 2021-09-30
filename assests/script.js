//When I click the button to generate a password, I am presented with a series of prompts for password criteria
      //will need several prompts for all of the criteria
// When prompted for password criteria, I select which criteria to include in the password. I choose a length of at least 8, but no more than 128 characters.
    //define output length between 8-128 characters
    //alert if under 8 characters
      //else if ("please choose a number higher than 8, please.")
    //alert if over 128 characters
      //else if ("Please choose a number lower than 128, please.")
    //else (No alert; save preferred number as a variable we can use later)

// When I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters, I answer each prompt. My input should be validated and at least one character type should be selected.
  //confirm messages for lowercase
  // When all prompts are answered, then a password is generated that matches the selected criteria.
// When the password is generated, the password is displayed in an alert or written to the page.

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChar = "`~!@#$%^&*()_-+=,<.>/?;:'";
var length = false;
var masterChar = "";

function generatePassword(){
  while (!length) {
  var passwordLength = prompt ("How long would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128){
    alert("Please enter a number between 8 and 128.");
    } else {
    length = true;
    }
  }
  var outputString = "";
  var lowerPrompt = confirm("Would you like to use lowercase letters?");
  var upperPrompt = confirm("Would you like to use uppercase letters?");
  var numPrompt = confirm("Would you like to use numbers letters?");
  var specPrompt = confirm("Would you like to use special characters?");
    if (lowerPrompt){
      masterChar += lowerChar;
    }
    if (upperPrompt){
      masterChar += upperChar;
    }
    if (numPrompt){
      masterChar += numbers;
    }
    if (specPrompt){
      masterChar += specChar;
    }
  for (var i = 0; i < passwordLength; i++){
    outputString += masterChar[Math.floor(Math.random() * masterChar.length)];
  }
  return outputString;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

var clipboardBtn = document.querySelector("#clipboard");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// copy button
clipboardBtn.addEventListener("click", ()=> {
  var textArea = document.createElement("textarea");
  var result = password.value;

  if(!result) {
    return;
  }

  textArea.value = result;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password has been copied to clipboard!");
})
