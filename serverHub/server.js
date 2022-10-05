'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3003;
const server = new Server(PORT);

const caps = server.of('/caps');

server.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event', payload);

    // socket.emit('MESSAGE', payload);    // (in socket?)
    // server.emit('MESSAGE', payload);    // (all in server...)
    socket.broadcast.emit('MESSAGE', payload);    // (all in socket, NOT self)
  });

  socket.on('RECEIVED', (payload) => {
    logEvent('RECEIVED', payload);
    console.log('Server RECEIVED event', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });

});

caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
  });

  socket.on('in-transit', (payload) => {
    logEvent('in-transit', payload);
    caps.emit('in-transit', payload);
  });

});

function logEvent(event, payload){
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}