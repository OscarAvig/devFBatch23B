class MyArray{
    constructor (){
        this.length = 0
        this.data = {}
    }
    //obtener un elemento dada una posición / indice
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length ++
        return this.data
    }
}

const list = new MyArray ()
list.push ("hola")
list.push ("mundo")
console.log(list.get(0));