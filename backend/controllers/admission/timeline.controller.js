const db = require('../../models');
const AdmissionTimeline = db.Admissiontimeline;

const createTimeline = async (req, res) => {
  try {
    const { date, event } = req.body;
    const timeline = await AdmissionTimeline.create({ date, event });
    res.status(201).json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTimelines = async (req, res) => {
  try {
    const timelines = await AdmissionTimeline.findAll();
    res.json(timelines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTimelineById = async (req, res) => {
  try {
    const timeline = await AdmissionTimeline.findByPk(req.params.id);
    if (!timeline) return res.status(404).json({ message: 'Not found' });
    res.json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTimeline = async (req, res) => {
  try {
    const timeline = await AdmissionTimeline.findByPk(req.params.id);
    if (!timeline) return res.status(404).json({ message: 'Not found' });

    await timeline.update(req.body);
    res.json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTimeline = async (req, res) => {
  try {
    const timeline = await AdmissionTimeline.findByPk(req.params.id);
    if (!timeline) return res.status(404).json({ message: 'Not found' });

    await timeline.destroy();
    res.json({ message: 'Timeline deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTimeline, getAllTimelines, getTimelineById, updateTimeline, deleteTimeline };
