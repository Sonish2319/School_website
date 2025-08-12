'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const CoreValue = sequelize.define('CoreValue', {
      aboutUsId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      icon: DataTypes.STRING,
    }, {});
  
    CoreValue.associate = function(models) {
      CoreValue.belongsTo(models.AboutUs, { foreignKey: 'aboutUsId' });
    };
  
    return CoreValue;
  };
  