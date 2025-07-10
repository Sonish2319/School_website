'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    static associate(models) {
      // Define associations if needed
    }
  }
  Slider.init({
    title: DataTypes.STRING,
    images: {
      type: DataTypes.JSON, // Array of image paths
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Slider',
  });

  return Slider;
};
