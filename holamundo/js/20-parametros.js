'use strict'

// Parametros REST y SPREAD
//REST

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log("Resto de frutas: ", resto_de_frutas);
}
//listadoFrutas("naranjas" , "manzanas", "sandia", "pera", "melon", "coco");
//SPREAD

var frutas = ["naranjas" , "manzanas"];
listadoFrutas(...frutas, "sandia" , "pera", "melon", "coco");

