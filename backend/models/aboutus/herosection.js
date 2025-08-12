'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const HeroSection = sequelize.define('HeroSection', {
      title: DataTypes.STRING,
      background_image: DataTypes.STRING
    }, {});
  
    HeroSection.associate = function(models) {
      HeroSection.hasOne(models.AboutUs, { foreignKey: 'hero_id' });
    };
  
    return HeroSection;
  };
  