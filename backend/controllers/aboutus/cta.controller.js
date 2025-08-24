// controllers/aboutus/cta.controller.js
// const { CTA } = require('../../models/aboutus1/cta');

const db = require('../../models')
const CTA = db.CTA;

const createCTA = async (req, res) => {
  try {
    const { title, description, button_text, link } = req.body;
    const c = await CTA.create({ title, description, button_text, link });
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
    await item.update({ title: req.body.title, description: req.body.description, button_text: req.body.button_text, link: req.body.link });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCTA = async (req, res) => {
  try{
    const item = await CTA.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.status(204).send();
  }catch(err){
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createCTA, getAllCTAs, getCTAById, updateCTA, deleteCTA };
