'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }
  }

  Employee.init(
    {
      EmployeeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BirthDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'employee',
    }
  );

  return Employee;
};
