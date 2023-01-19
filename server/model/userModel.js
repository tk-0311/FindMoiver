const mongoose = require('mongoose');
const { Schema } = mongoose;


const user = new Schema({
  user_id: {type: String, unique: true},
  password: String,
  Pref: [String],
  matched: [String],
});

const User = mongoose.model('user',user);

module.exports  = User;
