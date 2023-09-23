// controllers/customerController.js
const { customer } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

// Create a new customer
const create = async (req, res) => {
  const customerCreated = await customer.create(req.body);
  return res.status(201).json(customerCreated);
};

// Get all customers
const getAll = async (req, res) => {
  const customers = await customer.findAll();
  return res.status(200).json(customers);
};

// Get a customer by ID
const getById = async (req, res) => {
  const customerGetById = await customer.findByPk(req.params.id);
  if (!customerGetById) return res.status(404).json({ error: 'Customer not found' });
  return res.status(200).json(customerGetById);
};

// Update a customer by ID
const update = async (req, res) => {
  const [updated] = await customer.update(req.body, {
    where: { id: req.params.id },
  });
  if (!updated) return res.status(404).json({ error: 'Customer not found' });
  const updatedCustomer = await customer.findByPk(req.params.id);
  return res.status(200).json(updatedCustomer);
};

// Delete a customer by ID
const deleteCustomer = async (req, res) => {
  const deleted = await customer.destroy({
    where: { id: req.params.id },
  });
  if (!deleted) return res.status(404).json({ error: 'Customer not found' });
  return res.status(204).send();
};

exports.create = asyncHandler(create);
exports.getAll = asyncHandler(getAll);
exports.getById = asyncHandler(getById);
exports.update = asyncHandler(update);
exports.delete = asyncHandler(deleteCustomer);
