'use strict';
module.exports = (socket) => (payload) => {
  if (payload.order.store === '1-800-flowers') {
    console.log(`Order# ${payload.order.orderID} was delivered.`);
    socket.emit('order-done', payload);
  }
  return;
};