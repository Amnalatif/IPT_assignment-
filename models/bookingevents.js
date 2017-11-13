'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookingevents = sequelize.define('Bookingevents', {
    description: DataTypes.TEXT,
    eventType: DataTypes.TEXT,
    Day: DataTypes.DATE,
    time: DataTypes.TIME,
    venue: DataTypes.TEXT,
    decoration: DataTypes.TEXT,
    catering: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bookingevents;
};