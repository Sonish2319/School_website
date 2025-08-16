const db = require('../../models');
const VisitContact = db.VisitContact;

const createVisit = async (req, res) => {
  try {
    const { sub_text, map, button_text } = req.body;
    const faq = await VisitContact.create({ sub_text, map, button_text });
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVisit = async (req, res) => {
  try {
    const faqs = await VisitContact.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVisitById = async (req, res) => {
  try {
    const faq = await VisitContact.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVisit = async (req, res) => {
  try {
    const faq = await VisitContact.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.update(req.body);
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVisit = async (req, res) => {
  try {
    const faq = await VisitContact.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.destroy();
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createVisit, getAllVisit, getVisitById, updateVisit, deleteVisit };
