const express = require('express');
const userRoutes = express.Router();
const userModel = require('../models/user.model');
const UserService = require('../services/user.service');
const _service = new UserService();

userRoutes.post('/user', async (req, res) => {
    try {
        const { newUser } = req.body;
        const data = await _service.createUser(newUser);
        res.status(200).json({ message: data });
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

module.exports = userRoutes;