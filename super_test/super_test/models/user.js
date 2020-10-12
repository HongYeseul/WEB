'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userID: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    UserName:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    UserPW: {
      type:DataTypes.STRING,
      allowNull:false
    } ,
    PhoneNum: {
      type:DataTypes.STRING,
      allowNull:false
    } ,
    Access:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};