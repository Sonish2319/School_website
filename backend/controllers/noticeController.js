const { Notice } = require('../models');

exports.createNotice = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const file = req.file ? req.file.filename : null;

    const notice = await Notice.create({
      title,
      description,
      status,
      file
    });

    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllNotices = async (req, res) => {
  const notices = await Notice.findAll();
  res.json(notices);
};

exports.getNoticeById = async (req, res) => {
  const notice = await Notice.findByPk(req.params.id);
  if (notice) return res.json(notice);
  res.status(404).json({ error: 'Notice not found' });
};

exports.deleteNotice = async (req, res) => {
  const result = await Notice.destroy({ where: { id: req.params.id } });
  res.json({ deleted: result });
};


 exports.updateNotice = async (req, res) => {
    try {
      const [updated] = await Notice.update(req.body, { where: { id: req.params.id } });
      if (!updated) return res.status(404).json({ message: 'Not found' });
      const updatedNotice = await Notice.findByPk(req.params.id);
      res.json(updatedNotice);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };