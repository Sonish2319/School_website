// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class CalendarEvent extends Model {
//     static associate(models) {
//       // Association: CalendarEvent belongs to Semester
//       CalendarEvent.belongsTo(models.Semester, {
//         foreignKey: 'semesterId',
//         as: 'semester',
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE'
//       });
//     }
//   }

//   CalendarEvent.init({
//     semesterId: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//       // Associations are defined above, no need for references here
//     },
//     date: DataTypes.STRING,
//     event: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'CalendarEvent',
//   });

//   return CalendarEvent;
// };


'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CalendarEvent extends Model {
    static associate(models) {
      // CalendarEvent belongs to Semester
      CalendarEvent.belongsTo(models.EventSemester, {
        foreignKey: 'semesterId',
        as: 'semester',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  CalendarEvent.init({
    semesterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CalendarEvent',
  });

  return CalendarEvent;
};
