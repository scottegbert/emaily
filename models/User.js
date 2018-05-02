const mongoose = require('mongoose');
// This is the same as below - const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
