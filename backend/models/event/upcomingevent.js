'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UpcomingEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UpcomingEvent.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: {
      type: DataTypes.ENUM,
      values: ['Academic', 'Admissions', 'Arts', 'Athletics', 'Community', 'CampusEvents', 'Sports'],
      allowNull: false
    },
    openRegistration: DataTypes.BOOLEAN,
    button_text: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UpcomingEvent',
  });
  return UpcomingEvent;
};