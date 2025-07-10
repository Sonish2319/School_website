'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortSubtext: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      icons: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      programsOffered: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      eligibilityCriteria: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      importantNotices: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      admissionOpenDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      entranceTestDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      orientationDay: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admissions');
  }
};
