const express = require('express');
const router = express.Router();

const controller = require('./addressBook.controller');

router.get('/test', controller.test);

router.post('/add', controller.add);

module.exports = router;