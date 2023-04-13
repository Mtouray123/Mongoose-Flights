const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta',],
    required: true
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    required: true,
  }
});
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;