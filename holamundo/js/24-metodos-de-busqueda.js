'use strict'
var texto1 = 'Bienvenido al curso de JS';

// var busqueda = texto1.indexOf('curso');  //Hace un conteo de caracteres hasta llegar a la coincidencia

// var busqueda = texto1.lastIndexOf('curso'); //Lo mismo que el anterior pero se asegura de contar hasta la ultima coincidencia.

// var busqueda = texto1.search('curso'); // Hace una busqueda y devuelve el mismo conteo de indexOf. Devuelve -1 si no encuentra la palabra.


// var busqueda = texto1.match('curso'); //Devuelve una coleccion de los resultados que encuentre en un array. Podemos hacer una busqueda global para que devuelva todas las coincidencias y la forma de hacerlo es la siguiente: "match("/curso/gi")"

// var busqueda = texto1.substr(14, 5); // Lleva el cursor hasta el index numero 14 y devuelve los 5 siguientes caracteres como un string.

// var busqueda = texto1.charAt(44); // Devuelve una letra especifica.

// var busqueda = texto1.startsWith("Bi"); //Devuelve true o false si el string que estudia empieza por la combinacion de letras que le pases. 

var busqueda = texto1.includes("JS"); // Busca una cadena y es CaseSensitive, devuelve true o false.
console.log(busqueda);

