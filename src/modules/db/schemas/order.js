const mongoose = require('mongoose');
const timestamp = require('../middleware/timestamp');

const orderSchema = mongoose.Schema({
    creator: String,
    productsList: Array,
    deliveryType: String,
    deliveryAdress: String,
    sumToPay: String,
    status: String
});

orderSchema.plugin(timestamp);

module.exports = mongoose.model('Order', orderSchema);