const db = require('../../models');
const Model = db.HomeGallery;

const createHomeGallery = async (req, res) => {
  try {
    const images = req.file ? `/uploads/${req.file.filename}` : null;
    const item = await Model.create({ ...req.body, images });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllHomeGallery = async (req, res) => {
  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHomeGalleryById = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateHomeGallery = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    const images = req.file ? `/uploads/${req.file.filename}` : item.images;
    await item.update({ ...req.body, images });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteHomeGallery = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createHomeGallery, getAllHomeGallery, getHomeGalleryById, updateHomeGallery, deleteHomeGallery };
