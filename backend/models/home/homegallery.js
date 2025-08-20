'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeGallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeGallery.init({
    sub_text: DataTypes.TEXT,
    images: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HomeGallery',
  });
  return HomeGallery;
};