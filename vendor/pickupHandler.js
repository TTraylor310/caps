'use strict';
const { v4: uuidv4 } = require('uuid');
const Chance = require('chance');
const chance = new Chance();
const joinRoom = require('./joinRoom');

function pickupHandler (socket) {
  let payload = {
    store: chance.company(),
    orderID: uuidv4(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log('------------new order------------');
  console.log(`Order: ${payload.orderID}`);
  console.log(`by ${payload.customer} located at ${payload.address}. Thank you.`)
  joinRoom(socket,payload);
  socket.emit('pickup', payload);
}

module.exports = pickupHandler;