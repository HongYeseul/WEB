'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Forums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Category_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      User_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      Title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Content: {
        type: Sequelize.STRING,
        allowNull:false
      },
      View_cnt: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Forums');
  }
};