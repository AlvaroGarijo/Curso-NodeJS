function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()'); //Código SINCRONO

setImmediate(mostrarTema, 'React.js'); //Código ASINCRONO (maxima prioridad entre asincrono)

console.log('Después de setImmediate()'); //Código SINCRONO