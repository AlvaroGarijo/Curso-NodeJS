function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

mostrarTema('Node.js');
setTimeout(mostrarTema, 2000, 'Node.js');  //retarda 2 segundos (ejemplo 1 argumento)



function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 5000 , 5, 6);  //retarda 5 segundos (ejemplo 2 argumentos)