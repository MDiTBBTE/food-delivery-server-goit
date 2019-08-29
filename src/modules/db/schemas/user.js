const mongoose = require('mongoose');
const timestamp = require('../middleware/timestamp');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  telephone: String,
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array,
  password: String
});

userSchema.plugin(timestamp);

module.exports = mongoose.model('User', userSchema);