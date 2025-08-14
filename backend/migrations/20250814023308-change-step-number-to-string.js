'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('AdmissionApplicationProcesses', 'step_number', {
      type: Sequelize.STRING,
      allowNull: true, // adjust based on your needs
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('AdmissionApplicationProcesses', 'step_number', {
      type: Sequelize.INTEGER,
      allowNull: true, // same here
    });
  }
};
