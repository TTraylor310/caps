'use strict';
const eventX = require('../index');

module.exports = (payload) => {
  setTimeout( () => {
    console.log('testing', payload);
    console.log(`Driver: delivered ${payload.orderID}`);
    eventX.emit('delivered', payload);
  }, 1000);
};
