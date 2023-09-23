const { Customer } = require('../models');

// Create a new customer
exports.create = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    return res.status(201).json(customer);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating customer' });
  }
};

// Get all customers
exports.getAll = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching customers' });
  }
};

// Get a customer by ID
exports.getById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching customer' });
  }
};

// Update a customer by ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Customer not found' });
    const updatedCustomer = await Customer.findByPk(req.params.id);
    return res.status(200).json(updatedCustomer);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating customer' });
  }
};

// Delete a customer by ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Customer.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Customer not found' });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting customer' });
  }
};
