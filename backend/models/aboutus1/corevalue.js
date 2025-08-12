'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoreValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CoreValue.init({
    aboutUsId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    icon: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CoreValue',
  });
  return CoreValue;
};