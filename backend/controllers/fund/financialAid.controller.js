const db = require('../../models');
const FinancialAid = db.FinancialAid;

const createFinancialAid = async (req, res) => {
  try {
    const { sub_text,icon,step,line1,line2 } = req.body;
    const aid = await FinancialAid.create({ sub_text,icon,step,line1,line2 });
    res.status(201).json(aid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFinancialAid = async (req, res) => {
  try {
    const aids = await FinancialAid.findAll();
    res.json(aids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFinancialAidById = async (req, res) => {
  try {
    const aid = await FinancialAid.findByPk(req.params.id);
    if (!aid) return res.status(404).json({ message: 'Not found' });
    res.json(aid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFinancialAid = async (req, res) => {
  try {
    const aid = await FinancialAid.findByPk(req.params.id);
    if (!aid) return res.status(404).json({ message: 'Not found' });

    await aid.update(req.body);
    res.json(aid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFinancialAid = async (req, res) => {
  try {
    const aid = await FinancialAid.findByPk(req.params.id);
    if (!aid) return res.status(404).json({ message: 'Not found' });

    await aid.destroy();
    res.json({ message: 'FinancialAid deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFinancialAid,
  getAllFinancialAid,
  getFinancialAidById,
  updateFinancialAid,
  deleteFinancialAid
};
