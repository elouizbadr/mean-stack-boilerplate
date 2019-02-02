const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { schema } = require('./schema');

schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

const Client = mongoose.model('Client', schema);
module.exports = { Client };