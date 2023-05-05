//import validator from './validator.js';
import validator from './validator.js';

document.getElementById("startFunction").addEventListener("click", myFunction);

function myFunction(){
  const input = document.getElementById("inputCard").value;
  //document.getElementById("replaceCard").value = document.getElementById("inputCard").value;
  //substituir esse valor pelo retorno da função validator.maskify(input);
  //document.getElementById("replaceCard").value = validator.maskify(input);

  const mask = validator.maskify(input);
  document.getElementById("replaceCard").value = mask;
  

  console.log(validator);

}

