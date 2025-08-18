'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GalleryPhoto extends Model {
    static associate(models) {
      // Many-to-One: GalleryPhoto → CategoryImage
      GalleryPhoto.belongsTo(models.CategoryImages, {
        foreignKey: 'categoryImageId',
        as: 'category', // Alias for easy include
        onDelete: 'CASCADE', // Optional: deletes photo if category is deleted
      });
    }
  }

  GalleryPhoto.init({
    feature_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photos: {
      type: DataTypes.TEXT, // Consider JSON or JSONB if using PostgreSQL
      allowNull: false,
      // Comment: Store as JSON stringified array if using MySQL
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categoryImageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CategoryImages',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'GalleryPhoto',
    tableName: 'GalleryPhotos', // Optional: consistent naming
  });

  return GalleryPhoto;
};
