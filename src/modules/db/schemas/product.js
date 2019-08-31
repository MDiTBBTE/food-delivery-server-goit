const mongoose = require('mongoose');
const timestamp = require('../middleware/timestamp');

const productSchema = mongoose.Schema({
    id: Number,
    sku: Number,
    name: String,
    description: String,
    price: Number,
    currency: String,
    creatorId: Number,
    created: String,
    modified: String,
    likes: Number,
    categories: Array
});

productSchema.plugin(timestamp);

module.exports = mongoose.model('Prodcut', productSchema);