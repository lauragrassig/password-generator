const button = document.querySelector('#button');
const result = document.querySelector('#result');
const copied = document.querySelector("#copied");
const copyButton = document.querySelector("#copyButton");

const symbol = ['@','!','*', '$'];
let password = '';

function generatePass() {
  const randomSymbol = Math.floor(Math.random() * symbol.length);
  const randomSymbol2 = Math.floor(Math.random() * symbol.length);
  let input = document.querySelector('#input').value.toLowerCase().replace(/\s/g, '');

  const letterToNumberCheck = document.querySelector('#letterToNumber');
  const upperCaseCheck = document.querySelector('#enableUpperCase');
  let number = -2;

  if(input.length > 0) {

    if (letterToNumberCheck.checked === true) {
      input = input.replace(/a/gi, 4).replace(/i/gi, 1).replace(/o/gi, 0);
    } else {
      input;
    }

    if (upperCaseCheck.checked) {
      input = input.split('').map((v) =>
      Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
      ).join('');
    } else {
      input;
    }

    password = symbol[randomSymbol] + input + symbol[randomSymbol2] + Math.random().toString(32).slice(number);
    result.innerHTML = password;

    copyButton.classList.add("--display");
    setTimeout(function () {
      result.innerHTML = ''; copyButton.classList.remove("--display");
    }, 70000)
  }
}

function copyResult(result) {
  const textArea = document.createElement("textArea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  
  copied.classList.add("--show");
  setTimeout(function() {copied.classList.remove("--show");}, 2500);
}