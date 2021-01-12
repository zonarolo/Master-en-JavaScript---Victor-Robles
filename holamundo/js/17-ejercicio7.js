'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt('Introduce un numero',0));

document.write(`<h1>Tabla del numero ${numero}</h1>`);
for(var i = 1; i <= 10; i++){
  document.write(`${numero}x${i}=${numero*i}<br/>`); 
}

//Todas las tablas de multiplicar
var cantidad = prompt('Comenzando desde el 1 cuantas tablas quieres ver?',0);

if(cantidad != 0){
  for(var c = 1; c <= cantidad; c++){
    document.write(`<h1>Tabla del numero ${c}</h1>`);
    for(var i = 1; i <= 10; i++){
      document.write(`${i}x${c}=${c*i}<br/>`); 
    }
  }
}
