const db = require('../../models');
const UpcommingEvent = db.UpcommingEvent;

const validCategories = [
  'Academic',
  'Admissions',
  'Arts',
  'Athletics',
  'Community',
  'CampusEvents',
  'Sports'
];

// Create a new event
const createUpcommingEvent = async (req, res) => {
  try {
    const {
      title,
      date,
      time,
      location,
      description,
      category,
      openRegistration,
      button_text,
      icon
    } = req.body;

    const image = req.file ? `/uploads/${req.file.filename}` : null;

    // Validate required ENUM field
    if (!category || !validCategories.includes(category)) {
      return res.status(400).json({
        message: `Invalid or missing category. Must be one of: ${validCategories.join(', ')}`
      });
    }

    const event = await UpcommingEvent.create({
      title,
      date,
      time,
      location,
      image,
      description,
      category,
      openRegistration,
      button_text,
      icon
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all events
const getAllUpcommingEvent = async (req, res) => {
  try {
    const events = await UpcommingEvent.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get event by ID
const getUpcommingEventById = async (req, res) => {
  try {
    const event = await UpcommingEvent.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an event
const updateUpcommingEvent = async (req, res) => {
  try {
    const {
      title,
      date,
      time,
      location,
      description,
      category,
      openRegistration,
      button_text,
      icon
    } = req.body;

    const event = await UpcommingEvent.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const image = req.file ? `/uploads/${req.file.filename}` : event.image;

    // If category is being updated, validate it
    if (category && !validCategories.includes(category)) {
      return res.status(400).json({
        message: `Invalid category. Must be one of: ${validCategories.join(', ')}`
      });
    }

    await event.update({
      title: title ?? event.title,
      date: date ?? event.date,
      time: time ?? event.time,
      location: location ?? event.location,
      description: description ?? event.description,
      category: category ?? event.category,
      openRegistration: openRegistration ?? event.openRegistration,
      button_text: button_text ?? event.button_text,
      icon: icon ?? event.icon,
      image
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an event
const deleteUpcommingEvent = async (req, res) => {
  try {
    const event = await UpcommingEvent.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.destroy();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUpcommingEvent,
  getAllUpcommingEvent,
  getUpcommingEventById,
  updateUpcommingEvent,
  deleteUpcommingEvent
};
