const db = require('../../models');
const FundingFAQ = db.FundingFAQ;

const createFundingFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = await FundingFAQ.create({ question, answer });
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFundingFAQs = async (req, res) => {
  try {
    const faqs = await FundingFAQ.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFundingFAQById = async (req, res) => {
  try {
    const faq = await FundingFAQ.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFundingFAQ = async (req, res) => {
  try {
    const faq = await FundingFAQ.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.update(req.body);
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFundingFAQ = async (req, res) => {
  try {
    const faq = await FundingFAQ.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.destroy();
    res.json({ message: 'FundingFAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFundingFAQ,
  getAllFundingFAQs,
  getFundingFAQById,
  updateFundingFAQ,
  deleteFundingFAQ
};
