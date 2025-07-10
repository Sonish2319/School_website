const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const aboutusRoutes = require('./routes/aboutusRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const admissionRoutes = require('./routes/admissionRoutes');



const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => res.send('API working'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/aboutus', aboutusRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/sliders', sliderRoutes);
app.use('/api/admissions', admissionRoutes);

module.exports = app;
