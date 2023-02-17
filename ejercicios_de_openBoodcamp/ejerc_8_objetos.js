//trabajo con objetos
const obj_datos = {
    nombre:"Gabriel",
    apellido:"Colman",
    edad:28,
    altura:170,
    eresDesarrollador:true
}

const prop = "nombre"
console.log(obj_datos[prop]);

const obj_datos_amigos = [
    {nombre:"Gabriel",apellido:"leiva",anyo:28,eresDesarrollador:false},
    {nombre:"ricardo",apellido:"palavecino",anyo:27,eresDesarrollador:false},
    {nombre:"cesar",apellido:"ibarra",anyo:26,eresDesarrollador:false},
    {nombre:"mauro",apellido:"martines",anyo:30,eresDesarrollador:false},
]


obj_datos_amigos.sort((a,b)=> a.anyo - b.anyo)
console.log(obj_datos_amigos)