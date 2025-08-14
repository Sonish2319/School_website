const db = require('../../models');
const Commitment = db.Commitment;

const createCommitment = async (req, res) => {
  try {
    const { title, description } = req.body;
    const commitment = await Commitment.create({ title, description });
    res.status(201).json(commitment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCommitments = async (req, res) => {
  try {
    const commitments = await Commitment.findAll();
    res.json(commitments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCommitmentById = async (req, res) => {
  try {
    const commitment = await Commitment.findByPk(req.params.id);
    if (!commitment) return res.status(404).json({ message: 'Not found' });
    res.json(commitment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCommitment = async (req, res) => {
  try {
    const commitment = await Commitment.findByPk(req.params.id);
    if (!commitment) return res.status(404).json({ message: 'Not found' });

    await commitment.update(req.body);
    res.json(commitment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCommitment = async (req, res) => {
  try {
    const commitment = await Commitment.findByPk(req.params.id);
    if (!commitment) return res.status(404).json({ message: 'Not found' });

    await commitment.destroy();
    res.json({ message: 'Commitment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCommitment,
  getAllCommitments,
  getCommitmentById,
  updateCommitment,
  deleteCommitment
};
