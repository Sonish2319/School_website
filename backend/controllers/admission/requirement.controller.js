const db = require('../../models');
const AdmissionRequirement = db.Admissionrequirement;

const createRequirement = async (req, res) => {
  try {
    const { requirement_text } = req.body;
    const requirement = await AdmissionRequirement.create({ requirement_text });
    res.status(201).json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllRequirements = async (req, res) => {
  try {
    const requirements = await AdmissionRequirement.findAll();
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRequirementById = async (req, res) => {
  try {
    const requirement = await AdmissionRequirement.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });
    res.json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRequirement = async (req, res) => {
  try {
    const requirement = await AdmissionRequirement.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });

    await requirement.update(req.body);
    res.json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRequirement = async (req, res) => {
  try {
    const requirement = await AdmissionRequirement.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });

    await requirement.destroy();
    res.json({ message: 'Requirement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRequirement, getAllRequirements, getRequirementById, updateRequirement, deleteRequirement };
