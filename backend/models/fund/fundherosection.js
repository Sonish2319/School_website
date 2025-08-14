'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundHeroSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FundHeroSection.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    background_image: DataTypes.STRING,
    button_text: DataTypes.STRING,
    button_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FundHeroSection',
  });
  return FundHeroSection;
};