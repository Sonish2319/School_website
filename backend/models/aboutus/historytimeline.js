'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const HistoryTimeline = sequelize.define('HistoryTimeline', {
      aboutUsId: DataTypes.INTEGER,
      year: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    }, {});
  
    HistoryTimeline.associate = function(models) {
      HistoryTimeline.belongsTo(models.AboutUs, { foreignKey: 'aboutUsId' });
    };
  
    return HistoryTimeline;
  };
  