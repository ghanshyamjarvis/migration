'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('students','gread','grade')
  },

  down: async (queryInterface, Sequelize) => {
   queryInterface.renameColumn('students','grade','gread')
   }
 };
