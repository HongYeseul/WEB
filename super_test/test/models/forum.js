'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Forum.init({
    userName: DataTypes.STRING,
    userID: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    visited: {
      type:DataTypes.INTEGER, 
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};