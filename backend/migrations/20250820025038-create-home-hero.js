'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomeHeros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hero_image: {
        type: Sequelize.STRING
      },
      global_statement: {
        type: Sequelize.TEXT
      },
      feature_title: {
        type: Sequelize.STRING
      },
      feature_icon: {
        type: Sequelize.STRING
      },
      feature_description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('HomeHeros');
  }
};