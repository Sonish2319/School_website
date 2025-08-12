// controllers/aboutus/statistics.controller.js
// const { Statistic } = require('../../models/aboutus1/statistic');

const db = require('../../models'); 
const Statistic = db.Statistic;

const createStatistic = async (req, res) => {
  try {
    const { aboutUsId, label, value } = req.body;
    const s = await Statistic.create({ aboutUsId, label, value });
    res.status(201).json(s);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStatistics = async (req, res) => {
  try {
    const items = await Statistic.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStatisticById = async (req, res) => {
  try {
    const item = await Statistic.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStatistic = async (req, res) => {
  try {
    const item = await Statistic.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.update({ label: req.body.label, value: req.body.value });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStatistic, getAllStatistics, getStatisticById, updateStatistic };
