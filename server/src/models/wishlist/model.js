const mongoose = require('mongoose');
const { schema } = require('./schema');
const { fieldToSearch } = require('../../utils/mongo');

schema.methods.fieldsToSearch = search => ['name'].map(fieldToSearch(search));

const Wishlist = mongoose.model('Wishlist', schema);

module.exports = { Wishlist };