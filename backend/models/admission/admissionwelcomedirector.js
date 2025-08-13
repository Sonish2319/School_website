'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdmissionWelcomeDirector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdmissionWelcomeDirector.init({
    title: DataTypes.STRING,
    director_name: DataTypes.STRING,
    director_image: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AdmissionWelcomeDirector',
  });
  return AdmissionWelcomeDirector;
};