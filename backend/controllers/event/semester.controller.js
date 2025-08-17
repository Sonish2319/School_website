const db = require('../../models');
const EventCalender = db.EventCalender;
const EventSemester = db.EventSemester;

const createSemester = async (req, res) => {
  try {
    const { semester_name } = req.body;
    const requirement = await EventSemester.create({ semester_name });
    res.status(201).json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getAllSemester = async (req, res) => {
//   try {
//     const requirements = await EventSemester.findAll();
//     res.json(requirements);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getSemesterById = async (req, res) => {
//   try {
//     const requirement = await EventSemester.findByPk(req.params.id);
//     if (!requirement) return res.status(404).json({ message: 'Not found' });
//     res.json(requirement);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const getAllSemester = async (req, res) => {
  try {
    const semesters = await EventSemester.findAll({
      include: {
        model: EventCalender,
        as: 'calendarEvents',
        attributes: ['id', 'date', 'event'] // you can add more fields as needed
      }
    });
    res.json(semesters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSemesterById = async (req, res) => {
  try {
    const semester = await EventSemester.findByPk(req.params.id, {
      include: {
        model: EventCalender,
        as: 'calendarEvents',
        attributes: ['id', 'date', 'event']
      }
    });

    if (!semester) return res.status(404).json({ message: 'Semester not found' });

    res.json(semester);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSemester = async (req, res) => {
  try {
    const requirement = await EventSemester.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });

    await requirement.update(req.body);
    res.json(requirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSemester = async (req, res) => {
  try {
    const requirement = await EventSemester.findByPk(req.params.id);
    if (!requirement) return res.status(404).json({ message: 'Not found' });

    await requirement.destroy();
    res.json({ message: 'Requirement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSemester, getAllSemester, getSemesterById, updateSemester, deleteSemester };
