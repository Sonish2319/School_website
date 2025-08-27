
const db = require('../../models')
const CTA = db.CTAHome;

const createCTA = async (req, res) => {
  try {
    const { title ,sub_text } = req.body;
    const c = await CTA.create({ title ,sub_text});
    res.status(201).json(c);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCTAs = async (req, res) => {
  try {
    const items = await CTA.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCTAById = async (req, res) => {
  try {
    const item = await CTA.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCTA = async (req, res) => {
  try {
    const item = await CTA.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.update({ title: req.body.title, sub_text: req.body.sub_text });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCTA = async (req, res) => {
  try {
    const item = await CTA.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createCTA, getAllCTAs, getCTAById, updateCTA, deleteCTA };
