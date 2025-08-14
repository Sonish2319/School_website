'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FundAid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FundAid.init({
    sub_text: DataTypes.STRING,
    icon: DataTypes.STRING,
    step: DataTypes.STRING,
    line1: DataTypes.STRING,
    line2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FundAid',
  });
  return FundAid;
};