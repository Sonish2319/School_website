// controllers/aboutus/history.controller.js
// const { HistoryTimeline } = require('../../models/aboutus1/historytimeline');

const db = require('../../models');
const HistoryTimeline = db.HistoryTimeline
const createHistory = async (req, res) => {
  try {
    const { aboutUsId, year, title, description } = req.body;
    const h = await HistoryTimeline.create({ aboutUsId, year, title, description });
    res.status(201).json(h);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllHistories = async (req, res) => {
  try {
    const items = await HistoryTimeline.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHistoryById = async (req, res) => {
  try {
    const item = await HistoryTimeline.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHistory = async (req, res) => {
  try {
    const item = await HistoryTimeline.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    await item.update({ year: req.body.year, title: req.body.title, description: req.body.description });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createHistory, getAllHistories, getHistoryById, updateHistory };
