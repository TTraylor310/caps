'use strict';
// const Chance = require('chance');
// const chance = new Chance();

module.exports = (socket) => (payload) => {
  setTimeout( () => {
    console.log(`DRIVER: picked up order# ${payload.orderID}.`);
    console.log('DRIVER in transit with:', payload);
    socket.emit('in-transit', payload);
  }, 1000);
  setTimeout( () => {
    console.log(`DRIVER: delivered order# ${payload.orderID}.`);
    socket.emit('delivered', payload);
  }, 2000);
};
