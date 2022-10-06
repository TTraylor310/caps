'use strict';
// const Chance = require('chance');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');
// const chance = new Chance();

let handlePickup = require('./handlePickup')(socket);

socket.on('pickup', handlePickup);