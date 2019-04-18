const express = require('express');

const db = require('../../database/dbConfig.js');
const userCartRouter = express.Router();

const { authenticate, jwtKey } = require('../auth/authenticate.js');

userCartRouter.get('/:userId', authenticate, async (req, res) => {
    try {
        const items = await db('user_cart')
            .where({ userId: req.params.userId });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }
});

userCartRouter.post('/:userId', authenticate, async (req, res) => {
    try {
        const newItem = await db('user_cart')
            .insert(req.body);
        res.status(200).json(newItem);
    } catch (error) {
        res.status(500).json(error);
    }
});

userCartRouter.get('/:userId/:itemId', authenticate, async (req, res) => {
    try {
        const items = await db('user_cart')
            .where({ userId: req.params.userId })
            .where({ itemId: req.params.itemId })
            ;
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }
});

userCartRouter.delete('/userId/:itemId', authenticate, async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = userCartRouter;