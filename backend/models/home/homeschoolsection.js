'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeSchoolSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeSchoolSection.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HomeSchoolSection',
  });
  return HomeSchoolSection;
};