// // controllers/aboutus/coreValues.controller.js
// // const { CoreValue } = require('../../models/aboutus1/corevalue');

// const db = require('../../models');
// const CoreValue = db.CoreValue;

// const createCoreValue = async (req, res) => {
//   try {
//     const icon = req.file ? `/uploads/${req.file.filename}` : req.body.icon || null;
//     const { aboutUsId, title, description, color } = req.body;
//     const cv = await CoreValue.create({ aboutUsId, title, description, icon, color });
//     res.status(201).json(cv);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getAllCoreValues = async (req, res) => {
//   try {
//     const items = await CoreValue.findAll();
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getCoreValueById = async (req, res) => {
//   try {
//     const item = await CoreValue.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ message: 'Not found' });
//     res.json(item);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateCoreValue = async (req, res) => {
//   try {
//     const item = await CoreValue.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ message: 'Not found' });

//     const icon = req.file ? `/uploads/${req.file.filename}` : item.icon;
//     await item.update({ title: req.body.title, description: req.body.description, icon, color: req.body.color });
//     res.json(item);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { createCoreValue, getAllCoreValues, getCoreValueById, updateCoreValue };


const db = require('../../models');
const CoreValue = db.CoreValue;

// CREATE
const createCoreValue = async (req, res) => {
  try {
    const { aboutUsId, title, description, color, icon } = req.body;

    const cv = await CoreValue.create({
      aboutUsId,
      title,
      description,
      icon: icon || null, // store text icon class
      color: color || null
    });

    res.status(201).json(cv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
const getAllCoreValues = async (req, res) => {
  try {
    const items = await CoreValue.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
const getCoreValueById = async (req, res) => {
  try {
    const item = await CoreValue.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateCoreValue = async (req, res) => {
  try {
    const item = await CoreValue.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    await item.update({
      title: req.body.title || item.title,
      description: req.body.description || item.description,
      icon: req.body.icon || item.icon,
      color: req.body.color || item.color
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCoreValue,
  getAllCoreValues,
  getCoreValueById,
  updateCoreValue
};
