var b = "";
var c = "";
var numArr= [];
var arrSum= 0;
var arr = parseInt(prompt("Ingresa los números de tu tarjeta de crédito para saber si es válida."));
{
  arr.reverse();
  }
  console.log(arr);
function isValid (arr)
  for(i=0; i<arr; i++){
    var digit = parseInt(arr(i));
    if(digit %2 === 1){
        digit = digit*2;
        if (digit >= 10) {
          b= digit.substr(0, 1);
          c= digit.substr(1.1);
          sumbc = parseInt(b) + parseInt(c);
      } numArr.push(digit) && numArr.push(sumbc);
    } else(digit %2 === 0){
        numArr.push(digit);
    }
    arraySum =+ numArr ;
    if(total % 10 === 0){
        document.write('Su Tarjeta de Crédito es válida.');
      }else{
        document.write('Su Tarjeta de Crédito es inválida.')}
