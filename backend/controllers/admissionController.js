const { Admission } = require('../models');

exports.createAdmission = async (req, res) => {
  try {
    const { title, shortSubtext, description, startDate, endDate, programsOffered, eligibilityCriteria, importantNotices, admissionOpenDate, entranceTestDate, orientationDay, status } = req.body;

    const image = req.file ? req.file.filename : null;

    const admission = await Admission.create({
      title,
      shortSubtext,
      description,
      startDate,
      endDate,
      image,
      icons: req.body.icons,
      programsOffered: JSON.parse(programsOffered),
      eligibilityCriteria,
      importantNotices,
      admissionOpenDate,
      entranceTestDate,
      orientationDay,
      status,
    });

    

    res.status(201).json(admission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.findAll();
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findByPk(req.params.id);
    if (!admission) return res.status(404).json({ message: 'Not found' });
    res.json(admission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByPk(req.params.id);
    if (!admission) return res.status(404).json({ message: 'Not found' });

    const image = req.file ? req.file.filename : admission.image;

    await admission.update({
      ...req.body,
      image,
      programsOffered: req.body.programsOffered ? JSON.parse(req.body.programsOffered) : admission.programsOffered
    });

    res.json(admission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByPk(req.params.id);
    if (!admission) return res.status(404).json({ message: 'Not found' });

    await admission.destroy();
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
