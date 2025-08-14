const db = require('../../models');
const TuitionFees = db.TuitionFees;

const createTuitionFees = async (req, res) => {
  try {
    const { date, type } = req.body;
    const fee = await TuitionFees.create({ date, type  });
    res.status(201).json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTuitionFees = async (req, res) => {
  try {
    const fees = await TuitionFees.findAll();
    res.json(fees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTuitionFeesById = async (req, res) => {
  try {
    const fee = await TuitionFees.findByPk(req.params.id);
    if (!fee) return res.status(404).json({ message: 'Not found' });
    res.json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTuitionFees = async (req, res) => {
  try {
    const fee = await TuitionFees.findByPk(req.params.id);
    if (!fee) return res.status(404).json({ message: 'Not found' });

    await fee.update(req.body);
    res.json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTuitionFees = async (req, res) => {
  try {
    const fee = await TuitionFees.findByPk(req.params.id);
    if (!fee) return res.status(404).json({ message: 'Not found' });

    await fee.destroy();
    res.json({ message: 'TuitionFees deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTuitionFees,
  getAllTuitionFees,
  getTuitionFeesById,
  updateTuitionFees,
  deleteTuitionFees
};
