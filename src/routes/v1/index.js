const express = require('express');
const cityController =  require('../../controllers/cityController');
const flightController = require('../../controllers/flightController');
const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.get('/city',cityController.getAll);
router.patch('/city/:id',cityController.update);

// Flights
router.post('/flight',flightController.create);
router.get('/flight',flightController.getAll);

module.exports = router;