const express = require('express');
const path = require('path');
require('dotenv').config();
//app de express
const app = express();
//crear servidor node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');
//Path Publico - esto  es lo que manda a llamar
const publicPath = path.resolve(__dirname, 'public');
//aqui se usa el path
app.use(express.static(publicPath));
server.listen(process.env.PORT, (err) =>{
    if(err) throw new Error(err);
    console.log('Servidor corriendo !!!',  process.env.PORT);
});