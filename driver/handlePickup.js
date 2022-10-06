'use strict';

module.exports = (socket) => (payload) => {
  setTimeout( () => {
    socket.emit('in-transit', payload);
  }, 2500);
};
