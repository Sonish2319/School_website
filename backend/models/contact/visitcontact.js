'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visitContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  visitContact.init({
    sub_text: DataTypes.TEXT,
    map: DataTypes.TEXT,
    button_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'visitContact',
  });
  return visitContact;
};