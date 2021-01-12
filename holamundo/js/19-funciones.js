'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de intrucciones que podemos utilizar tantas veces como queramos.

function calculadora(num1, num2){
  var calculadora = `Suma: ${num1+num2}               <br/> \n Resta: ${num1-num2}                  <br/> \n Multiplicacion: ${num1*num2}            <br/> \n Division: ${num1/num2}`;

  return calculadora; 
}

var num1 = parseInt(prompt('Introduce el primer numero',0));
var num2 = parseInt(prompt('Introduce el segundo numero',0));
console.log(calculadora(num1, num2));
document.write(calculadora(num1,num2));
