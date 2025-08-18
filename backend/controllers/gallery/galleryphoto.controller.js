const db = require('../../models');
const GalleryPhoto = db.GalleryPhoto;
const CategoryImages = db.CategoryImages;

// Helper to extract uploaded file paths
const extractPhotoPaths = (files) => {
  return files.map(file => `/uploads/photos/${file.filename}`);
};

// CREATE
const createGalleryPhoto = async (req, res) => {
  try {
    const { feature_title, sub_text, description, categoryImageId } = req.body;
    const photos = extractPhotoPaths(req.files); // array of paths

    const newEntry = await GalleryPhoto.create({
      feature_title,
      sub_text,
      description,
      categoryImageId,
      photos: JSON.stringify(photos) // store as JSON string
    });

    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
const getAllGalleryPhotos = async (req, res) => {
  try {
    const entries = await GalleryPhoto.findAll({
      include: {
        model: CategoryImages,
        as: 'category',
        attributes: ['id', 'title', 'isFeatured'],
      }
    });

    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BY ID
const getGalleryPhotoById = async (req, res) => {
  try {
    const entry = await GalleryPhoto.findByPk(req.params.id, {
      include: {
        model: CategoryImages,
        as: 'category',
        attributes: ['id', 'title', 'isFeatured'],
      }
    });

    if (!entry) return res.status(404).json({ message: 'Not found' });

    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
const updateGalleryPhoto = async (req, res) => {
  try {
    const entry = await GalleryPhoto.findByPk(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Not found' });

    // If new images uploaded, update them
    const newPhotos = req.files?.length ? extractPhotoPaths(req.files) : JSON.parse(entry.photos);

    const updated = await entry.update({
      ...req.body,
      photos: JSON.stringify(newPhotos)
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
const deleteGalleryPhoto = async (req, res) => {
  try {
    const entry = await GalleryPhoto.findByPk(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Not found' });

    await entry.destroy();
    res.json({ message: 'Gallery photo entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createGalleryPhoto,
  getAllGalleryPhotos,
  getGalleryPhotoById,
  updateGalleryPhoto,
  deleteGalleryPhoto
};
