const { io }= require('../server');


io.on('connection',(client)=>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect',()=>{// cliente es el mismo que recibe en el io.on
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
     client.on('enviarMensaje',(mensaje,callback)=>{

        console.log(mensaje);

        client.broadcast.emit('enviarMensaje',mensaje); // envia la data a todo los usuarios conectados al server

        // if(mensaje.usuario){
        //     callback({
        //         respuesta: 'todo salio bien'
        //     });    
        // }else{
        //     callback({
        //         respuesta: 'todo salio mal'
        //     });
        // }
        
    });

});