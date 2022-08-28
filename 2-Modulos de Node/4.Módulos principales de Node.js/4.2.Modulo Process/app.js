console.log(process); //te ofrece información del procesamiento desde Node.
console.log(process.env); //propiedades de que se está procesando en el enviroment (dominio del usuario, idioma, propiedades de donde se está procesando)


console.log(process.argv[2]);  // --> para ver el siguiente comando.
console.log(process.argv[3]);
// [node, app.js, 6, 7]
//   0     1      2  3      // funciona como un array.

// ciclo for para iterar sobre todos los argumentos dados en la línea de comandos.
for (let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

console.log(process.memoryUsage()); //Información sobre el uso de la memoria.