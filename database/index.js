const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bibliostats_user:gUMEDYbe6PbkBs8f@cluster0.v7gkq.mongodb.net/bibliostats?retryWrites=true&w=majority', { useFindAndModify: false ,useUnifiedTopology: true, useNewUrlParser: true  });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;