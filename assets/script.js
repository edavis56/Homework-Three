const GeneratorForm = document.querySelector("#passwordGenerator")
const containerDiv = document.querySelector("#container")
const resultsDiv = document.querySelector("#resultContainer")
const result = document.querySelector("#result")
const options = document.querySelector("#options")
const optionsDiv = document.querySelector("#optionsContainer")
const length = document.querySelector("#length")
const lowercase = document.querySelector("#lowercase")
const uppercase = document.querySelector("#uppercase")
const numeric = document.querySelector("#numeric")
const special = document.querySelector("#special")
const genButton = document.querySelector("#generateButton")
const thePwd = document.querySelector("#thePwd")

var lower = 'abcdefghijklmnopqrstuv';
var upper = 'ABCDEFGHIJKLMNOPQRSTUV';
var num = '123456789';
var symbol = '!@#$%^&*()_-';

genButton.addEventListener("click",function(e){
    var characters = char;
    (lowercase.checked) ? characters += lower : '';
    (uppercase.checked) ? characters += upper : '';
    (numeric.checked) ? characters += num : '';
    (special.checked) ? characters += symbol : '';

    thePwd.value = password(length.value, characters);
});

function password(l,characters){
    var pwd = '';
    for(var i=0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return pwd;
}


