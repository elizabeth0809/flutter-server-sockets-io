const {io} = require('../index');
//mensaje de sockects
io.on('connection',
client => {
  console.log('Cliente conectado');
    client.on('disconnect', () => {console.log('Cliente desconectado')});
//client.on es estar escuchando algo, en este caso un mensaje
//el payload sirve para recibir lo que el servidor quire que envie
client.on('mensaje', (payload)=>{
    console.log('mensjae', payload);
    //mensjae del servidor
    io.emit('mensaje', {admin:'Nuevo mensaje'});
});
});
