'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shipper extends Model {
    static associate(models) {
      // Define associations here (if needed)
    }
  }

  Shipper.init(
    {
      ShipperID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ShipperName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Shipper',
    }
  );

  return Shipper;
};
