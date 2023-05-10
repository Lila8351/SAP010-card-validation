import validator from './validator.js';

document.getElementById("start-function").addEventListener("click", myFunction);

function myFunction(){
  const input = document.getElementById("input-card").value;

  const mask = validator.maskify(input);
  document.getElementById("replace-card").innerHTML = mask;
  document.getElementById("replace-card").onmouseover = function(){mouseOver()};
  function mouseOver() {
    document.getElementById("replace-card").innerHTML = input;
  }
  document.getElementById("replace-card").onmouseout = function(){mouseOut()};
  function mouseOut() {
    document.getElementById("replace-card").innerHTML = mask;
  }
  ////////////////////////////////////
  const cardArray = [];
  const array = [];

  for (let i = 0; cardArray.length < 16; i++) {
    cardArray.push(input.charAt(i));
  }
  console.log(cardArray);

  for (let j = 0; j < cardArray.length; j++) {
    if(cardArray[j] !==""){
      array.push(cardArray[j])
    }
  }
  const isValid = validator.isValid(array);
  console.log(isValid);

  if (isValid === true) {
    document.getElementById("true-or-false").innerHTML = "É válido. Boas compras! ";
  }else{
    document.getElementById("true-or-false").innerHTML = "Não funcionou. Por favor, revise o número digitado e tente novamente.";
  }

  const flags = Number(cardArray[0]);

  if (flags === 2) {
    document.getElementById("flag").innerHTML = "Mastercard";
  }else if (flags === 3) {
    document.getElementById("flag").innerHTML = "AMEX";
  }else if (flags === 4){
    document.getElementById("flag").innerHTML = "Visa";
  }else if (flags === 5) {
    document.getElementById("flag").innerHTML = "Mastercard";
  }else{
    document.getElementById("flag").innerHTML = "unkwown";
  }
}


















//   const cardArray = [];

//   let firstNumber = 0;
//   //const flags = Number(firstNumber.push(input.charAt(0)));


//   for (let i = 0; cardArray.length < 16; i++) {
//     cardArray.push(input.charAt(i));
//     firstNumber = cardArray[0];
//     return firstNumber;
//   }


//   //console.log(cardArray);

//   document.getElementById("choose-flag").addEventListener("click", validarCartao);

//   function validarCartao() {

//     const isValid = validator.isValid(cardArray);

//     if (firstNumber === 4){
//       document.getElementById("flag").value = "visa";
//     } else if (firstNumber === 5){
//       document.getElementById("flag").value = "mastercard";
//     } else if (firstNumber === 6){
//       document.getElementById("flag").value = "elo";
//     } else if (firstNumber === 3){
//       document.getElementById("flag").value = "AMEX";
//     } else {
//       document.getElementById("flag").value = "unkwown"
//     }

//     console.log(isValid);
//     if (isValid === true) {
//       document.getElementById("true-or-false").innerHTML = "É válido. Boas compras! ";
//       console.log ("entrou no if");
//     }else{
//       document.getElementById("true-or-false").innerHTML = "Não funcionou. Por favor, revise o número digitado e tente novamente.";
//       console.log("entrou no else")
//     }
//   }
// }
