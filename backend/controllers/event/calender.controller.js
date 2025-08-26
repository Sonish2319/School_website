const db = require('../../models');
const EventCalender = db.EventCalender;
const Semester = db.EventSemester;

const createCalender = async (req, res) => {
  try {
    const { semesterId, date, event } = req.body;
    const requirement = await EventCalender.create({ semesterId, date, event });
    res.status(201).json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getAllCalenders = async (req, res) => {
//   try {
//     const requirements = await EventCalender.findAll();
//     res.json(requirements);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getAllCalenders = async (req, res) => {
  try {
    const calenders = await EventCalender.findAll({
      include: {
        model: Semester,
        as: "semester", // ensure this alias matches your association
        attributes: ["id", "semester_name"],
      },
    });

    res.json(calenders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getCalenderById = async (req, res) => {
  try {
    const requirement = await EventCalender.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });
    res.json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCalender = async (req, res) => {
  try {
    const requirement = await EventCalender.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });

    await requirement.update(req.body);
    res.json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCalender = async (req, res) => {
  try {
    const requirement = await EventCalender.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });

    await requirement.destroy();
    res.json({ message: 'Requirement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCalender, getAllCalenders, getCalenderById, updateCalender, deleteCalender };
