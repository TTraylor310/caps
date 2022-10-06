'use strict';
const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const pickupHandler = require('./pickupHandler');
const handleTransit = require('./handleTransit');
const handleDeliver = require('./handleDeliver');

setInterval(() => {
  pickupHandler(socket);
}, 10000);

socket.on('in-transit', handleTransit);
socket.on('delivered', handleDeliver);
