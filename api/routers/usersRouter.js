const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../../database/dbConfig.js');
const usersRouter = express.Router();

const { authenticate, jwtKey } = require('../auth/authenticate.js');

usersRouter.get('/', async (req, res) => {
    try {
        const users = await db('users');
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
    }
});

usersRouter.get('/:userId', authenticate, async (req, res) => {
    try {
        const user = await db('users')
            .where({ userId: req.params.userId })
            .first();
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

//register functionality
usersRouter.post('/register', async (req, res) => {
    try {
        const { username, password, firstName, lastName, email } = req.body;

        if(username && password && firstName && lastName && email) {
            //hashes new user password
            const newUser = req.body;
            newUser.password = bcrypt.hashSync(newUser.password, 8);
            
            //adds user to the db
            const [id] = await db('users').insert(newUser);
            const user = await db('users')
                .where({ userId: id })
                .first();
            
            res.status(200).json(user);

        } else {
            res.status(422).json({ message: "Missing required field." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//login functinality
usersRouter.post('/login', async (req, res) => {
    try {
        //finds user with matching username in db
        const { username, password } = req.body;
        const user = await db('users')
            .where({ username })
            .first();
        
        //checks whether password matches the user that was found in the db
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({ message: "logged in", token, userId: user.userId });

        } else {
            res.status(400).json({ message: "Invalid credentials." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//deletes a user
usersRouter.delete('/:id', authenticate, async (req, res) => {
    try {
        const count = await db('users')
            .where({ userId: req.params.id })
            .delete();

        if(count) {
            res.status(200).json(count);
        } else {
            res.status(400).json({ message: "Unable to delete user." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//updates a field for the user
usersRouter.put('/:id', authenticate, async (req, res) => {
    try {
        const count = await db('users')
            .where({ userId: req.params.id })
            .first()
            .update({...req.body});

        if(count) {
            res.status(200).json(count);
        } else {
            res.status(400).json({ message: "Unable to update user." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

const generateToken = (user) => {
    const payload = {
        subject: user.userId,
        username: user.username
    }

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, jwtKey, options);
}

module.exports = usersRouter;