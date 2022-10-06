'use strict';
module.exports = (socket) => (payload) => {
  console.log(`Order# ${payload.orderID} was delivered.`);
}