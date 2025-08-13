'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdmissionRequirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdmissionRequirement.init({
    requirement_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdmissionRequirement',
  });
  return AdmissionRequirement;
};