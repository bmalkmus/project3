

module.exports = function(sequelize, DataTypes) {
    var Lists = sequelize.define("Lists", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user:{
            type: DataTypes.CHAR,
            alloNull: false
        },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          notEmpty: true
        },
      upc: {
          type: DataTypes.STRING,
          allowNull: false,
          notEmpty: true,
      },
      description:{
          type: DataTypes.STRING(1000),
          allowNull: true
      },
      images:{
          type:DataTypes.STRING,
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
          type:DataTypes.STRING,
          allowNull: false
      },
      datefind:{
          type: DataTypes.DATEONLY,
          allowNull: false
      }
    });
    return Lists;
  };
//   module.exports = List;