const express = require('express');

const db = require('../../database/dbConfig.js');
const userCartRouter = express.Router();

const { authenticate, jwtKey } = require('../auth/authenticate.js');

//get all items from a users cart
userCartRouter.get('/items/:userId', authenticate, async (req, res) => {
    try {
        const items = await db('usersCarts')
            .where({ userId: req.params.userId });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }
});

//add a new item to the users cart
userCartRouter.post('/items/:userId', authenticate, async (req, res) => {
    try {
        const item = req.body;
        item.userId = req.params.userId;

        const [id] = await db('usersCarts')
            .insert(item);

        const cartItem = await db('usersCarts')
            .where({ userId: id })
            .first();

        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get an item from the user's cart
userCartRouter.get('/:userId/:itemId', authenticate, async (req, res) => {
    try {
        const items = await db('usersCarts')
            .where({ userId: req.params.userId })
            .where({ itemId: req.params.itemId })
            ;
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }
});

//delete an item from a users cart
userCartRouter.delete('/userId/:itemId', authenticate, async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = userCartRouter;