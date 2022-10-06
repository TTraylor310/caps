'use strict';
const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/caps');

let handlePickup = require('./handlePickup');

socket.emit('GETALL');
socket.on('pickup', handlePickup(socket));
