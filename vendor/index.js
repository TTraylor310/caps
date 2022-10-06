'use strict';
const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/caps');

const handlePickup = require('./handlePickup');
const handleTransit = require('./handleTransit');
// const handleDeliver = require('./handleDeliver');

setInterval(() => {
  handlePickup(socket);
}, 10000);

socket.on('in-transit', handleTransit(socket));
// socket.on('delivered', handleDeliver(socket));
