'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundTution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FundTution.init({
    date: DataTypes.STRING,
    type: DataTypes.STRING,
    startYear: DataTypes.STRING,
    endYear: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FundTution',
  });
  return FundTution;
};