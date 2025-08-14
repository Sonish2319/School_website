'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('FundCommitments', 'title', {
      type: Sequelize.TEXT,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('FundCommitments', 'title', {
      type: Sequelize.STRING,
    });
  }
};
