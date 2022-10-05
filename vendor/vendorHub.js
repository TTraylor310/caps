'use strict';

const Chance = require('chance');
const { v4: uuidv4 } = require('uuid');

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');

const handleReceived = require('./handleReceived');

const sendMessage = createSendMessage(socket);




setInterval(() => {
  console.log('------------new order------------');
  const chance = new Chance();
  const payload = {
    store: chance.company(),
    orderID: uuidv4(),
    customer: chance.name(),
    address: chance.address(),
  };

  sendMessage()

  // socket.on('pickup', payload);
}, 9000);
