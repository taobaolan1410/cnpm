const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerShema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  website: {
    type: String,
    trim: true
  },
}, {
  timestamps: true,
})

const Provider = mongoose.model('Provider', providerShema)

module.exports = Provider