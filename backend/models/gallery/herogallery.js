'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroGallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroGallery.init({
    title: DataTypes.STRING,
    sub_text: DataTypes.TEXT,
    back_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HeroGallery',
  });
  return HeroGallery;
};