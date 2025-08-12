
'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    const Newsletter = sequelize.define('Newsletter', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    }, {});
  
    Newsletter.associate = function(models) {
      Newsletter.hasOne(models.AboutUs, { foreignKey: 'newsletter_id' });
    };
  
    return Newsletter;
  };
  