'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'dilip',
      lastName: 'kacha',
      email: 'kacha@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'Raj',
        lastName: 'Shah',
        email: 'raj@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
