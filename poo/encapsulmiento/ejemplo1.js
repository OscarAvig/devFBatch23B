class Student {
    constructor(name, username, classes, address){
        this.name = name
        this._username = username
        this.classes = classes
        this._address = address
    }
    get getAddress(){
        return this._address
    }
    set validateUserName(newUserName) {
        if (newUserName === "usuarioMaldito" || newUserName == "laCucaracha") {
            console.warn("No haga eso joven. Se ve mal. Ya está grande")
    } else {
        this._username = newUserName
        return newUserName
    }
}
}

const emilio = new Student("Emilio", "Milo", ["History", "Math", "Physics"], "Dillon Av, ets")

console.log(emilio.name)
console.log(emilio.classes)
console.log(emilio.getAddress)
emilio.validateUserName ="usuarioMaldito"