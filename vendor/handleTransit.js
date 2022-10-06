'use strict';
module.exports = (socket) => (payload) => {
  // console.log('VENDOR PAYLOAD INFO', payload);
  console.log(`Driver has picked up order# ${payload.order.orderID}`);
  setTimeout( () => {
    // console.log(`DRIVER: delivered ${payload.orderID}.`);
    socket.emit('delivered', payload);
  }, 3500);
}