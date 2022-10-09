'use strict';
module.exports = (socket) => (payload) => {
  if (payload.order.store === 'ACME-Widgets') {
    console.log(`Driver has picked up order# ${payload.order.orderID}`);
  }
  return;
};