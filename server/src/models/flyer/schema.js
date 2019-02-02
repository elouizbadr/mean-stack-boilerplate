const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  startDate: {
    type: Date,
    required: [true],
  },
  endDate: {
    type: Date,
    required: [true],
  },
  description: {
    type: String
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Number,
    default: Date.now()
  },
  _brand: {
    type: ObjectId,
    ref: 'Brand',
    // required: [true] // Should be required
  },
  _category: {
    type: ObjectId,
    ref: 'Category',
    // required: [true] // Should be required
  }
});

module.exports = { schema };