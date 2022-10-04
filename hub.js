const eventX = require('./index');

const pickupHandler = require('./handlers/pickupHandler');
const inTransitHandler = require('./handlers/inTransitHandler');
const deliveredHandler = require('./handlers/deliveredHandler');

eventX.on('pickup', pickupHandler);
eventX.on('in-transit', inTransitHandler);
eventX.on('delivered', deliveredHandler);

const payload = 'orderID: 13491-3412-1afa-1faa-1fa';

// const payload = {
//   store: 'Roses Are Us',
//   orderID: '13491-3412-1afa-1faa-1fa',
//   customer: 'Joe Blow',
//   address: '123 Fairy Lane Shoreline, WA 98033',
// };


setInterval(() => {
  console.log('------------new Interval----------');
  eventX.emit('pickup', {payload});
}, 5000);
