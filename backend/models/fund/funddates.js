'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundDates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FundDates.init({
    date: DataTypes.STRING,
    sub_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FundDates',
  });
  return FundDates;
};