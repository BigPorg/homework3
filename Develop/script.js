// Assignment Code
var generateBtn = document.querySelector("#generate");
specialCharacters = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "^"," ];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
soloChoice = []; //just in case they only confirm one
//why do some of the special characters have off coloring?
var entry;
var choices;
// use to confirm later, do not use alerts
var confirmLowercase;
var confirmUppercase;
var confirmNumerics;
var confirmSpecialCharacters;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Prompts that come up after you click generate password
function generatePassword() {
  entry = parseInt(prompt("How many characters would you like in your password? Must be at least 8 characters but no more than 128 characters."));
  //error responses and confirms
  if (!entry) {
    alert ("Please enter value between 8 and 128 characters.")
  } else if (entry < 8 || entry > 128) {
    entry = parseInt(prompt("Please enter value between 8 and 128 characters."));
  } else {
    confirmLowercase = confirm("Do you want lowercase letters in your password?");
    confirmUppercase = confirm("Do you want UPPERCASE letters in your password?");
    confirmNumerics = confirm("Do you want numb3r5 in your password?");
    confirmSpecialCharacters = confirm("Do you want $pec!@l character$ in your password?");
  };
  if (!confirmLowercase && !confirmUppercase && !confirmNumerics && !confirmSpecialCharacters) {
    choices = alert("Please choose some characters to be in your password.");
    //if confirmed go through each combo, make a pen and paper grid to keep track of which ones i've done
  } else if (confirmLowercase && confirmUppercase && confirmNumerics && confirmSpecialCharacters) {
    choices = specialCharacters.concat(lowercase, uppercase, numerics);

  } else if (confirmLowercase && confirmUppercase && confirmNumerics) {
    choices = lowercase.concat(uppercase, numerics);

  } else if (confirmLowercase && confirmUppercase) {
    choices = lowercase.concat(uppercase);

  } else if (confirmUppercase) {
    choices = soloChoice.concat(uppercase);

  } else if (confirmLowercase && confirmSpecialCharacters) {
    choices = lowercase.concat(specialCharacters);

  } else if (confirmLowercase && confirmNumerics && confirmSpecialCharacters) {
    choices = lowercase.concat(numerics, specialCharacters);

  } else if (confirmLowercase) {
    choices = soloChoice.concat(lowercase);

  } else if (confirmNumerics) {
    choices = soloChoice.concat(numerics);

  } else if (confirmSpecialCharacters) {
    choices = soloChoice.concat(specialCharacters);

  } else if (confirmLowercase && confirmNumerics) {
    choices = lowercase.concat(numerics);

  } else if (confirmUppercase && confirmNumerics && confirmSpecialCharacters) {
    choices = uppercase.concat(numerics, specialCharacters);

  } else if (confirmLowercase && confirmUppercase && confirmSpecialCharacters) {
    choices = lowercase.concat(uppercase, specialCharacters);

  } else if (confirmUppercase && confirmNumerics) {
    choices = uppercase.concat(numerics);

  } else if (confirmNumerics && confirmSpecialCharacters) {
    choices = numerics.concat(specialCharacters);

  } else if (confirmUppercase && confirmSpecialCharacters) {
    choices = uppercase.concat(specialCharacters);
  }
  //that was a lot of checking. i thought computers would do this for me
  //there has to be a simpler solution for making random passwords
  //spit out the password
  var password = [];

  for (var i = 0; i < entry; i++) {
    var selectedChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(selectedChoices);
  }
  var joinedPassword = password.join("");
  return joinedPassword;
};