'use strict';

module.exports = {
 
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [{
      no: '111',
      name: 'raju',
      class: 'X-STD',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      no: '112',
      name: 'raj',
      class: 'X-STD',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
       no: '113',
      name: 'ramesh',
      class: 'X-STD',
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
