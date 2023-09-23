const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


//============================== Customer Routes 😊 ==============================
// Create a new customer
router.post('/customers', customerController.create);
// Get all customers
router.get('/customers', customerController.getAll);
// Get a customer by ID
router.get('/customers/:id', customerController.getById);
// Update a customer by ID
router.put('/customers/:id', customerController.update);
// Delete a customer by ID
router.delete('/customers/:id', customerController.delete);

//============================== Customer Routes /👍 ==============================


module.exports = router;
