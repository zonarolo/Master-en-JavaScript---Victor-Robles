'use strict'

/**
 * Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario.
 */

var num1 = parseInt(prompt('Introduce el primer numero', 0));
var num2 = parseInt(prompt('Introduce el segundo numero',0));
var num3 = 0;
var control = 0;

num2 < num1 ? num3=num2 : num3=num1;
num2 > num1 ? num3=num1 : num3=num2;
num1 > control ? control=num1 : control;
control > num2 ? control : control = num2;

document.write(`<h1>Los numeros que hay entre ${num1} y ${num2} son:</h1>`)

for (var i=num3; i < control; i++ ){
  document.write(`<p>${i}</p>`)
}