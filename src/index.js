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

  for (let i = 0; cardArray.length < 16; i++) {
    cardArray.push(input.charAt(i));
  }
  cardArray.reverse();

  const isValid = validator.isValid(cardArray);
  if (isValid === true) {
    document.getElementById("trueOrFalse").value = "Cartão válido!";
  }else{
    document.getElementById("falseOrFalse").value = "Por favor, revise o número de seu cartão";
  }
}
