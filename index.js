const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let charactersOptions = characters;
let passwordOne = "";
let passwordTwo = "";
const passwordOneElement = document.querySelector("#password1-el");
const passwordTwoElement = document.querySelector("#password2-el");
const passwordLengthElement = document.querySelector("#password-length");
let passwordLength = passwordLengthElement.value;
let symbolsChecked = false;
let numbersChecked = false;
const symbolsCheckbox = document.querySelector("#symbols");
const numbersCheckbox = document.querySelector("#numbers");

function generate() {
passwordLength = getPasswordLength();
getOptions();
passwordOne = generatePassword();
passwordTwo = generatePassword();
passwordOneElement.textContent = passwordOne;
passwordTwoElement.textContent = passwordTwo;
}

function getPasswordLength() {
    return passwordLengthElement.value;
}

function getOptions() {
    charactersOptions = characters;
    if(symbolsCheckbox.checked){
        charactersOptions = charactersOptions.concat(symbols);
    }
    if(numbersCheckbox.checked){
        charactersOptions = charactersOptions.concat(numbers);
    }
}

function generatePassword() {
    let generatedPassword = "";
    
    for(let i = 0; i < passwordLength; i++){
        let char = charactersOptions[Math.floor(Math.random()*charactersOptions.length)];
        generatedPassword += char;
    }
    
    return generatedPassword;
}

