var bcrypt = require("bcrypt");
module.exports = function (sequilize, DataTypes) {
    var Users = sequilize.define ("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        first_name: {
            type: DataTypes.STRING,

        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          }

    });
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };


Users.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Users;
};