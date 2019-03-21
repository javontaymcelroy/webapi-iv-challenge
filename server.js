const express = require('express');
const server = express();

const usersRouter = require('./routes/users.js');

server.get('/', (req, res) => {
  res.send('<p>She is working!</p>');
});

server.use('/users', usersRouter);

module.exports = server;
