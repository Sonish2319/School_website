const db = require('../../models');
const AdmissionContact = db.Admissioncontact;

const createContact = async (req, res) => {
  try {
    const { contact_type, title, line1, line2, line3, icon } = req.body;
    const contact = await AdmissionContact.create({ contact_type, title, line1, line2, line3, icon });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await AdmissionContact.findAll();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const contact = await AdmissionContact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Not found' });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const contact = await AdmissionContact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Not found' });

    await contact.update(req.body);
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await AdmissionContact.findByPk(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Not found' });

    await contact.destroy();
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContact, getAllContacts, getContactById, updateContact, deleteContact };
