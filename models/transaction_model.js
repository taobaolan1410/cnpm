const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  status: {
    type: String,
    required: true
  },
  items: {
    type: [Schema.ObjectId],
    required: true,
    trim: true
  },
  shipping_address: {
    type: String,
    required: true,
    trim: true
  },
  form_of_delivery: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
}, {
  timestamps: true,
})
const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction