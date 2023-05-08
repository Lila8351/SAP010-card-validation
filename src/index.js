import validator from './validator.js';

document.getElementById("startFunction").addEventListener("click", myFunction);

function myFunction(){
  const input = document.getElementById("inputCard").value;

  const mask = validator.maskify(input);
  document.getElementById("replaceCard").value = mask;

  //mask.onMouseOver = input;
  document.getElementById("replaceCard").onmouseover = function(){mouseOver()};
  function mouseOver() {
    document.getElementById("replaceCard").value = input;
  }
  document.getElementById("replaceCard").onmouseout = function(){mouseOut()};
  function mouseOut() {
    document.getElementById("replaceCard").value = mask;
  }

  const cardArray = [];
  const firstNumber = [];
  firstNumber.push(input.charAt(0));

  for (let i = 0; cardArray.length < 16; i++) {
    cardArray.push(input.charAt(i));
  }
  cardArray.reverse();

  document.getElementById("chooseFlag").addEventListener("click", validarCartao);

  function validarCartao() {
    const isValid = validator.isValid(cardArray);

    if (firstNumber == 4){
      document.getElementById("flag").value = "visa";
    } else if (firstNumber == 5){
      document.getElementById("flag").value = "mastercard";
    } else if (firstNumber == 6){
      document.getElementById("flag").value = "elo";
    } else if (firstNumber == 3){
      document.getElementById("flag").value = "AMEX";
    } else {
      document.getElementById("flag").value = "unkwown"
    }

    if (isValid === true) {
      document.getElementById("trueOrFalse").value = "É válido. Boas compras! ";
    }else{
      document.getElementById("trueOrFalse").value = "Não funcionou. Por favor, revise o número digitado e tente novamente.";
    }
  }
}
