'use strict'

/*Hacer un programa que nos diga si el numero introducido es par o impar.
 * 1. Ventana prompt
 * 2. Si no es valido que nos pida el numero denuevo
 * */ 

var number = parseInt(prompt('Introduce un numero',0));

while (isNaN(number)){
  number = parseInt(prompt('Introduce un numero',0));
}

if(number % 2 == 0){
  alert('Es un numero par');
} else {
  alert('Es un numero impar');
}
