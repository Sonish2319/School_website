'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    const MissionVision = sequelize.define('MissionVision', {
      mission_title: DataTypes.STRING,
      mission_description: DataTypes.TEXT,
      mission_icon: DataTypes.STRING,
      vision_title: DataTypes.STRING,
      vision_description: DataTypes.TEXT,
      vision_icon: DataTypes.STRING,
    }, {});
  
    MissionVision.associate = function(models) {
      MissionVision.hasOne(models.AboutUs, { foreignKey: 'mission_vision_id' });
    };
  
    return MissionVision;
  };
  