const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  _id: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  provider_name: {
    type: String,
    required: true,
    trim: true
  },
  images: {
    type: [String],
    required: true,
  },
  details: String,
  categories: [String],
  brand: String,
  description: String,
  price: {
    type: String,
    required: true,
    trim: true
  },
}, {
  timestamps: true,
  _id: false,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product