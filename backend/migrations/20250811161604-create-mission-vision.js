'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MissionVisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mission_title: {
        type: Sequelize.STRING
      },
      mission_description: {
        type: Sequelize.TEXT
      },
      mission_icon: {
        type: Sequelize.STRING
      },
      mission_color: {
        type: Sequelize.STRING
      },
      vision_title: {
        type: Sequelize.STRING
      },
      vision_description: {
        type: Sequelize.TEXT
      },
      vision_icon: {
        type: Sequelize.STRING
      },
      vision_color: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MissionVisions');
  }
};