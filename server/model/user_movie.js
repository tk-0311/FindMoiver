const mongoose = require('mongoose');
const { Schema } = require('mongoose')


const user_movie = new Schema({
  movie_id: String,
  user_id: String,
})

const User_movie = new mongoose.model('user_movie', user_movie)

module.exports = User_movie