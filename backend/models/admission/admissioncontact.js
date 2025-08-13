'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdmissionContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdmissionContact.init({
    contact_type: DataTypes.STRING,
    title: DataTypes.STRING,
    line1: DataTypes.STRING,
    line2: DataTypes.STRING,
    line3: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdmissionContact',
  });
  return AdmissionContact;
};