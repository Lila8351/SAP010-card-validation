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

  isValid: function(array){
    array.reverse();
    let soma = 0;
    const output = [];
    for (let i = 0; i < array.length; i++) {
      if (i%2 === 0){
        output.push(array[i]);
      }else{
        const data = array[i]*2;
        if (data>=10){
          const remainder = data%10 + 1;
          output.push(remainder);
        }else{
          output.push(data);
        }
      }
    }
    for (let j=0; j<output.length; j++){
      soma += output[j];
    }
    return soma%10===0;
  }
}
export default validator;
