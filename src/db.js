const mongoose = require('mongoose');

const mongoDB = process.env.MONGO_DATABASE_URL || 'mongodb://127.0.0.1:27017';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', () => console.error('MongoDB connection error:'));

module.exports = db;
