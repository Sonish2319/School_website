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





app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/aboutus', aboutusRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/sliders', sliderRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/gallery', galleryRoutes);

module.exports = app;
