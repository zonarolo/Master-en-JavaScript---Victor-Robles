'use strict'

// bucle while

var year = 2020;

while(year != 1991){
  //  ejecuta esto
  console.log("Estamos en el a;o " + year);
  year--;

  if (year == 2000) break;
}

// Do while
var years = 30;

do {
  alert("SOLO CUANDO SEA DIFERENTE A 20");
  years--;
} while ( years > 25)