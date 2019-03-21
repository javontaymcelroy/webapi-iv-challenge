const express = require('express');
const server = express();

const moviesRouter = require('./routes/movies.js');

server.get('/', (req, res) => {
  res.send('<p>Server is up and running!</p>');
});

server.use('/movies', moviesRouter);

module.exports = server;
