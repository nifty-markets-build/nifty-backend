const express = require('express');
const helmet = require('helmet');

const db = require('../database/dbConfig.js');
const server = express();

const usersRouter = require('./routers/usersRouter.js');

server.use(express.json());
server.use(helmet());
server.use('/users', usersRouter);


server.get('/', async (req, res) => {
    res.status(200).json({ message: "working" });
});

module.exports = server;