'use strict';
const eventX = require('../index');

let now = new Date();
let dateTime = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'---'+now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

module.exports = (payload) => {
  setTimeout( () => {
    console.log(`EVENT: 'in-transit', time: ${dateTime}`, payload);
    console.log(`Driver: delivered order# ${payload.orderID}`);
    eventX.emit('delivered', payload);
  }, 2000);
};
