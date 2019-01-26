



module.exports = (io) => {
    console.log("Websocket Ready");

    io.on('connection', function(socket){
        console.log('a user connected');
        socket.emit('mensaje', {text:"Conectado al servidor de Terra"});
        socket.on('new_message', (obj) =>{
            console.log('NEW MESSAGE FROM CLIENT:');
            console.log(obj);
            socket.broadcast.emit('mensaje', obj);
        })
    });

}