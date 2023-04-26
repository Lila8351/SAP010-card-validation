
//const btn = document.querySelector("button");

//btn.onclick = function() {
//  const inputText = document.querySelector("inputText");
//  window.alert.write(inputText);

//}

//if (14<=card.length<=16){

// document.getElementById("clickButton").addEventListener("click", validateCardFunction());
// let card = string;

// function validateCardFunction(){
//   card = document.getElementById("inputCard").value;
//   console.log(typeof(card));
//   console.log(card);
//   console.log("oi");
// }
document.getElementById("startFunction").addEventListener("click", myFunction);

function myFunction(){
  document.getElementById("replaceCard").value = document.getElementById("inputCard").value;
  //const inputCardArray = [];
  const input = document.getElementById("inputCard").value;
  const inputToChar = input.charAt();
  //console.log(inputCardArray.length);
  const inputCardCharsArray = [];


  for (let i=0; inputCardCharsArray.length < 16; i++){
    inputCardCharsArray.push(input.charAt(i));

    //const inputCardChars = inputCardCharsArray.charAt(i).push;
    //console.log(inputCardChars.length);
    //console.log(inputCardChars);
  }
  //console.log(inputCardCharsArray);
  let array2=[];
  for (j=0; j<inputCardCharsArray.length; j++){


  }



}







const validator = {

  // ...
};

export default validator;
