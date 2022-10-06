'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Socket connected to CAPS namespace', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
    socket.join(room);
  });

  socket.onAny((event, payload) => {
    let date = new Date();
    let time = date.toTimeString();
    console.log('EVENT', {event, time, payload});
  });

  socket.on('pickup', (payload) => {
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    socket.broadcast.emit('delivered', payload);
  });

});
