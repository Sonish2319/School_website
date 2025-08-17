// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Semester extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Semester.init({
//     semester_name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Semester',
//   });
//   return Semester;
// };

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Semester extends Model {
    static associate(models) {
      // A semester has many calendar events
      Semester.hasMany(models.EventCalender, {
        foreignKey: 'semesterId',
        as: 'calendarEvents',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  Semester.init({
    semester_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Semester',
  });

  return Semester;
};
