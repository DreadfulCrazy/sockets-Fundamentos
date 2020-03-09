const express = require('express');
const sockeIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);// express por debajo maneja http y utiliza basicamente las mismas funciones, por eso nos permite enviarla como parametro


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = ESTA ES LA COMUNICACION DEL BACKEND
module.exports.io = sockeIO(server); // dentro de socket enviaremos como parametro el servidor 
require('./sockets/socket');


// app.listen(port, (err) => { // en ves de utilizar app ya utilizaremos el server. listen 
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});