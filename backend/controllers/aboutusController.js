const path = require('path');
const fs = require('fs');
const { AboutUs } = require('../models');

// const createAboutUs = async (req, res) => {
//   try {
//     const { title, status, } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : null;

//     const about = await AboutUs.create({
//       title: req.body.title,
//       description: req.body.description,
//       image,
//       status: req.body.status,
//     });

//     res.status(201).json(about);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const createAboutUs = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    const about = await AboutUs.create({
      title,
      description,
      images: JSON.stringify(images),
      status,
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

// const updateAboutUs = async (req, res) => {
//   try {
//     const [updated] = await AboutUs.update(req.body, { where: { id: req.params.id } });
//     if (!updated) return res.status(404).json({ message: 'Not found' });
//     const updatedAbout = await AboutUs.findByPk(req.params.id);
//     res.json(updatedAbout);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const updateAboutUs = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const about = await AboutUs.findByPk(req.params.id);
    if (!about) return res.status(404).json({ message: "Not found" });

    // Parse old images array
    let oldImages = [];
    if (about.images) {
      oldImages = JSON.parse(about.images);
    }

    // New uploaded images
    const newImages = req.files && req.files.length > 0
      ? req.files.map(file => `/uploads/${file.filename}`)
      : [];

    // Combine old + new images
    const combinedImages = [...oldImages, ...newImages];

    // Prepare update data
    const updateData = {
      title,
      description,
      status,
      images: JSON.stringify(combinedImages),
    };

    const [updated] = await AboutUs.update(updateData, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: "Not found" });

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
