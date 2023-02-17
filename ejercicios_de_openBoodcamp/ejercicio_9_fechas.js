//fechas
const fecha = new Date()

console.log(fecha)

const fecha_de_nacimiento = new Date(1994,7,31,20,50,05)
console.log(fecha_de_nacimiento)

console.log(fecha > fecha_de_nacimiento)

console.log(fecha_de_nacimiento.getDate())
console.log(fecha_de_nacimiento.getMonth()+1)
console.log(fecha_de_nacimiento.getFullYear())