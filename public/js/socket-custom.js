var socket = io();
        // on para escuchar informacion 
        socket.on('connect', function () {
            
            console.log('Conectado al servidor');
        });

        socket.on('disconnect',function () {
            console.log('Perdimos conexion con el servidor');
        })
        // emit es para enviar informacion => primer parametro es el nombre del evento, el segundo es el objeto que se enviarea y el tercero es un callback que se dispara cuando el evento si se realiza
        socket.emit('enviarMensaje',{ // recuerda que el emit es solo para enviar mensaje al servidor 1 a 1(priivado)

            usuario: 'Lucas',
            mensaje: 'Hola perro'
        },function (resp) {
            console.log('respuesta server',resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje',function (mensaje) {
            console.log('Servidor:',mensaje);
        })