function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, 'JavaScript'); //cada segundo y medio el codigo saldrá por pantalla (un argumento).




function sumar(a, b) {
    console.log(a + b);
}

setInterval(sumar, 1500, 5, 2);  //cada segundo y medio el codigo saldrá por pantalla (2 argumentos).