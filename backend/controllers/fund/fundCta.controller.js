const db = require('../../models');
const FundCta = db.FundCta;

const createFundCta = async (req, res) => {
  try {
    const qrimage = req.file ? `/uploads/${req.file.filename}` : null;
    const { sub_text, icon, title, buttonText, line1, line2, line3 } = req.body;

    const fundCta = await FundCta.create({
      sub_text,
      icon,
      title,
      buttonText,
      line1,
      line2,
      line3,
      qrimage
    });

    res.status(201).json(fundCta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFundCtas = async (req, res) => {
  try {
    const fundCtas = await FundCta.findAll();
    res.json(fundCtas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFundCtaById = async (req, res) => {
  try {
    const fundCta = await FundCta.findByPk(req.params.id);
    if (!fundCta) return res.status(404).json({ message: 'Not found' });
    res.json(fundCta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFundCta = async (req, res) => {
  try {
    const fundCta = await FundCta.findByPk(req.params.id);
    if (!fundCta) return res.status(404).json({ message: 'Not found' });

    const qrimage = req.file ? `/uploads/${req.file.filename}` : fundCta.qrimage;

    await fundCta.update({
      ...req.body,
      qrimage
    });

    res.json(fundCta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFundCta = async (req, res) => {
  try {
    const fundCta = await FundCta.findByPk(req.params.id);
    if (!fundCta) return res.status(404).json({ message: 'Not found' });

    await fundCta.destroy();
    res.json({ message: 'FundCta deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFundCta,
  getAllFundCtas,
  getFundCtaById,
  updateFundCta,
  deleteFundCta
};
