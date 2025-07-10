require('dotenv').config(); // Load environment variables first
console.log('server.js loaded');

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason);
});

const app = require('./app');
const { sequelize } = require('./models'); // <- new from Sequelize CLI
const PORT = process.env.PORT || 9000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connected...');
    await sequelize.sync(); // or { alter: true } or { force: true } in dev
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
  }
};

startServer();
