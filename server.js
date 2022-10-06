'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);
const caps = server.of('/caps');
console.log('Operating Tray Wk3 Server');


server.on('connection', (socket) => {
  console.log('Socket connect to Event Server!', socket.id);
});

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
    console.log(`Order# ${payload.orderID} by ${payload.customer} placed.`);
    console.log('Driver informed.');
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    console.log(`DRIVER: picked up order# ${payload.orderID}.`);
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log(`Order# ${payload.orderID} was delivered.`);
    socket.broadcast.emit('delivered', payload);
  });

});
