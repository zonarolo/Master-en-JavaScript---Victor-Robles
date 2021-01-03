'use strict'

// Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
//Plus: Si los datos introducidos no son numeros o iguales a 0, nos lo vuelva a pedir.

var num1 = parseInt(prompt('Introduce el primer numero', 0));
var num2 = parseInt(prompt('Introduce el segundo numero',0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
  num1 = parseInt(prompt('Introduce el primer numero', 0));
  num2 = parseInt(prompt('Introduce el segundo numero',0));
}

if (num1 == num2){
  alert('Los numeros son iguales');
} else if (num1 > num2){
  alert(`El numero ${num1} es mayor`);
}else {
  alert(`El numero ${num2} es mayor`)
}