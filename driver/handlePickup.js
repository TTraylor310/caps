'use strict';

module.exports = (socket) => (payload) => {
  console.log(`Order# ${payload.orderID}`);
  console.log(`Driver dispatched to ${payload.address}.`);
  setTimeout( () => {
    console.log(`DRIVER: picked up order# ${payload.orderID}.`);
    console.log('DRIVER in transit with:', payload);
    socket.emit('in-transit', payload);
  }, 3500);
};
