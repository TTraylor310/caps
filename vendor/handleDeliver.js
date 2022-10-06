'use strict';
module.exports = (socket) => (payload) => {
  setTimeout( () => {
    console.log(`DRIVER: picked up order# ${payload.orderID}.`);
    console.log('DRIVER in transit with:', payload);
  }, 2000);
}