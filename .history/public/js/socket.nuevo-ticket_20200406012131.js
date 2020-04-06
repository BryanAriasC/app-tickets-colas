var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnet', function() {
    console.log('Desconectado del servidor');
});

$('button').on('click', function() {

});