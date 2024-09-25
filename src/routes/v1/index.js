const express = require('express');
const {create, createBulk, getAll} = require('../../controllers/city-controller.js');
const flightController = require('../../controllers/flight-controller.js');
const router = express.Router();

router.post('/city', create);
router.post('/city-bulk', createBulk);
router.get('/cities', getAll);

router.post('/flight', flightController.create);
router.get('/xyz/:id', flightController.getIt);
router.get('/flights', flightController.getAll);
router.patch('/flights/:id', flightController.update);


module.exports = router;