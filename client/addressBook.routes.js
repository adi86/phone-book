const express = require('express');
const router = express.Router();

const controller = require('./addressBook.controller');

router.get('/test', controller.test);

router.post('/add', controller.add);

router.get('/getAll', controller.getAll);

module.exports = router;