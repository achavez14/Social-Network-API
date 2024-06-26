const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/usersPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database!');
});

module.exports = db;