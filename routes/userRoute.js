// routes/userRoutes.js
/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Returns all users
 *     responses:
 *       200:
 *         description: A successful response
 */

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/getUsers', userController.getUsers);

module.exports = router;