'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class touchContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  touchContact.init({
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    line1: DataTypes.STRING,
    line2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'touchContact',
  });
  return touchContact;
};