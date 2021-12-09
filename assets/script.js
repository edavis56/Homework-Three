const GeneratorForm = document.querySelector("#passwordGenerator")
const containerDiv = document.querySelector("#container")
const resultsDiv = document.querySelector("#resultContainer")
const options = document.querySelector("#options")
const optionsDiv = document.querySelector("#optionsContainer")
const lowercase = document.querySelector("#lowercase")
const uppercase = document.querySelector("#uppercase")
const numeric = document.querySelector("#numeric")
const special = document.querySelector("#special")
const genButton = document.querySelector("#generateButton")
const thePwd = document.querySelector("#thePwd")

var characterLength = document.getElementById("length")
var lower = 'abcdefghijklmnopqrstuv';
var upper = 'ABCDEFGHIJKLMNOPQRSTUV';
var num = '123456789';
var symbol = '!@#$%^&*()_-';

genButton.addEventListener("click",function(e){
    var character = lower;
    (lowercase.checked) ? character += lower : '';
    (uppercase.checked) ? character += upper : '';
    (numeric.checked) ? character += num : '';
    (special.checked) ? character += symbol : '';
    thePwd.value = password(characterLength.value, character);
});

function password(l,character){
    var pwd = '';
    for(var i=0; i<l; i++){
        pwd += character.charAt(Math.floor(Math.random() * character.length));
    }
    return pwd;
}


