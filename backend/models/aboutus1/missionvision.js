'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MissionVision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MissionVision.init({
    mission_title: DataTypes.STRING,
    mission_description: DataTypes.TEXT,
    mission_icon: DataTypes.STRING,
    mission_color: DataTypes.STRING,
    vision_title: DataTypes.STRING,
    vision_description: DataTypes.TEXT,
    vision_icon: DataTypes.STRING,
    vision_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MissionVision',
  });
  return MissionVision;
};