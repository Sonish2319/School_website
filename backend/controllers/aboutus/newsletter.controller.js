// controllers/aboutus/newsletter.controller.js
// const { Newsletter } = require('../../models/aboutus1/newsletter');

const db = require('../../models');
const Newsletter = db.Newsletter;

const createNewsletter = async (req, res) => {
  try {
    const { title, description } = req.body;
    const n = await Newsletter.create({ title, description });
    res.status(201).json(n);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllNewsletters = async (req, res) => {
  try {
    const items = await Newsletter.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNewsletterById = async (req, res) => {
  try {
    const item = await Newsletter.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNewsletter = async (req, res) => {
  try {
    const item = await Newsletter.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.update({ title: req.body.title, description: req.body.description });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNewsletter = async (req, res) => {
  try{
    const item = await Newsletter.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.destroy();
    res.status(204).send();
  }catch(err){
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createNewsletter, getAllNewsletters, getNewsletterById, updateNewsletter, deleteNewsletter };
