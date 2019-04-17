const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('../database/dbConfig.js');
const server = express();

const usersRouter = require('./routers/usersRouter.js');
const itemsRouter = require('./routers/itemsRouter.js');
const transactionsRouter = require('./routers/transactionRouter.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/users', usersRouter);
server.use('/items', itemsRouter);
server.use('/transactions', transactionsRouter);


server.get('/', async (req, res) => {
    res.status(200).json({ message: "working" });
});

module.exports = server;