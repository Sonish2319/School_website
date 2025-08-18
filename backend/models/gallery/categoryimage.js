'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryImage extends Model {
    static associate(models) {
      // One-to-Many: CategoryImage → GalleryPhoto
      CategoryImage.hasMany(models.GalleryPhoto, {
        foreignKey: 'categoryImageId',
        as: 'photos', // Alias to use when including
        onDelete: 'CASCADE', // Optional: deletes photos if category is deleted
      });
    }
  }

  CategoryImage.init({
    isFeatured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'CategoryImage',
    tableName: 'CategoryImages', // Optional: ensures table naming consistency
  });

  return CategoryImage;
};
