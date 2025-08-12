'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    const Statistic = sequelize.define('Statistic', {
      aboutUsId: DataTypes.INTEGER,
      label: DataTypes.STRING,
      value: DataTypes.STRING
    }, {});
  
    Statistic.associate = function(models) {
      Statistic.belongsTo(models.AboutUs, { foreignKey: 'aboutUsId' });
    };
  
    return Statistic;
  };
  