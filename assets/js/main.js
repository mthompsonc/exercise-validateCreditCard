/*
* Código que verifica si los números de una tarjeta de crédito son válidos,
usando el algoritmo de Luhn.
*/
function isValid() {
  var number;

  do {
    number = prompt('Ingresa los n\u00fameros de tu tarjeta de cr\u00e9dito para saber si es v\u00e1lida. Por favor, no incluyas los espacios.');
    /*
    * Si el usuario usa espacios, la tarjeta será inválida.
    */
    if (number.trim().length !== 0) {
      // Trim() se utiliza para eliminar los espacios inciales o finales de un string, sin cambiarlos.
      var reversed = numbers.split('').map(Number).reverse();
      /*
      * El input será un string, esto lo convertirá en typeof numbers y lo dará vuelta. Map hace lo mismo que parseInt.
      */
    } else {
    // Split('') se usa para dividir y devuelve el string letra por letra.
    // typeof nos devuelve qué tipo de dato es.
    // Number está esrito con mayúscula, ya que indica que es el tipo de dato (por ejemplo: boolean, string, number).
      alert('Por favor, ingresa un número v\u00e1lido');
    }
  } while (numbers.trim().length === 0); 
  // Si el usuario no ingresa un número, seguirá apareciendo el prompt.

  var sumOdds = 0; 
  // Sumará los números en las posiciones impares.
  var even = []; 
  // Contendrá los números en de las posiciones pares.
  var evenxTwo = []; 
  // Contendrá los numeros de las posiciones pares multiplicados por dos.
  var lessThanNine = []; 
  // Contendrá números menores que nueve.
  var evenFinal = 0; 
  // Sumará los números de las posiciones pares
  var check = ''; // Contendrá el resultado final.

  for (var ii = 0; ii < reversed.length; ii++) {
    if (ii % 2 === 0) { 
    /*
    * La cuenta de JavaScript comienza desde 0, por ende los números impares corresponden a los números pares en este caso.
    */
      sumOdds += reversed[a];
    } else if (a % 2 !== 0) {
      even.push(reversed[a]);
    }
  }

  for (var jj = 0; jj < even.length; jj++) {
    evenxTwo.push(even[jj] * 2); 
    /*
    * Push sirve para ingresar datos dentro de un array, en este caso, evenxTwo, que se encuentra vacío y se llenará con los números seleccionados del ciclo for, multiplicados por dos.
    */
  }

  for (var kk = 0; kk < evenxTwo.length; kk++) {
    if (evenxTwo[kk] > 9) {
      lessThanNine.push(evenxTwo[kk] - 9); 
      // Se crea un arreglo (lessThanNine), donde se guardarán todos los números menores a nueve.
    } else {
      lessThanNine.push(evenxTwo[kk]);
    }
  }

  for (var ll = 0; ll < lessThanNine.length; ll++) {
    evenFinal += lessThanNine[ll];
  }

  if ((evenFinal + sumOdds) % 10 === 0) { 
    /*
    * SumOdds es la variable que se le van agregando los números que estaban en la posición impar del array.
    */
    check = 'Tu tarjeta es v\u00e1lida'; 
    /*
    * Se suma el contenido de la variable evenFinal (posiciones pares de los números de la tarjeta de crédito multiplicados por 2) más sumOdds que son los números de las posiciones impares. Así tener la suma total de todos los elementos de reversed, los cuales son todos los números de la tarjeta de crédito pero con las fórmulas aplicadas.
    */
  } else {
    check = 'Tu tarjeta es inv\u00e1lida &#58; &#40;';
  }
  return alert(check);
}
isValidCard();