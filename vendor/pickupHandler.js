'use strict';

const { v4: uuidv4 } = require('uuid');
const Chance = require('chance');
const chance = new Chance();
const joinRoom = require('./joinRoom');

function pickupHandler (socket) {
  console.log('------------new order------------');
  let payload = {
    store: chance.company(),
    orderID: uuidv4(),
    customer: chance.name(),
    address: chance.address(),
  };
  joinRoom(socket,payload);
  socket.emit('pickup', payload);
}

module.exports = pickupHandler;