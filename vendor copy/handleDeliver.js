'use strict';
module.exports = (socket) => (payload) => {
  console.log(`Order# ${payload.order.orderID} was delivered.`);
  socket.emit('order-done', payload);
};