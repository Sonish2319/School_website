const db = require('../../models');
const Model = db.HeroGallery;

const createHeroGallery = async (req, res) => {
  try {
    const back_image = req.file ? `/uploads/${req.file.filename}` : null;
    const item = await Model.create({ ...req.body, back_image });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllHeroGallery = async (req, res) => {
  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHeroGalleryById = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateHeroGallery = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    const back_image = req.file ? `/uploads/${req.file.filename}` : item.back_image;
    await item.update({ ...req.body, back_image });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteHeroGallery = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createHeroGallery, getAllHeroGallery, getHeroGalleryById, updateHeroGallery, deleteHeroGallery };
