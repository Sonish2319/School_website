console.log('✅ test-server.js loaded');

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason);
});

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
  console.log('✅ /api/test route hit');
  res.send('API test success!');
});

app.listen(6000, () => {
  console.log('🚀 Test server running on http://localhost:6000');
});
