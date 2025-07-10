'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  Notice.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
    file: {
        type: DataTypes.STRING, // Stores the file path
        allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Notice',
    tableName: 'Notice', // optional: makes the table name consistent
    timestamps: true
  });

  return Notice;
};
