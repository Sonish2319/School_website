const db = require('../../models');
const Model = db.Admissionapplicationprocess;

const createItem = async (req, res) => {
  try {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createItem, getAllItems, getItemById, updateItem, deleteItem };
