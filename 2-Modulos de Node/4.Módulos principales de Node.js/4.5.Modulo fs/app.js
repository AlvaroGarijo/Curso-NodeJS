const fs = require('fs');

// para la version SINCRONA se le añade Sync al final del metodo al metodo que quiera cambiar ejemplo: "readFile --> readFileSync"
//Para la version SINCRONA no hace falta gestionar/controlar el error
//------Leer un archivo------

console.log('Antes de leer el archivo...');

const archivo = fs.readFileSync('./index.html', 'utf-8');
    // if(err) {
    //     throw err; //console.log(err);
    // } 
console.log(archivo);
//con el throw err se para la lectura del archivo y no sigue  
//si imprimimos el error con console.log el contenido del archivo sigue leyendo.





//------Cambiar Nombre de un archivo------



fs.renameSync('index.html', 'main.html'); //cambia de nombre un archivo
   
    console.log('Nombre cambiado exitosamente');


console.log('Después de cambiar nombre del archivo...');


//-----Agregar contenido al final de un archivo------



fs.appendFile('main.html', '<p>Hola</p>', (err) => {
    if(err) {
        throw err
     }
    console.log('Se agregó de forma exitosa');
});
console.log('Después de Agregar contenido del archivo...');


//------Reemplazar todo el contenido del archivo------


fs.writeFile('main.html', 'Contenido Nuevo', (err) => {
    if(err) {
        throw err
    }
    console.log('Contenido reemplazado con éxito');
});

console.log('Después de reemplazar contenido del archivo...');


//------Eliminar Archivos------


// fs.unlinkSync('main.html', (err) =>{
//     // if(err){
//     //     throw err;
//     // }
//     console.log('Archivo Eliminado');
// });

console.log('Después de eliminar archivo...');