const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  description: {
    type: String
  },
  sku: {
    type: String
  },
  price: {
    type: Number
  },
  originalPrice: {
    type: Number
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Number,
    default: Date.now()
  },
  _image: {
    type: ObjectId,
    ref: 'Image',
    // required: [true] // Should be required
  },
  _category: {
    type: ObjectId,
    ref: 'Category',
    // required: [true] // Should be required
  },
  _flyer: {
    type: ObjectId,
    ref: 'Flyer',
    // required: [true] // Should be required
  }
});

module.exports = { schema };