const { GalleryItem } = require('../models');
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');

// 🔹 Create Photo (file upload)
exports.createPhoto = async (req, res) => {
  try {
    const files = req.files?.map((f) => `/uploads/photos/${f.filename}`) || [];
    const { title, mode } = req.body;

    const item = await GalleryItem.create({
      type: 'photo',
      mode,
      title,
      files,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMedia = async (req, res) => {
    try {
      const { type } = req.params;
      const { title, mode, urls } = req.body;
  
      if (!title || !mode || !urls || !type) {
        return res.status(400).json({ error: 'title, mode, urls and type are required.' });
      }
  
      const files = Array.isArray(urls) ? urls : [urls];
  
      const item = await GalleryItem.create({
        type,
        mode,
        title,
        files,
      });
  
      res.status(201).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  

// // 🔹 Get All
// exports.getAllGalleryItems = async (req, res) => {
//   try {
//     const items = await GalleryItem.findAll();
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// // 🔹 Get By ID
// exports.getGalleryItemById = async (req, res) => {
//   try {
//     const item = await GalleryItem.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: 'Gallery item not found' });
//     res.json(item);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// 🔹 Get All (with optional filters, search, and pagination)
exports.getAllGalleryItems = async (req, res) => {
  try {
    const { type, mode, search, page, limit } = req.query;

    // If no query params, return all (for backward compatibility)
    const noFilters = !type && !mode && !search && !page && !limit;
    if (noFilters) {
      const items = await GalleryItem.findAll({ order: [['createdAt', 'DESC']] });
      return res.json(items);
    }

    // Build dynamic filters
    const where = {};
    if (type) where.type = type;
    if (mode) where.mode = mode;
    if (search) where.title = { [Op.like]: `%${search}%` };

    // Pagination
    const currentPage = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (currentPage - 1) * pageSize;

    const { rows, count } = await GalleryItem.findAndCountAll({
      where,
      offset,
      limit: pageSize,
      order: [['createdAt', 'DESC']],
    });

    res.json({
      data: rows,
      pagination: {
        total: count,
        page: currentPage,
        limit: pageSize,
        totalPages: Math.ceil(count / pageSize),
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





// 🔹 Update
exports.updateGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, urls, mode } = req.body;

    const item = await GalleryItem.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Gallery item not found' });

    item.title = title || item.title;
    item.mode = mode || item.mode;

    if (item.type === 'photo' && req.files?.length) {
      // Delete old photo files (optional)
      if (item.files?.length) {
        item.files.forEach((f) => {
          const filePath = path.join(__dirname, '..', f);
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        });
      }
      item.files = req.files.map((f) => `/uploads/photos/${f.filename}`);
    }

    if ((item.type === 'video' || item.type === 'audio') && urls) {
      item.files = Array.isArray(urls) ? urls : [urls];
    }

    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Delete
exports.deleteGalleryItem = async (req, res) => {
  try {
    const item = await GalleryItem.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Gallery item not found' });

    // Delete files if it's photo
    if (item.type === 'photo' && item.files?.length) {
      item.files.forEach((f) => {
        const filePath = path.join(__dirname, '..', f);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      });
    }

    await item.destroy();
    res.json({ deleted: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
