import validator from './validator.js';

document.getElementById("startFunction").addEventListener("click", myFunction);

function myFunction(){
  const input = document.getElementById("inputCard").value;

  const mask = validator.maskify(input);
  document.getElementById("replaceCard").innerHTML = mask;

  //mask.onMouseOver = input;
  document.getElementById("replaceCard").onmouseover = function(){mouseOver()};
  //document.getElementById("replaceCard").addEventListener("mouseover", mouseOver);
  function mouseOver() {
    document.getElementById("replaceCard").innerHTML = input;
  }
  document.getElementById("replaceCard").onmouseout = function(){mouseOut()};
  function mouseOut() {
    document.getElementById("replaceCard").innerHTML = mask;
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

    if (firstNumber === "4"){
      document.getElementById("flag").innerHTML = "visa";
    } else if (firstNumber === "5"){
      document.getElementById("flag").innerHTML = "mastercard";
    } else if (firstNumber === "6"){
      document.getElementById("flag").innerHTML = "elo";
    } else if (firstNumber === "3"){
      document.getElementById("flag").innerHTML = "AMEX";
    } else {
      document.getElementById("flag").innerHTML = "unkwown"
    }

    console.log(isValid);
    if (isValid === true) {
      document.getElementById("trueOrFalse").innerHTML = "É válido. Boas compras! ";
      console.log ("entrou no if");
    }else{
      document.getElementById("trueOrFalse").innerHTML = "Não funcionou. Por favor, revise o número digitado e tente novamente.";
      console.log("entrou no else")
    }
  }
}
