    const button = document.querySelector('#button');
    const result = document.querySelector('#result');
    const copied = document.querySelector("#copied");
    const copyButton = document.querySelector("#copyButton");

    const symbol = ['@','!','*', '$'];
    let password = '';
    
    function generatePass() {
      const randomSymbol = Math.floor(Math.random() * symbol.length);
      const randomSymbol2 = Math.floor(Math.random() * symbol.length);
      const input = document.querySelector('#input').value.toLowerCase().replace(/\s/g, '');
      const checkbox = document.querySelector('#checkbox');
      let number = '';

      if (input.length <= 5) {
        number = -4;
      } else {
        number = -2;
      }

      if(input.length > 0) {
        if (checkbox.checked === true) {
          var convertInput = input.replace(/a/gi, 4).replace(/i/gi, 1).replace(/o/gi, 0);
        } else {
          var convertInput = input;
        }
        password = symbol[randomSymbol] + convertInput + symbol[randomSymbol2] + Math.random().toString(32).slice(number);
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