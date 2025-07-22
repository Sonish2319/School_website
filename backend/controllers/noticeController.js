const { Notice } = require('../models');
const fs = require("fs");
const path = require("path");

exports.createNotice = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const file = req.file ? req.file.filename : null;
    // const file = req.file ? req.file.path : null;


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


//  exports.updateNotice = async (req, res) => {
//     try {
//       const [updated] = await Notice.update(req.body, { where: { id: req.params.id } });
//       if (!updated) return res.status(404).json({ message: 'Not found' });
//       const updatedNotice = await Notice.findByPk(req.params.id);
//       res.json(updatedNotice);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };


exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).json({ error: "Notice not found" });
    }

    // Update text fields
    notice.title = title;
    notice.description = description;
    notice.status = status === "true" || status === "1";

    // console.log("Received file in PUT:", req.file);


    // If new file is uploaded
    if (req.file) {
      // Delete old file if exists
      if (notice.file) {
        const oldPath = path.join(__dirname, "..", "uploads", notice.file);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      // Set new filename
      notice.file = req.file.filename;
    }

    await notice.save();
    res.json(notice);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ error: "Failed to update notice" });
  }
};
