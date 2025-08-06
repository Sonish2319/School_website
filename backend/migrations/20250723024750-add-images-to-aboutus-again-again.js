'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('AboutUs');
    if (!table.images) {
      await queryInterface.addColumn('AboutUs', 'images', {
        type: Sequelize.TEXT,
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('AboutUs', 'images');
  },
};