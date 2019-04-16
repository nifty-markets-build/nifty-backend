const express = require('express');

const db = require('../../database/dbConfig.js');
const itemsRouter = express.Router();

const { authenticate, jwtKey } = require('../auth/authenticate.js');

itemsRouter.get('/', async (req, res) => {
    try {
        const items = await db('items');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }
});

itemsRouter.post('/', async (req, res) => {
    try {
        const newItem = req.body;
        const [id] = await db('items').insert(newItem);
        const item = await db('items').where({ itemId: id }).first();
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json(error);
    }
});

itemsRouter.delete('/:id', async (req, res) => {
    try {
        const count = await db('items')
            .where({ itemId: req.params.id })
            .delete();

        if(count) {
            res.status(200).json(count);
        } else {
            res.status(400).json({ message: "Unable to delete item." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

itemsRouter.put('/:id', async (req, res) => {
    try {
        const count = await db('items')
            .where({ itemId: req.params.id })
            .update({...req.body});

        if(count) {
            res.status(200).json(count);
        } else {
            res.status(400).json({ message: "Unable to update item." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = itemsRouter;