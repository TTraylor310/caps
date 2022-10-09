'use strict';
module.exports = (socket) => (payload) => {
  if (payload.order.store === 'ACME-Widgets') {
    console.log(`Order# ${payload.order.orderID} was delivered.`);
    socket.emit('order-done', payload);
  }
  return;
};