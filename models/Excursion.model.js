const mongoose = require('mongoose')

const excursionSchema = mongoose.Schema({
    name: String,
    descr: String,
    price: Number,
    image:{
        type: String,
    },
    rating: Number,
})

const Excursion = mongoose.model("excursion", excursionSchema)

module.exports = Excursion 