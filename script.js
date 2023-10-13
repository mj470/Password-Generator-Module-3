let characterLength = 8;
let choiceArr = [];

const specialCharArr = ['!','@','#','$','%','^','&','*','(',')','_','+','<','>'];
const lowerCaseArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));  // 'a' to 'z'
const upperCaseArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));  // 'A' to 'Z'
const numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
const generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const correctPrompts = getPrompts();
  const passwordText = document.querySelector("#password");
  if (correctPrompts) {
    const password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  let password = '';
  for(let i = 0; i < characterLength; i++) {
    password += choiceArr[Math.floor(Math.random() * choiceArr.length)];
  }
  return password; 
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt('How many characters do you want your password to be?'));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character length has to be a number, 8 - 128 digits. Please try again.');
    return false;
  }

  if (confirm('Would you like lowercase letters in your password?')) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm('Would you like uppercase letters in your password?')) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm('Would you like special characters in your password?')) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm('Would you like numbers in your password?')) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if (choiceArr.length === 0) {
    alert('You must select at least one type of character for your password.');
    return false;
  }

  return true;
}
