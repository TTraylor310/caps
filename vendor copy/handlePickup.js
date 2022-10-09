'use strict';
const uuid = require('uuid').v4;
const Chance = require('chance');
const chance = new Chance();
// const joinRoom = require('./joinRoom');

function handlePickup (socket) {
  let payload = {
    store: chance.company(),
    orderID: uuid(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log('------------new order------------');
  console.log(`Order: ${payload.orderID}`);
  console.log(`by ${payload.customer} located at ${payload.address}`)
  console.log('---------------------------------');
  // joinRoom(socket,payload);
  socket.emit('pickup', payload);
}

module.exports = handlePickup;