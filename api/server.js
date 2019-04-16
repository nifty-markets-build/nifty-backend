const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');

const db = require('../database/dbConfig.js');
const server = express();

const usersRouter = require('./routers/usersRouter.js');
const itemsRouter = require('./routers/itemsRouter.js');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(passport.initialize());
require('./auth/jwt.js'); //this must be below passport initialize
require('./auth/facebook.js');

server.use('/users', usersRouter);
server.use('/items', itemsRouter);

// Test route
server.get('/api/secure', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('You made it through')
})

server.get("/auth/facebook", passport.authenticate('facebook', { session: false, scope:["email"] }));

server.get("/auth/facebook/callback", passport.authenticate('facebook', { failureRedirect: "/failue" }), (req, res) => {
    res.redirect('/success')
})

server.get('/success', (req, res) => res.send('You passed facebook'))


server.get('/', async (req, res) => {
    res.status(200).json({ message: "working" });
});

module.exports = server;