'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AboutUs extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  AboutUs.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING, // This will store the image URL/path
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'AboutUs',
    tableName: 'AboutUs', // optional: makes the table name consistent
    timestamps: true
  });

  return AboutUs;
};
