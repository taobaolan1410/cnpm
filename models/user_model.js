const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: Boolean,
    required: true,
    trim: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  identity_card: {
    type: String,
    required: true,
    trim: true
  },
  phone_number: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  histories: [Schema.ObjectId],
}, {
  timestamps: true,
})
const User = mongoose.model('User', userSchema)

module.exports = User