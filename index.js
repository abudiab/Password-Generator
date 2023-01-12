const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let charactersOptions = characters;
let passwordOne = "test";
let passwordTwo = "test";
let passwordOneElement = document.querySelector("#password1-el");
let passwordTwoElement = document.querySelector("#password2-el");
let passwordLengthElement = document.querySelector("#password-length");
let passwordLength = passwordLengthElement.value;
let symbolsChecked = false;
let numbersChecked = false;
let symbolsCheckbox = document.querySelector("#symbols");
let numbersCheckbox = document.querySelector("#numbers");

function generate() {
passwordLength = getPasswordLength();
getOptions();
console.log(charactersOptions);
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


