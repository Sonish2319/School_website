const db = require('../../models');
const Scholarship = db.Scholarship;

const createScholarship = async (req, res) => {
  try {
    const { icon, title, description, line1, line2, line3 } = req.body;
    const scholarship = await Scholarship.create({ icon, title, description, line1, line2, line3 });
    res.status(201).json(scholarship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.findAll();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getScholarshipById = async (req, res) => {
  try {
    const scholarship = await Scholarship.findByPk(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Not found' });
    res.json(scholarship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateScholarship = async (req, res) => {
  try {
    const scholarship = await Scholarship.findByPk(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Not found' });

    await scholarship.update(req.body);
    res.json(scholarship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteScholarship = async (req, res) => {
  try {
    const scholarship = await Scholarship.findByPk(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Not found' });

    await scholarship.destroy();
    res.json({ message: 'Scholarship deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createScholarship,
  getAllScholarships,
  getScholarshipById,
  updateScholarship,
  deleteScholarship
};
