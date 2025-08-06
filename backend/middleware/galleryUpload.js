const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set storage engine for gallery photos only
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads/photos';
    // Ensure the directory exists
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Use same file filter as your global upload but restrict to images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/; // only images for photos
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype.toLowerCase());

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, gif) are allowed for gallery photos'));
  }
};

const galleryUpload = multer({
  storage,
  fileFilter,
});

module.exports = galleryUpload;
