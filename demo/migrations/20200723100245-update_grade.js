'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("update students set grade = 'B' where id = 2;")
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("update students set grade = '' where id = 2;")
  }
};
