# Validar tarjeta de Crédito.

**Este código sirve para validar tarjetas de crédito ingresando los números principales de esta.**

#### Trabajo realizado por:
 "María Paz Thompson" <m.paz.thompson@gmail.com>

### Pseudo-Código
1. Pregunta por medio de un prompt cuales son los números de la tarjeta de crédito.
2. Si el string entregado no corresponde a números lanza un alert que lo rechaza, ya que no es el dato que necesitamos.
3. Si el string es un dato válido, se revierten y pasa a la function isValid, la cual separa los números que están en las posiciones par e impar.
  + Los números de posición impar pasan directo al newArr.
  + Los números pares, serán multiplicados y luego pasarán nuevamente por una condición. La cual revisa si el resultado de estos dígitos menor a 10, si es así pasan al newArr. Si no es así, se sumarán los dígitos de cada valor entre sí y luego se agregarán al newArr.
1. El resultado de newArr, se compara con el resultado de 40 residuo de 10 es igual a 0, si es verdadero el número de tarjeta es válido. Si es falso, el número de tarjeta no es válido. Para ambas condiciones lanzará un alert para avisar al usuario.


### Flujo de Código.

![img](https://image.ibb.co/n8qyPG/Diagrama_tarjeta_de_credito.png)

