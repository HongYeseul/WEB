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
    Category_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    User_id:  {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Title:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    Content:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    View_cnt:  {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};