'use strict';
// const eventX = require('../index');

module.exports = (payload) => {
  setTimeout( () => {
    console.log('testing', payload);
    console.log(`Vendor: Thank you for delivering ${payload.orderID}`);
  }, 1000);
};
