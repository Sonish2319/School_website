'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeHero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeHero.init({
    hero_image: DataTypes.STRING,
    global_statement: DataTypes.TEXT,
    feature_title: DataTypes.STRING,
    feature_icon: DataTypes.STRING,
    feature_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HomeHero',
  });
  return HomeHero;
};