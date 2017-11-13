'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    uname: DataTypes.STRING,
    upassword: DataTypes.STRING,
    uemail: DataTypes.STRING,
    uaddress: DataTypes.TEXT,
    ucontactNo: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};