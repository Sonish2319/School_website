const db = require('../../models');
const ContactFaq = db.ContactFaq;

const createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = await ContactFaq.create({ question, answer });
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await ContactFaq.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFaqById = async (req, res) => {
  try {
    const faq = await ContactFaq.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFaq = async (req, res) => {
  try {
    const faq = await ContactFaq.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.update(req.body);
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const faq = await ContactFaq.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.destroy();
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createFaq, getAllFaqs, getFaqById, updateFaq, deleteFaq };
