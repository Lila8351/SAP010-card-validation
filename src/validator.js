document.getElementById("startFunction").addEventListener("click", myFunction);

function myFunction(){
  document.getElementById("replaceCard").value = document.getElementById("inputCard").value;
  const input = document.getElementById("inputCard").value;
  const inputCardCharsArray = [];
  const newDatasArray = [];


  for (let i=0; inputCardCharsArray.length < 16; i++){
    inputCardCharsArray.push(input.charAt(i));
    if(i%2 !== 0){
      const newData1 = inputCardCharsArray[i]*2;

      if(newData1>=10){
        const remainder = 1+ newData1%10;
        newDatasArray.push(remainder);

      }else{
        newDatasArray.push(newData1);
      }

    } else {
      const newData0 = inputCardCharsArray[i];
      newDatasArray.push(newData0);
    }
    const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let j = 0; j < numberArray.length; j++) {
      if (numberArray[j] != newDatasArray[i]){

      }else{
        
      }

  }

  console.log(newDatasArray);

}







const validator = {

  // ...
};

export default validator;
