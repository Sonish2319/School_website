const db = require('../../models');
const ContactDepartment = db.ContactDepartment;

const createDepart = async (req, res) => {
  try {
    const { title, description, phone, email } = req.body;
    const faq = await ContactDepartment.create({ title, description, phone, email });
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDepart = async (req, res) => {
  try {
    const faqs = await ContactDepartment.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDepartById = async (req, res) => {
  try {
    const faq = await ContactDepartment.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDepart = async (req, res) => {
  try {
    const faq = await ContactDepartment.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.update(req.body);
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDepart = async (req, res) => {
  try {
    const faq = await ContactDepartment.findByPk(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Not found' });

    await faq.destroy();
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createDepart, getAllDepart, getDepartById, updateDepart, deleteDepart };
