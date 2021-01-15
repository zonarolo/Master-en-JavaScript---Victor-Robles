'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function(nombre){
  return `La pelicula es: ${nombre}`; 
}

// Callback: Es una funcion que se ejecuta dentro de otra.

function sumame(numero1, numero2, sumaYmuestra, sumaXdos){
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaXdos(sumar);

  return sumar;
}

sumame(
  parseInt(prompt("Introduce un numero a sumar",0)),
  parseInt(prompt("El anterior mas este",0)),
  function(dato){
    console.log(`La suma es ${dato}`)
  }, 
  function(dato){
    console.log(`La suma por dos es: ${dato*2}`)
  });
