'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.sequelize.query("alter table students modify grade varchar(255) after name;")
 },

 down: async (queryInterface, Sequelize) => {
  return queryInterface.Sequelize.query('alter table students modify grade varchar(255) after updatedAt')
}
};
