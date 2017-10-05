
var cardNumber = parseInt(prompt("Ingresa los n\u00fameros de tu tarjeta de cr\u00e9dito para saber si es v\u00e1lida."));

function isValid (numberCard){
var totalSum=0;
if ( numberCard.length == 0);{
  alert("Dato inv\u00e1lido")
  //alert para advertir al usuario que el dato ingresado no es valido.
} else{
  var newArray= numberCard.reverse();
  console.log(newArray);
}    //dando vuelta el orden del número ingresado en el prompt.
for (var j = 0; j<newArray.length; j++){}
    if(j%2 == 1){ // dividiendo los números pares de los impares.
      var parseValue = parseInt(newArray[j]); //string pasa a ser number para poder hacer operaciones matematicas.
      var multiplyValue = parseValue *2; //multiplicando por dos.
        if (multiplyValue >= 10) {
        //si el resultado de la multiplicación es mayor a 10, se sumaran los digitos entre sí.
          var a= multiplyValue.substr(0,1);
          var b= multiplyValue.substr(1,1);
          var sumAB = (parseInt(a)) + (parseInt(b)); //resultado de la suma de ambos digitos después de la multiplicación
      } numArr.push(digit) && numArr.push(sumbc);
    } else if (digit %2 === 0);{
        numArr.push(digit);
    }
    for (var k=0; k<newArray.length; k++){
      parseValueArray= parseInt(newArray[k]){
        totalSum = totalSum + parseValueArray;
      }
    }
    if(total % 10 === 0){
        alert("Su Tarjeta de Cr\u00e9dito es v\u00e1lida.");
    }else{
        alert("Su Tarjeta de Cr\u00e9dito es inv\u00e1lida.");}
      }
    }
