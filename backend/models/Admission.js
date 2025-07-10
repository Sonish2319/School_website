'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admission extends Model {
    static associate(models) {
      // Define associations if needed
    }
  }

  Admission.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortSubtext: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING, // Store the image path
      allowNull: true,
    },
    icons: {
      type: DataTypes.STRING, // Optional: URL or icon path
      allowNull: true,
    },
    programsOffered: {
      type: DataTypes.JSON, // e.g., [{ grade: "Nursery" }, { grade: "Grade 1" }]
      allowNull: true,
    },
    curriculum: {
      type: DataTypes.STRING, // e.g., "CBSE", "NEB", "IB"
      allowNull: true,
    },
    languageMediums: {
      type: DataTypes.STRING, // e.g., "English, Nepali"
      allowNull: true,
    },
    specialPrograms: {
      type: DataTypes.STRING, // e.g., "Robotics, Clubs, Olympiads"
      allowNull: true,
    },
    eligibilityCriteria: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    importantNotices: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    admissionOpenDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    entranceTestDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    orientationDay: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    sequelize,
    modelName: 'Admission',
  });

  return Admission;
};
