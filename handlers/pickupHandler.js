'use strict';
const eventX = require('../index');

let now = new Date();
let dateTime = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'---'+now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

module.exports = (payload) => {
  setTimeout( () => {
    console.log(`EVENT: 'pickup', time: ${dateTime}`, payload);
    console.log(`Driver: picked up order# ${payload.orderID}`);
    eventX.emit('in-transit', payload);
  }, 1000);
};
