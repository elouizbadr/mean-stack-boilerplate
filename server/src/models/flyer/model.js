const mongoose = require('mongoose');
const { schema } = require('./schema');
const Flyer = mongoose.model('Flyer', schema);

module.exports = { Flyer };