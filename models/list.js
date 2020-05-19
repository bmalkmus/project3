var Sequelize = require("sequelize");
var sequelize = require("../database/config.js");

module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("List", {
        user:{
            type: DataTypes.CHAR,
            alloNull: false,
            primaryKey: true
        },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          notEmpty: true
        },
      upc: {
          type: DataTypes.INTEGER,
          allowNull: false,
          notEmpty: true
      },
      description:{
          type: DataTypes.TEXT,
          allowNull: true
      },
      images:{
          type:DataTypes.TEXT,
          allowNull: false
      },
      platform:{
          type:DataTypes.STRING,
          allowNull: false
      },
      link:{
          type:DataTypes.STRING,
          allowNull: false
      },
      price: {
          type:DataTypes.DECIMAL(10, 2),
          allowNull: false
      },
      shipping:{
        type:DataTypes.DECIMAL(4, 2),
        allowNull: false
      },
      condition:{
          type:DataTypes.CHAR,
          allowNull: false
      },
      datefind:{
          type: DataTypes.DATEONLY,
          allowNull: false
      }
    });
    return List;
  };
  