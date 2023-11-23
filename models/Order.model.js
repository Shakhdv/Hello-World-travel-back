const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: String,
    phone: Number,
    message: String
})

const Order = mongoose.model("Order",orderSchema)

module.exports = Order;