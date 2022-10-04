const eventX = require('./index');
const Chance = require('chance');
const { v4: uuidv4 } = require('uuid');

const pickupHandler = require('./handlers/pickupHandler');
const inTransitHandler = require('./handlers/inTransitHandler');
const deliveredHandler = require('./handlers/deliveredHandler');

eventX.on('pickup', pickupHandler);
eventX.on('in-transit', inTransitHandler);
eventX.on('delivered', deliveredHandler);


setInterval(() => {
  console.log('------------new Interval----------');
  const chance = new Chance();
  const payload = {
    store: chance.company(),
    orderID: uuidv4(),
    customer: chance.name(),
    address: chance.address(),
  };
  eventX.emit('pickup', payload);
}, 9000);

