'use strict'
// Transformacion de textos
var numero = 444;
var texto1 = 'Bienvenido al curso de JS';
var texto2 = 'es muy buen curso';

var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto1.toLowerCase();

console.log(dato);

// Calcular longitud
var nombre = 'Juan Rolo';
nombre = ['hola', 'hola'];
console.log(nombre.length);

// Concatenar
var textoTotal = texto1 + texto2;
textoTotal.concat(`${texto1} ${texto2}`);

console.log(textoTotal);

