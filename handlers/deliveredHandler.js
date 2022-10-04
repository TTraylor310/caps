'use strict';

let now = new Date();
let dateTime = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'---'+now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();


module.exports = (payload) => {
  setTimeout( () => {
    console.log(`Vendor: Thank you for delivering order #${payload.orderID}`);
    console.log(`EVENT: 'delivered', time: ${dateTime}`, payload);
  }, 3000);
};
