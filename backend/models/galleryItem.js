'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GalleryItem extends Model {
    static associate(models) {
      // Define associations if needed (e.g., Album, User, etc.)
    }
  }

  GalleryItem.init({
    type: {
      type: DataTypes.ENUM('photo', 'video', 'audio'),
      allowNull: false,
    },
    mode: {
      type: DataTypes.ENUM('single', 'album'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    files: {
      type: DataTypes.JSON, // e.g., ["/uploads/photos/a.jpg"] or ["https://..."]
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'GalleryItem',
    tableName: 'gallery_items',
    underscored: true, // optional: maps createdAt -> created_at
    timestamps: true,
  });

  return GalleryItem;
};
