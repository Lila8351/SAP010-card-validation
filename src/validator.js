

// const input = document.getElementById("inputCard").value;
// const inputCardCharsArray = [];
// const newDatasArray = [];
// const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// let soma = 0;

//   function isValid(){

//     for (let i=0; inputCardCharsArray.length < 16; i++){
//       inputCardCharsArray.push(input.charAt(i));
//       //transforma a string em um array de caracteres;
//       // NAO COLOQUEI O REVERSE. Pra validar nao faz diferenca, mas estava nos passos.
//       for (let j = 0; j < inputCardCharsArray.length; j++) {
//         if (numberArray[j] !== newDatasArray[i]){
//           window.alert("Insira apenas números de 0 a 9!");
//           //alert("Hello world!");
//         }else{
//           //cardNumberValid.push()
//           if(i%2 !== 0){
//           //verifica se o index é ímpar.
//             const newData1 = inputCardCharsArray[i]*2;
//             //se for ímpar, pega o valor e multiplica por 2.
//             //TALVEZ TENHA QUE TRANSFORMAR O DADO EM NUMBER? NAO SEI.
//             if(newData1>=10){
//             //se o resultado for maior do que 10, divide por 10, pega e resto e soma com 1.
//               const remainder = 1+ newData1%10;
//               newDatasArray.push(remainder);
//             //e adiciona o valor (remainder) na lista newDatasArray
//             }else{
//               newDatasArray.push(newData1);
//             //se nao for maior do que 10, adiciona o valor (newData1) normalmente em newDatasArray
//             }

//           } else {
//             const newData0 = inputCardCharsArray[i];
//             //e se o index nao for ímpar, adiciona na array direto o valor, sem calculo.
//             newDatasArray.push(newData0);
//           }
//         }
//       }
//     }
//     console.log(newDatasArray);
//     for (let l=0; l<newDatasArray.length; l++) {
//       soma += newDatasArray[l];
//       console.log(soma);
//     }
//     if (soma%10 === 0) {
//       window.alert("Seu cartão é válido!");
//     } else{
//       window.alert("Este cartão não existe!");
//     }
//     //newDatasArray retorna a array das operações acima.
//     //agora é necessário pegar cada valor do array e somar todos
//   }






const validator = {
  isValid: function(input){
    const inputCardCharsArray = [];
    const newDatasArray = [];
    //const inputToReverseArray = [];
    const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let soma = 0;

    for (let i=0; inputCardCharsArray.length < 16; i++){
      inputCardCharsArray.push(input.charAt(i));
      //transforma a string em um array de caracteres;
      //inputToReverseArray = inputCardCharsArray.push(input.charAt(i));
      //return inputToReverseArray;
      //Acho que não dá certo usar return no forloop, entao vou colocar o if mesmo.
      //ou tira o return e coloca if e puxa o for de baixo. Sei la.
      //const reversedArray = inputCardCharsArray.reverse();
      
      for (let j = 0; j < inputCardCharsArray.length; j++) {
      //for (let j = 0; j<inputToReverseArray.length; j++)
        if (numberArray[j] !== newDatasArray[i]){
          //alert("Insira apenas números de 0 a 9!");
        }else{
          //cardNumberValid.push()
          if(i%2 !== 0){
          //verifica se o index é ímpar.
            const newData1 = inputCardCharsArray[i]*2;
            //se for ímpar, pega o valor e multiplica por 2.
            //TALVEZ TENHA QUE TRANSFORMAR O DADO EM NUMBER? NAO SEI.
            if(newData1>=10){
            //se o resultado for maior do que 10, divide por 10, pega e resto e soma com 1.
              const remainder = 1+ newData1%10;
              newDatasArray.push(remainder);
            //e adiciona o valor (remainder) na lista newDatasArray
            }else{
              newDatasArray.push(newData1);
            //se nao for maior do que 10, adiciona o valor (newData1) normalmente em newDatasArray
            }

          } else {
            const newData0 = inputCardCharsArray[i];
            //e se o index nao for ímpar, adiciona na array direto o valor, sem calculo.
            newDatasArray.push(newData0);
          }
        }
      }
    }
    console.log(newDatasArray);
    for (let l=0; l<newDatasArray.length; l++) {
      soma += newDatasArray[l];
      console.log(soma);
    }
    if (soma%10 === 0) {
      return true;
    } else{
      return false;
    }
    //newDatasArray retorna a array das operações acima.
    //agora é necessário pegar cada valor do array e somar todos

  },
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
  }
}

export default validator;
