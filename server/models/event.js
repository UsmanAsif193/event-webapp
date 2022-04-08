const mongoose = require('mongoose');

const Event = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    required: true
  }
});

module.exports = Event;
