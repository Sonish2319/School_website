const path = require('path');
const fs = require('fs');
const { AboutUs } = require('../models');

const createAboutUs = async (req, res) => {
  try {
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const about = await AboutUs.create({
      title: req.body.title,
      description: req.body.description,
      image,
      status: req.body.status,
    });

    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAllAboutUs = async (req, res) => {
  try {
    const abouts = await AboutUs.findAll();
    res.json(abouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAboutUsById = async (req, res) => {
  try {
    const about = await AboutUs.findByPk(req.params.id);
    if (!about) return res.status(404).json({ message: 'Not found' });
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAboutUs = async (req, res) => {
  try {
    const [updated] = await AboutUs.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    const updatedAbout = await AboutUs.findByPk(req.params.id);
    res.json(updatedAbout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAboutUs = async (req, res) => {
  try {
    const deleted = await AboutUs.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAboutUs,
  getAllAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs,
};
