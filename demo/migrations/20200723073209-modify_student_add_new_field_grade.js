'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     queryInterface.addColumn(
        'students', // table name
        'gread', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
  },

  down: async (queryInterface, Sequelize) => {
     queryInterface.removeColumn('students', 'gread')
  }
};

