const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  slogan: {
    type: String
  },
  logo: {
    type: String
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
});

module.exports = { schema };