const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
// const aboutusRoutes = require('./routes/aboutus/aboutusRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const galleryRoutes = require('./routes/galleryRoutes');


const aboutusRoutes = require('./routes/aboutus/aboutusRoutes');
const heroRoutes = require('./routes/aboutus/hero.routes');
const missionVisionRoutes = require('./routes/aboutus/missionVision.routes');
const coreValuesRoutes = require('./routes/aboutus/coreValues.routes');
const historyRoutes = require('./routes/aboutus/history.routes');
const statisticsRoutes = require('./routes/aboutus/statistics.routes');
const leadershipRoutes = require('./routes/aboutus/leadership.routes');
const ctaRoutes = require('./routes/aboutus/cta.routes');
const newsletterRoutes = require('./routes/aboutus/newsletter.routes');





const path = require("path");
const app = express();


const corsOptions = {
    origin: 'http://localhost:3000', // or 3001 if your frontend runs there
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/api/test', (req, res) => res.send('API working'));

// Routes


// app.use('/api/aboutus', aboutusRoutes);            // central
app.use('/api/aboutus/hero', heroRoutes);
app.use('/api/aboutus/mission-vision', missionVisionRoutes);
app.use('/api/aboutus/core-values', coreValuesRoutes);
app.use('/api/aboutus/history', historyRoutes);
app.use('/api/aboutus/statistics', statisticsRoutes);
app.use('/api/aboutus/leadership', leadershipRoutes);
app.use('/api/aboutus/cta', ctaRoutes);
app.use('/api/aboutus/newsletter', newsletterRoutes);


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/aboutus', aboutusRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/sliders', sliderRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/gallery', galleryRoutes);

module.exports = app;
