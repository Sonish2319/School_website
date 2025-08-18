const db = require('../../models');
const GalleryPhoto = db.GalleryPhoto;
const CategoryImage = db.CategoryImages; // This matches your db/index.js

// ✅ CREATE CategoryImage
const createCategory = async (req, res) => {
  try {
    const { title, isFeatured } = req.body;
    const category = await CategoryImage.create({ title, isFeatured });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET ALL CategoryImages with associated GalleryPhotos
const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryImage.findAll({
      include: {
        model: GalleryPhoto,
        as: 'photos',
        attributes: ['id', 'feature_title', 'sub_text', 'photos', 'description']
      }
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET SINGLE CategoryImage by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryImage.findByPk(req.params.id, {
      include: {
        model: GalleryPhoto,
        as: 'photos',
        attributes: ['id', 'feature_title', 'sub_text', 'photos', 'description']
      }
    });

    if (!category) return res.status(404).json({ message: 'Category not found' });

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE CategoryImage
const updateCategory = async (req, res) => {
  try {
    const category = await CategoryImage.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.update(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE CategoryImage
const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryImage.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.destroy(); // Will also delete associated photos if cascade is enabled
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
