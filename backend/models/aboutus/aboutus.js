'use strict';
const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class AboutUs extends Model {
//     static associate(models) {
//       // Define associations here if needed
//     }
//   }

//   AboutUs.init({
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false
//     },
// images: {
//       type: DataTypes.TEXT, // You could also use DataTypes.JSON if your DB supports it
//       allowNull: true
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true
//     }
//   }, {
//     sequelize,
//     modelName: 'AboutUs',
//     tableName: 'AboutUs', // optional: makes the table name consistent
//     timestamps: true
//   });

//   return AboutUs;
// };


module.exports = (sequelize, DataTypes) => {
  const AboutUs = sequelize.define('AboutUs', {
    page_title: DataTypes.STRING,
    hero_id: DataTypes.INTEGER,
    mission_vision_id: DataTypes.INTEGER,
    cta_id: DataTypes.INTEGER,
    newsletter_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});

  AboutUs.associate = function(models) {
    AboutUs.belongsTo(models.HeroSection, { foreignKey: 'hero_id' });
    AboutUs.belongsTo(models.MissionVision, { foreignKey: 'mission_vision_id' });
    AboutUs.belongsTo(models.CTA, { foreignKey: 'cta_id' });
    AboutUs.belongsTo(models.Newsletter, { foreignKey: 'newsletter_id' });

    AboutUs.hasMany(models.CoreValue, { foreignKey: 'aboutUsId', onDelete: 'CASCADE' });
    AboutUs.hasMany(models.HistoryTimeline, { foreignKey: 'aboutUsId', onDelete: 'CASCADE' });
    AboutUs.hasMany(models.Statistic, { foreignKey: 'aboutUsId', onDelete: 'CASCADE' });
    AboutUs.hasMany(models.LeadershipTeam, { foreignKey: 'aboutUsId', onDelete: 'CASCADE' });
  };

  return AboutUs;
};
