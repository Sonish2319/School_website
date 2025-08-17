const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
// const aboutusRoutes = require('./routes/aboutus/aboutusRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const galleryRoutes = require('./routes/galleryRoutes');


// const aboutusRoutes = require('./routes/aboutus/aboutusRoutes');

//aboutus
const heroRoutes = require('./routes/aboutus/hero.routes');
const missionVisionRoutes = require('./routes/aboutus/missionVision.routes');
const coreValuesRoutes = require('./routes/aboutus/coreValues.routes');
const historyRoutes = require('./routes/aboutus/history.routes');
const statisticsRoutes = require('./routes/aboutus/statistics.routes');
const leadershipRoutes = require('./routes/aboutus/leadership.routes');
const ctaRoutes = require('./routes/aboutus/cta.routes');
const newsletterRoutes = require('./routes/aboutus/newsletter.routes');

//admission
const admissionheroRoutes = require('./routes/admission/hero.routes');
const applicationProcessRoutes = require('./routes/admission/applicationProcess.routes');
const contactRoutes = require('./routes/admission/contact.routes');
const faqRoutes = require('./routes/admission/faq.routes');
const requirementRoutes = require('./routes/admission/requirement.routes');
const directorRoutes = require('./routes/admission/welcomeDirector.routes');
const timelineRoutes = require('./routes/admission/timeline.routes');

//fund
const fundheroRoutes = require('./routes/fund/heroFunding.routes');
const commitmentRoutes = require('./routes/fund/commitment.routes');
const financeRoutes = require('./routes/fund/financialAid.routes');
const fundfaqRoutes = require('./routes/fund/fundingFAQ.routes');
const fundctaRoutes = require('./routes/fund/fundCta.routes');
const importantRoutes = require('./routes/fund/importantDates.routes');
const meritRoutes = require('./routes/fund/merit.routes');
const paymentRoutes = require('./routes/fund/paymentPlan.routes');
const tutionfeeRoutes = require('./routes/fund/tuitionFees.routes');

//contact

const ContactheroRoutes = require('./routes/contact/hero.routes');
const touchRoutes = require('./routes/contact/touch.routes');
const departmentRoutes = require('./routes/contact/department.routes');
const visitRoutes = require('./routes/contact/visit.routes');
const contactfaqRoutes = require('./routes/contact/faq.routes');

//event

const eventheroRoutes = require('./routes/event/hero.routes');
const upcommingRoutes = require('./routes/event/upcomming.routes');
const calenderRoutes = require('./routes/event/calender.routes');
const semesterRoutes = require('./routes/event/semester.routes');


const path = require("path");
const app = express();


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/api/test', (req, res) => res.send('API working'));

// Routes


// app.use('/api/aboutus', aboutusRoutes);
app.use('/api/aboutus/hero', heroRoutes);
app.use('/api/aboutus/mission-vision', missionVisionRoutes);
app.use('/api/aboutus/core-values', coreValuesRoutes);
app.use('/api/aboutus/history', historyRoutes);
app.use('/api/aboutus/statistics', statisticsRoutes);
app.use('/api/aboutus/leadership', leadershipRoutes);
app.use('/api/aboutus/cta', ctaRoutes);
app.use('/api/aboutus/newsletter', newsletterRoutes);

//admission
app.use('/api/admission/hero', admissionheroRoutes);
app.use('/api/admission/applicationProcess', applicationProcessRoutes);
app.use('/api/admission/contact', contactRoutes);
app.use('/api/admission/faq', faqRoutes);
app.use('/api/admission/requirement', requirementRoutes);
app.use('/api/admission/director', directorRoutes);
app.use('/api/admission/timeline', timelineRoutes);

//fund
app.use('/api/fund/hero', fundheroRoutes);
app.use('/api/fund/commitment', commitmentRoutes);
app.use('/api/fund/finance', financeRoutes);
app.use('/api/fund/faq', fundfaqRoutes);
app.use('/api/fund/cta', fundctaRoutes);
app.use('/api/fund/imp', importantRoutes);
app.use('/api/fund/merit', meritRoutes);
app.use('/api/fund/payment', paymentRoutes);
app.use('/api/fund/tutionfee', tutionfeeRoutes);

//contact

app.use('/api/contact/hero', ContactheroRoutes);
app.use('/api/contact/touch', touchRoutes);
app.use('/api/contact/department', departmentRoutes);
app.use('/api/contact/visit', visitRoutes);
app.use('/api/contact/faq', contactfaqRoutes);

//events
app.use('/api/event/hero', eventheroRoutes);
app.use('/api/event/upcomming', upcommingRoutes);
app.use('/api/event/calender', calenderRoutes);
app.use('/api/event/semester', semesterRoutes);






app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/aboutus', aboutusRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/sliders', sliderRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/gallery', galleryRoutes);

module.exports = app;
