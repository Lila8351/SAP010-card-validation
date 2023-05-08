const validator = {
  maskify: function(input){
    if (input < 4){
      return input;
    }else{
      const notMaskedNumber = input.slice(-4);
      const maskedNumber = input.length - 4;
      const maskingInput = "#".repeat(maskedNumber) + notMaskedNumber;
      return maskingInput;
      //alert("O número do seu cartão é: " + maskedNumber)
      //console.log(maskNumber);
    }
  },

  isValid: function(cardArray){
    const array=[];
    let soma = 0;
    for (let i = 0; i < cardArray.length; i++) {
      if (i%2 === 0){
        array.push(cardArray[i]);
      }else{
        const data = cardArray[i]*2;
        if (data>=10){
          const remainder = data%10 + 1;
          array.push(remainder);
        }else{
          array.push(data);
        }
      }
    }
    for (let j=0; j<array.length; j++){
      soma += array[j];
    }
    if (soma%10 !== 0){
      return true;
    }else{
      return false;
    }
  }
}
export default validator;
