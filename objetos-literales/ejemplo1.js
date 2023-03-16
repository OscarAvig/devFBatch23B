"use strict";

// Objetos literales != Objetos de poo (programacion orietada a objetos)
const jaguar = {
    // Se les asigna atributos/propiedades 
    //clave : valor, sintaxis para añadir propiedades y metodos
    nombre: "jaguar",
    color: "amarillo",
    //Un metodo es una función definida dentro de un objeto
    funcionJaguar: () => {
        return "Gruñido de jaguar";
    },
};



//Podemos acceder a los valores de nuestras propiedades
//mediante la notación de punto

console.log(jaguar.funcionJaguar());