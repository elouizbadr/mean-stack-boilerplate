const mongoose = require('mongoose');
const { schema } = require('./schema');
const { fieldToSearch } = require('../../utils/mongo');

schema.methods.fieldsToSearch = search => ['name'].map(fieldToSearch(search));

const Brand = mongoose.model('Brand', schema);

module.exports = { Brand };