'use strict';
module.exports = (socket, payload) => {
  socket.emit('JOIN', `${payload.store}`);
};
