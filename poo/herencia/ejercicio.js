class Animal {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    sonidoDeAnimal(){
        return "Estoy emitiendo el sinido de " + this.nombre;
    }
}

class Perro extends Animal{
    constructor (nombre, color, pulgas, peludo){
        super(nombre, color);
        this.pulgas = pulgas;
        this.peludo = peludo;

    }
    ladrar(){
        return "guau";
    }
}

const perro = new Perro ("perro", "Azul", 2, true);
const animal = new Animal ("tigre", "negro");