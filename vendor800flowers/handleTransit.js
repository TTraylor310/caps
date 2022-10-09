'use strict';
module.exports = (socket) => (payload) => {
  if (payload.order.store === '1-800-flowers') {
    console.log(`Driver has picked up order# ${payload.order.orderID}`);
  }
  return;
};