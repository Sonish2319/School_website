const db = require('../../models');
const TouchContact = db.TouchContact;

const createTouch = async (req, res) => {
  try {
    const { title, icon, line1, line2 } = req.body;
    const faq = await TouchContact.create({ title, icon, line1, line2 });
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTouch = async (req, res) => {
  try {
    const faqs = await TouchContact.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTouchbyId = async (req, res) => {
  try {
    const faq = await TouchContact.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTouch = async (req, res) => {
  try {
    const faq = await TouchContact.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.update(req.body);
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTouch = async (req, res) => {
  try {
    const faq = await TouchContact.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.destroy();
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTouch, getAllTouch, getTouchbyId, updateTouch, deleteTouch };
