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
  orderList: {},
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
    queueList.orderList[id] = payload;
    // adds order to List based on orderID containing payload info
    console.log(`Order# ${payload.orderID} by ${payload.customer} placed.`);
    socket.broadcast.emit('pickup', {id, order: payload});
  });

  socket.on('in-transit', (payload) => {
    // console.log('TRANSIT PAYLOAD INFO:', payload);
    console.log(`DRIVER: picked up order# ${payload.order.orderID}.`);
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log(`Order# ${payload.order.orderID} was delivered.`);
    // socket.broadcast.emit('delivered', payload);
  });

  socket.on('order-done', (payload) => {
    console.log(`Order# ${payload.order.orderID} completed.`);
  });

  socket.on('GETALL', (payload) => {
    console.log('GET PROOF');
    Object.keys(queueList.orderList).forEach(id => {
      console.log('Order List info...', {id, order: queueList.orderList[id]});
    });
  });


});
