const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total) =>{             //cuando ocurra el evento, si es que ocurre...
    console.log(`Se realizó una compra por ${total}€`);       // Esto es lo que debe hacer, en este caso imprime por pantalla un string...
});

emisorProductos.emit('compra', 50);     


emisorProductos.on('compra', (total, numProductos) =>{             //cuando ocurra el evento, si es que ocurre...
    console.log(`Se realizó una compra por ${total}€ y se compraron ${numProductos} productos en total`);       // Esto es lo que debe hacer, en este caso imprime por pantalla un string...
});

emisorProductos.emit('compra', 50, 6);   