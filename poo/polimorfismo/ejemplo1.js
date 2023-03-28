class Animal {
    constructor(nombre, color) {
        this.nombre = nombre
        this.color = color
    }
    saludo(){
        return "Hola, soy una animal genérico..."
    }
}

class Perro extends Animal {
    constructor (nombre, color, raza){
        super(nombre, color)
        this.raza = raza
    }
}

const snoppy = new Perro ("Snoppy", "Blanco", "Beagle" )
console.log(snoppy.nombre)
console.log(snoppy.saludo());