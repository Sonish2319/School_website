'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroContact.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    back_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HeroContact',
  });
  return HeroContact;
};