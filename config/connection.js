const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/usersPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;