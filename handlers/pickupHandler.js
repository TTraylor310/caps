'use strict';
const eventX = require('../index');

module.exports = (payload) => {
  setTimeout( () => {
    console.log('testing', payload);
    // console.log(`Driver: picked up ${payload.orderID}`);
    eventX.emit('in-transit', payload);
  }, 1000);
};
