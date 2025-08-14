// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];

// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// // Dynamically import all models (except index.js)
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js'
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });
//   //  Manually register models in subdirectories
// const HeroSection = require('./aboutus1/herosection')(sequelize, Sequelize.DataTypes);
// db.HeroSection = HeroSection;

// // If models have associations, call them
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // Export everything
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load all models in the main models folder (excluding subfolders)
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Explicitly load your HeroSection model from subfolder
const HeroSection = require(path.join(__dirname, 'aboutus1', 'herosection'))(sequelize, Sequelize.DataTypes);
db.HeroSection = HeroSection;

// Explicitly load your MissionVision model from subfolder
const MissionVision = require(path.join(__dirname, 'aboutus1', 'missionVision'))(sequelize, Sequelize.DataTypes);
db.MissionVision = MissionVision;

// Explicitly load your CoreValue model from subfolder
const CoreValue = require(path.join(__dirname, 'aboutus1', 'corevalue'))(sequelize, Sequelize.DataTypes);
db.CoreValue = CoreValue;

// Explicitly load your HistoryTimeline model from subfolder
const HistoryTimeline = require(path.join(__dirname, 'aboutus1', 'historytimeline'))(sequelize, Sequelize.DataTypes);
db.HistoryTimeline = HistoryTimeline;

// Explicitly load your Statistic model from subfolder
const Statistic = require(path.join(__dirname, 'aboutus1', 'statistic'))(sequelize, Sequelize.DataTypes);
db.Statistic = Statistic;

// Explicitly load your LeadershipTeam model from subfolder
const LeadershipTeam = require(path.join(__dirname, 'aboutus1', 'leadershipteam'))(sequelize, Sequelize.DataTypes);
db.LeadershipTeam = LeadershipTeam;

// Explicitly load your CTA model from subfolder
const CTA = require(path.join(__dirname, 'aboutus1', 'cta'))(sequelize, Sequelize.DataTypes);
db.CTA = CTA;

// Explicitly load your Newsletter model from subfolder
const Newsletter = require(path.join(__dirname, 'aboutus1', 'newsletter'))(sequelize, Sequelize.DataTypes);
db.Newsletter = Newsletter;


// Explicitly load your AdmissionHeroSection model from subfolder
const AdmissionHeroSection = require(path.join(__dirname, 'admission', 'admissionherosection'))(sequelize, Sequelize.DataTypes);
db.AdmissionHeroSection = AdmissionHeroSection;

// Explicitly load your Admissionfaq model from subfolder
const Admissionfaq = require(path.join(__dirname, 'admission', 'admissionfaq'))(sequelize, Sequelize.DataTypes);
db.Admissionfaq = Admissionfaq;

// Explicitly load your Admissioncontact model from subfolder
const Admissioncontact = require(path.join(__dirname, 'admission', 'admissioncontact'))(sequelize, Sequelize.DataTypes);
db.Admissioncontact = Admissioncontact;

// Explicitly load your Admissionrequirement model from subfolder
const Admissionrequirement = require(path.join(__dirname, 'admission', 'admissionrequirement'))(sequelize, Sequelize.DataTypes);
db.Admissionrequirement = Admissionrequirement;

// Explicitly load your admissiontimeline model from subfolder
const Admissiontimeline = require(path.join(__dirname, 'admission', 'admissiontimeline'))(sequelize, Sequelize.DataTypes);
db.Admissiontimeline = Admissiontimeline;

// Explicitly load your Admissionwelcomedirector model from subfolder
const Admissionwelcomedirector = require(path.join(__dirname, 'admission', 'admissionwelcomedirector'))(sequelize, Sequelize.DataTypes);
db.Admissionwelcomedirector = Admissionwelcomedirector;

// Explicitly load your Admissionapplicationprocess model from subfolder
const Admissionapplicationprocess = require(path.join(__dirname, 'admission', 'admissionapplicationprocess'))(sequelize, Sequelize.DataTypes);
db.Admissionapplicationprocess = Admissionapplicationprocess;



//fund

// Explicitly load your HeroFunding model from subfolder
const HeroFunding = require(path.join(__dirname, 'fund', 'fundherosection'))(sequelize, Sequelize.DataTypes);
db.HeroFunding = HeroFunding;

// Explicitly load your Commitment model from subfolder
const Commitment = require(path.join(__dirname, 'fund', 'fundcommitment'))(sequelize, Sequelize.DataTypes);
db.Commitment = Commitment;

// Explicitly load your FinancialAid model from subfolder
const FinancialAid = require(path.join(__dirname, 'fund', 'fundaid'))(sequelize, Sequelize.DataTypes);
db.FinancialAid = FinancialAid;

// Explicitly load your FundingFAQ model from subfolder
const FundingFAQ = require(path.join(__dirname, 'fund', 'fundfaq'))(sequelize, Sequelize.DataTypes);
db.FundingFAQ = FundingFAQ;

// Explicitly load your FundCta model from subfolder
const FundCta = require(path.join(__dirname, 'fund', 'fundcta'))(sequelize, Sequelize.DataTypes);
db.FundCta = FundCta;

// Explicitly load your ImportantDates model from subfolder
const ImportantDates = require(path.join(__dirname, 'fund', 'funddates'))(sequelize, Sequelize.DataTypes);
db.ImportantDates = ImportantDates;

// Explicitly load your Scholarship model from subfolder
const Scholarship = require(path.join(__dirname, 'fund', 'fundmerit'))(sequelize, Sequelize.DataTypes);
db.Scholarship = Scholarship;

// Explicitly load your PaymentPlan model from subfolder
const PaymentPlan = require(path.join(__dirname, 'fund', 'fundplans'))(sequelize, Sequelize.DataTypes);
db.PaymentPlan = PaymentPlan;

// Explicitly load your TuitionFees model from subfolder
const TuitionFees = require(path.join(__dirname, 'fund', 'fundtution'))(sequelize, Sequelize.DataTypes);
db.TuitionFees = TuitionFees;




// Setup associations if any
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log('Loaded models:', Object.keys(db));  // Debug: confirm HeroSection loaded

module.exports = db;
