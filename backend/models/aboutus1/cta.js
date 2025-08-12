'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CTA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CTA.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    button_text: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CTA',
  });
  return CTA;
};