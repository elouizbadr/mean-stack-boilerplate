const mongoose = require('mongoose');
const { schema } = require('./schema');
const { fieldToSearch } = require('../../utils/mongo');

schema.methods.fieldsToSearch = search => ['name'].map(fieldToSearch(search));

const Category = mongoose.model('Category', schema);

module.exports = { Category };