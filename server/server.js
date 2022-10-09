'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);

// const Queue = require('./lib/queue');
// const orderQueue = new Queue();
const caps = server.of('/caps');
// const messages = server.of('/messages');


console.log('Operating Tray Wk3 Server');
const queueList = {
  orderListForDriver: {},
  // driverList: {},
};

caps.on('connection', (socket) => {
  console.log('Socket connected to /CAPS namespace', socket.id);
  // socket.onAny((event, payload) => {
  //   let date = new Date();
  //   let time = date.toTimeString();
  //   console.log('EVENT', {event, time, payload});
  // });

  // socket.on('JOIN', (room) => {
  //   console.log(`You've joined the ${room} room`);
  //   socket.join(room);
  // });

  socket.on('pickup', (payload) => {
    let id = payload.orderID;
    queueList.orderListForDriver[id] = payload;
    // adds order to List based on orderID containing payload info
    console.log(`VENDOR ${payload.store}: --NEW ORDER-- # ${payload.orderID} by ${payload.customer}`);
    console.log('--------------------------------------');
    socket.broadcast.emit('pickup', {id, order: payload});
  });

  socket.on('in-transit', (payload) => {
    // console.log('TRANSIT PAYLOAD INFO:', payload);
    console.log(`DRIVER: picked up order# ${payload.order.orderID}.`);
    console.log('--------------------------------------');
    delete queueList.orderListForDriver[payload.id];
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log(`DRIVER: delivered order# ${payload.order.orderID}`);
    console.log('--------------------------------------');
    socket.broadcast.emit('delivered', payload);
  });

  socket.on('order-done', (payload) => {
    console.log(`VENDOR ${payload.order.store}: Order# ${payload.order.orderID} completed.`);
    console.log('--------------------------------------');
  });

  socket.on('driverGETALL', (payload) => {
    console.log('GET Orders for Drivers:');
    Object.keys(queueList.orderListForDriver).forEach(id => {
      console.log('Order List info...', {id, order: queueList.orderListForDriver[id]});
      socket.emit('pickup', {id, order: queueList.orderListForDriver[id]});
    });
  });


});
