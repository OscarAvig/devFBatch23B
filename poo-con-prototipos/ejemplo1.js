"use strict";

// DEFINICION: JavaScript es un lenguaje multiparadigma,
// principalmente orientado a objetos y basado en prototipos
function Animal(nombre, color) {
       this.nombre = nombre;
       this.color = color;
       this.sonidoAnimal = function sonidoAnimal() {
              return "Hola, estoy emitiendo el sonido de " + this.nombre;
              
       };
    
}

//DEFINICIÓN: Un objto en JS es la instancia de un prototipo/funcion

const jirafa = new Animal("jirafa", "Amarillo");
const Perro = new Animal ("Perro", "Cafe");

console.log(jirafa);
console.log(jirafa.sonidoAnimal());

/* Prototipe chaning */