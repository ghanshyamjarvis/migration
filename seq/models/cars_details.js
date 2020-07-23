'use strict';
const {
 Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
    }
  };
  cars_details.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cars_details',
  });
  return cars_details;
};