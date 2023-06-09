'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Category);
    }
  }
  Person.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    tcId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthYear: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};