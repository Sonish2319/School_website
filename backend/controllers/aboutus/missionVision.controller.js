// controllers/aboutus/missionVision.controller.js
// const { MissionVision } = require('../../models/aboutus1/missionVision');

const db = require('../../models');
const MissionVision = db.MissionVision;


const createMissionVision = async (req, res) => {
  try {
    // req.files will be object from upload.fields
    const mission_icon = req.files && req.files['mission_icon'] ? `/uploads/${req.files['mission_icon'][0].filename}` : req.body.mission_icon || null;
    const vision_icon  = req.files && req.files['vision_icon']  ? `/uploads/${req.files['vision_icon'][0].filename}`  : req.body.vision_icon  || null;

    const payload = {
      mission_title: req.body.mission_title,
      mission_description: req.body.mission_description,
      mission_icon,
      mission_color: req.body.mission_color || null,
      vision_title: req.body.vision_title,
      vision_description: req.body.vision_description,
      vision_icon,
      vision_color: req.body.vision_color || null
    };

    const mv = await MissionVision.create(payload);
    res.status(201).json(mv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const items = await MissionVision.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const item = await MissionVision.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const item = await MissionVision.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });

    const mission_icon = req.files && req.files['mission_icon'] ? `/uploads/${req.files['mission_icon'][0].filename}` : item.mission_icon;
    const vision_icon  = req.files && req.files['vision_icon']  ? `/uploads/${req.files['vision_icon'][0].filename}`  : item.vision_icon;

    await item.update({
      mission_title: req.body.mission_title,
      mission_description: req.body.mission_description,
      mission_icon,
      mission_color: req.body.mission_color,
      vision_title: req.body.vision_title,
      vision_description: req.body.vision_description,
      vision_icon,
      vision_color: req.body.vision_color
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createMissionVision, getAll, getById, update };
