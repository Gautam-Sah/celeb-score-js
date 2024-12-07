const mongoose = require('mongoose')
const gameSchema = new mongoose.Schema({
  person: {
    type: String,
    required: [true, 'must be provided by api'],
    maxlength: 500,
  },

  searchScore: {
    type: Number,
    required: [true, 'must be provided by api'],
  },
})

module.exports = mongoose.model('Game', gameSchema)
