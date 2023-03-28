class Electrodomestico {
    constructor(precio, color, capacidad){
        this.consumoEnegetico = 100;
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }
    
}

class Lavadora extends Electrodomestio {
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    consumoFinal (){
        return this.consumoEnergetico * this.carga;
    }
}

var Samsung = new Lavadora ("$"+1500, "blanco", "200", "20");
var Mabe = new Lavadora("$"+7000, "gris", "14500", "2");

document.getElementById("lavadora").innerHTML =`

    <h1>
`