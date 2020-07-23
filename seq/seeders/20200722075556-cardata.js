'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cars', [{
      make: 'honda',
      model: '911',
      color: 'white',
      price: 8000000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      make: 'jeep',
      model: '1 series',
      color: 'red',
      price: 8000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        make: 'Maruti',
        model: '800',
        color: 'red',
        price: 400000,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {});
  }
};
