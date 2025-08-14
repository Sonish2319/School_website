'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('FundCommitments', 'description', {
      type: Sequelize.TEXT,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('FundCommitments', 'description', {
      type: Sequelize.STRING,
    });
  }
};
