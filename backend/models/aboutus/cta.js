'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const CTA = sequelize.define('CTA', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      button_text: DataTypes.STRING,
      link: DataTypes.STRING
    }, {});
  
    CTA.associate = function(models) {
      CTA.hasOne(models.AboutUs, { foreignKey: 'cta_id' });
    };
  
    return CTA;
  };
  