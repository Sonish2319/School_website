// controllers/aboutus/leadership.controller.js
// const { LeadershipTeam } = require('../../models/aboutus1/leadershipteam');

const db = require('../../models');
const LeadershipTeam = db.LeadershipTeam;

const createLeader = async (req, res) => {
  try {
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    const { aboutUsId, name, role, description } = req.body;
    const leader = await LeadershipTeam.create({ aboutUsId, name, role, description, image });
    res.status(201).json(leader);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllLeaders = async (req, res) => {
  try {
    const items = await LeadershipTeam.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLeaderById = async (req, res) => {
  try {
    const item = await LeadershipTeam.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLeader = async (req, res) => {
  try {
    const item = await LeadershipTeam.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    const image = req.file ? `/uploads/${req.file.filename}` : item.image;
    await item.update({ name: req.body.name, role: req.body.role, description: req.body.description, image });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLeader, getAllLeaders, getLeaderById, updateLeader };
