'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContactUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Uemail: {
        type: Sequelize.STRING
      },
      msg: {
        type: Sequelize.TEXT
      },
      phoneNo: {
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.TEXT
      },
      ratings: {
        type: Sequelize.BIGINT
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
    return queryInterface.dropTable('ContactUs');
  }
};