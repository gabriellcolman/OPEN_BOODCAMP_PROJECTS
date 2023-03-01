class estudiante {
    #nombre
    #asignatura
    constructor(nom,asignatura,){
        this.#nombre = nom
        this.#asignatura = asignatura
    }
    obtenAsignatura(){
        return this.#asignatura
    }
}

const nueva_persona = new estudiante ("gabriel",["javascript","html","css"]);
console.log(nueva_persona);

const estudiante2 = new estudiante ("pepito",["phyton","mysql"]);

console.log(estudiante2.obtenAsignatura())
