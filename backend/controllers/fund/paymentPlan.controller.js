const db = require('../../models');
const PaymentPlan = db.PaymentPlan;

const createPaymentPlan = async (req, res) => {
  try {
    const { icon, title, buttonText, line1, line2, line3, poular} = req.body;
    const plan = await PaymentPlan.create({ icon, title, buttonText, line1, line2, line3, poular });
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPaymentPlans = async (req, res) => {
  try {
    const plans = await PaymentPlan.findAll();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaymentPlanById = async (req, res) => {
  try {
    const plan = await PaymentPlan.findByPk(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Not found' });
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePaymentPlan = async (req, res) => {
  try {
    const plan = await PaymentPlan.findByPk(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Not found' });

    await plan.update(req.body);
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePaymentPlan = async (req, res) => {
  try {
    const plan = await PaymentPlan.findByPk(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Not found' });

    await plan.destroy();
    res.json({ message: 'PaymentPlan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPaymentPlan,
  getAllPaymentPlans,
  getPaymentPlanById,
  updatePaymentPlan,
  deletePaymentPlan
};
