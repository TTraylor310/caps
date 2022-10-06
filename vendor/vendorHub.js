'use strict';
const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');
const pickupHandler = require('./pickupHandler');

setInterval(() => {
  pickupHandler(socket);
}, 10000);

socket.on('in-transit', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}.`);
  socket.disconnect();
})
