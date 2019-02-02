const mongoose = require('mongoose');
const { EMAIL } = require('../../utils/regexes');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
    validate: {
      validator: email => EMAIL.test(email),
      message: 'Field [email] wrong format.'
    }
  },
  profile: {
    fullName: {
      type: String,
      required: [true]
    },
    addresses: {
      type: [String]
    },
    avatar: {
      type: String
    }
  },
  _wishlists: {
    type: [ObjectId],
    ref: 'Wishlist'
  }
});

module.exports = { schema };