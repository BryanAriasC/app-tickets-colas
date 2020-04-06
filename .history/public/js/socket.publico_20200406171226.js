var socket = io();


socket.on('estadoActual', function(data) {
    console.log(data);
});