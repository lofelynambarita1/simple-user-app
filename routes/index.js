// routes/index.js
const express = require('express');
const router = express.Router();

const sampleRoute = require('./sampleRoute');
router.use(sampleRoute);
const userRoute = require('./userRoute');
router.use(userRoute);

module.exports = router;
