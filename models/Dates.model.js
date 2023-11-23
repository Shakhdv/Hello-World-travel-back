const mongoose = require('mongoose')

const datesSchema = mongoose.Schema({
    date: String,
    tours: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Tour"
    },
    excursions: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Excursion"
    }

})

const Dates = mongoose.model("Dates", datesSchema)

module.exports = Dates