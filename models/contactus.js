'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactUs = sequelize.define('ContactUs', {
    Uemail: DataTypes.STRING,
    msg: DataTypes.TEXT,
    phoneNo: DataTypes.BIGINT,
    name: DataTypes.STRING,
    feedback: DataTypes.TEXT,
    ratings: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ContactUs;
};