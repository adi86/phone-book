const express = require('express');
const router = express.Router();

const controller = require('./addressBook.controller');

router.get('/test', controller.test);

router.post('/add', controller.add);

router.get('/getAll', controller.getAll);

router.get('/getUser/:id', controller.getUser);

router.put('/:id/update', controller.update);

router.delete('/:id/delete', controller.delete);

module.exports = router;
