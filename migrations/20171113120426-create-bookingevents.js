'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookingevents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      eventType: {
        type: Sequelize.TEXT
      },
      Day: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.TIME
      },
      venue: {
        type: Sequelize.TEXT
      },
      decoration: {
        type: Sequelize.TEXT
      },
      catering: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookingevents');
  }
};