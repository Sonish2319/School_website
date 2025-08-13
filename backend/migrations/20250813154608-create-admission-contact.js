'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AdmissionContacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contact_type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      line1: {
        type: Sequelize.STRING
      },
      line2: {
        type: Sequelize.STRING
      },
      line3: {
        type: Sequelize.STRING
      },
      icon: {
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
    await queryInterface.dropTable('AdmissionContacts');
  }
};