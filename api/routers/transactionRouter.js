const express = require('express');

const db = require('../../database/dbConfig.js');
const transactionsRouter = express.Router();

const { authenticate, jwtKey } = require('../auth/authenticate.js');

//gets user transaction history
transactionsRouter.get('/:userId', authenticate, async (req, res) => {
    try {
        const userTransactions = await db('transactions')
            .where({ userId: req.params.userId });
        
        res.status(200).json(userTransactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

transactionsRouter.post('/:userId', authenticate, async (req, res) => {
    try {
        const newTransaction = req.body;

        const transaction = await db('transactions')
            .insert(newTransaction);

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = transactionsRouter;