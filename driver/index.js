'use strict';
// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3002/caps');
const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/caps');

let handlePickup = require('./handlePickup');

socket.on('pickup', handlePickup(socket));