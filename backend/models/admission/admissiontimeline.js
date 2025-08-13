'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdmissionTimeline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdmissionTimeline.init({
    date: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdmissionTimeline',
  });
  return AdmissionTimeline;
};