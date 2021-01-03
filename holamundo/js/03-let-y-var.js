'use strict'

//*Pruebas con let y var.
//?La diferencia es que LET permite definir variables limitando su alcance al bloque, declaracion o expresion donde se este utilizando y VAR define una variable global o local sin importar el ambito en el que este el bloque.
//! La diferencia principal es el alcance que pueden tener las variables y como actuan.en funcion a los diferentes bloques.

// Prueba con VAR
var numero = 40; 
console.log(numero);//valor 40

if(true){
  var numero = 50;
  console.log(numero);//valor 50
}

console.log(numero);//valor 50

//Prueba con LET
var texto = "Curso JS victorroblesweb.es";
console.log(texto); //valor JS

if(true){
  let texto = "Curso laravel 5 victorroblesweb.es";
  console.log(texto); //valor laravel 5
}
console.log(texto); //valor JS