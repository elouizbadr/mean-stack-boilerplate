const mongoose = require('mongoose');
const { schema } = require('./schema');
const { fieldToSearch } = require('../../utils/mongo');

schema.methods.fieldsToSearch = search => ['name'].map(fieldToSearch(search));

const Product = mongoose.model('Product', schema);

module.exports = { Product };