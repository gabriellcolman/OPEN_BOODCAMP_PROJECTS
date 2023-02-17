const array_compras = ["papa","manzana","uva","pera","papel"]

array_compras.push("aceite de girasol");

array_compras.pop();

const peliculas_obj = [
    {titulo:"titanic",tipo:"drama", fecha_de_crea:1999},
    {titulo:"topgun",tipo:"accion", fecha_de_crea:1986},
    {titulo:"vanillaSky",tipo:"ficcion", fecha_de_crea:2001}
]
const peliculas_nuevas = peliculas_obj.filter(Obj => Obj.fecha_de_crea < 2000)
console.log(peliculas_nuevas)

const Peliculas_tipo = ["drama","accion","ficcion"]

const newPeliculas = Peliculas_tipo.map((valor,indice)=> `${indice +1} - ${valor}`)
console.log(newPeliculas)

const Peliculas_titulos = ["titanic","vanillasky","topgun"]

const newtitulos = Peliculas_titulos.map((valor,indice)=> `${indice +1} - ${valor}`)
console.log(newPeliculas);

console.log(Peliculas_tipo.concat(Peliculas_titulos))
console.log(...Peliculas_tipo,...Peliculas_titulos)

