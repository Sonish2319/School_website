const db = require('../../models');
const Model = db.HeroHome;

const createHeroHome = async (req, res) => {
  try {
    const hero_image = req.file ? `/uploads/${req.file.filename}` : null;
    const item = await Model.create({ ...req.body, hero_image });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllHeroHome = async (req, res) => {
  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHeroHomeById = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateHeroHome = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    const hero_image = req.file ? `/uploads/${req.file.filename}` : item.hero_image;
    await item.update({ ...req.body, hero_image });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteHeroHome = async (req, res) => {
  try {
    const item = await Model.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createHeroHome, getAllHeroHome, getHeroHomeById, updateHeroHome, deleteHeroHome };
