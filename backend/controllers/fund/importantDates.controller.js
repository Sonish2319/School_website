const db = require('../../models');
const ImportantDates = db.ImportantDates;

const createImportantDate = async (req, res) => {
  try {
    const { date, sub_text } = req.body;
    const impDate = await ImportantDates.create({ date, sub_text });
    res.status(201).json(impDate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllImportantDates = async (req, res) => {
  try {
    const dates = await ImportantDates.findAll();
    res.json(dates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImportantDateById = async (req, res) => {
  try {
    const date = await ImportantDates.findByPk(req.params.id);
    if (!date) return res.status(404).json({ message: 'Not found' });
    res.json(date);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateImportantDate = async (req, res) => {
  try {
    const date = await ImportantDates.findByPk(req.params.id);
    if (!date) return res.status(404).json({ message: 'Not found' });

    await date.update(req.body);
    res.json(date);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImportantDate = async (req, res) => {
  try {
    const date = await ImportantDates.findByPk(req.params.id);
    if (!date) return res.status(404).json({ message: 'Not found' });

    await date.destroy();
    res.json({ message: 'ImportantDate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createImportantDate,
  getAllImportantDates,
  getImportantDateById,
  updateImportantDate,
  deleteImportantDate
};
