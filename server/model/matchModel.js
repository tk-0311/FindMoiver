const mongoose = require('mongoose');
const { Schema } = require('mongoose')


const match = new Schema({
  movie_id: String,
  user1_id: String,
  user2_id: String,
  match: Boolean
})

const Match = new mongoose.model('match', match)

module.exports = Match