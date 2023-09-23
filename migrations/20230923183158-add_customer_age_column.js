'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the column with allowNull: true temporarily
    await queryInterface.addColumn('customers', 'CustomerAge', {
      type: Sequelize.INTEGER,
      allowNull: true, // Allow NULL temporarily
    });

    // Update existing rows to set non-null values
    await queryInterface.sequelize.query(`
      UPDATE "customers"
      SET "CustomerAge" = 0 -- Set an appropriate default value
      WHERE "CustomerAge" IS NULL;
    `);

    // Modify the column to allowNull: false (NOT NULL)
    await queryInterface.changeColumn('customers', 'CustomerAge', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the column if needed
    await queryInterface.removeColumn('customers', 'CustomerAge');
  },
};
