'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const LeadershipTeam = sequelize.define('LeadershipTeam', {
      aboutUsId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING
    }, {});
  
    LeadershipTeam.associate = function(models) {
      LeadershipTeam.belongsTo(models.AboutUs, { foreignKey: 'aboutUsId' });
    };
  
    return LeadershipTeam;
  };
  