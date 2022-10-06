'use strict';
module.exports = (socket, payload) => {
  socket.emit('JOIN', 'Caps');
};
