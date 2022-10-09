'use strict';

module.exports = (socket) => (payload) => {
  // console.log('PAYLOAD:', payload);
  console.log(`DRIVER dispatched to ${payload.order.address} for Order# ${payload.order.orderID}.`);
  setTimeout( () => {
    console.log(`DRIVER: picked up order# ${payload.order.orderID}.`);
    console.log('DRIVER in transit with:', payload.order);
    socket.emit('in-transit', payload);
  }, 3500);
  setTimeout( () => {
    console.log(`DRIVER: delivered ${payload.order.orderID} for ${payload.order.store}.`);
    socket.emit('delivered', payload);
  }, 6500);
};
