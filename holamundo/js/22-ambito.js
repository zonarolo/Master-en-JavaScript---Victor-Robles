'use strict'

function holaMundo(texto) {
  var hola = 'texto dentro de la funcion';
  console.log(texto);
  console.log(numero);
  console.log(hola);
}

var numero = 23;
var texto = 'Hola mundo soy una variable global';

// No podemos ver lo que contiene la variable "hola" por estar fuera de la funcion.
// console.log(hola);  

holaMundo(texto);

