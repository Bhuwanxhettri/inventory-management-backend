'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
    {
      CustomerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CustomerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ContactName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      City: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PostalCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Customer',
    }
  );
  return Customer;
};
