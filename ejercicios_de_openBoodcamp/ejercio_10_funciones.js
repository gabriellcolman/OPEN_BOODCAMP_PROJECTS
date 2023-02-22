//siempre true
const emitir_true = (imprime = true) => {
    console.log(false)
}
emitir_true()

// mi promesa
const miPromesa = new Promise((resolve,reject)=>{
    
    if (setTimeout (resolve, 5000)){
        resolve()
    }else {
        reject
    }

})
console.log(`hola soy una promesa`);

//funcion numeros automaticos

function* generadorNumerosPares() {
    let numero = 0;
    while (true) {
      yield numero;
      numero += 2;
    }
  }
  
  // Creamos el generador
  const numerosPares = generadorNumerosPares();
  
  // Iteramos sobre los primeros 5 números pares
  for (let i = 0; i < 2; i++) {
    console.log(numerosPares.next().value);
  }
  
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
