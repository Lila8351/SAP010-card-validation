document.getElementById("button").addEventListener("click", maskify);


function maskify(){
  const input = document.getElementById("inputCard").value;
  const inputCardCharsArray = [];
  //const flags = ["Visa", "Mastercard", "Elo", "American Express"];
  //const flags = ["4", "5", "6", "3"];

  for (let i=0; inputCardCharsArray.length < 16; i++){
    inputCardCharsArray.push(input.charAt(i));
    const notMaskedNumber = (document.getElementById("inputCard").value).slice(-4);
    const maskedNumber = (document.getElementById("inputCard").value).length - 4;
    const maskingInput = "*".repeat(maskedNumber) + notMaskedNumber;
    document.getElementById("replaceCard").value = maskingInput;
    //alert("O número do seu cartão é: " + maskedNumber)
    //console.log(maskNumber);
    if (inputCardCharsArray[0] === 4){
      //altera opacidade Visa no CSS
    } else if (inputCardCharsArray[0] === 5){
      //altera opacidade Mastercard
    } else if (inputCardCharsArray[0] === 6){
      //altera opacidade Elo
    }else if (inputCardCharsArray[0] === 3){
      //altera opacidade AMEX
    }else{
      return false;
    }

    document.getElementById("confirmCard").value = document.getElementById("inputCard").value;
  }

  // switch (flags){
  // case '3':

  //     //tira opacidade AMEX
  // case '4':
  //     //tira opacidade Visa
  // case '5':
  //     //tira opacidade Mastercard
  // case '6'
  //     //tira opacidade Elo

  // }

}
